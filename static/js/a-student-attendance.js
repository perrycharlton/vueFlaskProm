import {sendReq} from "./a-http";
import {createAttnObj} from "./a-creating-elements";

export let studentAttendance = () => {
    let res = JSON.parse(sessionStorage.getItem('attendance'));
    for (let i = 0; i < Object.keys(res).length; i++) {
        let s_id = res[i]['s_id'];
        let elm = document.getElementById(s_id).querySelector('div.template-attendance');
        let dataAttn = {
            's_id': s_id,
            'data': res[i],
            'title': 'Classes: ' + res[i]['lessons'] +
            '. Attended: ' + res[i]['attended'],
            'text': 'Attendance: ',
            'pcnt': res[i]['attendance_pcnt']
        };
        let dataPunc = {
            's_id': s_id,
            'data': res[i],
            'title': 'Late\'s: ' + res[i]['lates'],
            'text': 'Punctuality: ',
            'pcnt': res[i]['punctuality_pcnt']
        };
        elm.appendChild(createAttnObj(dataAttn));
        elm.appendChild(createAttnObj(dataPunc));
    }

};

export let updateAttendance = () => {
    let students = JSON.parse(sessionStorage.getItem('attendance'));
    let data = [];
    let level = '';
    for (let i = 0; i < students.length; i++) {

        let attn = parseInt(students[i]['attendance_pcnt']);
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
    sendReq('POST', '/save_attendance', JSON.stringify(data)).then((res) => {
        let message = JSON.parse(res)['message'];
        console.log(message)
    });
};



let setcolor = (data) => {
        let col;
        data = parseInt(data);
        if (data === 100) {
            col = 'btn-success'
        }
        else if (data >= 90 && data < 100) {
            col = 'btn-info'
        }
        else if (data >= 80 && data < 90) {
            col = 'btn-warning'
        }
        else if (data === 0) {
            col = 'btn-default'
        }
        else {
            col = 'btn-danger'
        }
        return col;
    };
