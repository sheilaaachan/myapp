angular.module('app.services', [])

.factory('BoxService', ['$http',function($http){
	return {
		boxPostJson : function(url, token, jsonBody, successCallback, errorCallback) {
            var headers = {
                Authorization: 'Bearer '+ token
            };
            $http({
                url: url,
                headers: headers,
                method: 'POST',
                data: jsonBody,
            }).success(function (data) {
                // Log the JSON response to prove this worked
                successCallback(data);
            }).error(function (data, status){
                errorCallback(data,status);
            });
		},
		boxPostForm : function(url, token, form, successCallback, errorCallback) {
			var headers = {
				Authorization: 'Bearer '+ token,
				"Content-Type": undefined
			};
            $http({
				url: url,
				headers: headers,
				method: 'POST',
				data: form,
				transformRequest: function(data, headersGetterFunction) {
			      return data;
			}}).success(function (data) {
                // Log the JSON response to prove this worked
                successCallback(data);
            }).error(function (data, status){
                errorCallback(data,status);
            });
		}
	};
}])

.service('BlankService', [function(){

}]);

