/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewParticipation.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Participation.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Participation." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

