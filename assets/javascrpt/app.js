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

var dataRef = firebase.database().ref();
// var gameRef = firebase.database().ref().child()


var wins1 = 0;
var loss1 = 0;

var wins2 = 0;
var loss2 = 0;

var tie = 0;

var playerPickOne = "";
var playerPickTwo = "";



// firebase.auth().onAuthStateChanged(function(user){
//   console.log(user);

//   if(user){
//     console.log("logged in as: " + user.email);
//   } else {
//     console.log(user.email + " is logged out");
//   }
// })



// modals
// document.addEventListener("DOMContentLoaded", function () {
//   var modals = document.querySelectorAll(".modal");
//   M.Modal.init(modals);
// })

// // sign in
// var signIn = $("#signup-form")

// $(signIn).submit(function (event) {
//   event.preventDefault();

//   var email = $("#signup-email").val().trim();
//   var password = $("#signup-password").val().trim();

//   console.log(email);
//   console.log(password);

//   firebase.auth().createUserWithEmailAndPassword(email, password).then(function (response) {
    
//     console.log(response.user);
//     console.log("logged in")

//     var closeModal = $("#modal-signup");
//     M.Modal.getInstance(closeModal).close();

//     document.getElementById("signup-form").reset();
//   });
// });

// // sign out

// var signOut = $("#logout");

// $(signOut).click(function (event){
//   event.preventDefault();
  
//   firebase.auth().signOut().then(() => {
//     console.log("signed out");
//   });
// });

// login
// var login = $("#login-form");

// $(login).submit(function(event){
//   event.preventDefault();

//   var email = $("#login-email").val().trim();
//   var password = $("#login-password").val().trim();

//   firebase.auth().signInWithEmailAndPassword(email, password).then(function(response){
//     console.log(response.user);
  
//     var closeModal = $("#modal-login");
//     M.Modal.getInstance(closeModal).close();

//     document.getElementById("login-form").reset();
//   });
// });






$(document).on("click", "#submitChoice2", function (event) {

  event.preventDefault();

  playerPickOne = $("#playerOneChoice").val().trim();
  playerPickTwo = $("#playerTwoChoice").val().trim();

  dataRef.push({
    player1: playerPickOne,
    player2: playerPickTwo
  });

  // dataRef.update({
  //   player1: playerPickOne,
  //   player2: playerPickTwo
  // })

});






// $(document).on("click", "#submitChoice2", function (event) {

//   event.preventDefault();

//   playerPickTwo = $("#playerTwoChoice").val().trim();

//   dataRef.push({
//     player2: playerPickTwo
//   })
// })

dataRef.on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val().player1);
  console.log(childSnapshot.val().player2);

  var check1 = childSnapshot.val().player1;
  var check2 = childSnapshot.val().player2

  $("#pick1").text("Player One's Pick: " + check1)
  $("#pick2").text("Player Two's Pick: " + check2)

  if (check1 === check2) {
    tie++
    $("#tie1").text("tie: " + tie)
    $("#tie2").text("tie: " + tie)
  }
  else if (check1 == "rock" && check2 == "scissors" || check1 == "scissors" && check2 == "paper" || check1 == "paper" && check2 == "rock") {
    wins1++
    loss2++

    $("#wins1").text("wins: " + wins1)
    $("#losses2").text("losses: " + loss2)
  }
  else {
    loss1++
    $("#losses1").text("losses: " + loss1)

    wins2++
    $("#wins2").text("wins: " + wins2)

    console.log("works")
  }



})



