var wins = 0;
var losses = 0;
var totalScore = 0;


var rubyNumber = " ";
var diamondNumber = " ";
var goldNumber = " ";
var emeraldNumber = " ";

var isTotal =false;

var crystalNumbers =Math.floor(Math.random() * (12) + 1);
var randomTotal = Math.floor(Math.random() * (101) + 19);




console.log(crystalNumbers);
console.log(randomTotal);

function startGame() {

    wins = 0;
    losses = 0;

    console.log($("#rand-num").html(randomTotal))
}

startGame();