/** THIS LESSON WILL DEMONSTRATE HOW MATH AND VARIABLES SHOULD WORK */

$(document).ready(function(){

    $("#mathWrong").click(function(){
        wrong();
    })
    $("#mathRight").click(function(){
        right();
    })
});

var wrong = function(){
    var x = $("#number1").val();
    var y = $("#number2").val();

    var sum = x + y;
    var message = x + " + " + y + " = " + sum;

    var message_two = "ALL information from the user is considered STRING datatype. The '+' sign means to put the two strings together.";

    $("#output").text(message + " " + message_two);
}

var right = function(){
    var x = $("#number1").val();
    var y = $("#number2").val();

    x = parseInt(x);
    y = parseInt(y);

    var sum = x + y;
    var message = x + " + " + y + " = " + sum;

    var message_two = "ALL information from the user is considered STRING datatype. The '+' sign means to put the two strings together.";

    $("#output").text(message + " " + message_two);
}