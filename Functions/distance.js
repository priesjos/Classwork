$(document).ready(function(){

    $("#button").click(function(){
        output();
    });
});

var input = function(a){

    var userInput = parseInt($(a).val());

    return userInput;
}

var distance = function(x1, y1, x2, y2){

    var distance = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));

    return distance;
}

var perimeterFunc = function(a, b, c){

    var perimeter = a + b + c;

    return perimeter;
}

var output = function(){
    
    var distance1 = distance(input("#input1"), input("#input2"), input("#input3"), input("#input4"));
    var distance2 = distance(input("#input3"), input("#input4"), input("#input5"), input("#input6"));
    var distance3 = distance(input("#input1"), input("#input2"), input("#input5"), input("#input6"));

    var perimeter = perimeterFunc(distance1, distance2, distance3);

    $("#output").text("Perimeter: " + perimeter);
}
