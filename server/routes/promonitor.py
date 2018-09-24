from flask import Flask, render_template, request, jsonify, session,  Response, make_response, redirect, url_for, Blueprint
from server.common import Promonitor as pm
from server.common.Curruculum import area_codes, course_codes, student_group, college_codes
from server.common import Authorization as auth
# from server.students.photo import student_img
from server.students.details import student_img, student_info, students_more_details, student_attendance, saveMoreDetails
import base64

import jwt
import datetime
import os

# This will only allow access to /admin pages you can build vuejs templates seprate
promonitor = Blueprint('promonitor', __name__, url_prefix='/promonitor')

# # un-secure page
# @promonitor_section.route('/', methods=['GET'])
# def index():
#     return render_template('index.html')

# -----Promonitor Section

# if user has no session they will need to send details to start new session


@promonitor.route('/login', methods=['POST'])
def login():
    details = request.json
    # store password into session checks by connection to promonitor, return true or false?
    login = pm.login(details['username'], details['password'])
    data = jsonify(login)
    return data


@promonitor.route('/<path>', methods=['POST', 'GET'])
# Need tot check if authorized to see promonitor
# @auth.prom_token_required
def path(path):
    if path == 'area_codes':
        return jsonify(area_codes())

    elif path == 'college_codes':
        return jsonify(college_codes())

    elif path == 'course_codes':
        url = request.args.get('url')
        return jsonify(course_codes(url))

    elif path == 'student_group':        
        url = request.args.get('url')
        return jsonify(student_group(url))

    elif path == 'students_more_details':
        students = request.json
        student_details = [] 
        for stud in students:
            student_details.append({'data': students_more_details(stud['pmstudentid']), 'id': stud['id']})
        return jsonify(student_details)

    elif path == 'student_img':
        students = request.json
        student_details = []
        for stud in students:
            student_details.append({'photo': base64.b64encode(student_img(stud['imgid'], stud['id'])), 'id': stud['id']})
        return jsonify(student_details)

    elif path == 'studentinfo':
        students = request.json
        student_details = []
        for stud in students:
            student_details.append({'data': student_info(stud['pmstudentid']), 'id': stud['id']})
        return jsonify(student_details)

    elif path == 'students_attendance':
        students = request.json
        student_details = []
        for stud in students['data']:
            student_details.append({'data': student_attendance(stud['pmstudentid']), 'id': stud['id']})
        return jsonify(student_details)
