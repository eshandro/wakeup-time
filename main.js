
var setTimeDisplay = function() {
var date = new Date;

var hours = date.getHours();

var minutes = date.getMinutes();	

	if (hours > 12) {
		var displayHour = (hours - 12);
	}
	else {
		var displayHour = hours;
	}
	if (displayHour < 10) {
		displayHour = "0" + displayHour
	}
	if (minutes <10 ) {
		var displayMinutes = "0" + minutes;
	}
	else {
		var displayMinutes = minutes;
	}
	var displayTime = displayHour + ":" + displayMinutes;
	$('.clocktext-time').html(displayTime);
	
	if (hours >= 12) {
		$('.indicator').css('top', '20px');
		}

}



var setAmPm = function() {
	if (hours >= 12) {
		$('.indicator').css('top', '20px');
		}
}





$(document).on('ready', function() {
 

	var outershell = $('<div class="outer-shell"></div>');
	
	var innershell = $('<div class="inner-shell"></div>');

	var labels = $('<div class="labels"><h4>PM</h4><h4>AUTO</h4></div>');

	var clockScreen = $('<div class="clockscreen"></div>');

	var indicator = $('<div class="indicator"</div>');

	var clockTextTime = $('<div class="clocktext-time"></div>');

	var stations = $('<div class="stations"><p>AM 53 60 70 90 110 140 170</p><p>FM 88 92 96 102 106 108</p></div>');



	$('.container').prepend(outershell);
	$(outershell).prepend(innershell);
	$(innershell).prepend(clockScreen);
	$(innershell).prepend(labels);
	$(innershell).prepend(stations);
	$(clockScreen).append(indicator);
	$(clockScreen).append(clockTextTime);
	setTimeDisplay();
 	window.setInterval(function(){setTimeDisplay()}, 10000);

});