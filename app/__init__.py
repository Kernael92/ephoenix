import os
from flask import Flask,render_template
from flask_pymongo import PyMongo
from pymongo import MongoClient
from app.config import *





app = Flask(__name__, instance_relative_config=True)
app.config.from_mapping(
    SECRET_KEY = 'random_key'
)

app.config['MONGO_URI'] = "mongodb://mongodb:password@localhost:27017"

# Load Configurations from config object which defaults to Development
# app.config.from_object(os.getenv('FLASK_ENVIRONMENT', 'config.Development'))
# Create MongoDB connection object using Mongo URI and instatiate DB (ephoenix)
mongo_conn = MongoClient(app.config['MONGO_URI'])
# mongo_db = mongo_conn[app.config['DB_NAME']]

test_config = None

if test_config is None:
    # load the instance config, if it exists, when not testing
    app.config.from_pyfile('config.py', silent=True)
else:
    # load the test config if passed in
    app.config.from_object(test_config)

# ensure the instance folder exists
try: 
    os.makedirs(app.instance_path)
except OSError:
    pass


from .utils import db
db.Base


from app.content import views
app.register_blueprint(views.content, url_prefix="/content")

@app.route('/')
def hello():
    return render_template('index.html', token="Hell FLASK + REACT")


if __name__ == '__main__':
    app.run(debug=True)
