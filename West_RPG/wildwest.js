$(document).ready(function(){

    var N2B1 = createButton("N2O1", N2O1);
    var N2B2 = createButton("N2O2", N2O2);
    var N2B3 = createButton("N2O3", N2O3);
    var N3B1 = createButton("N3O1", N3O1);
    var N3B2 = createButton("N3O2", N3O2);
    var N5B1 = createButton("N5O1", N5O1);
    var N6B1 = createButton("N6O1", N6O1);


    updateNarrative(N1);

    //Choose ranger or robot
    $("footer").html(createButton("N1O1", N1O1) + createButton("N1O2", N1O2));

    //Ranger selected
    $("#N1O1").click(function(){
        updateNarrative(N2);
        $("footer").html(N2B1 + N2B2 + N2B3);
        hasBow = true;
    })

    //Robot selected
    $("#N1O2").click(function(){
        updateNarrative(N3);
        $("footer").html(createButton("N3O1", N3B1) + createButton("N3O2", N3B2));
        hasPhaser = true;
    })

    var roleButton;
    if(hasBow){
        roleButton = createButton("N5O1", N5B1);
        
    }
    else
        roleButton = createButton("N6O1", N6B1);

    //Chase tumbleweeds selected
    $("#N2O1").click(function(){
        updateNarrative(N5);
        $("footer").html(roleButton);
    })

    //Purge wild west of evil-doers selected
    $("#N3O2").click(function(){
        updateNarrative(N6);
        $("footer").html(roleButton);
    })
})

var hasBow = false;
var hasPhaser = false;

var N1 = "Once upon a time in the wild, wild west, there lived a ...";
var N1O1 = "ranger.";
var N1O2 = "robot.";

var N2 = "This ranger was the most dangerous archer known to man. He loved to ...";
var N2O1 = "chase tumbleweeds.";
var N2O2 = "cook pancakes.";
var N2O3 = "arrest bad robots.";

var N3 = "This robot had killer instincts - to purge the Wild West of all evil-doers. Armed with a phaser, he ...";
var N3O1 = "heats his pork and beans.";
var N3O2 = "purges the Wild West of evil-doers."

var N4

var N5 = "The ranger approaches the insiduous Mr. Pig. He raises his bow and ..."
var N5O1 = "shoots the arrow through Mr. Pig."

var N6 = "The robot approaches the insiduous Mr. Pig. He raises his phaser and ..."
var N6O1 = "fires it, vaporizing Mr. Pig."

var updateNarrative = function(a){

    $("article").text(a);

}

var createButton = function(id, text){

    return "<button type=button id=" + id + ">" + text + "</button>"

}
