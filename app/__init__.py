from flask import Flask

app = Flask(__name__)

from flask_bootstrap import Bootstrap
bootstrap = Bootstrap(app)

from app import routes
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['BOOTSTRAP_BOOTSWATCH_THEME'] = 'simplex'