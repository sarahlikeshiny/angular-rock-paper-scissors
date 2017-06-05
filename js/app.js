console.log('js is connected - woo');

angular
  .module('rpsApp', [])
  .controller('MainCtrl', MainCtrl);

// MainCtrl.$inject = [];
function MainCtrl() {
  const vm = this;
  vm.choices = [
    {option: 'rock', image: 'images/rock.jpg'},
    {option: 'scissors', image: 'images/scissors.jpg'},
    {option: 'paper', image: 'images/paper.jpg'}
  ];
  vm.player1Choice = '';
  vm.player2Choice = '';
  vm.winner = '';

  vm.getChoice = getChoice;

  function getChoice(choice) {//gets the player's choice and attach to scope
    const player1choice = choice.option;
    // console.log('choice', player1choice);

    const winConditions = {//set win conditions
      rock: ['scissors'],
      paper: ['rock'],
      scissors: ['paper']
    };
    const conditions =Object.keys(winConditions);
    //randomly generate computer's choice
    const player2Choice = conditions[Math.floor(Math.random() * conditions.length)];
    // console.log('player2', player2Choice);

    function findWinner(player1Choice, player2Choice) {//find winner
      if (winConditions[player1Choice] .includes(player2Choice)) return 'You Win';
      if (winConditions[player2Choice] .includes(player1Choice)) return 'You Lose';
      return 'Tie';
    }

    const winner = findWinner(player1choice, player2Choice);
    // console.log('winner', winner);

    //attach choices and winner to scope
    vm.player1Choice = player1choice;
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
