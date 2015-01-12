var demoApp = angular.module("Demo",[]);

demoApp.controller("DemoController", function($rootScope, $scope){
	if(!$rootScope.currentLanguage){
		$rootScope.currentLanguage = "en";
	}

    $scope.setLanguage = function (lang) {
		$rootScope.currentLanguage = lang;
	}
});