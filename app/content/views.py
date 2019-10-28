import os
from flask import Flask, flash, request, redirect, url_for, Blueprint, flash, g, session, send_from_directory, render_template
from werkzeug.utils import secure_filename
import config
from config import *
import functools
from app.utils.db import *
from pymongo import MongoClient


client = MongoClient("mongodb://127.0.0.1:27017")
db = client.ephoenix
phishing101 = db.phishing101 


APP_ROOT = os.path.dirname(os.path.abspath(__file__))
target = os.path.join(APP_ROOT, './static/content/upload')

# return the filename of the allowed file extensions without the dot before
def allowed_video(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_VIDEO_EXTENSIONS

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_EXTENSIONS

