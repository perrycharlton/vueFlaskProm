/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var sendReq = exports.sendReq = function sendReq(type, page, data) {
    return new Promise(function (resolve, reject) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(type, page);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.onload = function () {
            return resolve(xmlhttp.responseText);
        };
        xmlhttp.onerror = function () {
            return reject(xhr.statusText);
        };
        xmlhttp.send(data);
    });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var jsUcfirst = exports.jsUcfirst = function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var clearElm = exports.clearElm = function clearElm(elm) {
    while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
    }
};

var saveData = exports.saveData = function saveData(res, label) {
    sessionStorage.setItem(label, res);
    // return JSON.parse(res);
};

var setColor = exports.setColor = function setColor(data) {
    var col = void 0;
    data = parseInt(data);
    if (data === 100) {
        col = 'btn-success';
    } else if (data >= 90 && data < 100) {
        col = 'btn-info';
    } else if (data >= 80 && data < 90) {
        col = 'btn-warning';
    } else if (data === 0) {
        col = 'btn-default';
    } else {
        col = 'btn-danger';
    }
    return col;
};

var toggleSortBtn = exports.toggleSortBtn = function toggleSortBtn(btn) {
    var forward = !(btn.getAttribute('data-direction') === 'true');
    btn.setAttribute('data-direction', forward.toString());

    btn.childNodes[1].classList.toggle('caret-reversed');
    return forward;
};

var orderPage = exports.orderPage = function orderPage(s_id, new_page) {
    for (var a = 0; a < new_page.childElementCount; a++) {
        if (s_id === new_page.childNodes[a].id) {
            return new_page.childNodes[a];
        }
    }
};

var important = exports.important = function important() {
    var imp = document.getElementsByClassName('important');
    for (var e in imp) {
        if (imp[e].innerText === '') {
            imp[e].previousSibling.classList.add('flag');
        }
    }
};

var showHide = exports.showHide = function showHide(elm, state) {

    // if true
    if (state) {
        for (var i = 0; i < elm.length; i++) {
            elm[i].classList.remove('hidden');
        }
    } else {
        for (var _i = 0; _i < elm.length; _i++) {
            elm[_i].classList.add('hidden');
        }
    }
};

// converts string to integers
var sortData = exports.sortData = function sortData(d, field, reverse) {
    // for (let i = 0; i < d.length; i++){}
    var sort_by = function sort_by(field, reverse) {
        return function (a, b) {
            return a = a[field], b = b[field], reverse * ((a > b) - (b > a));
        };
    };
    var attend = d.sort(sort_by(field, reverse));

    return attend;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createModalData = exports.studentMoreDataForm = exports.createMoreDetails = exports.createMarkBookTable = exports.studentMarks = exports.studentAddress = exports.createDetails = exports.createMarksForm = exports.model = exports.createAttnObj = exports.createSortBtn = exports.createBtn = exports.createCheckBox = exports.studentPanel = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _aCommon = __webpack_require__(1);

var studentPanel = exports.studentPanel = function studentPanel(students) {
    // This will append a rendered page for each student
    var page = JSON.parse(sessionStorage.getItem('studentsPage'));
    // panel is stored in memory
    for (var x = 0; x < students.length; x++) {
        var subPage = document.getElementById('sub_page');

        var div = document.createElement('div');
        div.innerHTML = page;
        div.setAttribute('class', 'students');
        div.setAttribute('id', students[x]['s_id']);
        subPage.appendChild(div);

        // Add name to each panel
        var n = document.getElementsByClassName('student-name')[x];
        var name = students[x]['student-name'].split(' ');
        n.innerText = name[0] + ' ' + name[name.length - 1];

        // Add risk message to each student
        var msg = document.createElement('div');
        msg.innerText = students[x]['risk'];
        msg.classList.add('hidden');
        msg.classList.add('risk-msg');
        n.parentNode.appendChild(msg);

        // Add attributes to each photo
        var photo = document.getElementsByClassName('student-photo')[x];
        photo.setAttribute('id', 'image_' + students[x]['s_id']);
        photo.classList.add('hidden');
    }
};

var createCheckBox = exports.createCheckBox = function createCheckBox(msg) {
    var check = document.createElement('div');

    check.className = 'checkbox';
    for (var i = 0; i < msg.length; i++) {
        var label = document.createElement('label');
        var input = document.createElement('input');

        input.setAttribute('name', msg[i]['name']);
        input.setAttribute('type', 'checkbox');
        label.className = 'checkbox-inline';
        label.appendChild(input);
        label.insertAdjacentHTML('beforeend', msg[i]['msg']);
        check.appendChild(label);
    }
    return check;
};

var createBtn = exports.createBtn = function createBtn(label) {
    var btn = document.createElement('button');
    var div = document.createElement('span');
    btn.setAttribute('class', 'btn btn-success');
    btn.setAttribute('type', 'button');
    btn.innerHTML = label + ' ';
    btn.appendChild(div);
    return btn;
};

var createSortBtn = exports.createSortBtn = function createSortBtn(label) {
    var btn = document.createElement('button');
    var div = document.createElement('span');
    div.setAttribute('class', 'caret caret-reversed');
    div.setAttribute('data-direction', 'forward');
    btn.setAttribute('class', 'btn btn-success dropdown-toggle');
    btn.setAttribute('type', 'button');
    btn.innerHTML = label + ' ';
    btn.appendChild(div);
    return btn;
};

var createAttnObj = exports.createAttnObj = function createAttnObj(data) {
    var div = document.createElement('button');
    var span = document.createElement('span');
    div.setAttribute('class', ' btn ' + (0, _aCommon.setColor)(data.pcnt));
    // div.setAttribute('id', data.name + '-' + data.s_id);
    div.setAttribute('title', data.title);
    div.setAttribute('type', 'button');
    span.setAttribute('class', 'badge');
    span.innerText = data.pcnt + '%';
    div.innerText = data.text;
    div.appendChild(span);
    return div;
};

var model = exports.model = function model(data, rows) {
    var modal = document.createElement('div');
    var modal_cont = document.createElement('div');
    var form = document.createElement('form');
    var btn = document.createElement('button');
    var e_data = document.createElement('div');
    var header = document.createElement('div');
    var wrapper = document.createElement('div');
    var span = document.createElement('span');
    var h2 = document.createElement('h5');

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
    var btnCancel = btn.cloneNode(true);

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
    return modal;
};

var createMarksForm = exports.createMarksForm = function createMarksForm(data) {

    var inputs = ['Mark', 'Grade', 'Submit Date', 'Mark Date'];
    var div = document.createElement('div');
    var divRow = document.createElement('div');
    divRow.className = 'row';
    var formRow = divRow.cloneNode(true);
    for (var key in data) {

        var divlabel = document.createElement('div');
        var divData = document.createElement('div');

        var input = document.createElement('input');

        divlabel.className = 'col-sm-3 bold-text';
        divData.className = 'col-sm-8';

        if (key !== 'task') {
            if (inputs.includes(key)) {
                var formLabel = divlabel.cloneNode(true);
                formLabel.innerText = key;
                var formData = divData.cloneNode(true);
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

var createDetails = exports.createDetails = function createDetails(s_id, details) {
    var div1 = document.createElement('div');
    div1.setAttribute('class', 'col-sm-8 contacts');
    div1.setAttribute('id', 'contacts-' + s_id);

    for (var i = 0; i < Object.keys(details).length; i++) {
        var key = Object.keys(details)[i];
        var val = details[key];
        var div = document.createElement('div');
        var label = div.cloneNode(true);
        var value = div.cloneNode(true);
        var row = div.cloneNode(true);

        div.setAttribute('id', key + '-' + s_id);
        div.setAttribute('class', key);

        label.innerText = (0, _aCommon.jsUcfirst)(key) + ':';
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
    return div1;
};

var studentAddress = exports.studentAddress = function studentAddress(address) {

    var el = document.createElement('div');
    el.setAttribute('class', 'col-sm-4');
    var div_title = document.createElement('div');
    div_title.setAttribute('class', 'address bold-text');
    div_title.innerText = 'Address:';
    el.appendChild(div_title);

    for (var x = 0; x < Object.keys(address).length; x++) {
        var div = document.createElement('div');
        div.setAttribute('class', 'address address' + [x]);
        div.innerText = address[x];
        el.appendChild(div);
    }
    return el;
};

var studentMarks = exports.studentMarks = function studentMarks(data) {

    var table = document.createElement('table');
    table.className = 'table table-bordered';
    var tr = document.createElement('tr');
    var trh = tr.cloneNode(true);
    var th1 = document.createElement('th');
    th1.className = 'text-center';
    for (var i = 0; i < Object.keys(data).length; i++) {
        trh.appendChild(getTableHead(data[i]));
    }
    table.appendChild(trh);
    table.appendChild(getTableRow(data));
    return table;
};

var getTableHead = function getTableHead(data) {
    var numAssm = data['marks'].length;
    var th = document.createElement('th');
    th.setAttribute('colspan', numAssm);
    th.className = 'text-center';
    th.innerText = data['unit'];
    th.title = data['title'];
    return th;
};

var getTableRow = function getTableRow(data) {
    var marksTr = document.createElement('tr');
    for (var x = 0; x < Object.keys(data).length; x++) {
        var marks = data[x]['marks'];
        for (var _x = 0; _x < Object.keys(marks).length; _x++) {
            marksTr.appendChild(getTableBody(marks[_x]));
        }
    }
    return marksTr;
};

var getTableBody = function getTableBody(marks, unit) {
    var markTd = document.createElement('td');
    var task = marks['task'].split(' - ');
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

var createMarkBookTable = exports.createMarkBookTable = function createMarkBookTable() {

    var data = JSON.parse(sessionStorage.getItem('marks'));

    var table = document.createElement('table');
    var trh = document.createElement('tr');
    var th = document.createElement('th');

    table.className = 'table table-bordered';

    th.className = 'text-center';
    th.innerText = 'Student';

    trh.appendChild(th);

    for (var i = 0; i < Object.keys(data[0]['markbook']).length; i++) {
        trh.appendChild(getTableHead(data[0]['markbook'][i]));
    }
    table.appendChild(trh);

    // this breaks each student
    for (var _i = 0; _i < Object.keys(data).length; _i++) {
        table.appendChild(getStudentTable(data[_i]));
    }
    document.getElementById('marks').appendChild(table);
    // createTableEvent()
};

var getStudentTable = function getStudentTable(data) {
    var name = data['name'].split(' '),
        mark = data['markbook'];
    var row = document.createElement('tr');
    var rowData = document.createElement('td');
    rowData.className = 's_mark_name';
    rowData.innerText = name[0] + ' ' + name[name.length - 1];
    row.setAttribute('data-id', data['s_id']);
    row.appendChild(rowData);
    for (var x = 0; x < Object.keys(mark).length; x++) {
        var marks = mark[x]['marks'];
        var unit = mark[x]['unit'];
        // console.log(mark[x]['unit']);
        for (var i = 0; i < Object.keys(marks).length; i++) {
            row.appendChild(getTableBody(marks[i], unit));
        }
    }
    return row;
};

// This creates the basic outlay click edit will show the form
var createMoreDetails = exports.createMoreDetails = function createMoreDetails(data) {
    var s_id = data['s_id'];
    var elm = document.getElementById(s_id).querySelector('div.template-more_details');
    if (elm) {
        (0, _aCommon.clearElm)(elm);
    }
    var div = document.createElement('div');

    var btn = document.createElement('button');

    div.setAttribute('class', 'col-sm-3 more_contacts');
    div.setAttribute('id', 'more_contacts-' + s_id);

    btn.setAttribute('type', 'button');
    // btn.setAttribute('onclick', 'student.MoreDataForm(this)');
    btn.setAttribute('data-student', s_id);
    btn.className = 'btn btn-success more-details';
    btn.innerText = 'Edit';

    for (var key in data) {
        if (key !== 's_id' && key !== 'url') {
            var inputs = ['Email', 'Nok', 'Nok Email', 'Notes', 'NI'];
            if (!inputs.includes(key)) {
                elm.appendChild(createRows(key, data[key]));
            } else {
                elm.appendChild(createRows(key, data[key]['value']));
            }
        }
    }
    elm.appendChild(btn);

    function createRows(key, data) {
        var div = document.createElement('div');
        var e_data = div.cloneNode(false);
        var label = div.cloneNode(false);

        label.className = 'col-sm-3 bold-text';
        label.innerText = key + ': ';
        label.className += data.length ? '' : ' important';

        e_data.className = 'col-sm-8';
        e_data.innerText = data;

        div.className = 'row';
        div.appendChild(label);
        div.appendChild(e_data);

        return div;
    }
};

var studentMoreDataForm = exports.studentMoreDataForm = function studentMoreDataForm(fields) {
    // e_data.appendChild(studentMoreDataForm(key, data[key]));
    var row = document.createElement('div');

    for (var key in fields) {
        var data = fields[key];
        var input = document.createElement('input');
        var label = document.createElement('div');
        var div = document.createElement('div');

        var text = document.createElement('textarea');
        text.setAttribute('row', '3');

        row.className = 'row';

        label.className = 'col-sm-3 bold-text';
        label.innerText = key + ': ';

        div.className = 'col-sm-8';

        text.className = 'form-control col-sm-6';
        input.name = data['name'];
        text.name = data['name'];
        var val = key === 'Notes' ? text : input;
        var type = key.includes('Email') ? 'email' : 'text';
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

var createModalData = exports.createModalData = function createModalData(data) {
    // create 2 objects one for form with key and val
    // the other for information only

    var formData = {},
        infoData = [];
    for (var key in data) {
        if (_typeof(data[key]) === 'object') {
            // alert(key);
            formData[key] = data[key];
        } else {
            infoData[key] = data[key];
        }
    }
    var row = createInfoData(infoData);
    row.appendChild(createFormData(formData));
    return row;
};

function createInfoData(data) {
    var row = document.createElement('div');
    row.className = 'row';

    for (var key in data) {
        var input = document.createElement('div');
        var label = document.createElement('div');
        var div = document.createElement('div');

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
    var row = document.createElement('div');
    row.className = 'row';

    for (var key in data) {
        var input = document.createElement('input');
        var label = document.createElement('div');
        var div = document.createElement('div');

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showStudentTask = exports.studentMarkbook = undefined;

var _aCreatingElements = __webpack_require__(2);

var _aCreateModal = __webpack_require__(4);

var studentMarkbook = exports.studentMarkbook = function studentMarkbook() {
    var res = JSON.parse(sessionStorage.getItem('marks'));
    for (var i = 0; i < Object.keys(res).length; i++) {
        var s_id = res[i]['s_id'];
        var elm = document.getElementById(s_id).querySelector('div.template-mark');
        var data = res[i]['markbook'];
        elm.appendChild((0, _aCreatingElements.studentMarks)(data));
    }
};

var showStudentTask = exports.showStudentTask = function showStudentTask(e) {
    var marksData = JSON.parse(sessionStorage.getItem('marks'));
    var formData = void 0;
    var elm = document.getElementById('marks');

    //from there we need to find the record for the student
    for (var i = 0; i < marksData.length; i++) {
        if (marksData[i]['s_id'] === e.parentNode.dataset['id']) {
            (function () {
                var s_id = marksData[i]['s_id'];
                var studentDetails = JSON.parse(sessionStorage.getItem('students'));
                // Get students Name
                var studentDetail = studentDetails.filter(function (obj) {
                    return obj.s_id === s_id;
                });
                var studentMarks = marksData[i]['markbook'];
                //    next we need to find the selected unit
                for (var x = 0; x < studentMarks.length; x++) {
                    if (studentMarks[x]['unit'] === e.dataset['unit']) {
                        var unitMarks = studentMarks[x]['marks'];
                        // next we need to find the task
                        for (var y = 0; y < unitMarks.length; y++) {
                            if (unitMarks[y]['Grade']['name'] === e.dataset['gradename']) {
                                (function () {
                                    var taskMarks = unitMarks[y];
                                    // taskMarks['s_id'] = e.parentNode.dataset['id'];
                                    // taskMarks['unit'] = e.dataset['unit'];
                                    var heading = {
                                        'title': studentDetail[0]['first-name'] + ' ' + studentDetail[0]['surname'],
                                        'info': 'Unit: ' + e.dataset['unit'] + ' Task: ' + taskMarks['task'],
                                        'grade': taskMarks['Grade']['value']
                                    };
                                    delete taskMarks['task'];
                                    console.log(taskMarks);
                                    //    here i need to sent this to a function to create a modal form for editing
                                    var modal = (0, _aCreateModal.myModal)((0, _aCreatingElements.createModalData)(taskMarks), createModalHeader(heading));
                                    elm.appendChild(modal);
                                    modal.style.display = 'block';
                                    var btn = modal.querySelectorAll('button.modal-btn');
                                    for (var _i = 0; _i < btn.length; _i++) {
                                        btn[_i].addEventListener('click', function (e) {
                                            formClose(e, s_id, taskMarks);
                                            e.preventDefault();
                                            modal.remove();
                                        });
                                    }
                                })();
                            }
                        }
                    }
                }
            })();
        }
    }
};

//modal header specifically for marks
function createModalHeader(headerText) {
    var header = document.createElement('div');
    var title = document.createElement('h3');
    var info = document.createElement('h4');

    // let span = document.createElement('span');
    // span.className = 'col-sm-2 glyphicon glyphicon-remove pull-right';

    header.className = 'modal-header ' + headerText['grade'];
    title.innerText = headerText['title'];
    info.innerText = headerText['info'];
    header.appendChild(title);
    header.appendChild(info);

    return header;
}

function formClose(e, s_id, oldData) {
    if (e.currentTarget.textContent === 'Save') {

        console.log(s_id);
        var elem = e.currentTarget.form;
        var changed = {};
        for (var a = 0; a < elem.length; a++) {
            if (elem[a].localName === 'input' || elem[a].localName === 'textarea') {
                var k = elem[a].getAttribute('data-name');
                var val = student[0][k]['value'];
                var v = elem[a]['value'];
                if (val !== v) {
                    changed[elem[a]['name']] = elem[a]['value'];
                }
            }
        }
        if (Object.keys(changed).length) {
            var data = JSON.stringify({
                'changed': changed,
                's_id': s_id
            });
            // this has to be set up for saving to marks/markbook
            // saveChanges(data);
            console.log(data);
        }
    }
}

var saveChanges = function saveChanges(data) {
    sendReq('POST', '/save_details', data).then(function (res) {
        var details = JSON.parse(sessionStorage.getItem('details'));
        var student = JSON.parse(res)['data'];
        var s_id = student['s_id'];

        //from the results back it checks with the original stored then updates the details and restores the data
        for (var j = 0; j < details.length; j++) {
            if (details[j]['s_id'] === s_id) {
                details[j] = student;
            }
        }
        sessionStorage.setItem('details', JSON.stringify(details));

        createMoreDetails(student);
    });
};

var getTableRow = function getTableRow(data) {
    var marksTr = document.createElement('tr');
    for (var x = 0; x < Object.keys(data).length; x++) {
        var marks = data[x]['marks'];
        for (var _x = 0; _x < Object.keys(marks).length; _x++) {
            marksTr.appendChild(getTableBody(marks[_x]));
        }
    }
    return marksTr;
};

var getMarkBook = function getMarkBook(markbook, data) {
    for (var i = 0; i < markbook.length; i++) {

        if (markbook[i]['unit'] === data['unit']) {
            data['title'] = markbook[i]['title'];
            var marks = markbook[i]['marks'];

            return getMarks(marks, data);
        }
    }
};

var getMarks = function getMarks(marks, data) {
    for (var i = 0; i < marks.length; i++) {
        if (marks[i]['Grade']['name'] === data['gradeName']) {
            var top = {
                'title': data['title'],
                'unit': data['unit'],
                'task': marks[i]['task'],
                'grade': marks[i]['Grade']['value']
            };
            var rows = createMarksForm(marks[i]);
            return model(top, rows);
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var myModal = exports.myModal = function myModal(form, header) {
    return createModalShell(header, createModalContent(form));
};

function createModalShell(header, container) {
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('id', 'myModal');
    var wrapper = document.createElement('div');
    wrapper.className = 'modal-wrapper';
    wrapper.appendChild(header);
    wrapper.appendChild(container);
    modal.appendChild(wrapper);
    return modal;
}

// This is for modal data that can be edited
function createModalContent(formData) {
    var modalCont = document.createElement('div');
    modalCont.className = 'modal-content';
    modalCont.appendChild(createModalFormData(formData));
    console.log('button clicked');
    return modalCont;
}

// This is for form data that can be edited
function createModalFormData(formData) {
    var form = document.createElement('form');
    var e_data = document.createElement('div');
    e_data.className = 'col-sm-8';
    e_data.className = 'form-group';
    e_data.appendChild(formData);
    form.appendChild(e_data);
    form.appendChild(createModalButtons());
    return form;
}

// This create standard save cancel Buttons
function createModalButtons() {
    var btnSave = document.createElement('button');
    var btnGroup = document.createElement('div');

    btnSave.setAttribute('type', 'button');
    btnSave.className = 'btn btn-default modal-btn pull-right';
    var btnCancel = btnSave.cloneNode(true);
    btnCancel.innerText = 'Cancel';
    btnSave.innerText = 'Save';

    btnGroup.setAttribute('class', 'btn-toolbar');
    btnGroup.appendChild(btnSave);
    btnGroup.appendChild(btnCancel);

    return btnGroup;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moreDetailsForm = exports.studentsMoreDetails = undefined;

var _aCreatingElements = __webpack_require__(2);

var _aStudentEvents = __webpack_require__(6);

var _aCreateModal = __webpack_require__(4);

var _aHttp = __webpack_require__(0);

var _aCommon = __webpack_require__(1);

var studentsMoreDetails = exports.studentsMoreDetails = function studentsMoreDetails() {
    var res = JSON.parse(sessionStorage.getItem('details'));
    // This breaks it for each student
    for (var x = 0; x < Object.keys(res).length; x++) {
        (0, _aCreatingElements.createMoreDetails)(res[x]);
    }
    (0, _aStudentEvents.eventMoreDetails)();
};

var moreDetailsForm = exports.moreDetailsForm = function moreDetailsForm(e) {
    e.preventDefault();
    var s_id = e.currentTarget.dataset['student'];
    var res = JSON.parse(sessionStorage.getItem('details'));

    var studentDetails = JSON.parse(sessionStorage.getItem('students'));
    // Get students Name
    var studentDetail = studentDetails.filter(function (obj) {
        return obj.s_id === s_id;
    });
    // console.log(studentDetail);
    var student = res.filter(function (obj) {
        return obj.s_id === s_id;
    });
    //cannot be updated
    delete student[0]['Nok Mobile'];
    delete student[0]['s_id'];
    var elm = document.getElementById(s_id).querySelector('div.template-more_details');
    var form = (0, _aCreatingElements.studentMoreDataForm)(student[0]);
    var heading = {
        'title': studentDetail[0]['first-name'] + ' ' + studentDetail[0]['surname'],
        'info': 'Contact Information'
    };
    var modal = (0, _aCreateModal.myModal)(form, createModalHeader(heading));
    // modal.setAttribute('data-student', s_id);
    elm.appendChild(modal);
    modal.style.display = 'block';
    var btn = modal.querySelectorAll('button.modal-btn');
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function (e) {
            formClose(e, s_id);
            e.preventDefault();
            modal.remove();
        });
    }
};

//modal header specifically for marks
function createModalHeader(headerText) {
    var header = document.createElement('div');
    var title = document.createElement('h3');
    var info = document.createElement('h4');

    // let span = document.createElement('span');
    // span.className = 'col-sm-2 glyphicon glyphicon-remove pull-right';

    header.className = 'modal-header P';
    title.innerText = headerText['title'];
    info.innerText = headerText['info'];
    header.appendChild(title);
    header.appendChild(info);

    return header;
}

function formClose(e, s_id) {
    if (e.currentTarget.textContent === 'Save') {
        var details = JSON.parse(sessionStorage.getItem('details'));
        console.log(s_id);
        // let s_id = e.currentTarget.querySelectorAll('data-student');
        var student = details.filter(function (obj) {
            return obj.s_id === s_id;
        });
        var elem = e.currentTarget.form;
        var changed = {};
        for (var a = 0; a < elem.length; a++) {
            if (elem[a].localName === 'input' || elem[a].localName === 'textarea') {
                var k = elem[a].getAttribute('data-name');
                var val = student[0][k]['value'];
                var v = elem[a]['value'];
                if (val !== v) {
                    changed[elem[a]['name']] = elem[a]['value'];
                }
            }
        }
        if (Object.keys(changed).length) {
            var data = JSON.stringify({
                'changed': changed,
                's_id': s_id
            });
            saveChanges(data);
        }
    }
}

var saveChanges = function saveChanges(data) {
    (0, _aHttp.sendReq)('POST', '/save_details', data).then(function (res) {
        var details = JSON.parse(sessionStorage.getItem('details'));
        var student = JSON.parse(res)['data'];
        var s_id = student['s_id'];

        //from the results back it checks with the original stored then updates the details and restores the data
        for (var j = 0; j < details.length; j++) {
            if (details[j]['s_id'] === s_id) {
                details[j] = student;
            }
        }
        sessionStorage.setItem('details', JSON.stringify(details));

        (0, _aCreatingElements.createMoreDetails)(student);
    });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventMoreDetails = exports.eventTickBox = undefined;

var _aCommon = __webpack_require__(1);

var _aStudentMoreDetails = __webpack_require__(5);

var _aStudentMarks = __webpack_require__(3);

var eventTickBox = exports.eventTickBox = function eventTickBox() {
    var checks = document.getElementById('student_options').getElementsByTagName('input');
    for (var i = 0; i < checks.length; i++) {
        checks[i].addEventListener('click', showPanel);
    }
};

// If user hits checkbox show_marks is called
var showPanel = function showPanel(e) {
    var name = e.currentTarget.name;
    var checked = e.currentTarget.checked;
    if (name === 'contact') {
        // check_contact(e)
        var elm = document.getElementsByClassName('template-details');
        (0, _aCommon.showHide)(elm, checked);
        var elm1 = document.getElementsByClassName('template-more_details');
        (0, _aCommon.showHide)(elm1, checked);
        eventMoreDetails();
    } else if (name === 'marks') {
        var _elm = document.getElementsByClassName('template-mark');
        (0, _aCommon.showHide)(_elm, checked);
        // toggleMarks(name);
    } else if (name === 'risk') {
        var _elm2 = document.getElementsByClassName('risk-msg');

        (0, _aCommon.showHide)(_elm2, checked);
        var marks = document.getElementsByClassName('riskIndicator');
        (0, _aCommon.showHide)(marks, checked);
    } else if (name === 'photo') {
        var _elm3 = document.getElementsByClassName('student-photo');
        (0, _aCommon.showHide)(_elm3, checked);
    } else if (name === 'groupMarks') {
        console.log('group marks');
        if (checked) {
            document.getElementById('sub_page').classList.add('hidden');
            document.getElementById('student_btn').classList.add('hidden');
            document.getElementById('marks').classList.remove('hidden');
        } else {
            document.getElementById('sub_page').classList.remove('hidden');
            document.getElementById('student_btn').classList.remove('hidden');
            document.getElementById('marks').classList.add('hidden');
        }
        createTableEvent();
    }
};

// From above once the table is shown we create show table event
// from the marks table click on cell to display a modal form with the task information
var createTableEvent = function createTableEvent() {
    var tb = document.getElementsByClassName('task');
    for (var i = 0; i < tb.length; i++) {
        tb[i].addEventListener('click', function (e) {
            e.preventDefault();
            // What is ShowTask need to create a function to display data in a form to be able tp update
            var elm = e.currentTarget;
            console.log('this has been clicked', elm.parentNode.dataset['id'], elm.dataset['gradename']);

            (0, _aStudentMarks.showStudentTask)(elm);
        });
    }
};

// create event listener for moreDetails
var eventMoreDetails = exports.eventMoreDetails = function eventMoreDetails() {
    // important();
    var elm = document.getElementsByClassName('more-details');
    for (var i = 0; i < elm.length; i++) {
        elm[i].addEventListener('click', _aStudentMoreDetails.moreDetailsForm);
    }
};

// export const eventSaveCancelDetails = () => {
//     let elm = document.getElementsByClassName('more-details-btn');
//     for (let i = 0; i < elm.length; i++) {
//         elm[i].addEventListener('click', formDetails);
//     }
// };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _aHttp = __webpack_require__(0);

var _aLogin = __webpack_require__(8);

(function () {
    var load = function load() {
        document.getElementById('login').addEventListener('click', function () {
            var startLogin = (0, _aHttp.sendReq)("GET", 'login', '');
            (0, _aLogin.login_btn)(startLogin);
        });
    };
    window.onload = load();
})();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login_btn = undefined;

var _aHttp = __webpack_require__(0);

var _aCourses = __webpack_require__(9);

var login_btn = exports.login_btn = function login_btn(startLogin) {
    startLogin.then(function (res) {
        document.getElementById('main').innerHTML = res;
        document.getElementById('btnLogin').addEventListener('click', function () {
            var data = objectifyForm(document.getElementsByClassName('form_control'));
            var course = (0, _aHttp.sendReq)('POST', 'login', JSON.stringify(data));
            (0, _aCourses.coursePage)(course);
        });
    });
};

var objectifyForm = function objectifyForm(formArray) {
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coursePage = undefined;

var _aStudents = __webpack_require__(10);

var _aCommon = __webpack_require__(1);

var coursePage = exports.coursePage = function coursePage(course) {
    course.then(function (res) {
        // console.log("nearly ready!", JSON.parse(res));
        document.getElementById('main').innerHTML = JSON.parse(res)['html'];
        document.getElementById('title').innerHTML = 'Promonitor Electrical Courses';
        document.getElementById('dropdownMenu1').addEventListener('click', function (e) {
            e.stopPropagation();
            document.getElementById('course-select').classList.toggle('show');
        });
        chooseCourse();
    });
};

var chooseCourse = function chooseCourse() {
    var courseCode = document.getElementsByClassName('course_ref');
    Array.from(courseCode).forEach(function (e) {
        e.addEventListener('click', function (elm) {
            document.getElementById('course-select').classList.remove('show');
            elm.stopPropagation();
            (0, _aCommon.clearElm)(document.getElementById('sub_page'));
            (0, _aCommon.clearElm)(document.getElementById('student_btn'));
            (0, _aCommon.clearElm)(document.getElementById('marks'));

            document.getElementById('course_title').innerText = elm.currentTarget.getAttribute('title');
            (0, _aStudents.getStudents)(elm.currentTarget.id);
        });
    });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStudents = undefined;

var _aHttp = __webpack_require__(0);

var _aCommon = __webpack_require__(1);

var _aStudentDetails = __webpack_require__(11);

var _aStudentAttendance = __webpack_require__(12);

var _aStudentMarks = __webpack_require__(3);

var _aStudentMoreDetails = __webpack_require__(5);

var _aCreatingElements = __webpack_require__(2);

var _aStudentEvents = __webpack_require__(6);

var _aStudentRiskIndicators = __webpack_require__(13);

var getStudents = exports.getStudents = function getStudents(id) {
    var t = JSON.stringify({ 'group_id': id });
    (0, _aCommon.saveData)(id, 'group_id');
    (0, _aHttp.sendReq)('POST', '/students', t).then(function (res) {
        var data = JSON.parse(res);
        var page = data['html'];
        var students = data['students'];
        (0, _aCommon.saveData)(JSON.stringify(students), 'students'); // save student details to local storage
        (0, _aCommon.saveData)(JSON.stringify(page), 'studentsPage');

        (0, _aCreatingElements.studentPanel)(students);
        // studentPanel(students, page);  // Create student panel
        //
        getPhoto(students); // Get students photos ---- toggle
        getStudentsDetails(); // rest of the student information
    });
};

var getPhoto = function getPhoto(students) {
    var _loop = function _loop(x) {
        var s_id = students[x]['s_id'];
        fetch('/student_img/' + students[x]['student-photo']).then(function (res) {
            return res.blob();
        }).then(function (r) {
            var urlCreator = window.URL = window.URL || window.webkitURL;
            var photoId = document.getElementById('image_' + s_id);
            photoId.src = urlCreator.createObjectURL(r);
        });
    };

    for (var x = 0; x < students.length; x++) {
        _loop(x);
    }
};

var getStudentsDetails = function getStudentsDetails() {
    // create option views from option buttons if selected show data and button
    (0, _aHttp.sendReq)('POST', '/students_attendance').then(function (res) {
        (0, _aCommon.saveData)(res, 'attendance');
        (0, _aStudentAttendance.studentAttendance)();
    });
    (0, _aHttp.sendReq)('POST', '/students_marks').then(function (res) {
        (0, _aCommon.saveData)(res, 'marks');
        (0, _aStudentMarks.studentMarkbook)();
        (0, _aCreatingElements.createMarkBookTable)();
    });
    (0, _aHttp.sendReq)('POST', '/students_contact').then(function (res) {
        (0, _aCommon.saveData)(res, 'contact');
        (0, _aStudentDetails.studentsDetails)();
    });
    (0, _aHttp.sendReq)('POST', '/students_further_details').then(function (res) {
        (0, _aCommon.saveData)(res, 'details');
        (0, _aStudentMoreDetails.studentsMoreDetails)();
        // create the check boxes
    });
    (0, _aHttp.sendReq)('POST', '/risk_indicators').then(function (res) {
        (0, _aCommon.saveData)(res, 'risk_indicators');
        (0, _aStudentRiskIndicators.riskIndicators)(res);
        // create the check boxes
    });
    sortStudents();
    getTickBoxes();
};

var getTickBoxes = function getTickBoxes() {
    // set labels for check boxes
    var msg = [{ 'msg': 'Show Photo', 'name': 'photo' }, { 'msg': 'Show Risk', 'name': 'risk' }, { 'msg': 'Show Info', 'name': 'contact' }, { 'msg': 'Show Marks', 'name': 'marks' }, { 'msg': 'Show Group', 'name': 'groupMarks' }];
    // Where to append tickboxes and clear existing
    var chk = document.getElementById('student_options');
    (0, _aCommon.clearElm)(chk);
    chk.appendChild((0, _aCreatingElements.createCheckBox)(msg));
    // add event click to check box
    (0, _aStudentEvents.eventTickBox)();
};

var sortStudents = function sortStudents() {
    // get button panel
    var div = document.getElementById('student_btn');

    //create each button add evet
    var btn_update = (0, _aCreatingElements.createBtn)('Update Risk');
    btn_update.onclick = function (e) {
        (0, _aStudentAttendance.updateAttendance)();
    };
    div.appendChild(btn_update);

    var btn_att = (0, _aCreatingElements.createSortBtn)('Attendance');
    btn_att.onclick = function (e) {
        btnSort(e, 'attendance_pcnt', 'attendance');
    };
    div.appendChild(btn_att);

    var btn_pun = (0, _aCreatingElements.createSortBtn)('Punctuation');
    btn_pun.onclick = function (e) {
        btnSort(e, 'punctuality_pcnt', 'attendance');
    };
    div.appendChild(btn_pun);

    var btn_first = (0, _aCreatingElements.createSortBtn)('First Name');
    btn_first.onclick = function (e) {
        btnSort(e, 'first-name', 'students');
    };
    div.appendChild(btn_first);

    var btn_last = (0, _aCreatingElements.createSortBtn)('Surname');
    btn_last.onclick = function (e) {
        btnSort(e, 'surname', 'students');
    };
    div.appendChild(btn_last);
};

var btnSort = function btnSort(e, field, label) {
    var students_data = JSON.parse(sessionStorage.getItem(label));
    var new_page = document.getElementById('sub_page').cloneNode(true);
    (0, _aCommon.clearElm)(document.getElementById('sub_page'));
    var forward = (0, _aCommon.toggleSortBtn)(e.currentTarget) === true ? 1 : -1;
    var arrSorted = [];
    if (label === 'attendance') {
        var data = [];
        for (var i = 0; i < students_data.length; i++) {
            // returns each student
            var obj1 = {};
            obj1['s_id'] = students_data[i]['s_id'];
            obj1[field] = isNaN(parseInt(students_data[i][field])) ? 0 : parseInt(students_data[i][field]);
            data.push(obj1);
        }

        arrSorted = (0, _aCommon.sortData)(data, field, forward);
    } else if (label === 'students') {
        arrSorted = (0, _aCommon.sortData)(students_data, field, forward);
    }
    for (var _i = 0; _i < arrSorted.length; _i++) {
        document.getElementById('sub_page').appendChild((0, _aCommon.orderPage)(arrSorted[_i]['s_id'], new_page));
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.studentsDetails = undefined;

var _aCreatingElements = __webpack_require__(2);

var studentsDetails = exports.studentsDetails = function studentsDetails() {
    var res = JSON.parse(sessionStorage.getItem('contact'));
    for (var x = 0; x < res.length; x++) {
        var details = res[x];
        var s_id = details['s_id'];
        var address = details['address'];
        delete details['s_id'];
        delete details['address'];

        // let div = document.createElement('div');
        // div.setAttribute('class', 'col-sm-8 contacts');
        // div.setAttribute('id', 'contacts-' + s_id);

        var elm = document.getElementById(s_id).querySelector('div.template-details');

        var sDetails = (0, _aCreatingElements.createDetails)(s_id, details);
        // div.appendChild(sDetails);

        var studentAdd = (0, _aCreatingElements.studentAddress)(address);

        elm.appendChild(studentAdd);

        elm.appendChild(sDetails);
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateAttendance = exports.studentAttendance = undefined;

var _aHttp = __webpack_require__(0);

var _aCreatingElements = __webpack_require__(2);

var studentAttendance = exports.studentAttendance = function studentAttendance() {
    var res = JSON.parse(sessionStorage.getItem('attendance'));
    for (var i = 0; i < Object.keys(res).length; i++) {
        var s_id = res[i]['s_id'];
        var elm = document.getElementById(s_id).querySelector('div.template-attendance');
        var dataAttn = {
            's_id': s_id,
            'data': res[i],
            'title': 'Classes: ' + res[i]['lessons'] + '. Attended: ' + res[i]['attended'],
            'text': 'Attendance: ',
            'pcnt': res[i]['attendance_pcnt']
        };
        var dataPunc = {
            's_id': s_id,
            'data': res[i],
            'title': 'Late\'s: ' + res[i]['lates'],
            'text': 'Punctuality: ',
            'pcnt': res[i]['punctuality_pcnt']
        };
        elm.appendChild((0, _aCreatingElements.createAttnObj)(dataAttn));
        elm.appendChild((0, _aCreatingElements.createAttnObj)(dataPunc));
    }
};

var updateAttendance = exports.updateAttendance = function updateAttendance() {
    var students = JSON.parse(sessionStorage.getItem('attendance'));
    var data = [];
    var level = '';
    for (var i = 0; i < students.length; i++) {

        var attn = parseInt(students[i]['attendance_pcnt']);
        switch (true) {
            case attn === 100:
                level = 3;
                break;
            case attn <= 99 && attn > 98:
                level = 2;
                break;
            case attn <= 98 && attn > 90:
                level = 1;
                break;
            case attn <= 90:
                level = 4;
                break;
            default:
                level = '';
        }
        data.push({
            's_id': students[i]['s_id'],
            'level': level
        });
    }
    (0, _aHttp.sendReq)('POST', '/save_attendance', JSON.stringify(data)).then(function (res) {
        var message = JSON.parse(res)['message'];
        console.log(message);
    });
};

var setcolor = function setcolor(data) {
    var col = void 0;
    data = parseInt(data);
    if (data === 100) {
        col = 'btn-success';
    } else if (data >= 90 && data < 100) {
        col = 'btn-info';
    } else if (data >= 80 && data < 90) {
        col = 'btn-warning';
    } else if (data === 0) {
        col = 'btn-default';
    } else {
        col = 'btn-danger';
    }
    return col;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var riskIndicators = exports.riskIndicators = function riskIndicators(data) {
    var res = JSON.parse(data);
    console.log(res);
    // let div = document.createElement('div');

    var _loop = function _loop(i) {
        var div = document.createElement('div');
        var div_sub = document.createElement('div');
        var stud = res[i];
        var s_id = stud.s_id;
        // stud.splice(stud.indexOf(s_id), 1);
        var divKey0 = div.cloneNode(false);
        divKey0.classList = 'riskPanel';
        Object.keys(stud).forEach(function (x) {
            if (x !== 's_id') {
                var divKey1 = div.cloneNode(false);
                var divKey2 = div.cloneNode(false);

                divKey1.innerText = x;
                divKey1.classList = 'title';
                divKey2.innerText = stud[x];
                divKey2.classList = 'data ' + stud['Risk Title'];
                divKey0.appendChild(divKey1);
                divKey0.appendChild(divKey2);

                div_sub.appendChild(divKey0);
            }
        });
        div.appendChild(div_sub);
        div.className = 'riskIndicator hidden';
        div.id = 'riskIndicator';

        var studPan = document.getElementById(s_id);
        studPan.appendChild(div);
    };

    for (var i = 0; res.length > i; i++) {
        _loop(i);
    }
};

/***/ })
/******/ ]);