/**
 * Created by PanaCloud Guru on 6/3/2016.
 */

angular.module("myApp.quizController", [])

  .controller("quizController", ['$state',quizController]);

function quizController($state) {

  this.i = 0;
  this.length = 2;
  //this.currentQuestion = this.questions[0];

  this.quizMain = [
    {
      Qusetion: "Our country name is ______________?",
      Options: ["Pakistan", "Afghanistan", "India"]
    },
    {
      Qusetion: "The durand line is a border line between Pakistan and ______________?",
      Options: ["Pakistan", "Afghanistan", "India"]
    },
    {
      Qusetion: "Pakistan came into being on ______________?",
      Options: ["14-August-1947", "15-August-1947", "16-August-1947"]
    }

  ];

  this.nextQuestion = function () {
    if (this.i < this.length)
      this.i++;
    else if (this.i >= this.length)
      $state.go('showResult');
    else
    this.i = this.i;
  }

}
