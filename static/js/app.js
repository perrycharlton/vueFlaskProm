import {sendReq} from './a-http';
import {login_btn} from './a-login'


(function () {
    const load = () => {
        document.getElementById('login').addEventListener('click', () => {
            let startLogin = sendReq("GET", 'login', '');
            login_btn(startLogin)
        });
    };
    window.onload = load();

})();