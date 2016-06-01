$(document).ready(function(){


var counter =30; // goees here so when the page is reloaded the timer starts over
// clicking the button

$('#startButton').on('click', function(){
var self =this;
// this copies the id above 
$(this).addClass('btn-danger');  // change the color of button to red once clicked.
	this.disabled=true; 
	var intervalId = setInterval(function(){
		// code that refreshes the number every second
		
		counter--;// reduce the number of seconds left by 1
		//show the counter
		$(self).html('Time Remaining: ' + counter) // displays the the time remaining and the counter
		if (counter===0){
			alert("Your time is up!")// when the counter hits 0
			clearInterval(intervalId); // restarts the timer

			window.reload(); // refreshes the page after game ends

		}
	}, 1000);
var questionSet =[
	{
		question: "From what source does solar generate electricity?",
		answerChoices:["The Sun!", "The Ocean!", "Volcanoes!", "Earth's Crust!"],
		correctAnswer:0
	},
	// store new questions in an object
	{
		question: "What year was the first Apple I-phone introduced?",
		answerChoices:['2005', '2006', '2007', '2008'],
		correctAnswer:2
	},
	{
		question: "In terms of computing, what does CPU stand for?",
		answerChoices:['Computers Powering Us!', 'Computers Powering United!', 'Correct Power Unit!', 'Central Proccessing Unit!'],
		correctAnswer:3
	},
	{	question: "The Hubble Space Telescope is named after which American astronomer?",
		answerChoices:['Edwin Hubble!', 'Albert Einstein!', 'Carl Saggan!', 'Frank drake!'],
		correctAnswer:0
	},
{		question: "Firefox, Opera, Chrome, Safari and Explorer are types of what?",
		answerChoices:['Computers!', 'Programming Languages!', 'Operating Systems!', 'Web Browsers!'],
		correctAnswer:3

},
{		question: "What is the Earth’s primary source of energy?",
		answerChoices:['The Sun!', 'The Ocean!', 'I Dont Know!', 'The Moon!'],
		correctAnswer:0

}

];

});























































































































































































});

