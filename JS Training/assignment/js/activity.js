var data = {};
var count = 0;
var correctAnswer = '';
var enteredAnswer = '';
var attempts = 0;
var tempArray =[];
var activity = (function() {

    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return {
        createAlphabetSpan: function() {
            for (var i = 0; i < alphabets.length; i++) {
                var main = $('#mainDiv');
                var elm = '<div class="alphabet">' + alphabets[i] +
                    '</div>';
                $(elm).appendTo(main);
            }

            $(".alphabet").draggable({
                addClasses: false,
                helper: "clone",
     
                stop: function(event, ui) {
                  
                },
            });

            $(".droppable").droppable({
                accept: '.alphabet',
                drop: function(event, ui) {
                  var item = ui.draggable.clone();
		      
		            enteredAnswer +=$(ui.draggable).text();
		            if(!ui.draggable.hasClass('is-clone')){
               
			               item.addClass('is-clone');
			           } else {
			               var item = ui.draggable;
			           }
			           item.draggable();
			           item.css({'left':'0','top':'0'});
			           $(this).append(item);
			           //console.log(enteredAnswer, correctAnswer);
		            if(enteredAnswer.length == 3){
		            	$('.checkAnswer').css({'pointer-events':'auto','cursor':'pointer','opacity':'1'});
		            }
                },

            });

        },

        // fetchJSONData: function() {
        // },
    }
})();

activity.createAlphabetSpan();

		function readTextFile(file, callback) {
		    var rawFile = new XMLHttpRequest();
		    rawFile.overrideMimeType("application/json");
		    rawFile.open("GET", file, true);
		    rawFile.onreadystatechange = function() {
		        if (rawFile.readyState === 4 && rawFile.status == "200") {
		            callback(rawFile.responseText);
		        }
		    }
		    rawFile.send(null);
		}

		readTextFile("data/data.json", function(text) {
		    data = JSON.parse(text);
		    $('.word').text(data.object[0].answer);
		    $('.hint').text(data.object[0].hint);
		    $('.instruction').text(data.object[0].instructions);
		});

		function processData(e){
		  correctAnswer = data.object[count+1].answer;
		  console.log(tempArray);
		  if(correctAnswer === enteredAnswer && attempts <2){
		  	tempArray.push(correctAnswer);
		  	var dynamicAnswerSpan = '<span>'+tempArray[count] +'</span></br>';
		  	$('#answerDiv').append(dynamicAnswerSpan);
		  	//$('#answerDiv').html(tempArray[count]);
		  	count++;
		  	enteredAnswer = '';
		  	$('.firstLetter').html('');
		  	$('.secondLetter').html('');
		  	$('.thirdLetter').html('');
		  	$('.checkAnswer').css({'pointer-events':'none','cursor':'pointer','opacity':'0.5'});
		  	$( function() {
			 $( "#dialog" ).dialog({
			 	title: "Response"
			 });
			});
		  	$('#dialog').html('Your answer is Correct!');
		  	if (count<=5) {
		  	correctAnswer = data.object[count].answer;
		  	$('.word').text(data.object[count].answer);
		  	$('.hint').text(data.object[count].hint);
			$('.instruction').text(data.object[count].instructions);
		  }
		 }
		  else if(attempts ==1 || attempts ==0){
		  	$('.firstLetter').html('');
		  	$('.secondLetter').html('');
		  	$('.thirdLetter').html('');
		  	$('.checkAnswer').css({'pointer-events':'none','cursor':'pointer','opacity':'0.5'});
		  	enteredAnswer = '';
		  	attempts++; 
		  	$( function() {
				$( "#dialog" ).dialog();
				});
		  	$('#dialog').html('Your answer is Incorrect! Please try again, Attemptes left is 1');
		  }

		  else if(attempts ==2){
		  	enteredAnswer = '';
		  	tempArray.push(correctAnswer);
		  	var dynamicAnswerSpan = '<span>'+tempArray[count] +'</span></br>';
		  	$('#answerDiv').append(dynamicAnswerSpan);
		  	//$('#answerDiv').html(tempArray[count]);
		  	$('.firstLetter').html('');
		  	$('.secondLetter').html('');
		  	$('.thirdLetter').html('');
		  	$('.checkAnswer').css({'pointer-events':'none','cursor':'pointer','opacity':'0.5'});
		  	attempts++; 
		    $( function() {
				$( "#dialog" ).dialog({
					title: "Response"
				});
				});
		  	
		  	$('#dialog').html('Your answer is Incorrect! No attempts left. Correct answer is '+'<b>'+correctAnswer+'</b>');
		  }
		}


$(function() {
            $("#info").tooltip();
            $("#info").mouseenter();
 });