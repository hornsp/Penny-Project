from flask import Flask, request, jsonify, session, render_template
from flask_cors import CORS

from dotenv import load_dotenv

load_dotenv('./.flaskenv')

app = Flask(__name__)

app.config.from_object(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

# Title route
@app.route('/title', methods=['GET'])
def title():
    return("Penny Project Backend")

walkCounter = 0

# Get walk count route 
@app.route('/getWalkCounter', methods=['GET', 'POST'])
def get_walk_count():
    response_object = {'status':'success'}
    if request.method == "POST":
        post_data = request.get_json()
        walkCounter += 1
        response_object['message'] = 'Penny was walked'
    else:
        response_object['walkCounter'] = walkCounter
    return jsonify(response_object)

@app.route('/api/track/breakfast/update', methods=['POST'])
def track_breakfast():
    data = request.json
    button = data.get('button')
    session['button_state'] = button
    return jsonify({"message": "Button state updated successfully."})

@app.route('/api/get_button_state/breakfast', methods=['GET'])
def get_button_state():
    button_state = session.get('button_state', '')  # Retrieve the button state from the session.
    return jsonify({"button_state": button_state})

@app.before_request
def log_request_info():
    app.logger.debug('Request Headers: %s', request.headers)
    app.logger.debug('Request Data: %s', request.data)


if __name__ == '__main__':
    app.run()

