/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.CompanyDashboard.ActualConference_postRender = function (element, contentItem) {
    $(element).metroTile(contentItem, { height: 420 });
    contentItem.isVisible = false;

    contentItem.screen.addEventListener('dashboard-data-changed', function (e) {
        contentItem.isVisible = e.detail.Active;

        var content =
            '<span class="tile-year">' + moment(e.detail.Date).format('YYYY') + '</span>' +
            '<span class="tile-date">' + moment(e.detail.Date).format('D.M.') + '</span><br />' +
            '<span class="tile-status">' + (e.detail.Status != null ? e.detail.Status : '') + '</span><br />' +
            '<span class="tile-place">' + e.detail.Place + '</span>';

        setTimeout(function () {
            $(element).find('.text').html(content);
        }, 0);
    });
};

myapp.CompanyDashboard.ExpectedPayment_render = function (element, contentItem) {
    var goldMin = contentItem.screen.findContentItem('GoldMin').value;
    var silverMin = contentItem.screen.findContentItem('SilverMin').value;
    var bronzeMin = contentItem.screen.findContentItem('BronzeMin').value;
    var payment = contentItem.value;
    var level = '';
    if (payment >= goldMin)
        level = 'Gold';
    else if (payment >= silverMin)
        level = 'Silver';
    else if (payment >= bronzeMin)
        level = 'Bronze';
    $(element).append('<span>' + payment + '</span>');
};

myapp.CompanyDashboard.Year_render = function (element, contentItem) {
    $(element).append('<span>' + moment(contentItem.value).format('YYYY') + '</span>');
};

myapp.CompanyDashboard.created = function (screen) {
    var reportsAPI = "../reports/CompanyDashboard/";
    $.ajax(reportsAPI, {}).done(function (data) {
        screen.dispatchEvent('dashboard-data-changed', data);
    });
};
