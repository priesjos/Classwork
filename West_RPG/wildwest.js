$(document).ready(function(){

    updateNarrative(N1);

    $("footer").html(createButton("B1", N1O1) + createButton("B2", N1O2) + createButton("B3", "unused"));
    $("#B3").hide()

    $("#B1").click(function(){
        if($(this).text() === N1O1){
            updateNarrative(N2);
            $("#B1").text(N2O1);
            $("#B2").text(N2O2);
            $("#B3").text(N2O3);
            $("#B3").show();
        }

        else if ($("#B1").text() === N2O1){
            updateNarrative(N5);
            $("#B1").text(N5O1);
            $("#B2").hide();
            $("#B3").hide();
        }

        else if ($("#B1").text() === N5O1){
            updateNarrative(N8);
            $("#B1").text("End");
            $("#B2").hide();
            $("#B3").hide();
        }

        else if ($("#B1").text() === N6O1){
            updateNarrative(N9);
            $("#B1").text("End");
            $("#B2").hide();
            $("#B3").hide();
        }

        else if($("#B1").text() === N7O1){
            updateNarrative(N10);
            $("#B1").text("End");
            $("#B2").hide();
            $("#B3").hide();
        }
    });

    $("#B2").click(function(){
        if($(this).text() === N1O2){
            updateNarrative(N3);
            $("#B1").text(N3O1);
            $("#B2").text(N3O2);
            $("#B3").hide();
        }
        else if ($("#B2").text() === N2O2){
            updateNarrative(N4);
            $("#B1").text("End");
            $("#B2").hide();
            $("#B3").hide();
        }
        else if ($("#B2").text() === N3O2){
            updateNarrative(N6);
            $("#B1").text(N6O1);
            $("#B2").hide();
            $("#B3").hide();
        }

        else if($("#B2").text() === N7O2){
            updateNarrative(N10);
            $("#B1").text("End");
            $("#B2").hide();
            $("#B3").hide();
        }
    });

    $("#B3").click(function(){
        if($("#B3").text() === N2O3){
            updateNarrative(N7);
            $("#B1").text(N7O1);
            $("#B2").text(N7O2);
            $("#B3").text(N7O3);
        }

        else if($("#B3").text() === N7O3){
            updateNarrative(N10);
            $("#B1").text("End");
            $("#B2").hide();
            $("#B3").hide();
        }
    });
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
var N3O2 = "purges the Wild West of evil-doers.";

var N4 = "He continued to cook pancakes for the rest of his days and died a very uneventful life.";

var N5 = "The ranger approaches the insiduous Mr. Pig. He raises his bow and ...";
var N5O1 = "shoots the arrow through Mr. Pig.";

var N6 = "The robot approaches the insiduous Mr. Pig. He raises his phaser and ...";
var N6O1 = "fires it, vaporizing Mr. Pig.";

var N7 = "After a while, the ranger comes across a rogue robot armed with a phaser. In response, he ...";
var N7O1 = "attempts to pacify the robot diplomatically.";
var N7O2 = "aims his bow at a critical component of the robot, firing.";
var N7O3 = "tries to sneak toward the robot.";

var N8 = "Mr. Pig was fatally struck by the arrow, and let out a long screech before collapsing."

var N9 = "Mr. Pig was incinerated to nothing more than ashes and smoke."

var N10 = "The ranger was no match for the robot's superior technology and was incinerated."

var updateNarrative = function(a){

    $("article").text(a);

}

var createButton = function(id, text){

    return "<button type=button id=" + id + ">" + text + "</button>"

}
