

export let sendReq = (type, page, data) => {
        return new Promise((resolve, reject) => {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.open(type, page);
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.onload = () => resolve(xmlhttp.responseText);
            xmlhttp.onerror = () => reject(xhr.statusText);
            xmlhttp.send(data);
        })
    };