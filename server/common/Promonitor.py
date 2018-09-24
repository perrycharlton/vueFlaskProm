import requests
from flask import session
from requests_ntlm import HttpNtlmAuth
from lxml import html
from server.common.Common import check_list
# from server.common.Curruculum import user_name as User
from server.common.Curruculum import course_codes, my_student_group
from server.common.Authorization import create_token

searchYear = "17/18"
main_url = "https://promonitor.stcg.ac.uk"

name_url = "/index/useraccount.aspx?academicyearid="
# This is for the year
home_url = "/index/home.aspx?AcademicYearID=" + searchYear
curriculumArea = "/index/search/structuresearch.aspx?academicyearid=" + searchYear

# This will test if user is ok by loggin on to server
def login(myusername, password):
    # username = "Student\\" + myusername
    username = "\\" + myusername
    login.session = requests.Session()
    login.session.auth = HttpNtlmAuth(username, password)
    r = login.session.get(main_url + '/index/useraccount.aspx') # name_url + searchYear)
    if r.status_code == 200:

        # Hopefully we have correctly logged in now get Name of user
        # add user to jwt sessions object
        # user_name = User(r.text)
        page = html.fromstring(r.text)
        details = my_student_group(page)
        # prom_token = create_token(details[1]['username'])
        # as we are here we can get the curricullum codes
        # courses = course_names()
        
        return {
            'status':'ok',
            'user':details[1], 
            # 'token': prom_token,
            'myGroups': details[0]
            }
    else:
        # Clear incorrect user information from session
        login.session.auth = None
        return {'status':'Error','reason':r.reason}

def get_page(url):
    # print(main_url + url)
    response = login.session.get(main_url + url)
    # print(response.text)
    return html.fromstring(response.text)

def post_page(url, data):
    response = login.session.post(main_url + url, data=data)
    print(response.text)
    return html.fromstring(response.text)

def post_data(url, data):
    response = login.session.post(main_url + url, json=data)
    return response.text


def get_formData(parsed_body):
    viewstate = check_list(parsed_body.xpath('//*[@id="__VIEWSTATE"]/@value'))
    viewstategen = check_list(parsed_body.xpath('//*[@id="__VIEWSTATEGENERATOR"]/@value'))
    eventvalidation = check_list(parsed_body.xpath('//*[@id="__EVENTVALIDATION"]/@value'))
    return {
        '__VIEWSTATE': viewstate,
        '__VIEWSTATEENCRYPTED': '',
        '__VIEWSTATEGENERATOR': viewstategen,
        '__EVENTVALIDATION': eventvalidation,
    }

# When searching for Curriculum Area need to not include __VIEWSTATEENCRYPTED
def get_formDataCuric(parsed_body):
    viewstate = check_list(parsed_body.xpath('//*[@id="__VIEWSTATE"]/@value'))
    viewstategen = check_list(parsed_body.xpath('//*[@id="__VIEWSTATEGENERATOR"]/@value'))
    eventvalidation = check_list(parsed_body.xpath('//*[@id="__EVENTVALIDATION"]/@value'))
    return {
        '__VIEWSTATE': viewstate,
        '__VIEWSTATEGENERATOR': viewstategen,
        '__EVENTVALIDATION': eventvalidation,
    }