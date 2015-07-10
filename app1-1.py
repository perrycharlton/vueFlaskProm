#!/usr/bin/env python 3.4

# import the Flask class from the flask module
# sudo mongod --dbpath /media/public/software/mongodb/
from flask import Flask, render_template, redirect, url_for, request, session, flash, jsonify
import mongo3
import proComments

# create the application object
app = Flask(__name__)

# use decorators to link the function to a url
@app.route('/index1', methods=['POST'])
def home1():
    return render_template('index1.html', posts={'courses': mongo3.get_course()})  # render a template


@app.route('/students', methods=['POST'])
def students():
    # may need to put extra field (tick box) to indicate to show all details just basic?
    post = request.json
    course_id = post['course_id']
    # print("getting students", request.json)
    return render_template("students.html",
           posts={'students': proComments.students_full_details(course_id)})  # render a template


@app.route('/_students', methods=['POST'])
def filter_student():
    print("getting students")
    details = {}
    data = {}
    # details['courses'] = courses()
    if request.method == 'POST':
        data = request.json
        # print(data)
        details['students'] = mongo3.get_filtered_students(data)
        return render_template('students.html', posts=details)


@app.route('/update')
def update_database():
    mongo3.update()

@app.route('/courses', methods=['POST'])
def get_course_details():
    data = request.json
    d = {}
    # sess = proComments.login(data['username'], data['password'])
    sess = proComments.login("charltonp", "Sutton2015")

    d = proComments.course_names()
    # print('nearly there..')
    return render_template('courses.html', courses=d)


@app.route('/')
def my_load():
    return render_template('index.html')  # render a template

@app.route('/login', methods=['POST'])
def my_login():
    return render_template('login.html')  # render a template


if __name__ == '__main__':
    # app.run(debug=True)
    app.run('0.0.0.0')
