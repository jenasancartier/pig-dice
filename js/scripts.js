//business logic:
function Player(name, roll, turnTotal, gameTotal) {
  this.name = name;
  this.roll = roll;
  this.turnTotal = turnTotal;
  this.gameTotal = gameTotal;
  this.winner = function() {
    if (this.gameTotal >= 100) {
      alert(this.name + ", YOU WINNNNN!");
    }
  }
}

Player.prototype.hold = function(){
  this.gameTotal += this.turnTotal;
  this.winner(this.gameTotal);
  this.turnTotal = 0;
  this.roll = 0;
}

Player.prototype.rollRandom = function(){
  var roll = (Math.floor(Math.random() * 6) + 1);
  this.roll = roll
}

Player.prototype.addRoll = function(roll) {
  if (roll === 1) {
    this.turnTotal = 0;
    alert("You rolled a 1! Next player's turn.");

  } else {
    this.turnTotal += roll;
  }
}

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
    $("#computer-turn").show();
    $("#instructionsTitle").show();
    $("h3#player1Name").text(name1);
    $("h3#player2Name").text(name2);
    newPlayer1 = new Player(name1, 0, 0, 0);
    newPlayer2 = new Player(name2, 0, 0, 0);
  });

  $("#instructionsTitle").click(function(){
    $("#dice-gif").toggle();
    $("#instructions").toggle();
  });

  $("#player1-roll").click(function() {
    newPlayer1.rollRandom();
    if (newPlayer1.roll === 1) {
      $("#player1-hold, #player1-roll").prop('disabled', true);
      $("#player2-hold, #player2-roll, #computer-turn").prop('disabled', false);
    }
    newPlayer1.addRoll(newPlayer1.roll);
    $("#p1RollTotal").text("Roll: " + newPlayer1.roll);
    $("#p1TurnTotal").text("Turn: " + newPlayer1.turnTotal);
    $("#p1GameTotal").text("Game total: " + newPlayer1.gameTotal);
  });

  $("#player2-roll").click(function(){
    newPlayer2.rollRandom();
    if (newPlayer2.roll === 1) {
      $("#player2-hold, #player2-roll").prop('disabled', true);
      $("#player1-hold, #player1-roll").prop('disabled', false);
    }
    newPlayer2.addRoll(newPlayer2.roll);
    $("#p2RollTotal").text("Roll: " + newPlayer2.roll);
    $("#p2TurnTotal").text("Turn: " + newPlayer2.turnTotal);
    $("#p2GameTotal").text("Game total: " + newPlayer2.gameTotal);
  });

  $("#player1-hold").click(function(){
    newPlayer1.hold();
    $("#player1-hold, #player1-roll").prop('disabled', true);
    $("#player2-hold, #player2-roll, #computer-turn").prop('disabled', false);
    $("#p1TurnTotal").text("Turn: " + newPlayer1.turnTotal);
    $("#p1RollTotal").text("Roll: " + newPlayer1.roll);
    $("#p1GameTotal").text("Game total: " + newPlayer1.gameTotal);
  });

  $("#player2-hold").click(function(){
    newPlayer2.hold();
    $("#player2-hold, #player2-roll").prop('disabled', true);
    $("#player1-hold, #player1-roll").prop('disabled', false);
    $("#p2TurnTotal").text("Turn: " + newPlayer2.turnTotal);
    $("#p2RollTotal").text("Roll: " + newPlayer2.roll);
    $("#p2GameTotal").text("Game total: " + newPlayer2.gameTotal);
  });

  $("#computer-turn").click(function(){
    debugger;
    while (newPlayer2.turnTotal <= 10) {
      if (newPlayer2.roll === 1) {
         newPlayer2.turnTotal = 0;
         newPlayer2.roll = 0;
         break;
      } else if (newPlayer2.gameTotal + newPlayer2.turnTotal >= 100) {
        newPlayer2.hold();
        break;
      } else if (newPlayer2.turnTotal >= 10) {
        newPlayer2.hold();
        break;
      } else {
        newPlayer2.rollRandom();
        newPlayer2.addRoll(newPlayer2.roll);
      }
      console.log("Roll: " + newPlayer2.roll + " TT: " + newPlayer2.turnTotal);
    }
    $("#player2-hold, #player2-roll, #computer-turn").prop('disabled', true);
    $("#player1-hold, #player1-roll").prop('disabled', false);
    $("#p2RollTotal").text("Roll: " + newPlayer2.roll);
    $("#p2TurnTotal").text("Turn: " + newPlayer2.turnTotal);
    $("#p2GameTotal").text("Game total: " + newPlayer2.gameTotal);
  });

});
