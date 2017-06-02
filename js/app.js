console.log('js is connected - woo');

angular
  .module('rpsApp', [])
  .controller('MainCtrl', MainCtrl);

function MainCtrl() {
  const vm = this;
  vm.choices = [
    {option: 'rock'},
    {option: 'scissors'},
    {option: 'paper'}
  ];

  vm.getChoice = getChoice;

  function getChoice(choice) {
    console.log('choice',choice.option);
    vm.choice = choice.option;
  }


}
