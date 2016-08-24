//business logic:
function Player(name, turnTotal, gameTotal) {
  this.name = name;
  this.turnTotal = turnTotal;
  this.gameTotal = gameTotal;
}



//user interface logic:
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    console.log(name1 + " " + name2);
    $(".info").hide();
    $(".game").show();
    $("h3#player1Name").text(name1);
    $("h3#player2Name").text(name2);


  });
});
