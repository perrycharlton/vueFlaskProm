import {createDetails, studentAddress} from "./a-creating-elements";

export let studentsDetails = () => {
        let res = JSON.parse(sessionStorage.getItem('contact'));
        for (let x = 0; x < res.length; x++) {
            let details = res[x];
            let s_id = details['s_id'];
            let address = details['address'];
            delete details['s_id'];
            delete details['address'];

            // let div = document.createElement('div');
            // div.setAttribute('class', 'col-sm-8 contacts');
            // div.setAttribute('id', 'contacts-' + s_id);

            let elm = document.getElementById(s_id).querySelector('div.template-details');

            let sDetails = createDetails(s_id, details);
            // div.appendChild(sDetails);

            let studentAdd = studentAddress(address);

            elm.appendChild(studentAdd);

            elm.appendChild(sDetails);
        }
    };
