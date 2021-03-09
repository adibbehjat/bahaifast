from flask import render_template, request
from app import app
import json
import os


@app.route('/', methods=['GET','POST'])
def index():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "static/data", "cities.json")
    data = json.load(open(json_url))
    return render_template('index.html', output = data)