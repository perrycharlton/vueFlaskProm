import requests
from requests_ntlm import HttpNtlmAuth
from lxml import html
from bs4 import BeautifulSoup

import os

main_url = "http://promonitor.carshalton.ac.uk"
# This is for the year
home_url = "/index/home.aspx?academicyearid=14/15"
# The student group link

# Individual student details

# Meeting Comments
student_comments_url = "/ilp/MeetingsComments/Actions.aspx?pmstudentid="
# Photo link

student_markbook = "/studentgroup/markbook/studentunit.aspx?studentgroupid="

# Access the course details in the 'MY STUDENT GROUPS'
#course_ids = parsed_body.xpath('//*[@id="ctl00_ctl00_cphNavigation_mnuStudentGroup"]//a/@href')
#course_text = parsed_body.xpath('//*[@id="ctl00_ctl00_cphNavigation_mnuStudentGroup"]//a/text()')

course_info = []
info = []
# session = ""


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
                # print('child ', course_ref[1].text_content(), c.attrib['href'])
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


def photo_path(photo_id):
    student_photo_url = "/ilp/studentphoto.aspx?pmstudentid="
    student_photo_size = "&Width=240&Height=240&ShowLearnerBadges=False"

    p_id = photo_id[0].split("=", 1)[1].split('&')[0]
    path = main_url + student_photo_url + p_id + student_photo_size
    return path


def split_details(details):
    x = []
    for detail in details:
        x.append(detail.split("=")[1].split('&')[0])
    return x


def students_full_details(c_id):
    url = "/studentgroup/studentgroup.aspx?studentgroupid=" + c_id
    page = get_page(url)
    r = []
    test = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudent"]//tr[position()>1]'
    test1 = page.xpath(test)
    for cr in page.xpath(test):
        # print('parent ', cr.text_content())
        s = {}
        s_id = cr.xpath('./td[3]/a/@href')[0].split('=')[1]

        s.update({'s_id': s_id})
        s.update(student_more_details(s_id))
        s.update(student_further_details(s_id))
        s.update({
            'img_id': photo_path(cr.xpath('./td/img/@src')),
            'c_id': cr.xpath('./td[2]/text()'),
            's_name': cr.xpath('./td[3]/a/text()')[0]
        })
        r.append(s)
    return r


def student_more_details(s_id):
    url = "/ilp/information/details.aspx?pmstudentid=" + s_id
    common = '//*[@id="tblMain"]//td[2]//table//table'
    page = get_page(url)
    s = {
        'address': page.xpath(common + '//tr[2]/td[2]/span/text()'),
        'telephone': page.xpath(common + '//tr[4]/td[3]/span/text()'),
        'mobile': page.xpath(common + '//tr[5]/td[3]/span/text()')[0],
        'email': page.xpath(common + '//tr[6]/td[3]/span/text()')
    }
    return s


def student_further_details(s_id):
    # student further details
    url = "/ilp/information/furtherdetails.aspx?pmstudentid=" + s_id
    page = get_page(url)
    s = {
        'nok': page.xpath('//textarea[1]//text()')[0].strip(),
        'gen_note': page.xpath('//textarea[2]//text()')[0].strip()
        # 'nok_email': page.xpath('//*[@id="tblMain"]//td[2]//table//table//tr[4]/td[3]/span/text()'),
        # 'nok_mobile': page.xpath('//*[@id="tblMain"]//td[2]//table//table//tr[5]/td[3]/span/text()')
    }
    return s


def get_page(url):
    login('charltonp', 'Sutton2015')
    student_response = login.session.get(main_url + url)
    return html.fromstring(student_response.text)

def student_comments():
    s_id = 'JlScjVmr74E%3d'
    student_comments_response = login.session.get(main_url + student_comments_url + s_id)
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


# students_full_details('fmCKJ0I4HQ4%3d')
# student_further_details('aXB9LzHUeXo%3d')
# markbook_unit_comments()

