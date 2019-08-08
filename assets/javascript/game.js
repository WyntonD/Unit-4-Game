var wins = 0;
var losses = 0;
var totalScore = " ";

var wrongScore= [];
var rightScore = [];


var rubyNumber = " ";
var diamondNumber = " ";
var goldNumber = " ";
var emeraldNumber = " ";

var isTotal =false;

var crystalNumbers = Math.floor(Math.random() * (12) + 1);
var randomTotal = Math.floor(Math.random() * (101) + 19);

var goalNumber = randomTotal


console.log(crystalNumbers);
console.log(randomTotal);


$("#ruby").on("click", function() {
    console.log(Math.floor(Math.random(crystalNumbers)))
    $("#total-score")
})
$("#diamond").on("click", function() {
    console.log(crystalNumbers);
})
$("#gold").on("click", function() {
    console.log(crystalNumbers);
})
$("#emerald").on("click", function() {
    console.log(Math.floor(Math.random(crystalNumbers)));
})


function startGame() {

    wins = 0;
    losses = 0;

    console.log($("#rand-num").html(randomTotal));

}

startGame();

if (goalNumber === totalScore) {
    
    wins++;
   
    $("#paraTwo").html("You Win!!")
    
    startGame();
}

else {
    losses++;
   
    $("#paraOne").html("You Lose!")
   
    startGame();
}