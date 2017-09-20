'use strict';

app.controller('mainController', ['$scope', 'PigLatinFilterService',function($scope, PigLatinFilterService) {
  var names =[];

  $scope.getFilteredData = function(data) {
  	// get pig latin data
  	$scope.filterData = PigLatinFilterService.getPigFilteredDataSentence(data);
  	
  	// logic to display 10 most recent pig latin strings
  	var indexVal = localStorage.getItem("index");
  	indexVal = Number(indexVal);

  	if(indexVal === 10){
  		names = JSON.parse(localStorage.getItem("names"));
  		names.shift();
  		localStorage.setItem("names", JSON.stringify(names));
  		indexVal = indexVal - 1;
  	}

  	names[indexVal] = $scope.filterData;
  	localStorage.setItem("names", JSON.stringify(names));
  	$scope.history = JSON.parse(localStorage.getItem("names"));


  	indexVal = indexVal + 1;
  	localStorage.setItem("index", JSON.stringify(indexVal));


  }

}]);
