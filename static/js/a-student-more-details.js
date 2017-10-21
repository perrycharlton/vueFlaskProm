import {createMoreDetails, studentMoreDataForm} from "./a-creating-elements";
import {eventMoreDetails, eventSaveCancelDetails} from './a-student-events';
import {myModal} from "./a-create-modal";
import {sendReq} from "./a-http";
import {clearElm} from './a-common'

export let studentsMoreDetails = () => {
    let res = JSON.parse(sessionStorage.getItem('details'));
    // This breaks it for each student
    for (let x = 0; x < Object.keys(res).length; x++) {
        createMoreDetails(res[x]);
    }
    eventMoreDetails();
};

export let moreDetailsForm = (e) => {
    e.preventDefault();
    let s_id = e.currentTarget.dataset['student'];
    let res = JSON.parse(sessionStorage.getItem('details'));

    let studentDetails = JSON.parse(sessionStorage.getItem('students'));
    // Get students Name
    let studentDetail = studentDetails.filter((obj) => {
        return obj.s_id === s_id;
    });
    // console.log(studentDetail);
    let student = res.filter((obj) => {
        return obj.s_id === s_id;
    });
    //cannot be updated
    delete student[0]['Nok Mobile'];
    delete student[0]['s_id'];
    let elm = document.getElementById(s_id).querySelector('div.template-more_details');
    let form = studentMoreDataForm(student[0]);
    let heading = {
        'title': studentDetail[0]['first-name'] + ' ' + studentDetail[0]['surname'],
        'info': 'Contact Information'
    };
    let modal = myModal(form, heading);
    // modal.setAttribute('data-student', s_id);
    elm.appendChild(modal);
    modal.style.display = 'block';
    let btn = modal.querySelectorAll('button.modal-btn');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', (e) => {
            formClose(e, s_id);
            e.preventDefault();
            modal.remove();
        });
    }
};

function formClose(e, s_id) {
    if (e.currentTarget.textContent === 'Save') {
        let details = JSON.parse(sessionStorage.getItem('details'));
        console.log(s_id);
        // let s_id = e.currentTarget.querySelectorAll('data-student');
        let student = details.filter((obj) => {
            return obj.s_id === s_id
        });
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
            saveChanges(data);
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

