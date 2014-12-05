"use strict";
// Include app dependency on ngMaterial
var app = angular.module( 'YourApp', [ 'ngMaterial' ] );
// Main Controller
app.controller("YourController", ['$scope', '$mdDialog', '$mdSidenav', function($scope, $mdDialog, $mdSidenav) {

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

    $scope.toggleMenu = function(){
        $mdSidenav('left').toggle();
    };

    $scope.chunks = [
        {
            title: "Today",
            divider: true
        },
        {
            title: "Dell's Life After Wall Street - NYTimes.com",
            description: "Dell is trying to graduate/evolve/pivot from PCs to lots of other products &amp; industries. Still being the backbone of the company, PC sales are financing the transition, but new products are supporting PC/server sales as well. Dell/the article don't give any numbers yet on how well (or not) those new categories are working. Increased risk for increased potential upside.",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["A year after spending $24.9 billion taking his computer company private", " Mr. Dell will try to persuade people that his company is about far more than the personal computers and computer servers it has been known for, with products intended for things as varied as the cloud computing networks of global enterprises and handy personal devices.", " a transformation(...)he actually started six years ago, spending $18 billion on 40 acquisitions", "The new Dell has software, equipment for data storage and computer networking, services and sensors. It is developing software that measures facial expressions, voice tone, even how we individually swipe key cards. There is a device that can make a hotel room’s digital television into a secure corporate computer. A Dell tablet is the world’s thinnest and lightest,(...)And, of course, there are lots of new personal computers.", " The question is: Can Dell ignite sales enough to become less reliant on the same old business?", "As a private firm, its deals move faster — exactly what Mr. Dell wanted. Last March, Dell bought Statsoft, a(...)maker of predictive analytic software.(...)it took two meetings with Mr. Dell lasting a total of two hours and 15 minutes. “In a public company, there would be at least one board meeting about this, maybe two, so that would be two quarters", "Dell had about 110,000 employees(...) and(...)now(...)90,000. It is unclear how many more cuts there will be.", " his three-quarter stake in Dell is a significant amount of his net worth, estimated at $16 billion"]
            }
        },
        {
            title: "Google demonstrates its power over the press by cowing German publishers | PandoDaily",
            description: "German publishers drop their lawsuit against Google for now (they were suing them over using unlicensed text snippets in their news product), because of Google's 'overwhelming market power'. This is after Google pulled the excerpts from several newspapers (leaving them with much less traffic?).",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "Sidechains - AVC",
            description: "Fred Wilson gives a simple explanation of 'pegged sidechains', and their importantance to the future of the #bitcoin ecosystem. Worth the read.",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "Yesterday",
            divider: true
        },
        {
            title: "UBS CIO: Blockchain Technology Can Massively Simplify Banking - Digits - WSJ",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "In an attempt to increase its influence over the media, Facebook makes publishers an offer they should refuse | PandoDaily",
            description: "The death of banks could also be their biggest innovation?",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "'Ethanifier' Lets You Build Your Own Single-Purpose Messaging App Like The Viral Hit “Ethan” | TechCrunch",
            description: "Thoughts on NYT's piece on FB trying to get publishers to hand over their content / publish to FB (http://www.nytimes.com/2014/10/27/business/media/facebook-offers-life-raft-but-publishers-are-wary.html). Author fears that if publishers bow, FB could have as big of an impact to news/information discovery as Google (which is already frightening).",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "This week",
            divider: true
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
            }
        },
        {
            title: "And even another Something",
            description: "Lorem Ipsum Dolor Set Shalalala",
            expanded: false,
            content: {
                type: "QUOTE",
                quotes: ["And he saw that it was good"]
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
// Dialog Controller
app.controller('DialogController', function($scope, $mdDialog, name) {
    $scope.userName = name;
    $scope.closeDialog = function() {
        $mdDialog.hide();
    };
});
// Left Sidebar Controller
app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
  $scope.close = function() {
    $mdSidenav('left').close();
  };
});
