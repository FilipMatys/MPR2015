/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewException.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Exception.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Exception." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewException.Delete_execute = function (screen) {
    screen.Exception.deleteEntity();
    myapp.commitChanges().then(null, function fail(e) {
        msls.showMessageBox(e.message, {
            title: "Error",
            buttons: msls.MessageBoxButtons.ok
        }).then(function (result) {
            if (result === msls.MessageBoxResult.ok) {
                // Discard Changes
                screen.details.dataWorkspace.ApplicationData
                    .details.discardChanges();
            }
        });
    });
};