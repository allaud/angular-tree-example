(function() {
  angular.module('ModelExample', []);

  angular.module('ModelExample').filter('pretty_json', function() {
    return function(json) {
      return angular.toJson(json, true);
    };
  });

  angular.module('ModelExample').controller('MainController', function($scope) {
    $scope.model = {
      title: 'Test app',
      filter: '',
      airlines: {
        original: [
          {
            "id": 1,
            "name": "Syberia"
          }, {
            "id": 2,
            "name": "Thai airways"
          }, {
            "id": 3,
            "name": "Aeroflot"
          }, {
            "id": 4,
            "name": "Malaysia"
          }, {
            "id": 5,
            "name": "Test airline"
          }
        ],
        visible: []
      },
      total_visible_airlies: 0
    };
    $scope.$watch('model.filter', function(filter) {
      var airline, airlines;
      airlines = $scope.model.airlines;
      if (filter === '') {
        airlines.visible = airlines.original;
        return;
      }
      return airlines.visible = (function() {
        var _i, _len, _ref, _results;
        _ref = airlines.original;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          airline = _ref[_i];
          if (airline.name.indexOf(filter) > -1) {
            _results.push(airline);
          }
        }
        return _results;
      })();
    });
    return $scope.$watch('model.airlines.visible', function() {
      return $scope.model.total_visible_airlies = $scope.model.airlines.visible.length;
    });
  });

}).call(this);
