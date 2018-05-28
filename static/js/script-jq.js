/* ES6 */

// import './sudents';

(function (mod) {

    const load = () => {
        // console.log("ready!");
        document.getElementById('login').addEventListener('click', () => {
            let startLogin = mod.sendReq("GET", 'login', '');
            login_btn(startLogin)
        });
    };

    window.onload = load();

    mod.sendReq = (type, page, data) => {
        return new Promise((resolve, reject) => {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.open(type, page);
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.onload = () => resolve(xmlhttp.responseText);
            xmlhttp.onerror = () => reject(xhr.statusText);
            xmlhttp.send(data);
        })
    };


    const objectifyForm = (formArray) => {
        let returnArray = {};
        for (let i = 0; i < formArray.length; i++) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return returnArray;
    };

    const login_btn = (startLogin) => {
        startLogin.then((res) => {
            document.getElementById('main').innerHTML = res;
            document.getElementById('btnLogin').addEventListener('click', () => {
                let data = objectifyForm(document.getElementsByClassName('form_control'));
                let course = mod.sendReq('POST', 'login', JSON.stringify(data));
                coursePage(course);
            })
        });
    };

    let coursePage = (course) => {
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

    let chooseCourse = () => {
        let courseCode = document.getElementsByClassName('course_ref');
        Array.from(courseCode).forEach((e) => {
            e.addEventListener('click', (elm) => {
                document.getElementById('course-select').classList.remove('show');
                elm.stopPropagation();
                mod.clear_elm(document.getElementById('sub_page'));
                mod.clear_elm(document.getElementById('student_btn'));
                mod.clear_elm(document.getElementById('marks'));

                // document.getElementById('course-select').classList.toggle('show');
                document.getElementById('course_title').innerText = elm.currentTarget.getAttribute('title');
                getStudents(elm.currentTarget.id);
            });
        });
    };

    let getStudents = (id) => {
        let t = JSON.stringify({'group_id': id});
        mod.saveData(id, 'group_id');
        let students = mod.sendReq('POST', '/students', t);
        studentPage(students)
    };

    let studentPage = (students) => {
        students.then((res) => {
            let data = JSON.parse(res);
            //----------------------------
            let page = data['html'];
            let students = data['students'];
            mod.saveData(JSON.stringify(students), 'students');
            // let photoWorker = new Worker('static/js/photo_worker.js');
            for (let x = 0; x < students.length; x++) {
                 // this needs to be shown on page ???????
                // console.log(students[x]['risk']);
                let div = document.createElement('div');
                div.innerHTML = page;
                div.setAttribute('class', 'students');
                div.setAttribute('id', students[x]['s_id']);
                document.getElementById('sub_page').appendChild(div);
                let name = students[x]['student-name'].split(' ');
                let n = document.getElementsByClassName('student-name')[x];
                n.innerText = name[0] + ' ' + name[name.length - 1];
                // document.getElementsByClassName('student-name')[x].innerHTML = name[0] + ' ' + name[name.length - 1];
                let msg = document.createElement('div');
                msg.innerText = students[x]['risk'];
                n.parentNode.appendChild(msg);
                let imgnod = document.getElementsByClassName('student-photo')[x];
                imgnod.setAttribute('id', 'image_' + students[x]['s_id']);
                getPhoto(students[x]['student-photo'], students[x]['s_id'])
            }
            student.getStudents();
        });

    };

    mod.saveData = (res, label) => {
        sessionStorage.setItem(label, res);
        // return JSON.parse(res);
    };


    let getPhoto = (imgId, studentId) => {
        let p_elm = document.getElementById('image_' + studentId);
        fetch('/student_img/' + imgId)
            .then((res) => {
                return res.blob();
            })
            .then((r) => {
                let urlCreator = window.URL = window.URL || window.webkitURL;
                p_elm.src = urlCreator.createObjectURL(r);
            });
    };


    jsUcfirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    mod.clear_elm = (elm) => {
        while (elm.firstChild) {
                    elm.removeChild(elm.firstChild);
                }
    };

    mod.check_contact = (e) => {
        let details = document.getElementsByClassName('template-details');
        let more = document.getElementsByClassName('template-more_details');
        if (e.checked){
            for (let i = 0; i < details.length; ++i) {
                details[i].classList.remove('hidden');
            }
           for (let i = 0; i < more.length; ++i) {
                more[i].classList.remove('hidden');
            }

        }else{
            for (let i = 0; i < details.length; ++i) {
                details[i].classList.add('hidden');
            }
           for (let i = 0; i < more.length; ++i) {
                more[i].classList.add('hidden');
            }
        }
    };


})(mod = window.mod || {});

