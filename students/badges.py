from common.Common import check_list
from common import Promonitor as pm


def saveBadge(data):
    badge_url = '/ILP/Support/riskindicators.aspx?pmstudentid='
    s_id = data['s_id']
    attBadge = '$ddlBadge1'
    learnerStatus = '$ddlLearnerStatus'
    saveBtn = '$btnSaveTop'
    form = pm.get_formData(pm.get_page(badge_url + s_id))

    # need to see if this changes???? coulbe used in all form changes
    prefix = 'ctl00$ctl00$cphContent$ContentPlaceHolder1'
    form.update(
        {
            'ctl00$ctl00$countdowntimer2$hdnCountdowntime': '0',
            'ctl00$ctl00$ddlAcademicYear': pm.searchYear,
            prefix + saveBtn : 'Save',
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