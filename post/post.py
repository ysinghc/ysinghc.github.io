from flask import Flask, request, render_template_string, redirect, url_for
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template_string(open('index.html').read())

@app.route('/run_duck', methods=['POST'])
def run_duck():
    category = request.form['category']
    message = request.form['message']
    
    # Run the duck.c program with the provided input
    result = subprocess.run(['./duck', category, message], capture_output=True, text=True)
    
    # Optionally, you can store the result in a session or log it if needed
    
    # Redirect back to the index page
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)