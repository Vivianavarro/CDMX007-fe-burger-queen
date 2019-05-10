
//FIREBASE
const functions = require('firebase-functions');
const admin = require('firebase-admin');


admin.initializeApp();
admin.firestore().settings({ timestampsInSnapshots: true });


exports.createProfile = functions.auth.user().onCreate(
  user => admin.firestore().doc(`users/${user.uid}`).set({
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    createdAt: new Date(),
  })
);


exports.deleteProfile = functions.auth.user().onDelete(
  user => admin.firestore().doc(`users/${user.uid}`).delete()
);


//Autenticación
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

//LogOut
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});

//Firebase UI
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());


//otro módulo
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

//final
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);