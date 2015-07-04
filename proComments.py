import requests
from requests_ntlm import HttpNtlmAuth
from lxml import html
import os

main_url = "http://promonitor.carshalton.ac.uk/"
# This is for the year
home_url = "index/home.aspx?academicyearid=14/15"
# The student group link
student_group_url = "studentgroup/studentgroup.aspx?studentgroupid="
# Individual student details
student_details_url = "ilp/information/details.aspx?pmstudentid="
student_furtherdetails_url = "ilp/information/furtherdetails.aspx?pmstudentid="
# Meeting Comments
student_comments_url = "ilp/MeetingsComments/Actions.aspx?pmstudentid="
# Photo link
student_photo_url = "ilp/studentphoto.aspx?pmstudentid="
student_photo_size = "&Width=240&Height=240&ShowLearnerBadges=False"

student_markbook = "studentgroup/markbook/studentunit.aspx?studentgroupid="
# name = input("Please enter your username:")
username = 'Student\\charltonp' #+ name
password = 'Sutton2015' #input("please enter you password")

session = requests.Session()
session.auth = HttpNtlmAuth(username, password)

# Main logon site
response = session.get(main_url + home_url)
parsed_body = html.fromstring(response.text)

# Access the course details in the 'MY STUDENT GROUPS'
course_ids = parsed_body.xpath('//*[@id="ctl00_ctl00_cphNavigation_mnuStudentGroup"]//a/@href')
course_text = parsed_body.xpath('//*[@id="ctl00_ctl00_cphNavigation_mnuStudentGroup"]//a/text()')
student_name_path = '//*[@id = "ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudent"]//a/text()'
student_comments_path = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_ucActionCommentList_dlComments"]//text()'

student_group_path = '//div[4]/table/tr[td]/td[3]/a/@href'
student_details_path = ['//*[@id="tblMain"]/tr/td[2]//table//tr[', ']/td[', ']/span/text()']
student_photo_path = '//td/img/@src'

course_info = []
info = []

# pic_img = []
def course():
    c_id = []
    courses = []
    print('Running courses?')
    for course_id in course_ids:
        c_id.append(course_id.split("=")[1])

    for c in zip(c_id, course_text):
        s = {
            'c_id': c[0],
            'c_name': c[1]
        }
        courses.append(s)
    return courses


def course_details():
    students_details = []
    for course_id in course_ids:
        s_id = []
        c_id = course_id.split("=")[1]
        # course_info.append(dict(zip(c_id, course_text)))
        group_response = session.get(main_url + student_group_url + c_id)
        group_parsed_body = html.fromstring(group_response.text)
        # List of all the students in the group
        student_groups = group_parsed_body.med(student_group_path)
        for student_group in student_groups:
            s_id.append(student_group.split("=")[1])
        # List of the photo src in group
        student_name = group_parsed_body.xpath(student_name_path)
        photo_id = group_parsed_body.xpath(student_photo_path)
        pic_id = split_details(photo_id)
        s_details = zip(s_id, pic_id, student_name)

        for x in s_details:
            s = {
                's_id': x[0],
                'pic_id': x[1],
                's_name': str(x[2]),
                'c_id': c_id
            }
            students_details.append(s)
    return students_details
    # return student_groups


def split_details(details):
    x = []
    for detail in details:
        x.append(detail.split("=")[1].split('&')[0])
    return x


def student_details():
    new_students = []
    student_d = course_details()
    for v in student_d:
        student_response = session.get(main_url + student_details_url + v['s_id'])
        student_parsed_body = html.fromstring(student_response.text)

        address = ', '.join(student_parsed_body.xpath(
            student_details_path[0] + str(2) + student_details_path[1] + str(2) + student_details_path[2]))
        mobile = ', '.join(student_parsed_body.xpath(
            student_details_path[0] + str(5) + student_details_path[1] + str(3) + student_details_path[2]))

        further_details = session.get(main_url + student_furtherdetails_url + v['s_id'])
        further_details_body = html.fromstring(further_details.text)
        next_of_kin = further_details_body.xpath('//textarea/text()')
        nok = (next_of_kin[1].strip())

        v.update({
            'Address': address,
            'Mobile': mobile,
            'Next of Kin': nok
        })
        new_students.append(v)
    return new_students


def student_comments():
    s_id = 'JlScjVmr74E%3d'
    student_comments_response = session.get(main_url + student_comments_url + s_id)
    student_parsed_body = student_comments_response.xpath(student_comments_path)
    print(student_parsed_body)


def markbook_unit_comments():
    s_id = 'fmCKJ0I4HQ4%3d'
    markbook_url = 'StudentGroup/Markbook/studentassessment.aspx?studentgroupid='
    markbook_response = session.get(main_url + markbook_url + s_id)
    markbook_parsed_body = html.fromstring(markbook_response.text)
    markbook_unit_comments_path = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvAssessmentData"]//span/text()'
    markbook_output = markbook_parsed_body.xpath(markbook_unit_comments_path)
    print(markbook_output)


def student_photos():
    photos = []
    student_groups = course_details()
    for student_group in student_groups:
        # pic_id = student_group.split("=")[1].split('&')[0]
        # s_id = item.split('&')[0]
        image_url = main_url + student_photo_url + student_group['pic_id'] + student_photo_size
        r = session.get(image_url, stream=True)
        # pic_img.append(r)
        photos.append({'pic_id': student_group['pic_id'], 'image': r})
    return photos

# def save_photos(photos):
#     for r in photos:
#         for k, v in r:
#             filename = "images/" + k + ".jpg"
#             if not os.path.exists(os.path.dirname(filename)):
#                 os.makedirs(os.path.dirname(filename))
#             with open(filename, "wb") as f:
#                 f.write(v.content)
#                 f.close()
markbook_unit_comments()
