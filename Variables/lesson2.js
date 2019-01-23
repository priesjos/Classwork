/** THIS LESSON WILL DEMONSTRATE HOW MATH AND VARIABLES SHOULD WORK */

$(document).ready(function(){

    $("#add").click(function(){
        add();
    });

    $("#divide").click(function(){
        divide();
    });

    $("#modulo").click(function(){
        modulo();
    });

});

/*
var wrong = function(){
    var x = $("#number1").val();
    var y = $("#number2").val();

    var sum = x + y;
    var message = x + " + " + y + " = " + sum;

    var message_two = "ALL information from the user is considered STRING datatype. The '+' sign means to put the two strings together.";

    $("#output").text(message + " " + message_two);
}
*/

var add = function(){
    var x = $("#number1").val();
    var y = $("#number2").val();

    x = parseInt(x);
    y = parseInt(y);

    var sum = x + y;
    var message = x + " + " + y + " = " + sum;

    var message_two = "ALL information from the user is considered STRING datatype. The '+' sign means to put the two strings together.";

    $("#output").text(message + " " + message_two);
}

var divide = function(){

    var x = $("#number1").val();
    var y = $("#number2").val();

    var quotient = x / y;
    $("#output").text(quotient);

}

var modulo = function(){

    var x = $("#number1").val();
    var y = $("#number2").val();

    var modulus = x % y;
    $("#output").text(modulus);
}

var time = function(){
    
    //x will be converting from days to hours, mins, and seconds
    //y will be converting from seconds to days

    
}