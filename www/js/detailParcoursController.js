var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('DetailParcoursCtrl' , function($scope, $stateParams, sponsorsService) {

	$scope.typeParcours = $stateParams.type;
});