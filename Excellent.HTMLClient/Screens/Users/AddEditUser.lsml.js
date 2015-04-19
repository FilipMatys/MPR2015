/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditUser.Password_postRender = function (element, contentItem) {
    $(element).find('input').attr('type', 'password');
};

myapp.AddEditUser.PasswordCheck_render = function (element, contentItem) {
    $(element).append('<input type="password" />');
};

myapp.AddEditUser.created = function (screen) {
    // populate defaults
    if (!screen.User.Role)
        screen.User.Role = 'Administrator';
    else
        screen.findContentItem('Role').isEnabled = false;

    screen.User.addChangeListener('Role', function (e) {
        if (screen.User.Role === 'Company') {
            screen.User.Company = new myapp.Company();
        } else if (screen.User.Role === 'Administrator') {
            screen.User.Company = null;
        } else {
            screen.User.Company = null;
        }
    });
};

myapp.AddEditUser.beforeApplyChanges = function (screen) {
    if (screen.User.Password !== screen.findContentItem('PasswordCheck').value)
        screen.findContentItem('Password').validationResults = [new msls.ValidationResult(screen.User.Password, "Passwords must match.")];

};
