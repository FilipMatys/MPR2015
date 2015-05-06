(function ($) {
    $.fn.metroTile = function (contentItem, options) {
        $element = this;
        var me = $.extend({
            width: 260,
            height: 200,
            displayName: contentItem.model.displayName,
            description: contentItem.model.description || '',
            text : '',
            element: this,
            imageUrl: '',
        }, options);

        me.create = function () {
            me.element.find('a').css({
                'background-image': 'url(' + me.imageUrl + ')',
                'background-repeat': 'no-repeat',
                'background-position': 'right',
                'background-color': '#f68712',
                'width': '' + me.width + 'px',
                'height': '' + me.height + 'px'
            });
            setTimeout(function () {
                me.element.find('a').html(
                '<div style="width:100%;height:100%;position:relative;">' +
                '    <div class="text">' + me.text + '</div>' +
                '    <div class="metroTile" >' +
                '        <div class="background"></div>' +
                '        <div class="title"><p>' + me.displayName + '</p></div>' +
                '        <div class="description">' + me.description + '</div> ' +
                '    </div>' +
                '</div>');
            });
        };

        me.create();
    };
}(jQuery));
