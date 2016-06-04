$(document).ready(function() {
    // variables to store answers
    var right = 0;
    var wrong = 0;
    var countDown = 30; // sets timer at 30
    var questionId = 0;
    var intervalID;

    	function timer(){
      		
      	 	countDown--; //subtracts 1 second from the timer
            console.log(countDown);
      		$('#countdown').html(countDown);
            if(countDown==0){
                clearInterval(intervalID);
                questionId++
                showQuestion(questionId);
            }

     	}
    	


    // Questions and answers stored in array with a nested object
    var questionSet = [{ //0
            question: "From what source, does solar generate electricity?",
            answerChoices: ["The Sun!", "The Ocean!", "Volcanoes!", "Earth's Crust!"],
            correctAnswer: 0,
            img: 'http://rs802.pbsrc.com/albums/yy310/wld011/animated%20icons/sol09_small.gif~c200'
        }, { //1
            question: "What year was the first Apple I-phone introduced?",
            answerChoices: ['2005', '2006', '2007', '2008'],
            correctAnswer: 2,
            img: 'https://i.kinja-img.com/gawker-media/image/upload/s--OPAmgPOq--/c_fit,fl_progressive,q_80,w_636/tqw9yxzygikobtizlrja.gif',
        }, { //2
            question: "In terms of computing, what does CPU stand for?",
            answerChoices: ['Computers Powering Us!', 'Computers Powering United!', 'Correct Power Unit!', 'Central Proccessing Unit!'],
            correctAnswer: 3,
            img: 'https://media0.giphy.com/media/970Sr8vpwEbXG/200_s.gif'
        }, //3
        {
            question: "The Hubble Space Telescope is named after which American astronomer?",
            answerChoices: ['Edwin Hubble!', 'Albert Einstein!', 'Carl Saggan!', 'Frank drake!'],
            correctAnswer: 0,
            img: 'https://www.aip.org/history/exhibits/cosmology/ideas/images-ideas/hubble_edwin_a6a.gif'
        }, {
            question: "Firefox, Opera, Chrome, Safari and Explorer are types of what?",
            answerChoices: ['Computers!', 'Programming Languages!', 'Operating Systems!', 'Web Browsers!'],
            correctAnswer: 3,
            img: 'http://www.ricksdailytips.com/wp-content/uploads/2014/03/browser-logos.gif'
        }, {
            question: "Brass gets discoloured in air because of which of the following gasses in air?",
            answerChoices: ['Oxygen!', 'Hydrogen sulphide!', 'Carbon dioxide', 'Nitrogen!'],
            correctAnswer: 1,
            img: 'https://www.apems.org/wp-content/uploads/2015/12/hydrogen_sulfide_gas_danger_sign__58024-300x216.gif'
        }
    ];

    //Question 1
    $('#startButton').on('click', function() {

        $('#startButton').remove(); // removes the button after it is clicked
        $('#content').addClass('container');
        showQuestion(0); // calls the function below

        // Next step would be to write the logic to trigger the timer to start counting down here (we have this already with the timer function up top)
        
        // Then have that shown on the web page

    });

    function showQuestion(questionId) {
        countDown =30;
        clearInterval(intervalID);
         intervalID = setInterval(timer,1000);
        //if i hit 6

        console.log('questionId is', questionId);
        //all your code to be generated for a specific question

        var question = questionSet[questionId];



        console.log('my question object is', question);

        $('#content').html('Time Remaining: <div id="countdown"></div>' ); // after button is removed it displays this content
// sets the timer.
        $('#content').append('<br>' + question.question);

        //array
        var choices = question.answerChoices;
        for (var i = 0; i < choices.length; i++) {
            if (question.correctAnswer == i) {
                $('#content').append("<br><button id='correctAnswer'>" + choices[i] + '</button');
            } else {
                $('#content').append("<br><button class='wrongAnswer'>" + choices[i] + '</button');
            }
        }

        $('.wrongAnswer').on('click', function() {
            $('#content').html('Sorry, thats wrong! <br>' + 'The correct answer is: ' + question.answerChoices[question.correctAnswer] + '! <br>')
            $('#content').append('<img src= "' + question.img + '">');
            wrong++;
             setTimeout(function() {
                questionId = questionId + 1;
                // replace the 6 because if more questions or added it wont work.
                if (questionId == questionSet.length) {
                    results();
                } else {
                    showQuestion(questionId);
                }
            }, 1000);
        });

        $('#correctAnswer').on('click', function() {
            $('#content').html('Yes! <br>' + 'The correct answer is: ' + question.answerChoices[question.correctAnswer] + '! <br>')
            $('#content').append('<img src= "' + question.img + '">');
            right++;
            setTimeout(function() {
                questionId = questionId + 1;

                // replace the 6 because if more questions or adde it wont work.
                if (questionId == 6) {
                    results();
                } else {
                    showQuestion(questionId);
                }
            }, 1000);
        });

    }


    function results() {
        $('#content').html('<br>GAME OVER!<br> Here are your results!<br>'); // displays after the  last question was answered
        $('#content').append('<br>Correct Answers: ' + right + '<br>'); // displays the numbe of correct answers
        $('#content').append('<br>Incorrect Answers: ' + wrong + '<br>'); // displays the wrong answers
        $('#content').append('<br> <button id="reset">Play Again?</button>'); // displays reset button
        // function that resets the game once the reset button is clicked
        $('#reset').on('click', function() {
            right = 0;
            wrong = 0;
            showQuestion(0); // runs the game again startingfrom question 1
        });

    };

    //This always goes last, this is the end of wrapper for document.ready
});
