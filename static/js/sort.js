onmessage = (e) => {
    console.log('Received message by sort worker');
    let d = e.data;

    let sort_by = (field, reverse) => {
        return function (a, b) {
            return a = a[field], b = b[field], reverse * ((a > b) - (b > a));
        }
    };
    let attend = d.students.sort(sort_by(d.field, d.reverse));


    postMessage(attend);
    self.close();
};