import requests
from requests_ntlm import HttpNtlmAuth
from lxml import html
from bs4 import BeautifulSoup

import os

main_url = "http://promonitor.carshalton.ac.uk"
# This is for the year
home_url = "/index/home.aspx?academicyearid=14/15"
# The student group link
student_group_url = "/studentgroup/studentgroup.aspx?studentgroupid="
# Individual student details
student_details_url = "/ilp/information/details.aspx?pmstudentid="
student_furtherdetails_url = "/ilp/information/furtherdetails.aspx?pmstudentid="
# Meeting Comments
student_comments_url = "/ilp/MeetingsComments/Actions.aspx?pmstudentid="
# Photo link
student_photo_url = "/ilp/studentphoto.aspx?pmstudentid="
student_photo_size = "&Width=240&Height=240&ShowLearnerBadges=False"

student_markbook = "/studentgroup/markbook/studentunit.aspx?studentgroupid="
# name = input("Please enter your username:")
# username = 'Student\\charltonp' #+ name
# password = 'Sutton2015' #input("please enter you password")
#
# session = requests.Session()
# session.auth = HttpNtlmAuth(username, password)


# Access the course details in the 'MY STUDENT GROUPS'
#course_ids = parsed_body.xpath('//*[@id="ctl00_ctl00_cphNavigation_mnuStudentGroup"]//a/@href')
#course_text = parsed_body.xpath('//*[@id="ctl00_ctl00_cphNavigation_mnuStudentGroup"]//a/text()')

course_info = []
info = []
# session = ""
# pic_img = []


def login(myusername, password):
    usernme = "Student\\" + myusername
    login.session = requests.Session()
    login.session.auth = HttpNtlmAuth(usernme, password)
    return login.session.verify

def course_names():

    myUrl = 'http://promonitor.carshalton.ac.uk/Index/Search/studentgroupsearch.aspx?academicyearid=14%2f15'

    ourrequest = login.session.post(myUrl)

    parsed_body = html.fromstring(ourrequest.text)

    viewstate = parsed_body.xpath('//*[@id="__VIEWSTATE"]/@value')
    eventvalidation = parsed_body.xpath('//*[@id="__EVENTVALIDATION"]/@value')

    headers = {
    'Host': 'promonitor.carshalton.ac.uk',
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:38.0) Gecko/20100101 Firefox/38.0 FirePHP/0.7.4',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate',
    'Referer': myUrl,
    'x-insight': 'activate',
    'Connection': 'keep-alive'
    }

    prefix = 'ctl00$ctl00$cphContent$ContentPlaceHolder1$'

    FormData = {
        '__EVENTTARGET': '',
        '__EVENTARGUMENT': '',
        '__LASTFOCUS': '',
        '__VIEWSTATE': viewstate,
        '__VIEWSTATEENCRYPTED': '',
        '__EVENTVALIDATION': eventvalidation,
        'ctl00$ctl00$countdowntimer2$hdnCountdowntime': '0',
        'ctl00$ctl00$ddlAcademicYear': '14/15',
        prefix + 'txtStudentGroupCode': '',
        prefix + 'txtStudentGroupTitle': '',
        prefix + 'txtCourseCode': 'EA',
        prefix + 'txtCourseTitle': '',
        prefix + 'txtCourseName': '',
        prefix + 'chkStudentGroupsWithStudents': 'on',
        'ctl00$ctl00$cphContent$ContentPlaceHolder1$btnSearch': 'Search',
        'hiddenInputToUpdateATBuffer_CommonToolkitScripts': '1'
    }

    newrequest = login.session.post(myUrl, data=FormData, headers=headers)
    parsed_body = html.fromstring(newrequest.text)

    test = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudentGroup"]/tr'
    courses = []
    for course_ref in parsed_body.xpath(test):
        for cr in course_ref.xpath("./td"):
            for c in cr.xpath("./a"):
                print('child ', course_ref[1].text_content(), c.attrib['href'])
                if len(course_ref[1].text_content()) > 0:
                    course_i = course_ref[1].text_content().split(" ", 1)
                    if len(course_i[0]) < 7:
                        s = {
                            "c_code": course_i[0],
                            "c_name": course_i[1].split("(")[1].split(")")[0],
                            "c_ref": c.attrib['href'].split("=")[1]
                        }
                        courses.append(s)
    return courses


def course_details(_id):
    students_details = []
    group_response = login.session.get(main_url + student_group_url + _id)
    parsed_body = html.fromstring(group_response.text)

    test = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudent"]/tr'

    for cr in parsed_body.xpath(test)[1: -1]:
        # print('parent ', cr.text_content())
        s_id = cr.xpath('./td[3]/a/@href')[0].split('=')[1]
        m_details = student_further_details(s_id)
        s = {
            'img_id': photo_path(cr.xpath('./td/img/@src')),
            'c_id': cr.xpath('./td[2]/text()'),
            's_name': cr.xpath('./td[3]/a/text()')[0],
            's_id': s_id,
            's_c_email': cr.xpath('.//input/@value')[0]
        }
        students_details.append(s)
    return students_details

def photo_path(photo_id):
    p_id = photo_id[0].split("=", 1)[1].split('&')[0]
    path = main_url + student_photo_url + p_id + student_photo_size
    return path


def split_details(details):
    x = []
    for detail in details:
        x.append(detail.split("=")[1].split('&')[0])
    return x


def student_further_details(s_id):
    # new_students = []
    # student_d = course_details()
    # for v in student_d:

    contact_details = '//*[@id="tblMain"]//table//table'
    student_response = login.session.get(main_url + student_details_url + s_id)
    student_parsed_body = html.fromstring(student_response.text)

    address = ', '.join(student_parsed_body.xpath(
        contact_details + str(2) + student_details_path[1] + str(2) + student_details_path[2]))
    mobile = ', '.join(student_parsed_body.xpath(
        student_details_path[0] + str(5) + student_details_path[1] + str(3) + student_details_path[2]))

    further_details = login.session.get(main_url + student_furtherdetails_url + v['s_id'])
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


def markbook_unit_comments(data):
    usernme = "Student\\" + data['username']
    passwrd = data['password']
    sssion = requests.Session()
    sssion.auth = HttpNtlmAuth(usernme, passwrd)
    s_id = 'fmCKJ0I4HQ4%3d'
    markbook_url = 'StudentGroup/Markbook/studentassessment.aspx?studentgroupid='
    markbook_response = sssion.get(main_url + markbook_url + s_id)
    markbook_parsed_body = html.fromstring(markbook_response.text)
    markbook_unit_comments_path = '//*/text()'
    markbook_output = markbook_parsed_body.xpath( markbook_unit_comments_path)
    return markbook_output


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


# markbook_unit_comments()

