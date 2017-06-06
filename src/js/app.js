
angular
  .module('rpsApp', [])
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];
function MainCtrl($scope) {
  const vm = this;
  vm.choices = [
    {option: 'rock', image: 'src/images/rock.jpg'},
    {option: 'scissors', image: 'src/images/scissors.jpg'},
    {option: 'paper', image: 'src/images/paper.jpg'}
  ];
  vm.player1Choice = '';
  vm.player2Choice = '';
  vm.winner = '';

  vm.getChoice = getChoice;

  const winConditions = {//set win conditions
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper']
  };
  let player1Choice = '';

  function getChoice(choice, player1Choice) {//gets the player's choice and saves in a variable
    // console.log(choice.option);
    player1Choice = choice.option;
    // console.log('choice', player1Choice);

  //create array of potnetial choices
  const conditions =Object.keys(winConditions);
  //randomly generate computer's choice
  const player2Choice = conditions[Math.floor(Math.random() * conditions.length)];
  // console.log('player2', player2Choice);

  function findWinner(player1Choice, player2Choice) {//find winner
    if (winConditions[player1Choice] .includes(player2Choice)) return 'You Win';
    if (winConditions[player2Choice] .includes(player1Choice)) return 'You Lose';
    return 'Tie';
  }
  //save result into a variable
  const winner = findWinner(player1Choice, player2Choice);
    // console.log('winner', winner);

  //attach choices and winner to scope
  vm.player1Choice = player1Choice;
  vm.player2Choice = player2Choice;
  vm.winner = winner;


  }

  function reset() {
    vm.player1Choice = '';
    vm.player2Choice = '';
    vm.winner = '';
  }

  vm.reset = reset;

}
