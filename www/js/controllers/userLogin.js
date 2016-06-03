/**
 * Created by PanaCloud Guru on 6/3/2016.
 */
angular.module("myApp.userLoginController", [])

  .controller("userLoginController", ['$state', 'user', userLoginController]);

function userLoginController($state, user){

  this.changeRoute = function () {
    $state.go('quiz')
  };

  this.signUpWithGoogle = function () {

    /*
     p1.then(function(value) {
     console.log(value); // Success!
     }, function(reason) {
     console.log(reason); // Error!
     });
     */


    /*
     .success(function(data) {
     $scope.gists = data;
     })
     .error(function(data, status) {
     console.error('Repos error', status, data);
     })
     */

      user.logInUser()
      .success(function(data) {
          console.log("yes");
        })
      .error(function(data, status) {
        console.error('Repos error', status, data);
      })

  };
}
