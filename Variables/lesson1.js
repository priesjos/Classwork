/*
SCOPE 

GLOBAL VARIABLES - Variable is able to be used throughout entire document/script

LOCAL VARIABLES - Variable exclusive to section it was defined in
*/

$(document).ready(function(){

    getInfo();
    showInfo();


})

var userInput;

function getInfo(){
    userInput = "HI";
}

function showInfo(){

    alert(userInput);

}