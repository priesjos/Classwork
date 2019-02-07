$(document).ready(function(){

    $("#comparisons").click(function(){
        output(compare("#input1","#input2"));
    });

    $("#conditional").click(function(){

        //output(conditional(input("#input1"), input("#input2")));
        //output(evenOrOdd(input("#input1")));
        //output(canDrive());
        output(withLaw());
    })
});

var input = function(a){

    var userInput = ($(a).val());
    return userInput;

}

var compare = function(a,b){

    return input(a) > input(b);
}

var output = function(a){

    $("#output").text(a);
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

    if(a > b)
        return "A is bigger";
    if(b > a)
        return "B is bigger";
    if(b == a)
        return "They're equivalent";
}

var evenOrOdd = function(a){

    if (a%2===0){
        return(a + " is even");
    }
    else
        return(a + " is odd");
    
}

//Compound boolean expressions use AND (&&), OR (||), NOR, to make even deeper logical conjunctions.
//If you are 16 and have a license, you can legally drive.

var canDrive = function(){

    var age = parseInt(input("#input1"));
    var license = input("#input2");

    if(age >= 16 && license == "yes"){
        return "You can drive";
    }
    else
        return "You should not drive";

}

var withLaw = function(){

    var AP = (input("#input1"));
    var CS3 = (input("#input2"));

    if(AP === "yes" || CS3 == "yes"){
        return "You will be in Law's class.";
    }
    else   
        return "You will not be in Law's class."
}