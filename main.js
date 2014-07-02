var date = new Date;

var hours = date.getHours();

var minutes = date.getMinutes();

var setTimeDisplay = function() {
	if (hours > 12) {
		var displayHour = (hours - 12);
		var ampm = "PM";
	}
	else {
		var displayHour = hours;
		var ampm = "AM";
	}
	var displayTime = displayHour + ":" + minutes;
	$('.clocktext-time').html(displayTime);
	return displayTime;
}



var setAmPm = function() {
	if (hours >= 12) {
		$('.indicator').css('top', '20px');
		}
}





$(document).on('ready', function() {
 
 	setTimeDisplay();

 	window.setInterval(function(){setTimeDisplay()}, 60000);

	var outershell = $('<div class="outer-shell"></div>');
	
	var innershell = $('<div class="inner-shell"></div>');

	var labels = $('<div class="labels"><h4>PM</h4><h4>AUTO</h4></div>');

	var clockScreen = $('<div class="clockscreen"></div>');

	var indicator = $('<div class="indicator"</div>');

	var clockTextTime = $('<div class="clocktext-time">' + setTimeDisplay() + '</div>');
	// var clockTextHour = $('<div class="clocktext-hour">12</div>');

	// var clockTextMinutes = $('<div class="clocktext-minutes">12</div>');

	// // var clockTextDivider1 = $('<div class="clocktext-divider-1"></div>');

	// // var clockTextDivider2 = $('<div class="clocktext-divider-2"></div>');

	var stations = $('<div class="stations"><p>AM 53 60 70 90 110 140 170</p><p>FM 88 92 96 102 106 108</p></div>');



	$('.container').prepend(outershell);
	$(outershell).prepend(innershell);
	$(innershell).prepend(clockScreen);
	$(innershell).prepend(labels);
	$(innershell).prepend(stations);
	$(clockScreen).append(indicator);
	$(clockScreen).append(clockTextTime);

 	setAmPm();


});