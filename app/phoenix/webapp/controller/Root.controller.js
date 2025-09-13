sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("phoenix.controller.Root", {
        onInit() {
            
            let aData = [
                {
                    key:"Products",
                    value: "Products"
                },
                {
                    key:"Categories",
                    value: "Categories"
                },
                {
                    key:"Customers",
                    value: "Customers"
                },
                {
                    key:"Orders",
                    value: "Orders"
                },
                {
                    key:"Suppliers",
                    value: "Suppliers"
                }
            ];
            let oOptionsModel = new JSONModel(aData);
            this.getView().setModel(oOptionsModel, "oOptionsModel");
        },
        onShowProducts(){
            console.log("Showing products");
        }
    });
});