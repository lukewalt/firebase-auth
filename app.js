console.log("hey");

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDxbVs8rPoraGA6L5kWBRrQQMxca2b2jOE",
    authDomain: "practice-authentication.firebaseapp.com",
    databaseURL: "https://practice-authentication.firebaseio.com",
    storageBucket: "practice-authentication.appspot.com",
    messagingSenderId: "1070424131531"
});



//works on load and on sign-out
firebase.auth().onAuthStateChanged(() => {
    setTimeout(() =>  console.log(firebase.auth().currentUser), 1000);
    // CHECK LOGIN STATUS
    if (firebase.auth().currentUser !== null) {
        $('.login-page').addClass('hide');
        $('.main-page').removeClass('hide');

    } else {
        $('.login-page').removeClass('hide');
        $('.main-page').addClass('hide');
    }

})


$('form').submit((e) => {

    var email = $('input[type="email"]').val()
    var password = $('input[type="password"]').val()
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            //set to h1
            $('.main-page h1').text(`Welcome ${email}`)
            //switch views
            $('.login-page').addClass('hide');
            $('.main-page').removeClass('hide');

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        // ...
        })
    e.preventDefault();
})



$('.btn-warning').click((e) => {

    var email = $('input[type="email"]').val()
    var password = $('input[type="password"]').val()
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            //set to h1
            $('.main-page h1').text(`Welcome ${email}`)
            //switch views
            $('.login-page').addClass('hide');
            $('.main-page').removeClass('hide');

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        // ...
        })
    e.preventDefault();
})

$('.signOut').click(() => {
    firebase.auth().signOut();
})
