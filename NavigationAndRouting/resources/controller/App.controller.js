sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function(BaseController) {
		return BaseController.extend("sap.ui.demo.nav.controller.App", {
			onInit: function() {
						var oRouter = this.getRouter();
						oRouter.attachBypassed(function (oEvent) {
							var sHash = oEvent.getParameter("hash");
							// do something here, i.e. send logging data to the back end for analysis
							// telling what resource the user tried to access...
							//
							// The simple statement commented out below from the tutorial does not work because the default
							// log level in SAPUI5 is ERROR.  You have to change the level to INFO, then issue the call 
							// to jQuery.sap.log.info, and then change the level back to ERROR.  Without changing the level
							// to INFO, the message simply doesn't show up in the browser console.
							//
							// See https://pravin517.wordpress.com/2017/12/25/using-jquery-sap-log-info/ for details.
							//
							jQuery.sap.log.setLevel((jQuery.sap.log.Level.INFO));
							jQuery.sap.log.info("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
							jQuery.sap.log.setLevel((jQuery.sap.log.Level.ERROR));				
							// jQuery.sap.log.info("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
						});
			}
		});
	});