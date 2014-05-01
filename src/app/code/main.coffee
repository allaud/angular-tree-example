angular.module('ModelExample', [])

angular.module('ModelExample').filter('pretty_json', ->
  (json) -> angular.toJson(json, true);
)

angular.module('ModelExample').controller('MainController', ($scope) ->

  $scope.model = {
    title: 'Test app',
    filter: '',
    airlines: {
      original: [
          {"id": 1, "name": "Syberia"}
          {"id": 2, "name": "Thai airways"}
          {"id": 3, "name": "Aeroflot"}
          {"id": 4, "name": "Malaysia"}
          {"id": 5, "name": "Test airline"}
        ]
      visible: []
    }
    total_visible_airlies: 0
  }

  $scope.$watch('model.filter', (filter) ->
    airlines = $scope.model.airlines
    if filter is ''
      airlines.visible = airlines.original
      return
    airlines.visible = (airline for airline in airlines.original when (airline.name.indexOf(filter) > -1))
  )

  $scope.$watch('model.airlines.visible', ->
    $scope.model.total_visible_airlies = $scope.model.airlines.visible.length
  )

)
