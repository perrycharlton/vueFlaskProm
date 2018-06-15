from server.common import Promonitor as pm
from server.common.Common import check_list


risk_url = '/StudentGroup/Reports/riskassessment.aspx?studentgroupid='


def get_risk(group_id):

    page = pm.post_page(risk_url + group_id, '')

    table = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudentGroup_AtRisk"]'

    r = []
    count = len(page.xpath(table + '/tr'))
    # print(count)
    # for cr in page.xpath(table):

    for i in range(2, count + 1):
        # print(1)
        tr = '/tr[' + str(i) + ']'
        s_id = check_list(page.xpath(table + tr + '/td[3]/a/@href')).split('=')[1]
        # print(s_id)
        avgAtnd = check_list(page.xpath(table + tr + '/td[4]/span/text()'))
        avgPunc = check_list(page.xpath(table + tr + '/td[5]/span/text()'))
        noTarget = check_list(page.xpath(table + tr + '/td[6]/span/text()'))
        noRiskComm = check_list(page.xpath(table + tr + '/td[7]/span/text()'))
        riskcomm = check_list(page.xpath(table + tr + '/td[8]/span/text()'))
        riskLevel = check_list(page.xpath(table + tr + '/td[9]/input/@value'))
        riskLevelTitle = check_list(page.xpath(table + tr + '/td[9]/img/@title'))

        r.append({
            's_id': s_id,
            'Avg. Attn:': avgAtnd,
            'Avg. Punch:': avgPunc,
            'No. of Targets': noTarget,
            'No. Risk Comm.': noRiskComm,
            'Risk Comm.': riskcomm,
            'Risk Level': riskLevel,
            'Risk Title': riskLevelTitle
        })
    # r.append(stu)
    return r
