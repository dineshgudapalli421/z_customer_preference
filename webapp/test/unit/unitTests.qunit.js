/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsaplhmr/z_customer_preference/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
