describe('MainCtrl', () => {

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
      vm = $controller('CoffeeIndexCtrl', { $scope });
      vm.choices = [{
        option: 'rock',
        image: 'images/rock.jpg'
      }];


      it('checks choices are attached to DOM', () => {
        $scope.$digest();

        expect(vm.choices.length).to.equal(3);
      });


    });
  });
});
