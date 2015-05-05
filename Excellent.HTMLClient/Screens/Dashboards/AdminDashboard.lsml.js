/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AdminDashboard.ActualConference_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { height: 420 });
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        var content =
            '<span>' + e.detail.Year + '</span><br />' +
            '<span>' + e.detail.Place + '</span><br />' +
            '<span>Money received</span><span>' + e.detail.MoneyReceived + '</span><br />' +
            '<span>Days remaining</span><span>' + e.detail.DaysRemaining + '</span>';

        $(element).find('.text').html(content);
    });
};
myapp.AdminDashboard.PendingParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        $(element).find('.text').text(e.detail.PendingParticipations);
    });
};
myapp.AdminDashboard.ActiveParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        $(element).find('.text').text(e.detail.ActiveParticipations);
    });
};
myapp.AdminDashboard.CompaniesRegistered_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile.png' });

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        $(element).find('.text').text(e.detail.CompaniesCount);
    });
};
myapp.AdminDashboard.Sponsorships_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        var content =
            '<span>Gold</span><span>' + e.detail.GoldCount + '</span><br />' +
            '<span>Silver</span><span>' + e.detail.SilverCount + '</span><br />' +
            '<span>Bronze</span><span>' + e.detail.BronzeCount + '</span>';

        $(element).find('.text').html(content);
    });
};
myapp.AdminDashboard.Participations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile-participations.png' });
};
myapp.AdminDashboard.AddNewCompany_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile-add-company.png' });
};
myapp.AdminDashboard.Exceptions_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile-exceptions.png' });
};

myapp.AdminDashboard.created = function (screen) {
    var reportsAPI = "../reports/AdminDashboard/";
    $.ajax(reportsAPI, {}).done(function (data) {
        screen.dispatchEvent('dashboard-data-changed', data);
    });
};
