import requests
from requests_ntlm import HttpNtlmAuth
from lxml import html
from server.common.Common import check_list

searchYear = "17/18"
main_url = "http://promonitor.carshalton.ac.uk"
# This is for the year
home_url = "/index/home.aspx?AcademicYearID=" + searchYear
curriculumArea = "/Index/Search/structuresearch.aspx?academicyearid=" + searchYear


def login(myusername, password):
    username = "Student\\" + myusername
    login.session = requests.Session()
    login.session.auth = HttpNtlmAuth(username, password)
    r = login.session.get(main_url)
    if r.status_code == 200:
        return login.session.verify
    else:
        login.session.auth = None
        return False
    

def test_login(url):
    student_response = login.session.get(main_url)
    if student_response.status_code == 200:
        return html.fromstring(student_response.text)
        print(student_response.status_code)

    else:
        print(student_response.status_code, 'Error: ')


def get_page(url):
    student_response = login.session.get(main_url + url)
    if student_response.status_code == 200:
        return html.fromstring(student_response.text)


    else:
        print(student_response.status_code, 'Error: ')


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