sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "phoenix/utility/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    

    return Controller.extend("phoenix.controller.Products", {
        formatter: formatter,
        onInit() {

        },
        showProductsFromCategories(oEvent){
            let oBinding = this.getView().byId("ProductsList").getBinding("items");

            let sPath = oEvent.getSource().getBindingContext('NorthwindModel').getPath();
            let oModel = this.getOwnerComponent().getModel('NorthwindModel');
            let sCategory = oModel.getProperty(sPath).CategoryID;

            var oFilter = new sap.ui.model.Filter("CategoryID", "EQ", sCategory);
            oBinding.filter(oFilter);
        },

        showProductsFromSuppliers(oEvent){
            let oBinding = this.getView().byId("ProductsList").getBinding("items");
            let sPath = oEvent.getSource().getBindingContext('NorthwindModel').getPath();
            let oModel = this.getOwnerComponent().getModel('NorthwindModel');
            let sSupplier = oModel.getProperty(sPath).SupplierID;
            var oFilter = new sap.ui.model.Filter("SupplierID", "EQ", sSupplier);
            oBinding.filter(oFilter);
        }
    });
});