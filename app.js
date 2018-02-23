
var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

randomResult = Math.floor(Math.random() * 60) + 30;

console.log(randomResult);
for (var i = 0; i < 4; i++) {

    $("#result").html('Random Result: ' + randomResult);

    var random = Math.floor(Math.random() * 11 + 1);
    console.log(random);

    
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    
    $(".crystals").append(crystal);

}

var resetAndStart = function () {
//empty crystal
    $(".crystals").empty();

    var images = [
        'https://davidwolfecom-xt0mxgicgroc.stackpathdns.com/wp-content/uploads/2016/02/crystals-FI-800x418.jpg',
        'https://previews.123rf.com/images/decius/decius1412/decius141200073/34614397-beautiful-natural-purple-amethyst-geode-crystals-gemstone-isolated-on-white.jpg',
        'https://reikitraining.org.uk/e/wp-content/uploads/2015/09/10292501_305668702922457_349183590969750840_n.jpg',
        'http://www.crystalheaven.co.uk/wp-content/uploads/2018/01/crystal-3-picture.jpg'
    ];
//new result
    randomResult = Math.floor(Math.random() * 60) + 30;

console.log(randomResult);
for (var i = 0; i < 4; i++) {

    $("#result").html('Random Result: ' + randomResult);
//looping and creating new number
    var random = Math.floor(Math.random() * 11 + 1);
    console.log(random);
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
        
    });
    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"cover"
    })


    
    $(".crystals").append(crystal);

    }
    $("#previous").html("Total Score: " + previous);
}



resetAndStart();




//event delegation
$(document).on('click', ".crystal", function () {

    

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " +  previous);

    console.log(previous);

    if(previous > randomResult){
        lost++;

        $("#lost").html("You lost: " + lost);
        previous = 0;

        
        
        resetAndStart();
    }
    else if (previous === randomResult){
        win++;

        $("#win").html("You win: " + win);

        
        previous = 0;

        resetAndStart();
    }
  



});



//Pseudocode 
//this is a game with four crystals and random result
//every crystal needs to have a random number that is between 1 and 12
//a new random number should be generated every single time we win or lose
// to those four crystals
//when clicking any crystal, it should be adding with the previous result
//until it equals the total score
// if it is greater than the random result, we decrement a loss
//if it is equal, then we increment a win counter