angular.module('Eggly',[

])
.controller("MainCtrl", function($scope){
    
    $scope.categories=[
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];
    $scope.bookmarks = [
        {"id": 0, "title": "Angular JS", "url":"http://angularjs.org", "category": "Development"},
        {"id": 1, "title": "Snowboard", "url":"http://google.com", "category": "Exercise"},
        {"id": 2, "title": "Ski", "url":"http://google.com", "category": "Exercise"},
        {"id": 3, "title": "climbing", "url":"http://google.com", "category": "Exercise"},
        {"id": 4, "title": "bootstrap", "url":"http://bootstrap.com", "category": "Development"},
        {"id": 5, "title": "Node.js", "url":"http://google.com", "category": "Design"},
        {"id": 6, "title": "Tonight's Show", "url":"http://google.com", "category": "Humor"}
    ];
    $scope.currentCategory = null;
    
    selectCategory = function(category){
         $scope.currentCategory = category;
    }
    
    resetCategory = function(){
        $scope.currentCategory = null;
    }
    
    $scope.selectCategory = selectCategory;
    
    $scope.resetCategory = resetCategory;
    
        
});