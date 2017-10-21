
onmessage = (e) => {
    console.log('Received message by attendance worker');
    let data = e.data;
    let attend = [];
        for (let i = 0; i < data.length; i++) {
            let att = data[i];
            Object.keys(att).forEach((k) => {
                if (k !== 's_id'){
                    att[k] = isNaN(parseInt(att[k])) ? 0 : parseInt(att[k])
                }
            });
            attend.push(att)
        }
    postMessage(attend);
    self.close();
};
