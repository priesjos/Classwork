/*
SCOPE 

GLOBAL VARIABLES - Variable is able to be used throughout entire document/script

LOCAL VARIABLES - Variable exclusive to section it was defined in
*/


//ACTIVE
/*$(document).ready(function(){

    getInfo();
    showInfo();


})*/

//DEFINITIONS
var userName;


function getInfo(){
    userName = $("#userName").val();
}

function showInfo(){
    getInfo()
    var message = "Hello, " + userName + ", glad to see you.";

    $("#output").text(message);
}