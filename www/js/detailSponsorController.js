var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('DetailSponsorCtrl' , function($scope, $stateParams, sponsorsService) {


	var loadData = function() {
		var sponsors = sponsorsService.get();
		$scope.sponsor = sponsors[$stateParams.id];
   };

   loadData();
	$scope.description = function(sponsor) {
		return "img/sponsors/resources/" + sponsor.description;
	}
});