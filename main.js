$(document).on('ready', function() {
  
	var outershell = $('<div class="outer-shell"></div>');
	
	var innershell = $('<div class="inner-shell"></div>');

	var labels = $('<div class="labels"></div>');

	var clockScreen = $('<div class="clockscreen"></div>');

	var indicator = $('<div class="indicator"</div>');

	var clockText = $('<div class="clocktext"></div>');

	var stations = $('<div class="stations"></div>');

$('.container').prepend(outershell);
$(outershell).prepend(innershell);
$(innershell).prepend(clockScreen);
$(innershell).prepend(labels);


});