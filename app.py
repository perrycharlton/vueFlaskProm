from flask import Flask, render_template, request, jsonify, session,  Response, make_response, redirect, url_for

from server.routes.admin import admin_section
# from server.students import more_details as md
# from server.common import Promonitor as pm
# from server.students import contact_details as cd
# from server.students import attendance as ad
# from server.students import markbook as mbd
# from server.students import photo as pd
# from server.courses import courses as crd
# from server.common import Curruculum as crc
# from server.risk import risk
# from server.common import Authorization as auth
# import jwt
# import datetime
import os



app = Flask(__name__,
            static_folder = "./dist",
            template_folder = "./dist")

app.secret_key = os.urandom(24)
# app.config['SESSION_TYPE'] = 'mongodb'

app.register_blueprint(admin_section)

#  This is the default route
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


# # -----Admin Section
# @app.route('/admin', methods=['POST', 'DELETE'])
# @auth.auth_required
# def admin():    
#     print(request.args.get('next'))
#     if request.method == 'POST':
        
#         return jsonify({'status': 'logged in'})
#     elif request.method == 'DELETE':
#         # request.authorization = None
#         return jsonify({'status': 'logged out'})


# # -----Promonitor Section
# @app.route('/promonitor/<path>', methods=['POST', 'GET'])
# def path(path):
#     if path == 'login':
#             details = request.json
#             # store password into session checks by connection to promonitor, return true or false?
#             login = pm.login(details['username'], details['password'])
#             if login:
#                 token = jwt.encode(
#                     {
#                         'user': details['username'], 
#                         'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
#                     }, 
#                     app.config['SECRET_KEY']
#                 )

#                 return jsonify({'token': token.decode('UTF-8')})
#             return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})
        




# # @app.route('/test/<path>', methods=['POST', 'GET'])
# # def path(path):
#     # All GET requests
#     if request.method == 'GET':
#         if path == 'favicon.ico':
#             return jsonify({'msg': 'Ok'})
#         elif path == 'login':
#             # @auth_required
#             template = render_template('login.html')
#             token = generate_csrf_token()
#             return jsonify({'template':template, 'token': token})
#         else:
#             return render_template('index.html')
#     # All POST requests
#     elif request.method == 'POST':
#         if path == 'favicon.ico':
#             return jsonify({'msg': 'Ok'})


#         ###################################################
#         elif path == 'login':
#             details = request.json
#             # store password into session checks by connection to promonitor, return true or false?
#             login = pm.login(details['username'], details['password'])
#             if login:
#                 token = jwt.encode(
#                     {
#                         'user': details['username'], 
#                         'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
#                     }, 
#                     app.config['SECRET_KEY']
#                 )

#                 return jsonify({'token': token.decode('UTF-8')})
#             return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})
        
#         ####################################################
#         elif path == 'getCurric':
#             details = request.json
#             # store password into session
#             if pm.login(details['username'], details['password']):
#                 data = crc.course_names()
#                 # html = render_template('courses.html', courses=courses)
#                 return jsonify({'courses': data})


#         ########################################################
#         elif path == 'students':
#             group_id = request.json['group_id']
#             session['group_id'] = group_id
#             students = cd.students_full_details(group_id)
#             session['students'] = students
#             # print(students)
#             html = render_template('student_temp.html', students=students)
#             return jsonify({'html': html, 'students': students})
#         elif path == 'students_contact':
#             students = session.get('students')
#             # print(students)
#             student_details = cd.student_contact_details(students)
#             return jsonify(student_details)
#         elif path == 'students_further_details':
#             students = session.get('students')
#             student_details = []
#             for stud in students:
#                 student_details.append(md.student_more_details(stud))
#             return jsonify(student_details)
#         elif path == 'students_attendance':
#             students = session.get('students')
#             student_details = []
#             for stud in students:
#                 student_details.append(ad.student_attendance(stud))
#             return jsonify(student_details)
#         elif path == 'students_marks':
#             students = session.get('students')
#             group_id = session.get('group_id')
#             updated_students = mbd.markbook_page(group_id, students)
#             return jsonify(updated_students)
#         # ---------------------------------
#         elif path == 'risk_indicators':
#             # students = session.get('students')
#             group_id = session.get('group_id')
#             updated_risks = risk.get_risk(group_id)
#             # print(updated_risks)
#             return jsonify(updated_risks)
#         # ------------------------------------

#         elif path == 'save_details':
#             data = request.json
#             result = md.saveMoreDetails(data)
#             return jsonify({'data': result})
#         elif path == 'save_attendance':

#             data = request.json
#             for stud in data:
#                 msg = ad.update_attendance_badge(stud)
#             return jsonify({'message': msg})
#         else:
#             return render_template('index.html')


# @app.route('/student_img/<int:photo_id>', methods=['GET'])
# def student(photo_id):
#     updated_students = pd.student_img(photo_id)
#     return updated_students


if __name__ == "__main__":

    app.run(host='0.0.0.0', debug=True)
