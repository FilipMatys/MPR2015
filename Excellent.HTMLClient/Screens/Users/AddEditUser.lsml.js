/// <reference path="~/GeneratedArtifacts/viewModel.js" />

function validatePasswordMatch(passwordItem, passwordCheckItem) {
    if (passwordItem.value !== passwordCheckItem.value) {
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
    // populate defaults
    if (!screen.User.Role) {
        screen.User.Role = 'Administrator';
    }
    // disable role selection for existing users
    if (screen.User.Id) {
        screen.findContentItem('Role').isEnabled = false;
    }

    function UpdateVisibility() {
        switch (screen.User.Role) {
            case 'Company':
                if (screen.User.Company === null) {
                    screen.User.Company = new myapp.Company();
                }

                screen.findContentItem('Specialization').isVisible = false;
                screen.findContentItem('company').isVisible = true;
                break;
            case 'Administrator':
                screen.User.Company = null;
                screen.findContentItem('Specialization').isVisible = false;
                screen.findContentItem('company').isVisible = false;
                break;
            case 'Employee':
                screen.User.Company = null;
                screen.findContentItem('Specialization').isVisible = true;
                screen.findContentItem('company').isVisible = false;
                break;
        }
    }

    screen.User.addChangeListener('Role', UpdateVisibility);
    UpdateVisibility();
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
    return screen.User.Role == 'Company';
};

myapp.AddEditUser.saveAssign_execute = function (screen) {
    // Write code here.

};

myapp.AddEditUser.participations_postRender = function (element, contentItem) {
    contentItem.isEnabled = contentItem.value.User.Role === 'Company';
};
