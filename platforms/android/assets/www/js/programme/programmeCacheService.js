var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.service('ProgrammeCacheService', function($q, ProgrammeService, AgCache, $timeout) {
        
        var program = {};

        this.get = function() {

            var deferred = $q.defer();
             
            var datasCache = AgCache.get('programme');

            if(datasCache != undefined) {
                deferred.resolve(AgCache.get('programme'));
            } else {
                var promise = ProgrammeService.get();
                promise.then(function(data) {
                    deferred.resolve(data);
                    AgCache.put('programme', data);
                }, function(data) {
                    deferred.reject(data);
                });
            }
            
            return deferred.promise;
       };
    });