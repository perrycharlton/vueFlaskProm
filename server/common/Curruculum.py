import requests
from requests_ntlm import HttpNtlmAuth
from lxml import html
import lxml.html
from lxml.etree import XPath

# from bs4 import BeautifulSoup
from server.common.Common import check_list
from server.common import Promonitor as pm

searchYear = "1819"
# main_url = "http://promonitor.carshalton.ac.uk"
main_url = "https://promonitor.stcg.ac.uk/"


home_url = "/index/search/structuresearch.aspx?academicyearid=" + searchYear

def college_codes():
     # Need to Get page first to obtain key data
    structure_search = "/index/search/structuresearch.aspx?academicyearid=1819"
    parsed_body = pm.get_page(structure_search)

    # extract data from page create form to send back with post
    form = pm.get_formDataCuric(parsed_body)

    form.update(
        {
            'ctl00$ctl00$Content$Content$hdnPanelExpanded': 'false',
            'ctl00$ctl00$ddlAcademicYear': '18/19',
            'ctl00$ctl00$Content$Content$ddlStructureLevel': '2',
            'ctl00$ctl00$Content$Content$txtCode': '',
            'ctl00$ctl00$Content$Content$txtTitle': '',
            'ctl00$ctl00$Content$Content$btnSearch': 'Search',
            'hiddenInputToUpdateATBuffer_CommonToolkitScripts': '1'
         }
    )

    # Post for with key search data, this data should be static a my only need update occasionally
    # need to check if it is stored before sending a request
    parsed_body = pm.post_page(home_url, form)
    # key areas to get data from
    rows_xpath = XPath('//*[@id="Content_divContent"]/div/div[4]//div[2]/div/div/div/a')
    href_xpath = XPath('@href')
    title_xpath = XPath('text()')
    colleges = []
    for row in rows_xpath(parsed_body):
        # print(href_xpath(row)[0].split("../")[-1], title_xpath(row)[0])
        colleges.append({
            "href": href_xpath(row)[0].split("../")[-1], 
            # "structureid": href_xpath(row)[0].split("../")[-1].split("=", 1)[-1].split('&')[0],   
            # "AcademicYearID" :  href_xpath(row)[0].split("../")[-1].split("=", 1)[-1].split('&')[1],       
            "title":title_xpath(row)[0]
        })
    return colleges




def area_codes():
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
    rows_xpath = XPath('//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStructureSearch"]//tr/td/a')
    href_xpath = XPath('@href')
    title_xpath = XPath('text()')
    courses = []
    for row in rows_xpath(parsed_body):
        courses.append({
            "href": href_xpath(row)[0].split("../")[-1], 
            # "structureid": href_xpath(row)[0].split("../")[-1].split("=", 1)[-1].split('&')[0],   
            # "AcademicYearID" :  href_xpath(row)[0].split("../")[-1].split("=", 1)[-1].split('&')[1],       
            "title":title_xpath(row)[0]
        })
    return courses


def course_codes(url):
    parsed_body = pm.get_page('/' + url)
    
    rows_xpath = XPath('//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudentGroups"]//tr[td[3]//text()!="0"]') 
    href_xpath = XPath('td[1]/a/@href')
    title_xpath = XPath('td[1]//text()')
    students_xpath = XPath('td[3]//text()')
    courses = []
    for row in rows_xpath(parsed_body):
        courses.append({
            "href": href_xpath(row)[0].split("../")[-1],                
            "students": students_xpath(row)[0],
            "title":title_xpath(row)[0]
        })
    return courses


def student_group(url):
    # group_url = '/studentgroup/studentgroup.aspx?studentgroupid='
    # Need to Get page first to obtain key data
    parsed_body = pm.get_page('/' + url)

    courses = []
    for row in XPath('//*[@id="Content_divContent"]/div/div[13]/div/div[2]/div')(parsed_body):
        # print(XPath('div[1]//img/@src')(row)[0].split("../")[-1].split("=", 1))
        courses.append({
            "imgid":XPath('div[1]//img/@src')(row)[0].split("../")[-1].split("=", 1)[-1].split('&')[0],
            "id":XPath('div[2]/div/span/text()')(row)[0],
            "name":XPath('div[3]/div/a/text()')(row)[0],
            "pmstudentid": XPath('div[3]/div/a/@href')(row)[0].split("../")[-1].split("=", 1)[-1].split('&')[0],          
            "dob":XPath('div[4]/div/span/text()')(row)[0]
        })
    return courses

def my_student_group(page):

    username = XPath('//*[@id="Content_Content_UserAccount_lblUsername"]//text()')(page)[0]
    my_name = XPath('//*[@id="Content_Content_UserAccount_lblName"]//text()')(page)[0]
    u_name =  my_name.split(' ')

    user = {'name': my_name, 'first_name': u_name[0], 'surname': u_name[1], 'username': username}

    courses = []
    for row in XPath('//*[@id="PM_DynamicNavItems_ulStudentGroups"]/li//a')(page):
        courses.append({
            "title":XPath('text()')(row)[0],
            "href": XPath('@href')(row)[0].split("../")[-1] # .split("=", 1)[-1].split('&')[0]
        })
        # print(courses)
    return courses, user

def student_info(pmstudentid):
    
    url = "/ilp/information/details.aspx?pmstudentid="
    page = pm.get_page(url + pmstudentid)

    common = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_'

    return {
        'dob': check_list(XPath(common + 'txtDOB"]/text()')(page)),
        'address': XPath(common + 'txtAddress"]/text()')(page),
        'telephone': check_list(XPath(common + 'txtTelephone"]/text()')(page)),
        'mobile': check_list(XPath(common + 'txtMobile"]/text()')(page)),
        'email': check_list(XPath(common + 'lnkEmail"]/text()')(page))
    }