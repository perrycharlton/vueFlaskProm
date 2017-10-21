from common.Common import check_list
from common import Promonitor as pm

further_details_url = '/ILP/Information/furtherdetails.aspx?pmstudentid='


def student_more_details_page(page):
    common = '//*[@name="ctl00$ctl00$cphContent$ContentPlaceHolder1$txt'
    return {
        'Nok Mobile': check_list(
            page.xpath('//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_lblNextOfKinMobileNumber"]/text()')),
        'NI': {
            'value': check_list(page.xpath(common + 'NINumber"]/@value')),
            'name': check_list(page.xpath(common + 'NINumber"]/@name'))
        },
        'Email': {
            'value': check_list(page.xpath(common + 'EmailAddress"]/@value')),
            'name': check_list(page.xpath(common + 'EmailAddress"]/@name'))
        },
        'Nok': {
            'value': check_list(page.xpath(common + 'NextOfKin$cccTextArea"]/text()')).strip('\r\n'),
            'name': check_list(page.xpath(common + 'NextOfKin$cccTextArea"]/@name'))
        },
        'Notes': {
            'value': check_list(page.xpath(common + 'Notes$cccTextArea"]/text()')).strip('\r\n'),
            'name': check_list(page.xpath(common + 'Notes$cccTextArea"]/@name'))
        },
        'Nok Email':
            {
                'value': check_list(page.xpath(common + 'NextOfKinEmail"]/@value')),
                'name': check_list(page.xpath(common + 'NextOfKinEmail"]/@name'))
            }
        }


def student_more_details(student):
    page = pm.get_page(further_details_url + student['s_id'])
    data = student_more_details_page(page)
    data.update(
        {
            's_id': student['s_id']
        }
    )
    return data


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
