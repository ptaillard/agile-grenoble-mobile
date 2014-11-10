var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('ProgrammePrincipalCtrl', function($scope, $http, ProgrammeCacheService, KeynotesService) {

		$scope.displaytheme = true;
		$scope.gridsterOpts = {
			columns: 11,
			defaultSizeX: 1,
			margins: [0, 0],
			outerMargin: true,
			rowHeight: 50,
			pushing: true,
			floating: false,
			mobileBreakPoint: 750,
			draggable: {
				enabled: false
			},
			resizable: {
				enabled: false,
				handles: 'n, e, s, w, se, sw'
			}
		};

		var loadData = function() {

                $scope.keynotes = KeynotesService.get();

                ProgrammeCacheService.get().then(function(data) {
                    $scope.program = data;
                }, function(data) {
                	
                });
       };

	    $scope.isKeynote = function(slot) {
	    	var uniqueSlot = slot['Auditorium'];
	   		return (uniqueSlot == undefined)? false: uniqueSlot.width == 10;
	    }

	    $scope.isPauseCafe = function(slot) {
	    	var uniqueSlot = slot['all'];
	   		return $scope.isUniqueSlot(slot) && !$scope.isKeynote(slot) && uniqueSlot.type == 'cafe';
	    }

	    $scope.isSponsors = function(slot) {
	    	var uniqueSlot = slot['all'];
	   		return $scope.isUniqueSlot(slot) && !$scope.isKeynote(slot)  && uniqueSlot.type == 'sponsor' && uniqueSlot.width == 10;
	    }

	    $scope.isRepas = function(slot) {
	    	var uniqueSlot = slot['all'];
	   		return $scope.isUniqueSlot(slot) && !$scope.isKeynote(slot)  && uniqueSlot.type == 'meal' && uniqueSlot.width == 10;
	    }

	    $scope.isNonSession = function(slot) {
	    	var uniqueSlot = slot['all'];
	   		return $scope.isUniqueSlot(slot) && !$scope.isKeynote(slot)  && uniqueSlot.type == 'non-session';
	    }

		$scope.isUniqueSlot = function(slot) {
			var isAllSlot = (slot['all'] != undefined);
			var isKeynoteSlot = $scope.isKeynote(slot);
	   		return isAllSlot || isKeynoteSlot;
	    }

	    $scope.getUniqueSlot = function(slot) {
	    	var uniqueSlot = slot['Auditorium'];
	    	return (uniqueSlot == undefined) ? slot['all']: uniqueSlot;
	    }

	    $scope.getSessionsLink = function(slot, index) {
	    	var link = ($scope.isUniqueSlot(slot))? "" : "#/app/sessions/" + index;
	    	return link;
	    }

	  	$scope.getColPosition = function(item) {
	   		return item.colposition+1;
	    }
		
		$scope.getHourText = function(index) {
			return $scope.program.slot_hours[index];
	   	}
	   
	   	$scope.getHoursRowPosition = function(index) {
	   		return $scope.program.row_hours_position[index];
	   	}

	   	$scope.getHoursLength = function(index) {
			return $scope.program.slot_hours_length[index];
	   	}

	   	$scope.getSessionLink = function(session) {
	   		var type = (session.type == undefined) ? "" : session.type;
	   		if(type == "session") {
	   			return '#/session/' + session.id;	
	   		}
	   		return '';
	   	}
	    
	   loadData();
	});