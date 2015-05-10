/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.CompanyDashboard.ActualConference_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { height: 420 });
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        var content =
            '<span class="tile-year">' + moment(data.Date).format('YYYY') + '</span>' +
            '<span class="tile-date">' + moment(data.Date).format('D.M.') + '</span><br />' +
            '<span class="tile-status">' + (data.Status != null ? data.Status : '') + '</span><br />' +
            '<span class="tile-place">' + data.Place + '</span>';

        $(element).find('.text').html(content);
    });
};

myapp.CompanyDashboard.created = function (screen) {
    var reportsAPI = "../reports/CompanyDashboard/";
    $.ajax(reportsAPI, {}).done(function (data) {
        screen.DashboardData = data;
    });
};

myapp.CompanyDashboard.ActualConference_Tap_execute = function (screen) {
    WinJS.Promise.join([screen.getActiveConference(), screen.getCurrentUser()]).then(function () {
        return screen.getCompanyParticipationOnConference();
    }).then(function () {
        if (screen.CompanyParticipationOnConference != null) {
            myapp.showAddEditParticipationCompany(screen.CompanyParticipationOnConference);
        } else {
            myapp.showViewConferenceCompany(screen.ActiveConference);
        }
    });
};
