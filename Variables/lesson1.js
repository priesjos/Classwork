/*
SCOPE 

GLOBAL VARIABLES - Variable is able to be used throughout entire document/script

LOCAL VARIABLES - Variable exclusive to section it was defined in
*/


//ACTIVE

//---------- NOT NEEDED FOR HTML TRIGGERING ----------//
$(document).ready(function(){

    $("#button").click(function(){

        showInfo();

    })

});
//----------------------------------------------------//

//DEFINITIONS
var userName;


function getInfo(){
    userName = $("#userName").val();
}

function showInfo(){
    getInfo()
    var message = "Hello, " + userName + ", you have entered Sicko Mode.";

    $("#output").text(message).show().animate({"top":"0px", "opacity":"1"}, 'slow');
}