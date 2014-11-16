var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('ProgrammeSessionsCtrl' , function($scope, $stateParams, ProgrammeCacheService) {
        $scope.sessions = {};
		var loadData = function() {
            ProgrammeCacheService.get().then(function(data) {
                $scope.sessions = data.slots[$stateParams.id];
                $scope.starttime = data.slot_hours[$stateParams.id];
            }, function(data) {
                // error case
            });
	   };

	   loadData();
	});