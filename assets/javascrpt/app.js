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
var gameRef = firebase.database().ref().child("rpsGame")

var wins1 = 0;
var loss1 = 0;

var wins2 = 0;
var loss2 = 0;

var tie = 0;

var playerPickOne = "";
var playerPickTwo = "";


  $(document).on("click", "#submitChoice", function (event) {
    
    event.preventDefault();

    playerPickOne = $("#playerOneChoice").val().trim();

    gameRef.push({
      player1: playerPickOne
    });
  });


  $(document).on("click", "#submitChoice2", function (event) {
    
    event.preventDefault();

    playerPickTwo = $("#playerTwoChoice").val().trim();

    gameRef.push({
    player2: playerPickTwo
  })
})

gameRef.on("child_added", function(childSnapshot){
  console.log(childSnapshot.val().player1);
  console.log(childSnapshot.val().player2);

})