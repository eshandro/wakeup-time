$(document).on('ready', function() {
  
	var outershell = $('<div class="outer-shell"></div>');
	
	var innershell = $('<div class="inner-shell"></div>');

	var labels = $('<div class="labels"><h4>PM</h4><h4>AUTO</h4></div>');

	var clockScreen = $('<div class="clockscreen"></div>');

	var indicator = $('<div class="indicator"</div>');

	var clockText = $('<div class="clocktext"></div>');

	var stations = $('<div class="stations"><p>AM 53 60 70 90 110 140 170</p><p>FM 88 92 96 102 106 108</p></div>');

$('.container').prepend(outershell);
$(outershell).prepend(innershell);
$(innershell).prepend(clockScreen);
$(innershell).prepend(labels);
$(innershell).prepend(stations);



});