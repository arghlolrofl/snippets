/* 
###############
#   WEB STORAGE   #
###############

Local Storage
- per Domain --> all websites of one domain have access to the same storage
- HTML local storage provides two objects for storing data on the client:
	- window.localStorage - stores data with no expiration date
    - window.sessionStorage - stores data for one session (data is lost when the tab is closed)
- NOTE: Name/Value pairs are ALWAYS stored as STRINGS. 
	- Remember to convert them to another format when needed!

Session Storage
- The sessionStorage object is equal to the localStorage object, EXCEPT that it stores the data for only one session. 
- The data is deleted when the user closes the browser window or tab.
*/

// Store
localStorage.setItem("lastname", "Smith");
localStorage.lastname = "Smith";

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname"); 
document.getElementById("result").innerHTML = localStorage.lastname;

// Delete
localStorage.removeItem("lastname");

// Example
if (localStorage.clickcount) { // check existence
    localStorage.clickcount = Number(localStorage.clickcount) + 1; //cast and increment existing value
} else {
    localStorage.clickcount = 1; //set initial value
}
document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";


// ngStorage
angular.module('app', ['ngStorage'])
.controller('Ctrl', function($scope, $localStorage) {
	$scope.$storage = $localStorage.$default({ x: 42 });
});
// in HTML
// <button ng-click="$storage.x = $storage.x + 1">{{$storage.x}}</button>
// elsewhere
$scope.$storage += 1;

$scope.terms = {small: "0", big: "0", percent: "100"};

// write default value in local/session storage
	  $localStorage = $localStorage.$default({small: $scope.terms.small});          
	  $localStorage = $localStorage.$default({big: $scope.terms.big});
	  $localStorage = $localStorage.$default({percent: $scope.terms.percent});
	  $sessionStorage = $sessionStorage.$default({result: 0});
	  
// overwrite an exiting value
	 $localStorage.small = $scope.terms.small;
	 $localStorage.big = $scope.terms.big;
	 $sessionStorage.result = result;

// delete all
	$localStorage.$reset()
	$sessionStorage.$reset();

// delete an object
	  delete $localStorage.small;
	  delete $localStorage.big;

// reset an object
	  $localStorage.$reset({small: "0",big: "0", percent: "100"});

