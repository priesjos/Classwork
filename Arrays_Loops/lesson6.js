$(document).ready(function(){
    output();
});

var numbers = ["something","twothings", 5, 7.26];

numbers.push("one", "two", "three");

numbers.unshift("four", 5, 6);

var output = function(){
    $("#output").text(numbers);
}
