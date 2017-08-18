'use strict';

var event = prompt('What type of event are you attending? (casual, semi-formal, or formal?)'),
	temp = prompt('What is the temperature in Fahrenheit?');

if (event === 'casual' || event === 'Casual') {

	document.write ("You should wear something comfortable.");

} else if ( event === 'semi-formal' || event === 'Semi-Formal') {

	document.write ('I\'d recommend business casual (slacks and a button up, no jeans!)');

} else if (event === 'formal' || event === 'Formal') {

	document.write ('Oh you\'re getting fancy huh?! You should definetely wear a suit/dress.');

} else {

	document.write ('You aren\'t going to an event? Well I guess you don\'t have to wear pants. You win!');

}

if (temp > 70) {

	document.write (' Also, that\'s pretty warm. I don\'t think that you need to bring a jacket. Unless you want to be super sauve!');

} else if ( temp >= 54 ) {

	document.write (' That sounds a little chilly. You might consider wearing a light jacket.');

} else {

	document.write (' Wow, that\'s pretty cold. You might consider wearing a thick coat.');

}
