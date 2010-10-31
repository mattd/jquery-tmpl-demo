$(document).ready(function () {

    // A named template. Note that the template string could come from the
    // database, possibly from the same document as the data.
    $.template("nameTemplate", "<li>${first_name} ${last_name}</li>");

    // On click, retrieve the values from CouchDB, render the template, and add
    // to the DOM.
    $("#get-names").click(function () {
        $.getJSON('/couchdb/addressbook/_design/results/_view/all', function (data) {
            var rendered_result = $.tmpl("nameTemplate", getRowValues(data));
            $("#names").html(rendered_result);
        });
    });

    function getRowValues(data) {
        // Returns the values from a CouchDB view (ie. leaves out the metadata).
        var i = 0,
            max,
            values = [];
        for (i = 0, max = data['rows'].length; i < max; i += 1) {
            values[i] = data['rows'][i]['value'];
        }
        return values;
    }

});
