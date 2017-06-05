describe('MainCtrl', () => {
  beforeEach(module('rpsApp'));

  let $rootScope;
  let $controller;

  beforeEach(inject((_$rootScope_, _$controller_) => {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  describe('getChoice', () => {
    let $scope, vm;

    beforeEach(() => {
      $scope = $rootScope.$new();
      vm = $controller('MainCtrl', { $scope });
      vm.choices = [{
        option: 'rock',
        image: 'images/rock.jpg'
      }];
      let player1Choice = 'rock';
      let player2Choice = 'scissors';
    });

    it('checks tests run', () => {
      $scope.$digest();

      expect(vm.choices.length).to.equal(1);
    });

    it('findWinner', (player1Choice, player2Choice) => {

      $scope.$digest();

      expect(winner).to.equal('You Win');
    });




  });
});
//what can be tested?
//rock beats scissors
