/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseParticipations.AddParticipation_Tap_execute = function (screen) {
    myapp.showAddEditParticipation(null, {
        beforeShown: function (screen) {
            screen.Participation = new myapp.Participation();
        },
        afterClosed: function(screen, action) {
            if (action === msls.NavigateBackAction.commit) {
                myapp.showAddEditParticipationFIT(screen.Participation);
            }
        }
    });
};
