from common.Common import check_list
from common import Promonitor as pm
# from flask import jsonify

def get_course_code(c):
    courseCodeUrl = '/Index/Search/studentgroupsearch.aspx/GetCourseCode'
    # c = {"prefixText":"e","count":10}
    data = pm.post_data(courseCodeUrl, c)
    return data

def course_names():
    myUrl = '/Index/Search/studentgroupsearch.aspx?academicyearid=' + pm.searchYear
    # Need to Get page first to obtain key data
    parsed_body = pm.get_page(myUrl)
    # extract data from page create form to send back with post
    form = pm.get_formData(parsed_body)
    form = {}

    prefix = 'ctl00$ctl00$cphContent$ContentPlaceHolder1$'

    form.update(
        {
            'ctl00$ctl00$countdowntimer2$hdnCountdowntime': '0',
            'ctl00$ctl00$ddlAcademicYear': pm.searchYear,
            prefix + 'txtCourseCode': 'EA10',
            'ctl00$ctl00$cphContent$ContentPlaceHolder1$chkStudentGroupsWithStudents': 'on',
            'ctl00$ctl00$cphContent$ContentPlaceHolder1$btnSearch': 'Search',
            'hiddenInputToUpdateATBuffer_CommonToolkitScripts': '1'
         }
    )

    # Post for with key search data, this data should be static a my only need update occasionally
    # need to check if it is stored before sending a request
    parsed_body = pm.post_page(myUrl, form)
    # key areas to get data from
    test = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudentGroup"]//tr/td/a'
    courses = []
    for course_ref in parsed_body.xpath(test):
        course_i = course_ref.text.split(" ", 1)
        code = course_i[0].split('-')[0]
        course_title = course_i[1][1:-1] if len(course_i) > 1 else ""
        if len(code) == 6:
            courses.append({
                "c_code": code,
                "c_let": code[0:2],
                "c_ref": course_ref.attrib['href'].split("=", 1)[1],
                "c_title": course_i[0] + ' - ' + course_title
            })
    return courses

def course_codes(courseCode = ""):
    myUrl = '/Index/Search/coursesearch.aspx/GetCourseCode'
    courseCode = pm.post_page(myUrl, courseCode)
    print('courseCode')
    courses = []
    for course_ref in courseCode:
        course_i = course_ref.text.split(" ", 1)
        code = course_i[0].split('-')[0]
        course_title = course_i[1][1:-1] if len(course_i) > 1 else ""
        if len(code) == 6:
            courses.append({
                "c_code": code,
                "c_let": code[0:2],
                "c_ref": course_ref.attrib['href'].split("=", 1)[1],
                "c_title": course_i[0] + ' - ' + course_title
            })
    return courses
