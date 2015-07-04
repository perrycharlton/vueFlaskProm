from pymongo import MongoClient
from gridfs import GridFS
import proComments, app
# import names_photos

c = MongoClient()
db = c.promonitor
fs = GridFS(db)


def get_all():
    try:
        name = db.students.find().count
        print(name)
        return name
    except NameError as err:
        print("Error trying tp get all students: ", format(err))


def get_course():
    name = db.course.find_one()
    if name is None:
        print('No data!')
        courses = proComments.course()
        _id = db.course.insert_many(courses)
        print(_id)

    else:
        print('getting course data')
        name = []
        for cours in db.course.find():
            name.append(cours)
        print(name)
        return name


def get_all_students():
    try:
        test = db.students.find_one()
        if test is None:
            print('getting new data')
            update()
        else:
            name = db.students.find()
            return name
    except NameError as err:
        print("Error trying tp get all students: ", format(err))


def update():
    details = proComments.student_details()
    # print(details)
    db.students.insert_many(details)
    count = db.students.count()
    if count > 0:
        app.get_all_students()
        app.route('/students')
    else:
        print("not updated")


def get_filtered_students(data):
    post = []
    for name in db.students.find(data):
        post.append(name)
    return post
