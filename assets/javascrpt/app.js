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





