function formValidation() {
     fname();
     lname();
    email();
   
     gender();
     course();
    
    //return false;
} 
function fname() {
    let fname1 = document.forms["form"]["fname"].value;
    if (fname1.length == 0) {
        document.getElementById("err1").innerHTML = "*Firstname required";
    } else {
        document.getElementById("err1").innerHTML = "";
    }
}
function lname() {
    let lname1 = document.forms["form"]["lname"].value;
    if (lname1.length == 0) {
        document.getElementById("err2").innerHTML = "*Lastname required";
      
    } else {
     
        document.getElementById("err2").innerHTML = "";
    }
}
function email() {
    let email1 = document.forms["form"]["email"].value;
    if (email1.length == 0) {
        document.getElementsByTagName("span")[2].innerHTML = "*Email required";
        
    } else {
        document.getElementsByTagName("span")[2].innerHTML = "";
    }
}

function gender() 
{
let gen1= document.getElementsByName("gender")[0];
let gen2= document.getElementsByName("gender")[1];
let gen3= document.getElementsByName("gender")[2];
if(gen1.checked == true||gen2.checked ==true ||  gen3.checked == true){
    document.getElementsByTagName("span")[3].innerHTML = "";
        
}
else{
    document.getElementsByTagName("span")[3].innerHTML = "*Gender Required";
}
}

function course() {
    if(document.form.check1.checked == true || document.form.check2.checked == true){
        let first = document.getElementById("courses-html").value;
        let last = document.getElementById("courses-css").value;
        document.getElementsByTagName("span")[4].innerHTML = "";
    }
    else if (document.form.check1.checked == true ) {
        let first = document.getElementById("courses-html").value;
        document.getElementsByTagName("span")[4].innerHTML = "";
       
    }
     else if (document.form.check2.checked == true) {
        let last = document.getElementById("courses-css").value;
        document.getElementsByTagName("span")[4].innerHTML = "";
        
    }
    else{
        document.getElementsByTagName("span")[4].innerHTML = "*Course required";
       
    }
}