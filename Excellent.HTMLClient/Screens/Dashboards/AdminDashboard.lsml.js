/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AdminDashboard.ActualConference_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { height: 420, width: 260 });
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        var content =
            '<span class="tile-year">' + data.Year + '</span><br />' +
            '<span class="tile-place">' + data.Place + '</span><br />' +
            '<div class="d-table"><div class="d-cell tile-money">Money received</div><div class="d-cell tile-money-value">' + data.MoneyReceived + '</div></div>' +
            '<div class="d-table"><div class="d-cell tile-days">Days remaining</div><div class="d-cell tile-days-value">' + data.DaysRemaining + '</div></div>';

        $(element).find('.text').html(content);
    });
};
myapp.AdminDashboard.PendingParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        $(element).find('.text').text(data.PendingParticipations);
    });
};
myapp.AdminDashboard.ActiveParticipations_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        $(element).find('.text').text(data.ActiveParticipations);
    });
};
myapp.AdminDashboard.CompaniesRegistered_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { imageUrl: 'Content/Images/tile.png' });

    contentItem.dataBind('screen.DashboardData', function (data) {
        $(element).find('.text').text(data.CompaniesCount);
    });
};
myapp.AdminDashboard.Sponsorships_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, {});
    contentItem.isVisible = false;

    contentItem.dataBind('screen.DashboardData', function (data) {
        contentItem.isVisible = data.Active;

        var content =
            '<div class="d-table"><div class="d-cell tile-money">Gold</div><div class="d-cell tile-money-value">' + data.GoldCount + '</div></div>' +
            '<div class="d-table"><div class="d-cell tile-money">Silver</div><div class="d-cell tile-money-value">' + data.SilverCount + '</div></div>' +
            '<div class="d-table"><div class="d-cell tile-money">Bronze</div><div class="d-cell tile-money-value">' + data.BronzeCount + '</div></div>';

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
        screen.DashboardData = data;
    });
};

myapp.AdminDashboard.ActualConference_Tap_execute = function (screen) {
    myapp.activeDataWorkspace.ApplicationData.Conferences.filter("Active eq true").execute().done(function (response) {
        myapp.showAddEditConference(response.results[0]);
    });
};

myapp.AdminDashboard.AddNewCompany_Tap_execute = function (screen) {
    myapp.showAddEditUser(null, {
        beforeShown: function (screen) {
            screen.User = screen.details.dataWorkspace.ApplicationData.Users.addNew();
            screen.User.Role = 'Company';
        }
    });
};
