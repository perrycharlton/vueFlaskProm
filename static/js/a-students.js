import {sendReq} from "./a-http";
import {saveData, clearElm, orderPage, toggleSortBtn, sortData} from './a-common';
import {studentsDetails} from './a-student-details';
import {studentAttendance, updateAttendance} from './a-student-attendance';
import {studentMarkbook} from './a-student-marks';
import {studentsMoreDetails} from './a-student-more-details';
import {createCheckBox, createBtn, createSortBtn, studentPanel, createMarkBookTable} from "./a-creating-elements";
import {eventTickBox} from "./a-student-events";
import {riskIndicators} from "./a-student-risk-indicators";

export let getStudents = (id) => {
    let t = JSON.stringify({'group_id': id});
    saveData(id, 'group_id');
    sendReq('POST', '/students', t).then((res) => {
        let data = JSON.parse(res);
        let page = data['html'];
        let students = data['students'];
        saveData(JSON.stringify(students), 'students');  // save student details to local storage
        saveData(JSON.stringify(page), 'studentsPage');


        studentPanel(students);
        // studentPanel(students, page);  // Create student panel
        //
        getPhoto(students);  // Get students photos ---- toggle
        getStudentsDetails(); // rest of the student information
    });
};


let getPhoto = (students) => {
    for (let x = 0; x < students.length; x++) {
        let s_id = students[x]['s_id'];
        fetch('/student_img/' + students[x]['student-photo'])
            .then((res) => {
                return res.blob();
            })
            .then((r) => {
                let urlCreator = window.URL = window.URL || window.webkitURL;
                let photoId = document.getElementById('image_' + s_id);
                photoId.src = urlCreator.createObjectURL(r);
            });
    }
};


let getStudentsDetails = () => {
    // create option views from option buttons if selected show data and button
    sendReq('POST', '/students_attendance').then((res) => {
        saveData(res, 'attendance');
        studentAttendance();
    });
    sendReq('POST', '/students_marks').then((res) => {
        saveData(res, 'marks');
        studentMarkbook();
        createMarkBookTable();
    });
    sendReq('POST', '/students_contact').then((res) => {
        saveData(res, 'contact');
        studentsDetails();
    });
    sendReq('POST', '/students_further_details').then((res) => {
        saveData(res, 'details');
        studentsMoreDetails();
        // create the check boxes
    });
    sendReq('POST', '/risk_indicators').then((res) => {
        saveData(res, 'risk_indicators');
        riskIndicators(res);
        // create the check boxes
    });
    sortStudents();
    getTickBoxes();
};


let getTickBoxes = () => {
    // set labels for check boxes
    let msg =
        [
            {'msg': 'Show Photo', 'name': 'photo'},
            {'msg': 'Show Risk', 'name': 'risk'},
            {'msg': 'Show Info', 'name': 'contact'},
            {'msg': 'Show Marks', 'name': 'marks'},
            {'msg': 'Show Group', 'name': 'groupMarks'}
        ];
    // Where to append tickboxes and clear existing
    let chk = document.getElementById('student_options');
    clearElm(chk);
    chk.appendChild(createCheckBox(msg));
    // add event click to check box
    eventTickBox();
};

let sortStudents = () => {
    // get button panel
    let div = document.getElementById('student_btn');

    //create each button add evet
    let btn_update = createBtn('Update Risk');
    btn_update.onclick = (e) => {
        updateAttendance();
    };
    div.appendChild(btn_update);

    let btn_att = createSortBtn('Attendance');
    btn_att.onclick = (e) => {
        btnSort(e, 'attendance_pcnt', 'attendance');
    };
    div.appendChild(btn_att);

    let btn_pun = createSortBtn('Punctuation');
    btn_pun.onclick = (e) => {
        btnSort(e, 'punctuality_pcnt', 'attendance');
    };
    div.appendChild(btn_pun);

    let btn_first = createSortBtn('First Name');
    btn_first.onclick = (e) => {
        btnSort(e, 'first-name', 'students');
    };
    div.appendChild(btn_first);

    let btn_last = createSortBtn('Surname');
    btn_last.onclick = (e) => {
        btnSort(e, 'surname', 'students');
    };
    div.appendChild(btn_last);
};

let btnSort = (e, field, label) => {
    let students_data = JSON.parse(sessionStorage.getItem(label));
    let new_page = document.getElementById('sub_page').cloneNode(true);
    clearElm(document.getElementById('sub_page'));
    let forward = toggleSortBtn(e.currentTarget) === true ? 1 : -1;
    let arrSorted = [];
    if (label === 'attendance') {
        let data = [];
        for (let i = 0; i < students_data.length; i++) {
            // returns each student
            let obj1 ={};
            obj1['s_id'] = students_data[i]['s_id'];
            obj1[field] = isNaN(parseInt(students_data[i][field])) ? 0 : parseInt(students_data[i][field]);
            data.push(obj1);
        }

        arrSorted = sortData(data, field, forward);

    } else if (label === 'students') {
        arrSorted = sortData(students_data, field, forward);
    }
    for (let i = 0; i < arrSorted.length; i++) {
            document.getElementById('sub_page').appendChild(orderPage(arrSorted[i]['s_id'], new_page));
        }
};
