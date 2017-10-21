export let jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export let clearElm = (elm) => {
    while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
    }
};

export let saveData = (res, label) => {
    sessionStorage.setItem(label, res);
    // return JSON.parse(res);
};

export let setColor = (data) => {
    let col;
    data = parseInt(data);
    if (data === 100) {
        col = 'btn-success'
    }
    else if (data >= 90 && data < 100) {
        col = 'btn-info'
    }
    else if (data >= 80 && data < 90) {
        col = 'btn-warning'
    }
    else if (data === 0) {
        col = 'btn-default'
    }
    else {
        col = 'btn-danger'
    }
    return col;
};

export let toggleSortBtn = (btn) => {
    let forward = !(btn.getAttribute('data-direction') === 'true');
    btn.setAttribute('data-direction', forward.toString());

    btn.childNodes[1].classList.toggle('caret-reversed');
    return forward
};

export let orderPage = (s_id, new_page) => {
    for (let a = 0; a < new_page.childElementCount; a++) {
        if (s_id === new_page.childNodes[a].id) {
            return new_page.childNodes[a]
        }
    }
};

export let important = () => {
    let imp = document.getElementsByClassName('important');
    for (let e in imp) {
        if (imp[e].innerText === '') {
            imp[e].previousSibling.classList.add('flag')
        }
    }
};

export let showHide = (elm, state) => {

    // if true
    if (state) {
        for (let i = 0; i < elm.length; i++) {
            elm[i].classList.remove('hidden')
        }
    } else {
        for (let i = 0; i < elm.length; i++) {
            elm[i].classList.add('hidden')
        }

    }
};

// converts string to integers
export const sortData = (d, field, reverse) => {
    // for (let i = 0; i < d.length; i++){}
    let sort_by = (field, reverse) => {
        return function (a, b) {
            return a = a[field], b = b[field], reverse * ((a > b) - (b > a));
        }
    };
    let attend = d.sort(sort_by(field, reverse));

    return attend;
};