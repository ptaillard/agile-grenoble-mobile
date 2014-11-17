var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('KeynotesCtrl' , function($scope, KeynotesService) {

		$scope.keynotes = function() {
			return KeynotesService.get();
		}
	});