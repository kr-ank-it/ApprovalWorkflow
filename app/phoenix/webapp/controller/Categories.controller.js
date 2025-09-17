sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "phoenix/utility/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("phoenix.controller.Categories", {
        formatter:formatter,
        onInit() {
        }
    });
});