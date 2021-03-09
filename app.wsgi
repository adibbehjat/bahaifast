import sys
import logging

# Set logging
logging.basicConfig(stream=sys.stderr)

# Set path
sys.path.insert(0,'/var/www/bahaifast.com/public')
from app import app as application
application.secret_key = "your security code here"