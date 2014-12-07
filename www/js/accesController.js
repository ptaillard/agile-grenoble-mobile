var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('AccesCtrl' , function($scope) {

	$scope.open = function(url) {
		window.open(url, '_system', 'location=yes');	
	}
});