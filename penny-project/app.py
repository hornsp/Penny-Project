from flask import Flask, request, jsonify, session
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a strong, random secret key.
CORS(app)

CORS(app, resources={r"/api/*": {"origins": "http://localhost:8080"}})


@app.route('/api/track/breakfast/update', methods=['POST'])
def track_breakfast():
    data = request.json
    button = data.get('button')
    session['button_state'] = button
    return jsonify({"message": "Button state updated successfully."})

@app.route('/api/get_button_state/breakfast')
def get_button_state():
    button_state = session.get('button_state', '')  # Retrieve the button state from the session.
    return jsonify({"button_state": button_state})

@app.before_request
def log_request_info():
    app.logger.debug('Request Headers: %s', request.headers)
    app.logger.debug('Request Data: %s', request.data)


if __name__ == '__main__':
    app.run(debug=True)

