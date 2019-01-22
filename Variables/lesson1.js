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
function showInfo(){
    var userName = $("#userName").val();
    var message = "Hello, " + userName + ", you have entered Sicko Mode.";

    $("#output").text(message).show().animate({"top":"0px", "opacity":"1"}, 'slow');
}