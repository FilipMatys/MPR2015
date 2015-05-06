/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ContactPersonDashboard.ActualConference_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { height: 420, width: 420 });
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        var content =
            '<span class="tile-year">' + e.detail.Year + '</span><br />' +
            '<span class="tile-place">' + e.detail.Place + '</span>';

        setTimeout(function () {
            $(element).find('.text').html(content);
        }, 0);
    });
};
myapp.ContactPersonDashboard.AssignedParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        setTimeout(function () {
            $(element).find('.text').text(e.detail.AssignedParticipations);
        }, 0);
    });
};
myapp.ContactPersonDashboard.ActiveParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        setTimeout(function () {
            $(element).find('.text').text(e.detail.ActiveParticipations);
        }, 0);
    });
};
myapp.ContactPersonDashboard.RegisteredCompanies_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile.png' });

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        setTimeout(function () {
            $(element).find('.text').text(e.detail.CompaniesCount);
        }, 0);
    });
};
myapp.ContactPersonDashboard.SignedContracts_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        setTimeout(function () {
            $(element).find('.text').text(e.detail.SignedContracts);
        }, 0);
    });
};
myapp.ContactPersonDashboard.PaidSponsorships_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        setTimeout(function () {
            $(element).find('.text').text(e.detail.PaidSponsorships);
        }, 0);
    });
};
myapp.ContactPersonDashboard.Participations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile-participations.png' });
};
myapp.ContactPersonDashboard.UnassignedParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        setTimeout(function () {
            $(element).find('.text').text(e.detail.UnassignedParticipations);
        }, 0);
    });
};
myapp.ContactPersonDashboard.AddNewCompany_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile-add-company.png' });
};

myapp.ContactPersonDashboard.created = function (screen) {
    var reportsAPI = "../reports/ContactPersonDashboard/";
    $.ajax(reportsAPI, {}).done(function (data) {
        screen.dispatchEvent('dashboard-data-changed', data);
    });
};
