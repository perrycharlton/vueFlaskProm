import {studentMarks, createModalData} from "./a-creating-elements";
import {myModal} from './a-create-modal'

export let studentMarkbook = () => {
    let res = JSON.parse(sessionStorage.getItem('marks'));
    for (let i = 0; i < Object.keys(res).length; i++) {
        let s_id = res[i]['s_id'];
        let elm = document.getElementById(s_id).querySelector('div.template-mark');
        let data = res[i]['markbook'];
        elm.appendChild(studentMarks(data));
    }
};

export const showStudentTask = (e) => {
    let marksData = JSON.parse(sessionStorage.getItem('marks'));
    let formData;
    let elm = document.getElementById('marks');

    //from there we need to find the record for the student
    for (let i = 0; i < marksData.length; i++) {
        if (marksData[i]['s_id'] === e.parentNode.dataset['id']){
            let s_id = marksData[i]['s_id'];
            let studentDetails = JSON.parse(sessionStorage.getItem('students'));
            // Get students Name
            let studentDetail = studentDetails.filter((obj) => {
                return obj.s_id === s_id;
            });
            let studentMarks = marksData[i]['markbook'];
        //    next we need to find the selected unit
            for( let x = 0; x < studentMarks.length; x++){
                if (studentMarks[x]['unit'] === e.dataset['unit']) {
                let unitMarks = studentMarks[x]['marks'];
                // next we need to find the task
                     for( let y = 0; y < unitMarks.length; y++) {
                         if (unitMarks[y]['Grade']['name'] === e.dataset['gradename']) {
                            let taskMarks = unitMarks[y];
                            // taskMarks['s_id'] = e.parentNode.dataset['id'];
                            // taskMarks['unit'] = e.dataset['unit'];
                            let heading = {
                                'title': studentDetail[0]['first-name'] + ' ' + studentDetail[0]['surname'],
                                'info': 'Unit: ' + e.dataset['unit'] +
                                    ' Task: ' +taskMarks['task']
                            };
                            delete taskMarks['task'];
                            console.log(taskMarks);
                         //    here i need to sent this to a function to create a modal form for editing
                             let modal = myModal(createModalData(taskMarks), heading);
                             elm.appendChild(modal);
                             modal.style.display = 'block';
                             let btn = modal.querySelectorAll('button.modal-btn');
                             for (let i = 0; i < btn.length; i++) {
                                 btn[i].addEventListener('click', (e) => {
                                     formClose(e, s_id, taskMarks);
                                     e.preventDefault();
                                     modal.remove();
                                 });
                             }
                         }
                     }
                }
            }
        }
    }
};

function formClose (e, s_id, oldData) {
    if (e.currentTarget.textContent === 'Save') {

        console.log(s_id);
        let elem = e.currentTarget.form;
        let changed = {};
        for (let a = 0; a < elem.length; a++) {
            if (elem[a].localName === 'input' || elem[a].localName === 'textarea') {
                let k = elem[a].getAttribute('data-name');
                let val = student[0][k]['value'];
                let v = elem[a]['value'];
                if (val !== v) {
                    changed[elem[a]['name']] = elem[a]['value'];
                }
            }
        }
        if (Object.keys(changed).length) {
            let data = JSON.stringify({
                'changed': changed,
                's_id': s_id
            });
            // this has to be set up for saving to marks/markbook
            // saveChanges(data);
            console.log(data)
        }
    }
}

let saveChanges = (data) => {
    sendReq('POST', '/save_details', data).then((res) => {
        let details = JSON.parse(sessionStorage.getItem('details'));
        let student = JSON.parse(res)['data'];
        let s_id = student['s_id'];


        //from the results back it checks with the original stored then updates the details and restores the data
        for (let j = 0; j < details.length; j++) {
            if (details[j]['s_id'] === s_id) {
                details[j] = student;
            }
        }
        sessionStorage.setItem('details', JSON.stringify(details));

        createMoreDetails(student);
    });
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



const getMarkBook = (markbook, data) => {
    for (let i = 0; i < markbook.length; i++) {

        if (markbook[i]['unit'] === data['unit']) {
            data['title'] = markbook[i]['title'];
            let marks = markbook[i]['marks'];

            return getMarks(marks, data)
        }
    }
};

const getMarks = (marks, data) => {
        for (let i = 0; i < marks.length; i++) {
            if (marks[i]['Grade']['name'] === data['gradeName']) {
                let top = {
                    'title': data['title'],
                    'unit': data['unit'],
                    'task':marks[i]['task'],
                    'grade': marks[i]['Grade']['value']
                };
                let rows = createMarksForm(marks[i]);
                return model(top, rows);
            }
        }
    };