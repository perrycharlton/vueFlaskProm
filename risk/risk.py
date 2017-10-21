from common import Promonitor as pm
from common.Common import check_list


risk_url = '/StudentGroup/Reports/riskassessment.aspx?studentgroupid='


def get_risk(group_id):

    page = pm.post_page(risk_url + group_id, '')

    table = '//*[@id="ctl00_ctl00_cphContent_ContentPlaceHolder1_gvStudentGroup_AtRisk"]'

    r = []

    for cr in page.xpath(table):
        # s = {}
        s_id = cr.xpath('./td[3]/a/@href')[0].split('=')[1]
        noTarget = check_list(cr.xpath('./td[6]/span/text()'))
        noRiskComm = check_list(cr.xpath('./td[7]/span/text()'))
        riskcomm = check_list(cr.xpath('./td[8]/span/text()'))
        riskLevel = check_list(cr.xpath('./td[9]/input/@value'))
        riskLevelName = check_list(cr.xpath('./td[9]/input/@name'))

        r.append({
            's_id': s_id,
            'noTarget': noTarget,
            'noRiskComm': noRiskComm,
            'riskcomm': riskcomm,
            'riskLevel': riskLevel,
            'riskLevelName': riskLevelName
        })
    return r