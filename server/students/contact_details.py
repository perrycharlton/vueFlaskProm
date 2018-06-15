from server.common.Common import check_list
from server.common import Promonitor as pm
from server.students import photo as pd


def students_full_details(c_id):
    url = "/studentgroup/studentgroup.aspx?studentgroupid=" + c_id
    page = pm.get_page(url)
    r = []

    test = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudent"]//tr[position()>1]'

    for cr in page.xpath(test):
        # s = {}
        s_id = cr.xpath('./td[3]/a/@href')[0].split('=')[1]
        name = check_list(cr.xpath('./td[3]/a/text()'))
        risk = check_list(cr.xpath('./td/img/@title'))
        photo_url = pd.photo_path(cr.xpath('./td/img/@src'))
        photo_id = photo_url.split('=', 1)
        photo_id = photo_id[1].split('&', 1)[0]
        r.append({
            's_id': s_id,
            'student-photo': photo_id,
            's_ref': check_list(cr.xpath('./td[2]/text()')),
            'student-name': name,
            'first-name': name.split(' ')[0],
            'surname': name.split(' ')[-1],
            'risk': risk
        })
        # r.append(s)

    return r


def student_contact_details(students):
    common = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_'
    arr = []
    for student in students:

        url = "/ilp/information/details.aspx?pmstudentid=" + student['s_id']
        page = pm.get_page(url)

        arr.append({
            's_id': student['s_id'],
            'dob': check_list(page.xpath(common + 'txtDOB"]/text()')),
            'address': page.xpath(common + 'txtAddress"]/text()'),
            'telephone': check_list(page.xpath(common + 'txtTelephone"]/text()')),
            'mobile': check_list(page.xpath(common + 'txtMobile"]/text()')),
            'email': check_list(page.xpath(common + 'lnkEmail"]/text()'))
        })

        # student['contacts'] = s
    # return students
    return arr