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
  this.winner = function() {
    if (this.gameTotal >= 100) {
      alert(this.name + ", YOU WINNNNN");
    }
  }
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
    var roll = (Math.floor(Math.random() * 6) + 1);
    newPlayer1.roll = roll
    newPlayer1.addRoll(roll);
    console.log("roll = " + newPlayer1.roll + ", total = " + newPlayer1.turnTotal);
    $("#p1RollTotal").text("Roll: " + newPlayer1.roll);
    $("#p1TurnTotal").text("Turn: " + newPlayer1.turnTotal);
    $("#p1GameTotal").text("Game total: " + newPlayer1.gameTotal);
  });

  $("#player2-roll").click(function(){
    var roll = (Math.floor(Math.random() * 6) + 1);
    newPlayer2.roll = roll;
    newPlayer2.addRoll(roll);
    $("#p2RollTotal").text("Roll: " + newPlayer2.roll);
    $("#p2TurnTotal").text("Turn: " + newPlayer2.turnTotal);
    $("#p2GameTotal").text("Game total: " + newPlayer2.gameTotal);
  });

  $("#player1-hold").click(function(){
    newPlayer1.gameTotal += newPlayer1.turnTotal;
    newPlayer1.winner(newPlayer1.gameTotal);
    newPlayer1.turnTotal = 0;
    newPlayer1.roll = 0;
    $("#p1TurnTotal").text("Turn: " + newPlayer1.turnTotal);
    $("#p1RollTotal").text("Roll: " + newPlayer1.roll);
    $("#p1GameTotal").text("Game total: " + newPlayer1.gameTotal);
  });

  $("#player2-hold").click(function(){
    newPlayer2.gameTotal += newPlayer2.turnTotal;
    newPlayer2.winner(newPlayer2.gameTotal);
    newPlayer2.turnTotal = 0;
    newPlayer2.roll = 0;
    $("#p2TurnTotal").text("Turn: " + newPlayer2.turnTotal);
    $("#p2RollTotal").text("Roll: " + newPlayer2.roll);
    $("#p2GameTotal").text("Game total: " + newPlayer2.gameTotal);
  });

});
