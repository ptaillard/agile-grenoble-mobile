var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('ProgrammeSessionCtrl' , function($scope, $stateParams, Session) {

		var loadData = function() {
			Session.jsonp_query({id:$stateParams.id}).$promise.then(
                function( datas ) {
                	$scope.session = datas;
                },
                function( error ) {
                    alert( "Chargement de la session impossible.\n" +
                            "Vérifiez votre connexion internet.");
                }
            );
	   };

	   loadData();
	});