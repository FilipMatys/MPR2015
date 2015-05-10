/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewConferenceCompany.Participate_Tap_execute = function (screen) {
    var participation = new myapp.Participation();
    participation.Conference = screen.ActiveConference;
    participation.Company = screen.CurrentUser.Company;

    myapp.commitChanges().then(function success() {
        myapp.showAddEditParticipationCompany(participation);
    }, function fail(e) {
        // If error occurs,
        msls.showMessageBox(e.message, { title: e.title }).then(function () {
            // Cancel Changes
            myapp.cancelChanges();
        });
    });
};
