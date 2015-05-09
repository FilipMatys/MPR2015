/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditConference.setClose_canExecute = function (screen) {
    return screen.Conference.Active;
};

myapp.AddEditConference.setClose_execute = function (screen) {
    screen.Conference.Active = false;

    myapp.commitChanges();
};

myapp.AddEditConference.setActive_canExecute = function (screen) {
    return !screen.Conference.Active;
};

myapp.AddEditConference.setActive_execute = function (screen) {
    screen.getActiveConference().then(function (result) {
        if (result != null)
            result.Active = false;

        screen.Conference.Active = true;

        myapp.commitChanges();
    });
};

myapp.AddEditConference.created = function (screen) {
    if (!screen.Conference.Id) {
        var deadline = new myapp.Deadline();
        deadline.Type = 'PropagationalPaper';
        deadline.Conference = screen.Conference;

        deadline = new myapp.Deadline();
        deadline.Type = 'VideoPresenation';
        deadline.Conference = screen.Conference;

        deadline = new myapp.Deadline();
        deadline.Type = 'Poster';
        deadline.Conference = screen.Conference;

        deadline = new myapp.Deadline();
        deadline.Type = 'Logo';
        deadline.Conference = screen.Conference;

        deadline = new myapp.Deadline();
        deadline.Type = 'Attendee';
        deadline.Conference = screen.Conference;

        deadline = new myapp.Deadline();
        deadline.Type = 'NumAttendee';
        deadline.Conference = screen.Conference;

        deadline = new myapp.Deadline();
        deadline.Type = 'Contract';
        deadline.Conference = screen.Conference;
    }

    if (screen.Conference.Active == false) {
        screen.findContentItem('setClose').isEnabled = false;
    }
    if (screen.Conference.Active == true) {
        screen.findContentItem('setActive').isEnabled = false;
    }
};

myapp.AddEditConference.DeadlinesTemplate_postRender = function (element, contentItem) {
    // #102 prevent event propagation to list control
    $(element).keydown(function (e) {
        e.stopPropagation();
    });
};
