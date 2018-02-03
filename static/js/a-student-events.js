import {showHide} from './a-common'
import {moreDetailsForm} from "./a-student-more-details";
import {showStudentTask} from './a-student-marks'

export let eventTickBox = () => {
    let checks = document.getElementById('student_options').getElementsByTagName('input');
    for (let i = 0; i < checks.length; i++) {
        checks[i].addEventListener('click', showPanel);
    }
};


// If user hits checkbox show_marks is called
let showPanel = (e) => {
    let name = e.currentTarget.name;
    let checked = e.currentTarget.checked;
    if (name === 'contact') {
        // check_contact(e)
        let elm = document.getElementsByClassName('template-details');
        showHide(elm, checked);
        let elm1 = document.getElementsByClassName('template-more_details');
        showHide(elm1, checked);
        eventMoreDetails();
    }
    else if (name === 'marks') {
        let elm = document.getElementsByClassName('template-mark');
        showHide(elm, checked);
        // toggleMarks(name);
    }
    else if (name === 'risk') {
        let elm = document.getElementsByClassName('risk-msg');

        showHide(elm, checked);
        let marks = document.getElementsByClassName('riskIndicator');
        showHide(marks, checked);
    } else if (name === 'photo') {
        let elm = document.getElementsByClassName('student-photo');
        showHide(elm, checked);

    } else if (name === 'groupMarks') {
        console.log('group marks');
        if (checked) {
            document.getElementById('sub_page').classList.add('hidden');
            document.getElementById('student_btn').classList.add('hidden');
            document.getElementById('marks').classList.remove('hidden');
        } else {
            document.getElementById('sub_page').classList.remove('hidden');
            document.getElementById('student_btn').classList.remove('hidden');
            document.getElementById('marks').classList.add('hidden')
        }
        createTableEvent();
    }
};


// From above once the table is shown we create show table event
// from the marks table click on cell to display a modal form with the task information
const createTableEvent = () => {
    let tb = document.getElementsByClassName('task');
    for (let i = 0; i < tb.length; i++) {
        tb[i].addEventListener('click', (e) => {
            e.preventDefault();
            // What is ShowTask need to create a function to display data in a form to be able tp update
            let elm = e.currentTarget;
            console.log('this has been clicked',  elm.parentNode.dataset['id'], elm.dataset['gradename']);

            showStudentTask(elm);
        });
    }
};


// create event listener for moreDetails
export const eventMoreDetails = () => {
    // important();
    let elm = document.getElementsByClassName('more-details');
    for (let i = 0; i < elm.length; i++) {
        elm[i].addEventListener('click', moreDetailsForm);

    }
};

// export const eventSaveCancelDetails = () => {
//     let elm = document.getElementsByClassName('more-details-btn');
//     for (let i = 0; i < elm.length; i++) {
//         elm[i].addEventListener('click', formDetails);
//     }
// };