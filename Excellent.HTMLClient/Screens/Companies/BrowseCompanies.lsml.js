/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseCompanies.AddCompany_Tap_execute = function (screen) {
    myapp.showAddEditUser(null, {
        beforeShown: function (screen) {
            screen.User = screen.details.dataWorkspace.ApplicationData.Users.addNew();
            screen.User.Role = 'Company';
        }
    });
};
