sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.fiori2.Component", {

		metadata: {
			manifest: "json"
		},
		init: function() {
			var oModel;
			var oProductsModel;
			UIComponent.prototype.init.apply(this, arguments);
			
			oModel = new JSONModel();
			this.setModel(oModel);
			
			// Set products demo model on this sample
			oProductsModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock") + "/products.json");
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, "products");
			
			this.getRouter().initialize();
		}
	});
});