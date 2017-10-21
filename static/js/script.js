/* ES6 */

// window.onload = function(){
//     postdata("","login",function(response){
//         document.getElementById("main").innerHTML = response;
//         document.getElementById("go").addEventListener("click", function () {
//             login_btn();
//         }, false);
//     });
//
// };

function postdata(frm, php, cb) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            if( typeof cb === 'function' ) {
                cb(xmlhttp.responseText);
            }
        }
    };
    xmlhttp.open("POST", php, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(frm);
}

function post(frm, php) {
    return new Promise(function (resolve, reject) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                resolve(xmlhttp.response);
            }
        };
        xmlhttp.open("POST", php, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(frm);
    })

}



function login_btn(){
    var frm = {}, mytest = false;
    var x = document.getElementsByClassName("form_control");
    for (var d = 0; d < x.length; d++ ){
        if(x[d].value) {
            frm[x[d].name] = x[d].value;
            mytest = true;
        } else{
            console.log('Please enter ' + x[d].name );
            mytest = false;
            break;
        }
    }
    if (mytest){

    var t = JSON.stringify(frm);
        // postdata(t, "/courses", function(response) {
        post(t, "/courses").then(function(response) {
            var test = response;
            document.getElementById('main').innerHTML = test;
            document.getElementById('title').innerHTML = "Promonitor Electrical Courses";
            //put event listeners on new page
            var selected_items = document.getElementsByClassName('course_ref');
            for (var i=0; i< selected_items.length; i++){
                selected_items[i].addEventListener("click", function (e) {
                    get_students(e.target.id);
                    var test = e.target.innerHTML + ': ' + e.target.title;
                    document.getElementById("course_title").innerHTML = test;
            }, false);

            }
            //document.getElementById("go")
        });
    }
}

function get_students(id){
    var t = JSON.stringify ({'course_id':id});
    post(t, "/students").then(function(response) {
            var test = JSON.parse(response);
            document.getElementById('sub_page').innerHTML = test['html'];
            document.getElementById('student_title').innerHTML = 'Student Details';
            //this gets the information on the student id
            get_students_more(test['students'],"/students_more", "");
            get_students_more(test['students'],"/students_further_details", "more");

        });
}

function get_students_more(id, url, pos){
    var t = JSON.stringify ({'student_id':id});
    post(t,url).then(function(response){
        var test = JSON.parse(response);
            for ( var i=0; i < test.length; i++){
                document.getElementById(pos + test[i]['s_id']).innerHTML = test[i]['html'];
            }
    })
}
