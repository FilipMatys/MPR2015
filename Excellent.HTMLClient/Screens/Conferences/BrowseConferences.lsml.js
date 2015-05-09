/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseConferences.ActConLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Active Conference";
};
myapp.BrowseConferences.ConLabel_postRender = function (element, contentItem) {
    // Write code here.
    element.textContent = "Conferences";
};

myapp.BrowseConferences.Active_render = function (element, contentItem) {
    // Write code here.
    if (contentItem.data.Active == true) {

        element.textContent = "Active";
    }
};
myapp.BrowseConferences.Active1_render = function (element, contentItem) {
    // Write code here.
    if (contentItem.data.Active == true) {

        element.textContent = "Active";
    }
};

myapp.BrowseConferences.beforeApplyChanges = function (screen) {
    // Write code here.
    window.alert("sometext");
};