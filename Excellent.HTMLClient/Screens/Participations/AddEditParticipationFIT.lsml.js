/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditParticipationFIT.created = function (screen) {

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

    if (screen.Participation.State == "Cancelled") {
        screen.findContentItem('SpecialRequests').isReadOnly = true;
        screen.findContentItem('ExpectedPayment').isReadOnly = true;
        screen.findContentItem('NumAttendee').isReadOnly = true;
        screen.findContentItem('Attachements').isReadOnly = true;
        screen.findContentItem('CancelParticipation').isEnabled = false;
        screen.findContentItem('AddNote').isEnabled = false;
        screen.findContentItem('AddContactPerson').isEnabled = false;
        screen.findContentItem('UserParticipations1').isReadOnly = true;
    }
};

myapp.AddEditParticipationFIT.Data_render = function (element, contentItem) {
    if (contentItem.screen.Participation.State !== "Cancelled") {
        createImageUploader(element, contentItem, "max-width: 200px; max-height: 200px");
    }
};

myapp.AddEditParticipationFIT.DeadlineInfo_render = function (element, contentItem) {
    contentItem.screen.Participation.getConference().done(function () {
        myapp.activeDataWorkspace.ApplicationData.DeadlineByConferenceAndType(contentItem.screen.Participation.Id, contentItem.value).execute().done(function (response) {
            if (response.results.length === 0)
                return;

            $(element).html('<span>' + moment(response.results[0].DueDate).format('DD.MM.YYYY') + '</span><span>' + (response.results[0].Description || '') + '</span>');
        });
    });
};

myapp.AddEditParticipationFIT.SubmitPayment_canExecute = function (screen) {
    return screen.Participation.State === "ContractSigned";
};

myapp.AddEditParticipationFIT.SubmitPayment_execute = function (screen) {
    screen.Participation.State = "Paid";
    myapp.commitChanges();
};

myapp.AddEditParticipationFIT.CancelParticipation_execute = function (screen) {
    screen.Participation.State = "Cancelled";
    myapp.commitChanges();
};

myapp.AddEditParticipationFIT.AssignToMe_canExecute = function (screen) {
    return screen.Participation.State !== "Cancelled" &&
        screen.CurrentUser &&
        screen.CurrentUser.Role === 'Employee' &&
        !screen.Participation.UserParticipations.any(function (assignment) {
            return assignment.User.Id === screen.CurrentUser.Id
        });
};

myapp.AddEditParticipationFIT.AssignToMe_execute = function (screen) {
    var relation = new myapp.UserParticipation();
    relation.Participation = screen.Participation;
    relation.User = screen.CurrentUser;

    myapp.commitChanges().then(null, function fail(e) {
        // If error occurs, remove new objects
        relation.deleteEntity();
        msls.showMessageBox(e.message, { title: e.title });
    });
};
