sap.ui.define([
	"sap/ui/core/util/MockServer"
	],
	function (MockServer) {
		"use strict";
		return {
			init: function() {
				// Create
				var oMockServer = new MockServer({
					rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
				});
				var oUriParameters = jQuery.sap.getUriParameters();
				// Configure
				MockServer.config({
					autoRespond: true,
					autoRespondAfter: oUriParameters.get("serverDelay") || 1000
				});
				// Simulate
				var sPath = jQuery.sap.getModulePath("sap.ui.demo.wt.localService");
				oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
				// Start
				oMockServer.start();
			}
	};
});
