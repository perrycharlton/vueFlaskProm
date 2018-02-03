import {setColor, jsUcfirst} from "./a-common";
import {clearElm} from './a-common'

export let studentPanel = (students) => {
    // This will append a rendered page for each student
    let page = JSON.parse(sessionStorage.getItem('studentsPage'));
    // panel is stored in memory
    for (let x = 0; x < students.length; x++) {
        let subPage = document.getElementById('sub_page');


        let div = document.createElement('div');
        div.innerHTML = page;
        div.setAttribute('class', 'students');
        div.setAttribute('id', students[x]['s_id']);
        subPage.appendChild(div);

        // Add name to each panel
        let n = document.getElementsByClassName('student-name')[x];
        let name = students[x]['student-name'].split(' ');
        n.innerText = name[0] + ' ' + name[name.length - 1];

        // Add risk message to each student
        let msg = document.createElement('div');
        msg.innerText = students[x]['risk'];
        msg.classList.add('hidden');
        msg.classList.add('risk-msg');
        n.parentNode.appendChild(msg);

        // Add attributes to each photo
        let photo = document.getElementsByClassName('student-photo')[x];
        photo.setAttribute('id', 'image_' + students[x]['s_id']);
        photo.classList.add('hidden');


    }
};

export let createCheckBox = (msg) => {
    let check = document.createElement('div');

    check.className = 'checkbox';
    for (let i = 0; i < msg.length; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');

        input.setAttribute('name', msg[i]['name']);
        input.setAttribute('type', 'checkbox');
        label.className = 'checkbox-inline';
        label.appendChild(input);
        label.insertAdjacentHTML('beforeend', msg[i]['msg']);
        check.appendChild(label);
    }
    return check;
};

export let createBtn = (label) => {
    let btn = document.createElement('button');
    let div = document.createElement('span');
    btn.setAttribute('class', 'btn btn-success');
    btn.setAttribute('type', 'button');
    btn.innerHTML = label + ' ';
    btn.appendChild(div);
    return btn
};

export let createSortBtn = (label) => {
    let btn = document.createElement('button');
    let div = document.createElement('span');
    div.setAttribute('class', 'caret caret-reversed');
    div.setAttribute('data-direction', 'forward');
    btn.setAttribute('class', 'btn btn-success dropdown-toggle');
    btn.setAttribute('type', 'button');
    btn.innerHTML = label + ' ';
    btn.appendChild(div);
    return btn
};

export let createAttnObj = (data) => {
    let div = document.createElement('button');
    let span = document.createElement('span');
    div.setAttribute('class', ' btn ' +  setColor(data.pcnt));
    // div.setAttribute('id', data.name + '-' + data.s_id);
    div.setAttribute('title', data.title);
    div.setAttribute('type', 'button');
    span.setAttribute('class', 'badge');
    span.innerText = data.pcnt + '%';
    div.innerText = data.text;
    div.appendChild(span);
    return div
};

export const model = (data, rows) => {
    let modal = document.createElement('div');
    let modal_cont = document.createElement('div');
    let form = document.createElement('form');
    let btn = document.createElement('button');
    let e_data = document.createElement('div');
    let header = document.createElement('div');
    let wrapper = document.createElement('div');
    let span = document.createElement('span');
    let h2 = document.createElement('h5');

    h2.innerText = data['task'];
    span.className = 'col-sm-2 glyphicon glyphicon-remove';
    modal.className = 'modal';
    modal.setAttribute('id', 'newModal');
    modal_cont.className = 'modal-content';

    wrapper.className = 'modal-wrapper';

    header.className = 'modal-header ' + data['grade'];
    header.innerText = data['title'];


    e_data.className = 'col-sm-8';
    e_data.className = 'form-group';

    btn.setAttribute('type', 'button');
    btn.className = 'btn btn-default modalMarks';
    let btnCancel = btn.cloneNode(true);

    btn.setAttribute('id', 'modalSave');
    btnCancel.setAttribute('id', 'modalCancel');

    btnCancel.innerText = 'Cancel';
    btn.innerText = 'Save';

    e_data.appendChild(rows);
    form.appendChild(e_data);
    form.appendChild(btn);
    form.appendChild(btnCancel);
    header.appendChild(h2);
    wrapper.appendChild(header);
    modal_cont.appendChild(form);
    wrapper.appendChild(modal_cont);
    modal.appendChild(wrapper);
    return modal
};

export const createMarksForm = (data) => {

    let inputs = ['Mark', 'Grade', 'Submit Date', 'Mark Date'];
    let div = document.createElement('div');
    let divRow = document.createElement('div');
    divRow.className = 'row';
    let formRow = divRow.cloneNode(true);
    for (let key in data) {

        let divlabel = document.createElement('div');
        let divData = document.createElement('div');

        let input = document.createElement('input');

        divlabel.className = 'col-sm-3 bold-text';
        divData.className = 'col-sm-8';

        if (key !== 'task') {
            if (inputs.includes(key)) {
                let formLabel = divlabel.cloneNode(true);
                formLabel.innerText = key;
                let formData = divData.cloneNode(true);
                input.value = data[key]['value'];
                input.setAttribute('name', data[key]['name']);
                input.setAttribute('type', 'text');
                input.className = 'form-control';
                formData.className = 'input-group';
                formData.appendChild(input);
                formData.setAttribute('data-s_id', data['s_id']);
                formData.setAttribute('data-gradeName', data['Grade']['name']);
                formRow.appendChild(formLabel);
                formRow.appendChild(formData);

            } else {
                divData.innerText = data[key];
                divlabel.innerText = key;
                divRow.appendChild(divlabel);
                divRow.appendChild(divData);
            }
        }
    }
    div.appendChild(divRow);
    div.appendChild(formRow);

    return div;
};

export const createDetails = (s_id, details) => {
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'col-sm-8 contacts');
    div1.setAttribute('id', 'contacts-' + s_id);

    for (let i = 0; i < Object.keys(details).length; i++) {
        let key = Object.keys(details)[i];
        let val = details[key];
        let div = document.createElement('div');
        let label = div.cloneNode(true);
        let value = div.cloneNode(true);
        let row = div.cloneNode(true);

        div.setAttribute('id', key + '-' + s_id);
        div.setAttribute('class', key);

        label.innerText = jsUcfirst(key) + ':';
        if (val.length) {
            label.setAttribute('class', 'col-sm-4 lbl bold-text');
        } else {
            label.setAttribute('class', 'col-sm-4 lbl bold-text important');
        }
        value.setAttribute('class', 'col-sm-8 details');
        value.innerText = val;
        row.appendChild(label);
        row.appendChild(value);
        row.className = 'row';
        div1.appendChild(row);
    }
    return div1
};

export let studentAddress = (address) => {

    let el = document.createElement('div');
    el.setAttribute('class', 'col-sm-4');
    let div_title = document.createElement('div');
    div_title.setAttribute('class', 'address bold-text');
    div_title.innerText = 'Address:';
    el.appendChild(div_title);

    for (let x = 0; x < Object.keys(address).length; x++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'address address' + [x]);
        div.innerText = address[x];
        el.appendChild(div);
    }
    return el

};

export let studentMarks = (data) => {

    let table = document.createElement('table');
    table.className = 'table table-bordered';
    let tr = document.createElement('tr');
    let trh = tr.cloneNode(true);
    let th1 = document.createElement('th');
    th1.className = 'text-center';
    for (let i = 0; i < Object.keys(data).length; i++) {
        trh.appendChild(getTableHead(data[i]));
    }
    table.appendChild(trh);
    table.appendChild(getTableRow(data));
    return table
};

let getTableHead = (data) => {
    let numAssm = data['marks'].length;
    let th = document.createElement('th');
    th.setAttribute('colspan', numAssm);
    th.className = 'text-center';
    th.innerText = data['unit'];
    th.title = data['title'];
    return th;
};

let getTableRow = (data) => {
    let marksTr = document.createElement('tr');
    for (let x = 0; x < Object.keys(data).length; x++) {
        let marks = data[x]['marks'];
        for (let x = 0; x < Object.keys(marks).length; x++) {
            marksTr.appendChild(getTableBody(marks[x]));
        }
    }
    return marksTr;
};

let getTableBody = (marks, unit) => {
    let markTd = document.createElement('td');
    let task = marks['task'].split(' - ');
    markTd.innerText = task[0];
    markTd.title = task[1];
    markTd.className = marks['Passed'] + ' text-center task ' + marks['Grade']['value'];
    markTd.setAttribute('data-unit', unit);
    markTd.setAttribute('data-gradeName', marks['Grade']['name']);

    // if (marks['grade']) {
    // let span1 = document.createElement('span');
    // span1.className = 'grade';
    // let attempt = parseInt(marks['retakes']) + 1;
    // let string = '';
    // if (attempt === 1) {
    //     string = ' attempt.'
    // } else {
    //     string = ' attempts.'
    // }
    // span1.title = 'Pass mark after ' + attempt + string;
    // span1.innerText = marks['grade'];
    // markTd.appendChild(span1);

    // }
    return markTd;
};

export let createMarkBookTable = () => {

    let data = JSON.parse(sessionStorage.getItem('marks'));

    let table = document.createElement('table');
    let trh = document.createElement('tr');
    let th = document.createElement('th');

    table.className = 'table table-bordered';

    th.className = 'text-center';
    th.innerText = 'Student';

    trh.appendChild(th);

    for (let i = 0; i < Object.keys(data[0]['markbook']).length; i++) {
        trh.appendChild(getTableHead(data[0]['markbook'][i]));
    }
    table.appendChild(trh);

    // this breaks each student
    for (let i = 0; i < Object.keys(data).length; i++) {
        table.appendChild(getStudentTable(data[i]))
    }
    document.getElementById('marks').appendChild(table);
    // createTableEvent()
};

let getStudentTable = (data) => {
    let name = data['name'].split(' '), mark = data['markbook'];
    let row = document.createElement('tr');
    let rowData = document.createElement('td');
    rowData.className = 's_mark_name';
    rowData.innerText = name[0] + ' ' + name[name.length - 1];
    row.setAttribute('data-id', data['s_id']);
    row.appendChild(rowData);
    for (let x = 0; x < Object.keys(mark).length; x++) {
        let marks = mark[x]['marks'];
        let unit = mark[x]['unit'];
        // console.log(mark[x]['unit']);
        for (let i = 0; i < Object.keys(marks).length; i++) {
            row.appendChild(getTableBody(marks[i], unit));
        }
    }
    return row
};

// This creates the basic outlay click edit will show the form
export let createMoreDetails = (data) => {
    let s_id = data['s_id'];
    let elm = document.getElementById(s_id).querySelector('div.template-more_details');
    if (elm){
        clearElm(elm);
    }
    let div = document.createElement('div');

    let btn = document.createElement('button');

    div.setAttribute('class', 'col-sm-3 more_contacts');
    div.setAttribute('id', 'more_contacts-' + s_id);

    btn.setAttribute('type', 'button');
    // btn.setAttribute('onclick', 'student.MoreDataForm(this)');
    btn.setAttribute('data-student', s_id);
    btn.className = 'btn btn-success more-details';
    btn.innerText = 'Edit';

    for (let key in data) {
        if (key !== 's_id' && key !== 'url') {
            let inputs = ['Email', 'Nok', 'Nok Email', 'Notes', 'NI'];
            if (!inputs.includes(key)) {
                elm.appendChild(createRows(key, data[key]));
            } else {
                elm.appendChild(createRows(key, data[key]['value']));
            }
        }
    }
    elm.appendChild(btn);

    function createRows(key, data) {
        let div = document.createElement('div');
        let e_data = div.cloneNode(false);
        let label = div.cloneNode(false);

        label.className = 'col-sm-3 bold-text';
        label.innerText = key + ': ';
        label.className += data.length ? '' : ' important';

        e_data.className = 'col-sm-8';
        e_data.innerText = data;

        div.className = 'row';
        div.appendChild(label);
        div.appendChild(e_data);

        return div
    }
};


export const studentMoreDataForm = (fields) => {
    // e_data.appendChild(studentMoreDataForm(key, data[key]));
    let row = document.createElement('div');

    for (let key in fields) {
        let data = fields[key];
        let input = document.createElement('input');
        let label = document.createElement('div');
        let div = document.createElement('div');

        let text = document.createElement('textarea');
        text.setAttribute('row', '3');

        row.className = 'row';

        label.className = 'col-sm-3 bold-text';
        label.innerText = key + ': ';

        div.className = 'col-sm-8';

        text.className = 'form-control col-sm-6';
        input.name = data['name'];
        text.name = data['name'];
        let val = key === 'Notes' ? text : input;
        let type = key.includes('Email') ? 'email' : 'text';
        input.setAttribute('type', type);
        text.setAttribute('type', type);
        input.setAttribute('placeholder', key);
        input.className = 'form-control col-sm-8';
        input.setAttribute('data-name', key);
        text.setAttribute('data-name', key);
        val.value = data['value'];

        row.appendChild(label);

        div.appendChild(val);
        row.appendChild(div);

    }
    return row;
};

export const createModalData = (data) => {
    // create 2 objects one for form with key and val
    // the other for information only

    let formData = {}, infoData = [];
    for (let key in data){
        if(typeof data[key] === 'object'){
            // alert(key);
            formData[key] = data[key]
        } else {
            infoData[key] = data[key]
        }
    }
    let row = createInfoData(infoData);
    row.appendChild(createFormData(formData));
    return row
};

function createInfoData(data) {
    let row = document.createElement('div');
    row.className = 'row';

    for (let key in data) {
        let input = document.createElement('div');
        let label = document.createElement('div');
        let div = document.createElement('div');

        label.className = 'col-sm-3 bold-text';
        label.innerText = key + ': ';
        div.className = 'col-sm-8';
        input.className = 'col-sm-8';
        input.innerText = data[key];
        row.appendChild(label);
        div.appendChild(input);
        row.appendChild(div);
    }
    return row;
}
function createFormData(data) {
     let row = document.createElement('div');
    row.className = 'row';

    for (let key in data) {
        let input = document.createElement('input');
        let label = document.createElement('div');
        let div = document.createElement('div');

        label.className = 'col-sm-3 bold-text';
        label.innerText = key + ': ';

        div.className = 'col-sm-8';

        input.name = data[key]['name'];
        input.className = 'form-control col-sm-8';
        input.value = data[key]['value'];
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', key);
        input.setAttribute('data-name', key);

        row.appendChild(label);
        div.appendChild(input);
        row.appendChild(div);
    }
    return row;
}