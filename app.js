console.log("hey");

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDxbVs8rPoraGA6L5kWBRrQQMxca2b2jOE",
    authDomain: "practice-authentication.firebaseapp.com",
    databaseURL: "https://practice-authentication.firebaseio.com",
    storageBucket: "practice-authentication.appspot.com",
    messagingSenderId: "1070424131531"
  });



$('.login-button').click((e) => {
    var email = $('input[type="email"]').val()
    var password = $('input[type="password"]').val()
    //set to h1
    $('.main-page h1').text(`Welcome ${email}`)
    //switch views
    $('.login-page').addClass('hide');
    $('.main-page').removeClass('hide');

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    e.preventDefault();
})
