from common.Common import check_list
from common import Promonitor as pm


def student_img(photo_id):
    front_url = 'http://promonitor.carshalton.ac.uk/ilp/studentphoto.aspx?pmstudentid='
    back_url = '&Width=240&Height=240&ShowLearnerBadges=False'
    url = front_url + str(photo_id) + back_url
    r = pm.login.session.get(url)
    student_image = r.content
    return student_image


def photo_path(photo_id):
    student_photo_url = "/ilp/studentphoto.aspx?pmstudentid="
    student_photo_size = "&Width=240&Height=240&ShowLearnerBadges=False"

    p_id = photo_id[0].split("=", 1)[1].split('&')[0]
    path = pm.main_url + student_photo_url + p_id + student_photo_size
    return path
