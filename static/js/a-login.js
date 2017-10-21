import {sendReq} from './a-http';
import {coursePage} from './a-courses'

export const login_btn = (startLogin) => {
        startLogin.then((res) => {
            document.getElementById('main').innerHTML = res;
            document.getElementById('btnLogin').addEventListener('click', () => {
                let data = objectifyForm(document.getElementsByClassName('form_control'));
                let course = sendReq('POST', 'login', JSON.stringify(data));
                coursePage(course);
            })
        });
    };

const objectifyForm = (formArray) => {
        let returnArray = {};
        for (let i = 0; i < formArray.length; i++) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return returnArray;
    };

