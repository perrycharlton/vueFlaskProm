

def check_list(l):
    return '' if not l else l[0]


def split_details(details):
    x = []
    for detail in details:
        x.append(detail.split("=")[1].split('&')[0])
    return x