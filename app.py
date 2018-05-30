from flask import Flask, render_template, request, jsonify, session, Response
from students import more_details as md
from common import Promonitor as pm
from students import contact_details as cd
from students import attendance as ad
from students import markbook as mbd
from students import photo as pd
from courses import courses as crd
from risk import risk

app = Flask(__name__,
            static_folder = "./dist",
            template_folder = "./dist")
app.secret_key = "something_secret"
app.config['SESSION_TYPE'] = 'mongodb'


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/<path>', methods=['POST', 'GET'])
def path(path):
    # All GET requests
    if request.method == 'GET':
        if path == 'favicon.ico':
            return jsonify({'msg': 'Ok'})
        elif path == 'login':
            return render_template('login.html')
    # All POST requests
    elif request.method == 'POST':
        if path == 'favicon.ico':
            return jsonify({'msg': 'Ok'})
        elif path == 'login':
            details = request.json
            # store password into session
            if pm.login(details['username'], details['password']):
                courses = crd.course_names()
                # html = render_template('courses.html', courses=courses)
                return jsonify({'courses': courses})
        elif path == 'getCourse':
            details = request.json
            print(details)
            # if true carry on
            if pm.login('charltonp', 'Cheam2017'):
                courses = crd.get_course_code(details)
                # html = render_template('courses.html', courses=courses)
                return courses
        elif path == 'students':
            group_id = request.json['group_id']
            session['group_id'] = group_id
            students = cd.students_full_details(group_id)
            session['students'] = students
            # print(students)
            html = render_template('student_temp.html', students=students)
            return jsonify({'html': html, 'students': students})
        elif path == 'students_contact':
            students = session.get('students')
            # print(students)
            student_details = cd.student_contact_details(students)
            return jsonify(student_details)
        elif path == 'students_further_details':
            students = session.get('students')
            student_details = []
            for stud in students:
                student_details.append(md.student_more_details(stud))
            return jsonify(student_details)
        elif path == 'students_attendance':
            students = session.get('students')
            student_details = []
            for stud in students:
                student_details.append(ad.student_attendance(stud))
            return jsonify(student_details)
        elif path == 'students_marks':
            students = session.get('students')
            group_id = session.get('group_id')
            updated_students = mbd.markbook_page(group_id, students)
            return jsonify(updated_students)
        # ---------------------------------
        elif path == 'risk_indicators':
            # students = session.get('students')
            group_id = session.get('group_id')
            updated_risks = risk.get_risk(group_id)
            # print(updated_risks)
            return jsonify(updated_risks)
        # ------------------------------------

        elif path == 'save_details':
            data = request.json
            result = md.saveMoreDetails(data)
            return jsonify({'data': result})
        elif path == 'save_attendance':

            data = request.json
            for stud in data:
                msg = ad.update_attendance_badge(stud)
            return jsonify({'message': msg})


@app.route('/student_img/<int:photo_id>', methods=['GET'])
def student(photo_id):
    updated_students = pd.student_img(photo_id)
    return updated_students


if __name__ == "__main__":

    app.run(host='0.0.0.0', debug=True)
