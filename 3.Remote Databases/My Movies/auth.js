    // Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEJL31Ea_6oCuf5v_WtbwWSnuJFVokhgI",
    authDomain: "my-movies-f53eb.firebaseapp.com",
    projectId: "my-movies-f53eb",
    storageBucket: "my-movies-f53eb.appspot.com",
    messagingSenderId: "463878456137",
    appId: "1:463878456137:web:4a03d5fe49fec4c6e6d098",
  };

  firebase.initializeApp(firebaseConfig);

      let buttonElement = document.getElementById("login-button");
      buttonElement.addEventListener("click", onUserLogin);

  const auth = firebase.auth();

      function onUserLogin(e) {
        let usernameElement = document.getElementById("username");
        let passwordElement = document.getElementById("password");
        let subHeaderElement = document.getElementById("sub-header");
        let loginFormElement = document.getElementById("login-form");

        auth
          .signInWithEmailAndPassword(
            usernameElement.value,
            passwordElement.value
          )
          .then((res) => {
            console.log("Successfully logged in!");
            console.log(res);
            subHeaderElement.innerText = `Hello, ${res.user.email}`;
            loginFormElement.style.display = "none";
          })
          .catch((err) => {
            console.error("Error:", err);
          });
      }