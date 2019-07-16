if
  if (
    ((click1).val() === "r" && (click2).val() === "s")
    || ((click1).val() === "p" && (click2).val() === "r")
    || ((click1).val() === "s" && (click2).val() === "p")
    ) {

    wins1++
    $("#wins1").text("wins: " + wins1)

    loss2++
    $("#losses2").text("losses: " + loss2)
  }
  else if ((click1).val() === (click2).val()) {
    tie++
    $("#tie1").text("ties: " + ties)
    $("#tie2").text("ties: " + ties)
  } else {
    losses1++
    $("#losses1").text("losses: " + losses1)
  }

stop game
stopGame (function () {
  if (wins1 || wins2 === 10) {
    alert(player1 + " is the winner") || alert(player2 + " is the winner")
    alert("refresh to play again")
    
  }

})

// }

// $("#pick1").text("player one pick: " + $(this).val());
    // var startPlayer = 1;

// player two pick
// function playerTwo() {
  // $(".rps2").on("click", function playerTwo() {
  //   $("#pick2").text("player two pick: " + $(this).val());
  //   var startPlayer = 2;
    // store var
  // })
// };

// game function
// function game() {
//   playerOne();
//   playerTwo();
// }

// if (startPlayer === 2) {
  // data from firebase
  // if else of who picked what letter

// }
// in firebase - player object
// wins1, losses, choice
// chat username
// player.choice pick update each round












    firebase
    var firebaseConfig = {
        apiKey: "AIzaSyAoUmi01K2fvQpFeo-LXBqQgNTikWYeHWo",
        authDomain: "rps-multiplayer-c0a89.firebaseapp.com",
        databaseURL: "https://rps-multiplayer-c0a89.firebaseio.com",
        projectId: "rps-multiplayer-c0a89",
        storageBucket: "",
        messagingSenderId: "272026270134",
        appId: "1:272026270134:web:96dc14684d8115e3"
    }

    firebase.initializeApp(firebaseConfig);

    var database = firebase.database()






    // real one
    // real one

    var wins1 = 0;
var loss1 = 0;

var wins2 = 0;
var loss2 = 0;

var tie = 0;

var startPlayer = null

var firebaseConfig = {
  apiKey: "AIzaSyAoUmi01K2fvQpFeo-LXBqQgNTikWYeHWo",
  authDomain: "rps-multiplayer-c0a89.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-c0a89.firebaseio.com",
  projectId: "rps-multiplayer-c0a89",
  storageBucket: "",
  messagingSenderId: "272026270134",
  appId: "1:272026270134:web:96dc14684d8115e3"
}

firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database();

var rock1 = "rockPick1";
var paper1 = "paperPick1";
var scissors1 = "scissorsPick1";

  $(".rps1").on("click", function (event) {
    event.preventDefault();

    rock1 = $("#r1").val();
    paper1 = $("#p1").val();
    scissors1 = $("#s1").val();

    dataRef.ref().push({
      rock1: rock1,
      paper1: paper1,
      scissors1: scissors1
    });
  })





