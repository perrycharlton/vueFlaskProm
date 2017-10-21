export const login_btn = (startLogin) => {
        startLogin.then((res) => {
            document.getElementById('main').innerHTML = res;
            document.getElementById('btnLogin').addEventListener('click', () => {
                let data = objectifyForm(document.getElementsByClassName('form_control'));
                let course = mod.sendReq('POST', 'login', JSON.stringify(data));
                coursePage(course);
            })
        });
    };