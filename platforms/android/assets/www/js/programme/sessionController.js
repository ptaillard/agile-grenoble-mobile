var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('ProgrammeSessionCtrl' , function($scope, $stateParams, Session) {

		var loadData = function() {
			Session.jsonp_query({id:$stateParams.id}).$promise.then(
                function( datas ) {
                	$scope.session = datas;
                },
                function( error ) {
                    alert( "Erreur lors du chargement de la session" );
                }
            );
	   };

	   loadData();
	});