
// modals
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);
})

// sign in
var signIn = $("#signup-form")

$(signIn).submit(function (event) {
  event.preventDefault();

  var email = $("#signup-email").val().trim();
  var password = $("#signup-password").val().trim();

  console.log(email)
  console.log(password)

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (response) {
    
    console.log(response.user)

    var closeModal = $("#modal-signup");
    M.Modal.getInstance(closeModal).close();

    document.getElementById("signup-form").reset()
  })
})