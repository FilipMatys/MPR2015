/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditParticipationCompany.created = function (screen) {
    // Write code here.
    function AddMissingAttachements() {
        function OfType(type) {
            return function (item) {
                return item.Type === type;
            };
        }

        if (!screen.Participation.Attachements.any(OfType('PropagationalPaper'))) {
            var attachment = new myapp.Attachement();
            attachment.Type = 'PropagationalPaper';
            attachment.Participation = screen.Participation;
        }
        if (!screen.Participation.Attachements.any(OfType('VideoPresentation'))) {
            var attachment = new myapp.Attachement();
            attachment.Type = 'VideoPresentation';
            attachment.Participation = screen.Participation;
        }
        if (!screen.Participation.Attachements.any(OfType('Poster'))) {
            var attachment = new myapp.Attachement();
            attachment.Type = 'Poster';
            attachment.Participation = screen.Participation;
        }
        if (!screen.Participation.Attachements.any(OfType('Contract'))) {
            var attachment = new myapp.Attachement();
            attachment.Type = 'Contract';
            attachment.Participation = screen.Participation;
        }
        if (!screen.Participation.Attachements.any(OfType('Logo'))) {
            var attachment = new myapp.Attachement();
            attachment.Type = 'Logo';
            attachment.Participation = screen.Participation;
        }
    }

    if (screen.Participation.Id) {
        // wait for attachements to finish loading
        screen.Participation.Attachements.addEventListener('collectionchange', function () {
            AddMissingAttachements();
        });
    } else {
        AddMissingAttachements();
    }
};
myapp.AddEditParticipationCompany.Type_render = function (element, contentItem) {
    // Write code here.
    contentItem.screen.Participation.getConference().done(function () {
        myapp.activeDataWorkspace.ApplicationData.DeadlineByConferenceAndType(contentItem.screen.Participation.Id, contentItem.value).execute().done(function (response) {
            if (response.results.length === 0)
                return;

            $(element).html('<span>' + moment(response.results[0].DueDate).format('DD.MM.YYYY') + '</span><span>' + (response.results[0].Description || '') + '</span>');
        });
    });
};
myapp.AddEditParticipationCompany.Data1_render = function (element, contentItem) {
    // Write code here.
    createImageUploader(element, contentItem, "max-width: 200px; max-height: 200px");
};