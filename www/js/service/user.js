/**
 * Created by PanaCloud Guru on 6/3/2016.
 */

angular.module("myApp")
  .service("user", ['$q', user]);

function user($q) {

  var q = $q.defer();
  var _self = this;
  this.userForApp = [];

  this.logInUser = function () {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.

      var user = result.user;
      _self.userForApp.push(user.displayName);
      _self.userForApp.push(user.email);

      q.resolve(_self.userForApp);
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      q.reject(error);
    });

    return q.promise;
  };

  this.getlogInUser = function () {
    return _self.userForApp;

  };

}

