
onmessage = (e) => {
    console.log('Received message by attendance worker');
    let photos = [];
    for (let i = 0; i < e.data.length; i++) {
        let p = e.data[i]['student-photo'];
        p['s_id'] = e.data[i]['s_id'];
        photos.push(p)
    }
        // send of all links for the photos
    let getPhotos = (photos) => {
        fetch('/student_img/' + imgId)
            .then((res) => {
                return res.blob();
            })
    };
        .then((r) => {
            let urlCreator = window.URL = window.URL || window.webkitURL;
            p_elm.src = urlCreator.createObjectURL(r);
        });
    };

 postMessage(attend);
    self.close();