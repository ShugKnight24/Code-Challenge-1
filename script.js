var event = prompt("What type of event are you attending?")

var temp = prompt("What is the temperature in Fahrenheit?")

if (event==="casual") {
  document.write ("You should wear something comfortable.");
} else if ( event==="semi-formal" ) {
  document.write ("Consider wearing slacks and a button up.");
} else if (event==="formal") {
  document.write ("Oh Fancy! You should definetely wear a suit.");
} else {
  document.write ("You aren't going to an event? Well I guess you don't have to wear pants.");
}

if (temp > 70) {
  document.write (" Also, that's pretty warm. I don't think that you need to bring a jacket");
} else if ( 70 <= temp <= 54 ) {
  document.write (" That sounds a little chilly. You might consider wearing a light jacket.");
} else {
  document.write (" That's pretty cold. You might want to wear a thicker coat.");
}
