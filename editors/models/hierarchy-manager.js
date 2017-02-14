"use strict";
class HierarchyManager {
    showAlert(message, type) {
        //this.manager.showAlert(message, type);
    }
    handleError(error) {
        //this.context.app.hideSpinner();
        this.errorMessage = error.message ? error.message : error;
        console.log(this.errorMessage);
    }
}
exports.HierarchyManager = HierarchyManager;
