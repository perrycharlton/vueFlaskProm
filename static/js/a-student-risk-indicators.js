
export let riskIndicators = (data) => {
    let res = JSON.parse(data);
    console.log(res);
    // let div = document.createElement('div');

    for (let i=0; res.length > i; i++){
        let div = document.createElement('div');
        let div_sub = document.createElement('div');
        let stud = res[i];
        let s_id = stud.s_id;
        // stud.splice(stud.indexOf(s_id), 1);
        let divKey0 = div.cloneNode(false);
        divKey0.classList = 'riskPanel';
        Object.keys(stud).forEach((x) => {
            if(x !== 's_id'){
                let divKey1 = div.cloneNode(false);
                let divKey2 = div.cloneNode(false);

                divKey1.innerText = x;
                divKey1.classList = 'title';
                divKey2.innerText = stud[x];
                divKey2.classList = 'data ' + stud['Risk Title'];
                divKey0.appendChild(divKey1);
                divKey0.appendChild(divKey2);


                div_sub.appendChild(divKey0);
            }

        });
        div.appendChild(div_sub);
        div.className = 'riskIndicator hidden';
        div.id = 'riskIndicator';

        let studPan = document.getElementById(s_id);
        studPan.appendChild(div);
    }



};
