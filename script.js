let submitButton = document.querySelector("#submitComment");
let signInButton = document.querySelector('#signInButton')
submitComment.addEventListener("click", e => {
  e.preventDefault();
  let firstName = document.querySelector("#first_name").value;
  let lastName = document.querySelector("#last_name").value;
  let email = document.querySelector("#email").value;
  let comment = document.querySelector("#comment").value;
  saveComment(firstName, lastName, email, comment);
});
signInButton.addEventListener('click', ()=> {
  signInUser()
})
function signInUser() {
  var provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  console.log(user);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
function saveComment(first, last, email, comment) {
  document.querySelector("#userComments").innerHTML = ""
  let userComment = {
    first: first,
    last: last,
    email: email,
    comment: comment
  };

firebase
    .database()
    .ref("/comments")
    .push(userComment)
    .then(()=> {
      document.querySelector("#first_name").value = ""
      document.querySelector("#last_name").value = ""
      document.querySelector("#email").value = ""
      document.querySelector("#comment").value = ""
    })
}

function getComments() {
  document.querySelector("#userComments").innerHTML = "";
  firebase
    .database()
    .ref("/comments")
    .on("value", snapshot => {
      let data = snapshot.val();
      for (key in data) {
        document.querySelector("#userComments").innerHTML += `
        <div class="row">
          <div class="col s12">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${data[key].first}</span>
                <p>${data[key].comment}</p>
              </div>
              <div class="card-action">
                <a href="#">${data[key].email}</a>
              </div>
            </div>
          </div>
        </div>
        `;
      }
    });
}

window.onload = getComments;
