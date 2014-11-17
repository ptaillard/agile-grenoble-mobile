var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.factory('LocalSlots', ['$resource', function($resource) {
	return $resource('templates/slots.json');
	}]);