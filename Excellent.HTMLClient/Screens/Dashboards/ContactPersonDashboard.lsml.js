/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ContactPersonDashboard.ActualConference_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { height: 420, width: 420 });
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        var content =
            '<span class="tile-year">' + data.Year + '</span><br />' +
            '<span class="tile-place">' + data.Place + '</span>';

        $(element).find('.text').html(content);
    });
};
myapp.ContactPersonDashboard.AssignedParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        $(element).find('.text').text(data.AssignedParticipations);
    });
};
myapp.ContactPersonDashboard.ActiveParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        $(element).find('.text').text(data.ActiveParticipations);
    });
};
myapp.ContactPersonDashboard.RegisteredCompanies_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile.png' });

    contentItem.dataBind('screen.DashboardData', function (data) {
        $(element).find('.text').text(data.CompaniesCount);
    });
};
myapp.ContactPersonDashboard.SignedContracts_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        $(element).find('.text').text(data.SignedContracts);
    });
};
myapp.ContactPersonDashboard.PaidSponsorships_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        $(element).find('.text').text(data.PaidSponsorships);
    });
};
myapp.ContactPersonDashboard.Participations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile-participations.png' });
};
myapp.ContactPersonDashboard.UnassignedParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        $(element).find('.text').text(data.UnassignedParticipations);
    });
};
myapp.ContactPersonDashboard.AddNewCompany_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile-add-company.png' });
};

myapp.ContactPersonDashboard.created = function (screen) {
    var reportsAPI = "../reports/ContactPersonDashboard/";
    $.ajax(reportsAPI, {}).done(function (data) {
        screen.DashboardData = data;
    });
};

myapp.ContactPersonDashboard.ActualConference_Tap_execute = function (screen) {
    myapp.activeDataWorkspace.ApplicationData.Conferences.filter("Active eq true").execute().done(function (response) {
        myapp.showAddEditConference(response.results[0]);
    });
};
