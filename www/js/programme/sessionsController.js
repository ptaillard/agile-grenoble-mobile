var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('ProgrammeSessionsCtrl' , function($scope, $stateParams, ProgrammeCacheService, $ionicLoading) {
        var largeSessionFirstPart = [247, 248, 267, 283, 290];
        var largeSessionSecondPart = [249, 250, 239, 284, 292];
        $scope.sessions = {};
		var loadData = function() {
            $ionicLoading.show({
              template: '<i class="icon ion-loading-c"></i>'
            });

            ProgrammeCacheService.get().then(function(data) {
                $scope.sessions = data.slots[$stateParams.id];
                $scope.starttime = data.slot_hours[$stateParams.id];
                $ionicLoading.hide();
            }, function(data) {
                $ionicLoading.hide();
            });
	   };

       $scope.dureeSession = function(session) {
            var duree = '45 mns';
            if(largeSessionFirstPart.indexOf(session.id) != -1)
            {
                duree = '90 mns';
            }
            else if(largeSessionSecondPart.indexOf(session.id) != -1)
            {
                duree = '90 mns (suite)';  
            }
            return duree;
       }

	   loadData();
	});