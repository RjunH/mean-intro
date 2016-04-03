/**
 * Created by arjun on 2/4/16.
 */

app.controller('meetupController',['$scope','$resource', function($scope, $resource){
    var Meetup = $resource('/api/meetups');

    Meetup.query(function(res){
        $scope.meetups = res;
    });

    $scope.meetups = [
        { name : 'MEAN software developer'},
        { name : 'Some other meetups'}
    ];

    $scope.meetupName = '';
    $scope.createMeetup = function(){
        var meetup = new Meetup();
        meetup.name = $scope.meetupName;
        meetup.$save(function(res){
            $scope.meetups.push(res);
            $scope.meetupName = '';
        });
    }
}]);