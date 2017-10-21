from common.Common import check_list
from common import Promonitor as pm


def student_attendance(student):
    # arr = []
    url = '/ILP/LearnerILP/attendanceandpunctuality.aspx?pmstudentid='
    table = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvAttendance"]//tr[last()]'

    # for student in students:
    page = pm.get_page(url + student['s_id'])
    # student['attendance'] = \
    return {
        's_id': student['s_id'],
        'lessons':  check_list(page.xpath(table + '/td[2]/span/text()')),
        'attended':  check_list(page.xpath(table + '/td[3]/span/text()')),
        'attendance_pcnt': check_list(page.xpath(table + '/td[4]/span/text()')),
        'lates':  check_list(page.xpath(table + '/td[7]/span/text()')),
        'punctuality_pcnt':  check_list(page.xpath(table + '/td[8]/span/text()'))
    }


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




