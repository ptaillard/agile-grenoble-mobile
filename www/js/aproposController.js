var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('AproposCtrl' , function($scope) {
		$scope.open = function(url) {
			window.open(url, '_system', 'location=yes');	
		}
	});