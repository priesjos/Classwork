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

    $("#time").click(function(){
        time();
    });

    $("#sumDigits").click(function(){
        sumDigits();
    });

    $("#pow").click(function(){
        pow();
    });

    $("#abs").click(function(){
        abs();
    });

    $("#sqrt").click(function(){
        sqrt();
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

    var secondsRemaining;
    var minutesRemaining;
    var hoursRemaining;
    var days;
    var minutes;
    var hours;

    var input = $("#number2").val();

    secondsRemaining = input%60;
    minutes = Math.floor(input/60);
    minutesRemaining = minutes%60;
    hours = Math.floor(minutes/60);
    hoursRemaining = hours%60;
    days = Math.floor(hours/24);

    $("#output").text(input + " seconds is equal to " + days + " days, " + hoursRemaining + " hours, " + minutesRemaining + " minutes, " + secondsRemaining + " seconds");
    
}

var sumDigits = function(){

    //   512, pull 5, 1, and 2; mod 10 to find 2; divide 10 and mod 10 to find 1; divide 100 and mod 10 to find 5
    var input = $("#number3").val();

    var digit1 = input%10;
    var digit2 = (Math.floor(input/10))%10;
    var digit3 = (Math.floor(input/100))%10;

    var sum = digit1 + digit2 + digit3;

    $("#output2").text("Sum of the digits is " + sum);

}

var pow = function(){

    //Math.pow(a, b) - raises a to the b power ||| Math.abs(a) - returns abs. value of a ||| Math.sqrt(a) - returns square root of a
    //INCREMENT AND DECREMENT

    var x = $("#number4").val();
    var y = $("#number5").val();

    var pow = Math.pow(x, y);

    $("#output3").text("The product is " + pow);

}

var abs = function(){

    var x = $("#number4").val();

    var abs = Math.abs(x);
    $("#output3").text("The absolute value is " + abs);

}

var sqrt = function(){

    var x = $("#number4").val();

    var sqrt = Math.sqrt(x);
    $("#output3").text("The square root is " + sqrt);

}