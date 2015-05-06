﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AdminDashboard.ActualConference_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { height: 420, width: 260 });
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        var content =
            '<span class="tile-year">' + e.detail.Year + '</span><br />' +
            '<span class="tile-place">' + e.detail.Place + '</span><br />' +
            '<div class="d-table"><div class="d-cell tile-money">Money received</div><div class="d-cell tile-money-value">' + e.detail.MoneyReceived + '</div></div>' +
            '<div class="d-table"><div class="d-cell tile-days">Days remaining</div><div class="d-cell tile-days-value">' + e.detail.DaysRemaining + '</div></div>';

        setTimeout(function () {
            $(element).find('.text').html(content);
        }, 0);
    });
};
myapp.AdminDashboard.PendingParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        setTimeout(function () {
            $(element).find('.text').text(e.detail.PendingParticipations);
        }, 0);
    });
};
myapp.AdminDashboard.ActiveParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        setTimeout(function () {
            $(element).find('.text').text(e.detail.ActiveParticipations);
        }, 0);
    });
};
myapp.AdminDashboard.CompaniesRegistered_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile.png' });

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        setTimeout(function () {
            $(element).find('.text').text(e.detail.CompaniesCount);
        }, 0);
    });
};
myapp.AdminDashboard.Sponsorships_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        var content =
            '<div class="d-table"><div class="d-cell tile-money">Gold</div><div class="d-cell tile-money-value">' + e.detail.GoldCount + '</div></div>' +
            '<div class="d-table"><div class="d-cell tile-money">Silver</div><div class="d-cell tile-money-value">' + e.detail.SilverCount + '</div></div>' +
            '<div class="d-table"><div class="d-cell tile-money">Bronze</div><div class="d-cell tile-money-value">' + e.detail.BronzeCount + '</div></div>';

        setTimeout(function () {
            $(element).find('.text').html(content);
        }, 0);
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

myapp.AdminDashboard.ActualConference_Tap_execute = function (screen) {
    myapp.activeDataWorkspace.ApplicationData.Conferences.filter("Active eq true").execute().done(function (response) {
        myapp.showAddEditConference(response.results[0]);
    });
};
