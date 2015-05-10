/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewConferenceCompany.Participate_Tap_execute = function (screen) {
    screen.getCurrentUser().then(function () {
        var participation = new myapp.Participation();
        participation.Conference = screen.ActiveConference;
        participation.Company = screen.CurrentUser.Company;
        participation.State = 'Registered';

        return myapp.commitChanges();
    }).then(function success() {
        myapp.showAddEditParticipationCompany(participation);
    }, function fail(e) {
        // If error occurs,
        msls.showMessageBox(e.message, { title: e.title }).then(function () {
            // Cancel Changes
            myapp.cancelChanges();
        });
    });
};
