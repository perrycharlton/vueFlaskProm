import requests
from requests_ntlm import HttpNtlmAuth
from lxml import html
from bs4 import BeautifulSoup
from server.common.Common import check_list
from server.common import Promonitor as pm

searchYear = "17/18"
main_url = "http://promonitor.carshalton.ac.uk"
home_url = "/Index/Search/structuresearch.aspx?academicyearid=" + searchYear


def course_codes():
    # Need to Get page first to obtain key data
    parsed_body = pm.get_page(home_url)

    # extract data from page create form to send back with post
    form = pm.get_formDataCuric(parsed_body)

    form.update(
        {
            'ctl00$ctl00$countdowntimer2$hdnCountdowntime': '0',
            'ctl00$ctl00$ddlAcademicYear': searchYear,
            'ctl00$ctl00$cphContent$ContentPlaceHolder1$ddlStructureLevel': '2',
            'ctl00$ctl00$cphContent$ContentPlaceHolder1$txtStructureCode': '',
            'ctl00$ctl00$cphContent$ContentPlaceHolder1$txtStructureTitle': '',
            'ctl00$ctl00$cphContent$ContentPlaceHolder1$btnSearch': 'Search',
            'hiddenInputToUpdateATBuffer_CommonToolkitScripts': '1'
         }
    )

    # Post for with key search data, this data should be static a my only need update occasionally
    # need to check if it is stored before sending a request
    parsed_body = pm.post_page(home_url, form)
    # key areas to get data from
    test = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStructureSearch"]//tr/td/a'
    courses = []
    for course_ref in parsed_body.xpath(test):
        course_i = course_ref.text.split(" ", 1)
        code = course_i[0]
        course_title = course_i[1][1:-1] if len(course_i) > 1 else ""
        if len(code) == 2:
            courses.append({
                "c_code": code,                
                "c_ref": course_ref.attrib['href'].split("=", 1)[1],
                "c_title": course_title
            })
    return courses


def user_name(page):
    soup = BeautifulSoup(page, "lxml")
    name = soup.find(id="ctl00_ctl00_cphContent_ContentPlaceHolder1_lblStaffName").string
    username = soup.find(id="ctl00_ctl00_cphContent_ContentPlaceHolder1_lblUsername").string
    u_name =  name.split(' ')
    return {'name': name, 'first_name': u_name[0], 'surname': u_name[1], 'username': username}