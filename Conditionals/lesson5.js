$(document).ready(function(){


    $("#comparisons").click(function(){
        output("#input1","#input2");
    });

    $("#conditional").click(function(){
        conditional("#input1","#input2")
        //output("#input1","#input2");
    })
});

var input = function(a){

    var userInput = $(a).val();
    return userInput;

}

var compare = function(a,b){

    return input(a) > input(b);
}

var output = function(a,b){

    $("#output").text(conditional(input(a), input(b)));
}

/*
    When checking for equalities, there are two options, == or ===.
    Remember that ' = ' is reserved for assigning values to variables. 

    ' == ' is a loose comparison, meaning that data types are not respected; 
    e.g, string 1 and numerical 1 are equal.

    ' === ' is a strict comparison and maintains datatypes.

    A conditional is an if/then statement based on a boolean expression.
*/

var conditional = function(a,b){

    $("#output").text("eee")
    if(a > b)
        return "A is bigger";
    
}