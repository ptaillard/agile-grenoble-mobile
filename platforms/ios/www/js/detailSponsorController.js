var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('DetailSponsorCtrl' , function($scope, $stateParams, sponsorsService) {


	var loadData = function() {
        var sponsors = sponsorsService.get();
         $scope.sponsor = sponsors[$stateParams.id];
   	};

   	loadData();
	$scope.description = function() {
		return "img/sponsors/resources/" + $scope.sponsor.description;
	}

	$scope.open = function(url) {
		window.open(url, '_system', 'location=yes');	
	}
});