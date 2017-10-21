import {getStudents} from './a-students';
import {clearElm} from './a-common';



export let coursePage = (course) => {
    course.then((res) => {
        // console.log("nearly ready!", JSON.parse(res));
        document.getElementById('main').innerHTML = JSON.parse(res)['html'];
        document.getElementById('title').innerHTML = 'Promonitor Electrical Courses';
        document.getElementById('dropdownMenu1').addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('course-select').classList.toggle('show');

        });
        chooseCourse()
    });
};


const chooseCourse = () => {
    let courseCode = document.getElementsByClassName('course_ref');
    Array.from(courseCode).forEach((e) => {
        e.addEventListener('click', (elm) => {
            document.getElementById('course-select').classList.remove('show');
            elm.stopPropagation();
            clearElm(document.getElementById('sub_page'));
            clearElm(document.getElementById('student_btn'));
            clearElm(document.getElementById('marks'));

            document.getElementById('course_title').innerText = elm.currentTarget.getAttribute('title');
            getStudents(elm.currentTarget.id);
        });
    });
};