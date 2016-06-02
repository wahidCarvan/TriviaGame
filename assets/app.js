$(document).ready(function(){

var questionSet =[
	{
	"questions" :  [
	{
		question1: "From what source, does solar generate electricity?",
		answerChoices1:["The Sun!","The Ocean!", "Volcanoes!", "Earth's Crust!"],
		correctAnswer:0
	},
	{
		question2: "What year was the first Apple I-phone introduced?",
		answerChoices2:['2005', '2006', '2007', '2008'],
		correctAnswer:2
	},
	{
		question3: "In terms of computing, what does CPU stand for?",
		answerChoices3:['Computers Powering Us!', 'Computers Powering United!', 'Correct Power Unit!', 'Central Proccessing Unit!'],
		correctAnswer:3
	},
	{	question4: "The Hubble Space Telescope is named after which American astronomer?",
		answerChoices4:['Edwin Hubble!', 'Albert Einstein!', 'Carl Saggan!', 'Frank drake!'],
		correctAnswer:0
	},
	{		question5: "Firefox, Opera, Chrome, Safari and Explorer are types of what?",
		answerChoices5:['Computers!', 'Programming Languages!', 'Operating Systems!', 'Web Browsers!'],
		correctAnswer:3

	},
	{		question6: "What is the Earth’s primary source of energy?",
		answerChoices6:['The Sun!', 'The Ocean!', 'I Dont Know!', 'The Moon!'],
		correctAnswer:0
	}
	]
}
					];


// Question 1 
$('#startButton').on('click', function(){
$('#startButton').remove(); // removes the button after it is clicked
$('#content').html('Time Remaining:'); // after button is removed it displays this content
$('#content').append('<br>' + questionSet[0].questions[0].question1);
$('#content').append('<br><button id="correctAnswer">' + questionSet[0].questions[0].answerChoices1[0]);
$('#content').append('<br><button class="wrongAnswer">' + questionSet[0].questions[0].answerChoices1[1]);
$('#content').append('<br><button class="wrongAnswer">'  + questionSet[0].questions[0].answerChoices1[2]);
$('#content').append('<br><button class="wrongAnswer">'  + questionSet[0].questions[0].answerChoices1[3]);

$('.wrongAnswer').on('click',function(){ // if wrong answer is clicked 
$('#content').html( 'Sorry, thats wrong! <br>' + 'The correct answer is the sun! <br>')
$('#content').append('<img src= "http://rs802.pbsrc.com/albums/yy310/wld011/animated%20icons/sol09_small.gif~c200">')
});

$('#correctAnswer').on('click',function(){ // when correct answer is clicked
$('#content').html( 'Yes! <br>' + 'The correct answer is the sun! <br>')
$('#content').append('<img src= "http://rs802.pbsrc.com/albums/yy310/wld011/animated%20icons/sol09_small.gif~c200">')
});

// question 2
$('#startButton').on('click', function(){
$('#startButton').remove(); // removes the button after it is clicked
$('#content').html('Time Remaining:'); // after button is removed it displays this content
$('#content').append('<br>' + questionSet[1].questions[0].question1);
$('#content').append('<br><button id="correctAnswer">' + questionSet[0].questions[0].answerChoices1[0]);
$('#content').append('<br><button class="wrongAnswer">' + questionSet[0].questions[0].answerChoices1[1]);
$('#content').append('<br><button class="wrongAnswer">'  + questionSet[0].questions[0].answerChoices1[2]);
$('#content').append('<br><button class="wrongAnswer">'  + questionSet[0].questions[0].answerChoices1[3]);

$('.wrongAnswer').on('click',function(){ // if wrong answer is clicked 
$('#content').html( 'Sorry, thats wrong! <br>' + 'The correct answer is the sun! <br>')
$('#content').append('<img src= "http://rs802.pbsrc.com/albums/yy310/wld011/animated%20icons/sol09_small.gif~c200">')
});

$('#correctAnswer').on('click',function(){ // when correct answer is clicked
$('#content').html( 'Yes! <br>' + 'The correct answer is the sun! <br>')
$('#content').append('<img src= "http://rs802.pbsrc.com/albums/yy310/wld011/animated%20icons/sol09_small.gif~c200">')

});








