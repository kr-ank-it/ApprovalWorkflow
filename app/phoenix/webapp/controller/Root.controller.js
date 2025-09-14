sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("phoenix.controller.Root", {
        onInit() {

            let aData = [
                {
                    key: "Products",
                    value: "Products"
                },
                {
                    key: "Categories",
                    value: "Categories"
                },
                {
                    key: "Customers",
                    value: "Customers"
                },
                {
                    key: "Orders",
                    value: "Orders"
                },
                {
                    key: "Suppliers",
                    value: "Suppliers"
                }
            ];
            let oOptionsModel = new JSONModel(aData);
            this.getView().setModel(oOptionsModel, "oOptionsModel");
            this.showContents(null);
            
        },

        showContents(oEvent) {
            debugger;
            if(!oEvent){
                this.getOwnerComponent().getRouter().navTo("RouteDashboard");
                return;    
            }

            const sKey = oEvent.getParameter("item").getKey();
            if (sKey === "Products") {
                this.getOwnerComponent().getRouter().navTo("RouteProducts");
            } else if (sKey === "Categories") {
                this.getOwnerComponent().getRouter().navTo("Categories");
            } else {
                this.getOwnerComponent().getRouter().navTo("RouteDashboard");
            }
        },

        onShowProducts() {
            console.log("Showing products");
        }
    });
});