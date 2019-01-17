sap.ui.define([
	"sap/ui/base/Object"
	],
	function (Object) {
		"use strict";
		return Object.extend("sap.ui.demo.wt.controller.HelloDialog", {
			_getDialog : function() {
				// Create dialog lazily
				if (!this._oDialog) {
					// Create dialog via fragment factory
					this._oDialog = sap.ui.xmlfragment("sap.ui.demo.wt.view.HelloDialog", this);
				}
				return this._oDialog;
			},
			open : function (oView) {
				var oDialog = this._getDialog();
				
				// Forward compact/cozy style into Dialog
				jQuery.sap.syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
				// Connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);
				// Open dialog
				oDialog.open();
			},
			onCloseDialog : function() {
				this._getDialog().close();
			}
		});
	});