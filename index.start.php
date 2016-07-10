<html ng-app='Eggly'>

<head>
    <h1 ng-click="resetCategory()">Home Page</h1>
</head>
<body ng-controller = "MainCtrl">
    <div style="float:left; width: 30%">
        <li  ng-repeat="category in categories" >
        <h2><a  href="#" ng-click = "selectCategory(category)">{{category.name}}</a></h2>
        </li>
    </div>
    <div style="float:left; width:70%" >
        <li ng-repeat = "bookmark in bookmarks | filter:{'category': currentCategory.name}">
          <h3 ><a  href="{{bookmark.url}}">{{bookmark.title}}</a></h3>
        </li>
    </div>
</div>
    
</body>

<script src="js/jquery.js"></script>
<script src="js/angular.min.js"></script>
<script src="js/bootstrap/js/bootstrap.min.js"></script>
<script src="js/lodash.min.js"></script>
<script  src="app/eggly-app.start.js"></script>

</html>