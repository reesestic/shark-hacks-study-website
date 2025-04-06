from flask import Flask, jsonify, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def home():  # Change the default route to render the Home page
    return render_template('Home/index.html')

@app.route('/study')
def study():  # Add a new route for the Study page
    return render_template('index.html')

@app.route('/schedule')
def schedule():
    return render_template('Schedule/index.html')

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

