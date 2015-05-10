/// <reference path="~/GeneratedArtifacts/viewModel.js" />

function validatePasswordMatch(passwordItem, passwordCheckItem) {
    if (passwordItem.value != passwordCheckItem.value) {
        passwordCheckItem.validationResults = [new msls.ValidationResult(passwordItem.screen.details.properties.PasswordCheck, "Passwords must match.")];
    } else {
        passwordCheckItem.validationResults = [];
    }
}

myapp.AddEditUser.Password_postRender = function (element, contentItem) {
    $(element).find('input').attr('type', 'password');
    contentItem.dataBind('value', function () {
        validatePasswordMatch(contentItem, contentItem.screen.findContentItem('PasswordCheck'));
    });
};

myapp.AddEditUser.PasswordCheck_postRender = function (element, contentItem) {
    $(element).find('input').attr('type', 'password');
    contentItem.dataBind('value', function (value) {
        validatePasswordMatch(contentItem.screen.findContentItem('Password'), contentItem);
    });
};

myapp.AddEditUser.created = function (screen) {
    // hide role selection if we are creating user from provided template
    if (screen.User.Role && !screen.User.Id) {
        screen.findContentItem('Role').isVisible = false;
    }
    // populate defaults
    if (!screen.User.Role) {
        screen.User.Role = 'Administrator';
    }
    // disable role selection for existing users
    if (screen.User.Id) {
        screen.User.Password = null;
        screen.findContentItem('Role').isEnabled = false;
    }

    function UpdateVisibility() {
        switch (screen.User.Role) {
            case 'Company':
                if (screen.User.Company == null) {
                    if (!!screen.User.Id) {
                        screen.details.dataWorkspace.ApplicationData.Companies.filter('User/Id eq ' + screen.User.Id).execute().then(function (response) {
                            screen.User.Company = response.results[0];
                        });
                    } else {
                        screen.User.Company = new myapp.Company();
                    }
                }

                screen.findContentItem('Specialization').isVisible = false;
                screen.findContentItem('company').isVisible = true;
                if (!screen.User.Id) {
                    screen.getActiveConference().done(function (response) {
                        screen.findContentItem('Participate').isVisible = response != null;
                    });
                }
                break;
            case 'Administrator':
                screen.findContentItem('Specialization').isVisible = false;
                screen.findContentItem('company').isVisible = false;
                break;
            case 'Employee':
                screen.findContentItem('Specialization').isVisible = true;
                screen.findContentItem('company').isVisible = false;
                break;
        }

        if (screen.User.Role != 'Company' && screen.User.Company != null) {
            screen.User.Company.deleteEntity();
            screen.User.Company = null;
        }
    }

    screen.User.addChangeListener('Role', UpdateVisibility);
    UpdateVisibility();
};

myapp.AddEditUser.beforeApplyChanges = function (screen) {
    // create participation on active conference, if required
    if (screen.User.Company != null &&
        screen.ParticipateUpcomingEvent &&
        screen.User.Company.Participations.array.length === 0) {
        var participation = new myapp.Participation();
        participation.Company = screen.User.Company;
        participation.Conference = screen.ActiveConference;
        participation.State = 'Registered';
    }
};

myapp.AddEditUser.deleteUser_canExecute = function (screen) {
    return !!screen.User.Id
};

myapp.AddEditUser.deleteUser_execute = function (screen) {
    screen.User.deleteEntity();

    myapp.commitChanges().then(function success() {
        // If success.
        msls.showMessageBox("Delete is successfull.", { title: "Delete" });
    }, function fail(e) {
        // If error occurs,
        msls.showMessageBox(e.message, { title: e.title }).then(function () {
            // Cancel Changes
            myapp.cancelChanges();
        });
    });
};

myapp.AddEditUser.saveAssign_canExecute = function (screen) {
    return screen.User.Role == 'Company' && screen.CurrentUser && screen.CurrentUser.Role == 'Employee' && screen.ParticipateUpcomingEvent;
};

myapp.AddEditUser.saveAssign_execute = function (screen) {
    var participation = new myapp.Participation();
    participation.Company = screen.User.Company;
    participation.Conference = screen.ActiveConference;
    participation.State = 'Registered';

    var relation = new myapp.UserParticipation();
    relation.Participation = participation;
    relation.User = screen.CurrentUser;

    myapp.commitChanges().then(null, function fail(e) {
        // If error occurs,
        participation.deleteEntity();
        relation.deleteEntity();
        msls.showMessageBox(e.message, { title: e.title });
    });
};

myapp.AddEditUser.participations_Tap_canExecute = function (screen) {
    return screen.User.Id && screen.User.Role === 'Company' && screen.CurrentUser != null && screen.CurrentUser.Role !== 'Company';
};

myapp.AddEditUser.participations_Tap_execute = function (screen) {
    myapp.showBrowseParticipations(null, null, null, screen.User.Company.Id);
};
