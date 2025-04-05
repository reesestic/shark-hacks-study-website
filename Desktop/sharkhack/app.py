from flask import Flask, jsonify, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-data')
def get_data():
    data = {"message": "Hello from the Python backend!"}
    return jsonify(data)

@app.route('/get-timeout')
def get_timeout():
    timeout_duration = {"timeout": 10}  # Example: 10 seconds
    return jsonify(timeout_duration)

if __name__ == '__main__':
    app.run(debug=True)

