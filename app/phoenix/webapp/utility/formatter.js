
sap.ui.define([
], function() {
	"use strict";

	const Formatter = {
        categoryPicture: function (sPhoto) {
            if (!sPhoto) return "";
            return "data:image/png;base64," + sPhoto.substring(104);
        }
	};

	return Formatter;
});

