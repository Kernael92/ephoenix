import os
from flask import Flask, flash, request, redirect, url_for, Blueprint, flash, g, session, send_from_directory, render_template
from werkzeug.utils import secure_filename
from app import config
from app.config import *
import functools
from app.utils.db import *
from pymongo import MongoClient


client = MongoClient("mongodb://127.0.0.1:27017")
db = client.ephoenix
phishing101 = db.phishing101 

content = Blueprint("content", __name__, template_folder='./templates/content', static_folder='./static/content')


APP_ROOT = os.path.dirname(os.path.abspath(__file__))
target = os.path.join(APP_ROOT, 'upload/')

# return the filename of the allowed file extensions without the dot before
def allowed_video(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_VIDEO_EXTENSIONS

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_EXTENSIONS

@content.route('/')
def index():
    return render_template('content/upload.html')

@content.route('/upload', methods=['GET','POST'])
def upload():
    """
    Uploads and saves the file
    """
    target = os.path.join(APP_ROOT, 'upload/')
    if not os.path.isdir(target):
        os.mkdir(target)

    #Get the name of the uploaded files
    if request.method == 'POST':
        # check if the post request has the file part
        if 'video' not in request.files:
            flash('No file part')
            return redirect(request.url)
        video = request.files['video']

        if 'infographic'  not in request.files:
            flash('No infographic part')
            return redirect(request.url)
        infographic = request.files['infographic']

        if 'poster'  not in request.files:
            flash('No poster part')
            return redirect(request.url)
        poster = request.files['poster']
        
        # if user does not select file, browser also
        # submit an empty part without filename
        if video.filename and infographic.filename and poster.filename == '':
            flash('No selected item')
            return redirect(request.url)
        
        if video and allowed_video(video.filename):
            filename = secure_filename(video.filename)
            video.save(os.path.join(target, filename))

        if infographic and allowed_file(infographic.filename):
            filename = secure_filename(infographic.filename)
            infographic.save(os.path.join(target, filename))

        if poster and allowed_file(poster.filename):
            filename = secure_filename(poster.filename)
            poster.save(os.path.join(target, filename))

            phishing101.insert_one({'video':video.filename, 'infographic':infographic.filename, 'poster':poster.filename})
    
            flash('File successfully uploaded!')

            # Redirect the user to the uploaded_file route, which
            # will basically show on the browser the upload file
            return redirect(url_for('content.uploaded_file', filename=filename)) 

        

@content.route('/uploaded_file/<filename>')
def uploaded_file(filename):
    return send_from_directory(target, filename)

@content.route('/uploads')
def uploads():
    phishing101_1  = phishing101.find()
    
    return render_template('content/image.html', phishing101=phishing101_1 )

@content.route('/phish')
def phish():
    return render_template('content/phish.html')



if __name__ == '__main__':
    app.run(debug=True)