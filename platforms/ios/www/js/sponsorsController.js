var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('SponsorsCtrl' , function($scope, sponsorsService) {

	$scope.sponsors = function() {
		return sponsorsService.get();
	}
});