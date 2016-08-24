//business logic:
function Player(name, roll, turnTotal, gameTotal) {
  this.name = name;
  this.roll = roll;
  this.turnTotal = turnTotal;
  this.addRoll = function(roll) {
    if (roll === 1) {
      this.turnTotal = 0;
      this.gameTotal += 1;
      alert("You rolled a 1! Next player's turn.");
    } else {
      this.turnTotal += roll;
    }
  }
  this.gameTotal = gameTotal;
};

var newPlayer1;
var newPlayer2;

//user interface logic:
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    console.log(name1 + " " + name2);
    $(".info").hide();
    $(".game").show();
    $("#submitName").hide();
    $("h3#player1Name").text(name1);
    $("h3#player2Name").text(name2);
    newPlayer1 = new Player(name1, 0, 0, 0);
    newPlayer2 = new Player(name2, 0, 0, 0);
  });

  $("#player1-roll").click(function() {
    var roll = (Math.floor(Math.random() * 6) + 1);
    newPlayer1.roll = roll
    newPlayer1.addRoll(roll);
    console.log("roll = " + newPlayer1.roll + ", total = " + newPlayer1.turnTotal);
  });

  $("#player2-roll").click(function(){
    var roll = (Math.floor(Math.random() * 6) + 1);
    newPlayer2.roll = roll;
    newPlayer2.addRoll(roll);
    console.log(newPlayer2.roll);
  });

  $("#player1-hold").click(function(){
    newPlayer1.gameTotal += newPlayer1.turnTotal;
    newPlayer1.turnTotal = 0;
  });

  $("#player2-hold").click(function(){
    newPlayer2.gameTotal += newPlayer2.turnTotal;
    newPlayer2.turnTotal = 0;
  });

});
