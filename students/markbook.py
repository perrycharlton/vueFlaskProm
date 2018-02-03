from common.Common import check_list
from common import Promonitor as pm


student_markbook = "/studentgroup/markbook/studentunit.aspx?studentgroupid="


def markbook_names(page, students):
    table = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_TabMenu_ddlStudent"]'
    total = len(page.xpath(table + '//option'))
    arr = []

    for i in range(1, total + 1):
        opt = check_list(page.xpath(table + '//option[' + str(i) + ']/@value'))
        name = check_list(page.xpath(table + '//option[' + str(i) + ']/text()'))
        for s_name in students:
            if s_name['student-name'] == name:
                # s_name['option'] = opt
                marks = {
                    'name': name,
                    'opt': opt,
                    's_id': s_name['s_id']
                }
                arr.append(marks)
    # return students
    return arr


def markbook_page(group_id, students):
    url = '/StudentGroup/Markbook/studentassessment.aspx?studentgroupid='
    f_page = pm.get_page(url + group_id)
    new_students = markbook_names(f_page, students)
    form = pm.get_formData(f_page)
    for student in new_students:
        student['markbook'] = markbook(form, group_id, student['opt'])

    return new_students


def markbook(form, group_id, s_opt):
    url = '/StudentGroup/Markbook/studentassessment.aspx?studentgroupid='
    table = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvAssessmentData"]'
    form.update(
        {
            '__EVENTTARGET': 'ctl00$ctl00$cphContent$ContentPlaceHolder1$TabMenu$ddlStudent',
            'ctl00$ctl00$countdowntimer2$hdnCountdowntime': '0',
            'ctl00$ctl00$ddlAcademicYear': pm.searchYear,
            'ctl00$ctl00$cphContent$ContentPlaceHolder1$TabMenu$ddlStudent': s_opt,
            'ctl00$ctl00$cphContent$ContentPlaceHolder1$gvAssessmentData$ctl03$chkCompleted': 'on',
            'ctl00$ctl00$hdnIsDirty': 'False'
        }
    )
    page = pm.post_page(url + group_id, form)
    countTr = page.xpath(table + '/tr')
    title = ''
    unit = ''
    head = []
    heads = []
    const = 1
    const_new = 1
    # print(etree.tostring(page, pretty_print=True))
    for i in range(1, len(countTr) + 1):
        if len(page.xpath(table + '/tr[' + str(i) + ']/td/span/text()')) > 0:
            no_td = len(page.xpath(table + '/tr[' + str(i) + ']/td'))

            if not no_td > 1:
                if not const == const_new:
                    heads.append({'title': title, 'marks': head, 'unit': unit})
                    head = []
                    const = const_new
                full_title = check_list(page.xpath(table + '/tr[' + str(i) + ']/td/span/text()'))
                split_title = full_title.split('-')
                title = split_title[1]
                unit = split_title[0]
                const_new += 1

            elif no_td > 1:
                # I could get more fields here
                task = check_list((page.xpath(table + '/tr[' + str(i) + ']/td[1]/span/text()')))

                passed = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[2]/input/@checked'))

                pass_mark = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[3]/input/@value'))
                pass_mark_name = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[3]/input/@name'))

                grade_mark = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[4]/input/@value'))
                grade_mark_name = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[4]/input/@name'))

                submit_date = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[5]/input/@value'))
                submit_date_name = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[5]/input/@name'))

                mark_date = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[6]/input/@value'))
                mark_date_name = check_list(page.xpath(table + '/tr[' + str(i) + ']/td[6]/input/@name'))

                retakes = check_list(page.xpath(table + '//tr[' + str(i) + ']/td[9]/span//text()'))



                # chrckpassed = page.xpath(table + '/tr[' + str(i) + ']/td')

                # head.append({
                #     'task': task,
                #     'passed': passed,
                #     'retakes': retakes.strip('()'),
                #     'passMark': pass_mark,
                #     'passMarkName': pass_mark_name,
                #     'grade': grade_mark,
                #     'gradeName': grade_mark_name,
                #     'submitDate': submit_date,
                #     'submitDateName': submit_date_name,
                #     'markDate': mark_date,
                #     'markDateName': mark_date_name
                #
                # })
                head.append({
                    'task': task,
                    'Passed': passed,
                    'Retakes': retakes.strip('()'),
                    'Mark': {'value': pass_mark,'name': pass_mark_name},
                    'Grade': {'value': grade_mark,'name': grade_mark_name},
                    'Submit Date': {'value': submit_date, 'name': submit_date_name},
                    'Mark Date': {'value': mark_date, 'name': mark_date_name}
                })
    if i == len(countTr):
        heads.append({'title': title, 'marks': head, 'unit': unit})


    return heads