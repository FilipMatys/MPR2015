﻿function createImageUploader(element, contentItem, filenameContentItem, previewStyle) {
    var $element = $(element);

    var $file_browse_button = $('<input name="file" type="file" style="margin-bottom: 10px;" />');
    $element.append($file_browse_button);

    var $preview = $('<div></div>');
    $element.append($preview);
    contentItem.dataBind('value', function (value) {
        previewImageAndSetContentItem(value ? 'data:png;base64,' + value : null, $preview, contentItem);
    });

    $file_browse_button.bind('change', function handleFileSelect(evt) {
        var files = evt.target.files;
        if (files.length == 1) {
            var reader = new FileReader();
            reader.onload = function (e) {
                filenameContentItem.value = files[0].name;
                previewImageAndSetContentItem(e.target.result, $preview, contentItem);
            };
            reader.readAsDataURL(files[0]);
        } else {
            // if no file was chosen (e.g., if file-choosing was cancelled),
            //     explicity ensure that the content is set back to null:
            filenameContentItem.value = null;
            previewImageAndSetContentItem(null, $preview, contentItem);
        }
    });

    function previewImageAndSetContentItem(fullBinaryString, $preview, contentItem) {
        $preview.empty();

        if ((fullBinaryString == null) || (fullBinaryString.length == 0)) {
            contentItem.value = null;
        } else {
            $preview.append('<a href="' + fullBinaryString + '" download="' + filenameContentItem.value  +  '">' + filenameContentItem.value + '</a>');
            // As far as storing the data in the database, beyond previewing it,
            //     remove the preamble returned by FileReader or the server 
            //     (always of the same form: "data:jpeg;base64," with variations only on the 
            //     type of data -- jpeg, png, etc).
            //     The first comma serves as the necessary marker where the binary data begins.
            contentItem.value = fullBinaryString.substring(fullBinaryString.indexOf(",") + 1);
        }
    }
}
