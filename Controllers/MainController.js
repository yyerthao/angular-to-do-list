app.controller('MainController', ['$scope', function ($scope) {
    // add list attribute to the scope object
    // we set the value of list attribute as an array containining our to do's
    $scope.list = ["Clean my room", "Go to the store", "Study Cracking the Coding Interview"];
    // add a new attribute to the scope
    $scope.addItem = function () {
        // go get the list attribute
        // push on the addToDo variable
        $scope.list.push($scope.addToDo);
    }

}])



// -------- HOW INFORMATION IS PASSED TO AND FROM BETWEEN EACH FILES THROUGH SCOPE --------
// Scope as a data passer, meaning everything in our program can talk to
// the view aka index.html, can see what's in scope
// controller can set the data inside the scope