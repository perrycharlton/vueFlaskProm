from server.common.Common import check_list
from server.common import Promonitor as pm
from lxml.etree import XPath


def student_img(imgid, sid):
    main_url = 'https://promonitor.stcg.ac.uk'

    url = '/ilp/studentphoto.ashx?'
    img = 'i=' + imgid + '&r=' + sid
    size_url = '&w=120&h=120'
    page = pm.login.session.get(main_url + url + img + size_url)
    return page.content

def student_info(pmstudentid):
    main_url = 'https://promonitor.stcg.ac.uk'
    url = "/ilp/information/details.aspx?pmstudentid="
    page = pm.get_page(url + pmstudentid)
    return {
        'dob': check_list(XPath('//*[@id="Content_Content_txtDOB"]/text()')(page)),
        'address': XPath('//*[@id="Content_Content_txtAddress"]/text()')(page),
        'telephone': check_list(XPath('//*[@id="Content_Content_txtTelephone"]/text()')(page)),
        'mobile': check_list(XPath('//*[@id="Content_Content_txtMobileValue"]/text()')(page)),
        'email': check_list(XPath('//*[@id="Content_Content_lnkEmail"]/text()')(page))
    }

def students_more_details(pmstudentid):
    url = '/ILP/Information/furtherdetails.aspx?pmstudentid='
    page = pm.get_page(url + pmstudentid)
    return {
        'Nok Mobile': check_list(XPath('//*[@id="Content_Content_txtNextOfKinMobileValue"]/text()')(page)),           
        'Nok': check_list(XPath('//*[@id="Content_Content_txtNextOfKin_Spellchecker_cccTextArea"]/text()')(page)).strip('\r\n'),        
        'Notes': check_list(XPath('//*[@id="Content_Content_txtNotes_Spellchecker_cccTextArea"]/text()')(page)).strip('\r\n'),        
        'Nok Email': check_list(XPath('//*[@id="Content_Content_txtNextOfKinEmail"]/@value')(page)),
        'ULN': check_list(XPath('//*[@id="Content_Content_txtULN"]/text()')(page))
    }


def student_attendance(pmstudentid):

    url = '/ILP/LearnerILP/attendanceandpunctuality.aspx?pmstudentid='
    table = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvAttendance"]//tr[last()]'

    page = pm.get_page(url + pmstudentid)

    return {
        'lessons':  check_list(page.xpath(table + '/td[2]/span/text()')),
        'attended':  check_list(page.xpath(table + '/td[3]/span/text()')),
        'attendance_pcnt': check_list(page.xpath(table + '/td[4]/span/text()')),
        'lates':  check_list(page.xpath(table + '/td[7]/span/text()')),
        'punctuality_pcnt':  check_list(page.xpath(table + '/td[8]/span/text()'))
    }

############################# Saving data to promonitor #############################

def saveMoreDetails(data):
    s_id = data['s_id']
    form = pm.get_formData(pm.get_page(further_details_url + s_id))
    # need to see if this changes???? coulbe used in all form changes
    prefix = 'ctl00$ctl00$cphContent$ContentPlaceHolder1'
    form.update(
        {
            'ctl00$ctl00$countdowntimer2$hdnCountdowntime': '0',
            'ctl00$ctl00$ddlAcademicYear': pm.searchYear,
            prefix + '$saveTop$btnSave2': 'Save',
            'hiddenInputToUpdateATBuffer_CommonToolkitScripts': '1',
            'ctl00$ctl00$hdnIsDirty': 'false'
        }
    )
    form.update(data['changed'])
    page = pm.post_page(further_details_url + s_id, form)
    data = student_more_details_page(page)
    data.update(
        {
            's_id': s_id
        }
    )
    return data


# this will use the attendance to update the indicator
def update_attendance_badge(data):
    url = '/ILP/Support/riskindicators.aspx?pmstudentid='
    s_id = data['s_id']
    form = pm.get_formData(pm.post_page(url + s_id, ''))
    level = data['level']
    form.update({
        'ctl00$ctl00$countdowntimer2$hdnCountdowntime': 0,
        'ctl00$ctl00$ddlAcademicYear': pm.searchYear,
        'ctl00$ctl00$cphNavigation$ShowMeetings': 'rBtnCurrentYr',
        'ctl00$ctl00$cphContent$ContentPlaceHolder1$btnSaveTop': 'Save',
        'ctl00$ctl00$cphContent$ContentPlaceHolder1$ddlBadge1': level
    })

    pm.post_page(url + s_id, form)

    return 'Attendance indicators have been updated'