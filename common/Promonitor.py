import requests
from requests_ntlm import HttpNtlmAuth
from lxml import html
from common.Common import check_list

searchYear = "17/18"
main_url = "http://promonitor.carshalton.ac.uk"
# This is for the year
home_url = "/index/home.aspx?AcademicYearID=" + searchYear


def login(myusername, password):
    username = "Student\\" + myusername
    login.session = requests.Session()
    login.session.auth = HttpNtlmAuth(username, password)
    return login.session.verify


def get_page(url):
    student_response = login.session.get(main_url + url)
    return html.fromstring(student_response.text)


def post_page(url, data):
    response = login.session.post(main_url + url, data=data)
    return html.fromstring(response.text)


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