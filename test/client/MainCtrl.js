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
      choice = [{
        option: 'rock',
        image: 'src/images/rock.jpg'
      }];
    });

    it('checks tests run', () => {
      $scope.$digest();

      expect(choice.length).to.equal(1);
    });

    it('starts with empty varibales', () => {
      $scope.$digest();
      expect(vm.player1Choice).to.equal('');
      expect(vm.player2Choice).to.equal('');
      expect(vm.winner).to.equal('');
    });

    it('checks choice is being passed from DOM', () => {
      $scope.$digest();
      expect(vm.player1Choice).to.equal('rock');
    });

    });
  });
