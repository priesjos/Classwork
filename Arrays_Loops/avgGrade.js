$(document).ready(function(){

    alert(average(studentsGrades(numStudents())));
})

var numStudents = function(){

    return parseInt(prompt("How many students?"));

}

var studentsGrades = function(num){
    
    var grades = [];

    for(i = 0; i < num; i++){
        grades.push(parseInt(prompt("Score for student: " + (i+1))));
    }

    return grades
}

var average = function(arr){

    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }

    average = Math.round(sum / arr.length * 100)/100;
}
