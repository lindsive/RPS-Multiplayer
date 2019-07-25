

// firebase.auth().onAuthStateChanged(function(user){
//   console.log(user);

//   if(user){
//     console.log("logged in as: " + user.email);
//   } else {
//     console.log(user.email + " is logged out");
//   }
// })



// // modals
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

// // login
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