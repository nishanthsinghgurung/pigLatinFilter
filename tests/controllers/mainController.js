'use strict';

describe('Main controller', function() {
  var scope, mainController, location, route, rootScope, PigLatinFilterService;

  beforeEach(module('app'));

  beforeEach(inject(function($controller, $rootScope, _PigLatinFilterService_ ) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    PigLatinFilterService = _PigLatinFilterService_;

    mainController = $controller('mainController', {
      $scope: scope,
      PigLatinFilterService: PigLatinFilterService
    });

  }));

  it('should get the correct pigFilter string when the string starts with vowel', function(){
    scope.getFilteredData("abcd");
    expect(scope.filterData).toBe("abcdway");
  });

  it('should get the correct pigFilter string when the string starts with consonant', function(){
    scope.getFilteredData("clarke");
    expect(scope.filterData).toBe("arkeclay");
  });

  it('should convert individual words in a sentences to pig latin filtered text', function(){
    scope.getFilteredData("this is good");
    expect(scope.filterData).toBe("isthay isway oodgay");
  });

});
