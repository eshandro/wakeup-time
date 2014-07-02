$(document).on('ready', function() {
  
	var outershell = $('<div class="outer-shell"></div>');
	
	var innershell = $('<div class="inner-shell"></div>');

	var labels = $('<div class="labels"><h4>PM</h4><h4>AUTO</h4></div>');

	var clockScreen = $('<div class="clockscreen"></div>');

	var indicator = $('<div class="indicator"</div>');

	var clockTextHour = $('<div class="clocktext-hour">12</div>');

	var clockTextMinutes = $('<div class="clocktext-minutes">12</div>');

	var clockTextDivider1 = $('<div class="clocktext-divider-1"></div>');

	var clockTextDivider2 = $('<div class="clocktext-divider-2"></div>');

	var stations = $('<div class="stations"><p>AM 53 60 70 90 110 140 170</p><p>FM 88 92 96 102 106 108</p></div>');


$('.container').prepend(outershell);
$(outershell).prepend(innershell);
$(innershell).prepend(clockScreen);
$(innershell).prepend(labels);
$(innershell).prepend(stations);
$(clockScreen).append(indicator);
$(clockScreen).append(clockTextHour);
$(clockScreen).append(clockTextDivider1);
$(clockScreen).append(clockTextDivider2);
$(clockScreen).append(clockTextMinutes);



});