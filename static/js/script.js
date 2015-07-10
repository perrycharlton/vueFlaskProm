
window.onload = function(){
    postdata("","/login",function(response){
        document.getElementById("main").innerHTML = response;
        document.getElementById("go").addEventListener("click", function () {
            login_btn();
        }, false);
    });

};

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
        postdata(t, "/courses", function(response) {
            var test = response;
            document.getElementById('main').innerHTML = test;
            document.getElementById('title').innerHTML = "Promonitor Electrical Courses";
            //put event listeners on new page
            var seleced_items = document.getElementsByClassName('course_ref');
            for (var i=0; i< seleced_items.length; i++){
                seleced_items[i].addEventListener("click", function (e) {
                    get_students(e.target.id);
                    var test = e.target.innerHTML + ': ' + e.target.title;
                    document.getElementById("course_title").innerHTML =
                       test;
            }, false);

            }
            //document.getElementById("go")
        });
    }
}
function get_students(id){
    var t = JSON.stringify ({'course_id':id});
    postdata(t, "/students", function(response) {
            var test = response;
            document.getElementById('sub_page').innerHTML = test;
            document.getElementById('student_title').innerHTML =
                'Student Details';

        });
}

