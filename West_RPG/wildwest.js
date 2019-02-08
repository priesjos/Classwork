$(document).ready(function(){

    updateNarrative(N1);
    
    $("footer").html(createButton("N1O1", N1O1) + createButton("N1O2", N1O2));

    $("#N1O1").click(function(){
        updateNarrative(N2);
        $("footer").html(createButton("N2O1", N2O1) + createButton("N2O2", N2O2) + createButton("N2O3", N2O3));
    })

})

var N1 = "Once upon a time in the wild, wild west, there lived a ...";
var N1O1 = "ranger.";
var N1O2 = "robot.";

var N2 = "This ranger was the most dangerous gunslinger known to man. He loved to ...";
var N2O1 = "kill robots.";
var N2O2 = "cook pancakes.";
var N2O3 = "arrest bad robots.";

var updateNarrative = function(a){

    $("article").text(a);

}

var createButton = function(id, text){

    return "<button type=button id=" + id + ">" + text + "</button>"

}
