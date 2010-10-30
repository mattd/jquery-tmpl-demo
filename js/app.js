$(document).ready(function () {

	$.getJSON('/couchdb/addressbook/_design/results/_view/all' , function(data) {
		var names = [];
		for (i = 0, max = data['rows'].length; i < max; i += 1) {
			names[i] = data['rows'][i]['value'];
		}
		$.template("nameTemplate", "<li>${first_name} ${last_name}</li>");
		$.tmpl("nameTemplate", names).appendTo("#names");
	});

});
