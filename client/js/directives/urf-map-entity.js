var _ = require('lodash');
module.exports = function() {
	return {
		templateUrl: 'templates/directives/urf-map-entity.html',
		restrict: 'E',
		scope: {
			type: '@',
			team: '@',
			layer: '@',
			lane: '@',
			destroyed: '=',
			assigned: '='
		},
		link: function(scope, element, attrs) {}
	};
};
