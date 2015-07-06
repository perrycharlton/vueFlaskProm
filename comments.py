import requests
from requests_ntlm import HttpNtlmAuth
from lxml import html
from bs4 import BeautifulSoup

def login(myusername, password):
    usernme = "Student\\" + myusername
    session = requests.Session()
    session.auth = HttpNtlmAuth(usernme, password)

    myUrl = 'http://promonitor.carshalton.ac.uk/StudentGroup/Markbook/studentunit.aspx?studentgroupid=fmCKJ0I4HQ4%3d'

    ourrequest = session.post(myUrl)

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

    FormData = {
        '__EVENTTARGET': '',
        '__EVENTARGUMENT': '',
        '__LASTFOCUS': '',
        '__VIEWSTATE': viewstate,
        '__VIEWSTATEENCRYPTED': '',
        '__EVENTVALIDATION': eventvalidation,
        'ctl00$ctl00$countdowntimer2$hdnCountdowntime':'0',
        'ctl00$ctl00$ddlAcademicYear':'14/15',
        'ctl00$ctl00$cphContent$ContentPlaceHolder1$ddlUnit':'12223'
    }

    newrequest = session.post(myUrl, data=FormData, headers=headers)

    soup = BeautifulSoup(newrequest.content, 'html.parser')
    parsed_body = html.fromstring(newrequest.text)
    print(soup.prettify())
    print(soup.find_all('textarea'))
    test = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_ucMarkbookComment_txtComment_cccTextArea"]//textarea"]'
    comment_details = parsed_body.xpath(test + '/text()')
    course_ref = split_details(comment_details)

    print(course_ref)
    # course_text = parsed_body.xpath(test + '/text()')
    # courses = []
    # for c in zip(course_text, course_ref):
    #     s = {
    #         'name': c[0],
    #         'ref': c[1]
    #     }
    #
    # courses.append(s)
    #c_details = zip(course_text, course_ref)

def split_details(details):
    x = []
    for detail in details:
        x.append(detail.split("=")[1].split('&')[0])
    return x



login("charltonp", "Sutton2015")
