/**
 * Created by PanaCloud Guru on 6/3/2016.
 */
angular.module("myApp.userLoginController", [])

  .controller("userLoginController", ['$state', 'user', '$q', userLoginController]);

function userLoginController($state, user, $q) {
  var _self = this;

  this.changeRoute = function () {
    $state.go('quiz')
  };

  this.signUpWithGoogle = function () {
    _self.promise = user.logInUser();
    _self.promise.then(
      function (success) {
          _self.changeRoute();
      },function (error) {
          console.log("Wrong User");
      }

    )
  };
}
