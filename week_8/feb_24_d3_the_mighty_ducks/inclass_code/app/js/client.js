const angular = require('angular');
const bearsApp = angular.module('bearsApp', []);

require('./services')(bearsApp);

require('./bears')(bearsApp);

require('./directives/dummy_directive')(bearsApp);
