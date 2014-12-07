var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('ProgrammeSessionCtrl' , function($scope, $stateParams, Session, $ionicLoading) {
        var largeSession = [247, 248, 267, 283, 290,249, 250, 239, 284, 292];

		var loadData = function() {
            $ionicLoading.show({
              template: '<i class="icon ion-loading-c"></i>'
            });

			Session.jsonp_query({id:$stateParams.id}).$promise.then(
                function( datas ) {
                	$scope.session = datas;
                    $ionicLoading.hide();
                },
                function( error ) {
                    alert( "Chargement de la session impossible.\n" +
                            "Vérifiez votre connexion internet.");
                    $ionicLoading.hide();
                }
            );
	   };

       $scope.dureeSession = function() {
            var duree = '45 mns';
            if(largeSession.indexOf($scope.session.id) != -1)
            {
                duree = '90 mns';
            }
            return duree;
       }


       $scope.open = function(url) {
            window.open(url, '_system', 'location=yes');    
        }

	   loadData();
	});