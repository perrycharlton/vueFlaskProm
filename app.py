
import os
from flask import Flask, render_template, request, json

app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('templates/login.html')

@app.route('/index', methods=['POST'])
def signUpUser():
    user = request.form['username']
    password = request.form['password']
    return json.dumps({'status': 'OK', 'user': user, 'pass': password})

if __name__=="__main__":
    app.run()