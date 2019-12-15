$( document ).ready(function(){
    // Generates random number to guess
    var Random=Math.floor(Math.random()*102+19)
    
    // Display random number
    $('#target-score').text("Target Score:" + Random);
    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    // Variables to keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#win').text("Wins: " + wins);
  $('#lost').text("Losses:" + losses);
  
  // Reset game
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#target-score').text("Target Score: " + Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#total-score-text').text(playerTotal);
        } 
  // Display wins
  function woohoo(){
  alert("Congrats, you won!");
    wins++; 
    $('#win').text("Wins: " + wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("Sorry, you lose!");
    losses++;
    $('#lost').text("Losses:" + losses);
    reset()
  }
  // Clicking crystals
    $('#ruby').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("Player's total score = " + playerTotal);
      $('#total-score-text').text("Your total: " + playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('#gold').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("Player's total score = " + playerTotal);
      $('#total-score-text').text("Your total: " + playerTotal); 
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#diamond').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("Player's total score = " + playerTotal);
      $('#total-score-text').text("Your total: " + playerTotal);
  
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#emerald').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("Player's total score = " + playerTotal);
      $('#total-score-text').text("Your total: " + playerTotal); 
        
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 