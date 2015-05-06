/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditUser.Password_postRender = function (element, contentItem) {
    $(element).find('input').attr('type', 'password');
};

myapp.AddEditUser.PasswordCheck_render = function (element, contentItem) {
    $(element).append('<input type="password" />');
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
                screen.User.Company = new myapp.Company();
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

myapp.AddEditUser.beforeApplyChanges = function (screen) {
    if (screen.User.Password !== screen.findContentItem('PasswordCheck').value)
        screen.findContentItem('Password').validationResults = [new msls.ValidationResult(screen.User.Password, "Passwords must match.")];
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
