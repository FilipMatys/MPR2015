/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewException.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Exception.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Exception." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

