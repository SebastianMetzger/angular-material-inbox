// Include app dependency on ngMaterial
var app = angular.module( 'YourApp', [ 'ngMaterial' ] );
app.controller("YourController", ['$scope', '$mdDialog', function($scope, $mdDialog) {

    $scope.openDialog = function($event) {
        $mdDialog.show({
            targetEvent: $event,
            template:
            '<md-dialog>' +
            '  <md-content>Hello {{ userName }}!</md-content>' +
            '  <div class="md-actions">' +
            '    <md-button ng-click="closeDialog()">' +
            '      Close' +
            '    </md-button>' +
            '  </div>' +
            '</md-dialog>',
            controller: 'DialogController',
            onComplete: afterShowAnimation,
            locals: { name: 'Bobby' }
        });
        // When the 'enter' animation finishes...
        function afterShowAnimation(scope, element, options) {
            // post-show code here: DOM element focus, etc.
        }
    };

    $scope.chunks = [
        {
            title: "Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "Another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quote: "And he saw that it was good"
            }
        }
    ];

    $scope.items = [
        { name: 'Share', icon: 'share' },
        { name: 'Upload', icon: 'upload' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Print this page', icon: 'print' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}]);

app.controller('DialogController', function($scope, $mdDialog, name) {
    $scope.userName = name;
    $scope.closeDialog = function() {
        $mdDialog.hide();
    };
});
