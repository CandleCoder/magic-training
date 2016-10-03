var activity = (function () {
	   
    var series=new Array();
    var filldataset = series[pageCount];
	var filldataarray;
	var hidefilldata;
	var attempted = 'notAttempted';
	var firstHiddenPlace;
	var secondHiddenPlace;
	var thirdHiddenPlace;
	var pageCount = 0;
	var enteredAnswer = [];
	var tempArray = [];
	var attemptedArray = ['notAttempted','notAttempted','notAttempted','notAttempted','notAttempted']; 
	var series= new Array();
	var enteredSeries = {a:[],b:[],c:[],d:[],e:[]};
	var saveseries = new Array();
	series=[[[''],['']],
				[[''],['']],
				[[''],['']],
				[[''],['']],
				[[''],['']]
				];  

	saveseries=[[[''],[0,0,0],'',0],[[''],[0,0,0],'',0],[[''],[0,0,0],'',0],[[''],[0,0,0],'',0],[[''],[0,0,0],'',0]];
	return {

     	init: function () { 
     	    this.generateSeries();
     	    this.handlePage();
     	    $( "#dialog" ).dialog({
			  buttons: [
			    {
			      text: "First, read all the numbers in the line and figure out which numbers are missing.Tap on an empty square and use the green keypad to type the missing number.Tap the target button to check your work.Tap the arrows to move to another problem.When you have correctly completed each of the problems, tap Play Again to work on a new set of problems.",
			      click: function() {
			        $( this ).dialog( "close" );
			      }
			    }
			  ] 
          });

     	     $("#infoButton").click(function () {
		            $('#dialog').dialog('open');
		        });
     	
     	     this.checkInputState();
     	},

     	generateSeries: function(){   	

			    var rand1=Math.floor(Math.random()*11)+1;
				rand1=rand1*5;
				var rand2=Math.floor(Math.random()*28)+1;
				var rand3=Math.floor(Math.random()*91)+1;
				var rand4=Math.floor(Math.random()*91)+8;
				var rand5=Math.floor(Math.random()*21)+78;
				
				for(var i=0;i<=7;i++)
				{
				series[0][0][i]=rand1;
				series[1][0][i]=rand2;
				series[2][0][i]=rand3;
				series[3][0][i]=rand4;
				series[4][0][i]=rand5;
				rand1=rand1+5;
				rand2=rand2+10;
				rand3=rand3+1;
				rand4=rand4-1;
				rand5=rand5-10;
				}
				
				var arr1=[],arr2=[],arr3=[],arr4=[],arr5=[];
				while(arr1.length < 3)
				{ 
				
					var randomnumber1=Math.ceil(Math.random()*6)+1;
					var randomnumber2=Math.ceil(Math.random()*6)+1;
					var randomnumber3=Math.ceil(Math.random()*6)+1;
					var randomnumber4=Math.ceil(Math.random()*6)+1;
					var randomnumber5=Math.ceil(Math.random()*6)+1;
					var found=false;
					for(var i=0;i<arr1.length;i++)
					{
						if(arr1[i]==randomnumber1){found=true;break}
						if(arr2[i]==randomnumber2){found=true;break}
						if(arr3[i]==randomnumber3){found=true;break}
						if(arr4[i]==randomnumber4){found=true;break}
						if(arr5[i]==randomnumber5){found=true;break}
					}
					if(!found)
					{
					
						arr1[arr1.length]=randomnumber1;
						arr2[arr2.length]=randomnumber2;
						arr3[arr3.length]=randomnumber3;
						arr4[arr4.length]=randomnumber4;
						arr5[arr5.length]=randomnumber5;
					}
				}
				arr1.sort();arr2.sort();arr3.sort();arr4.sort();arr5.sort();
				for(var i=0;i<=2;i++)
				{
					series[0][1][i]=arr1[i];
					series[1][1][i]=arr2[i];
					series[2][1][i]=arr3[i];
					series[3][1][i]=arr4[i];
					series[4][1][i]=arr5[i];
				}
	     series.sort( function() { return Math.random() - 0.5 } );
	    
	     this.fillDataIntoView();
     	},

     fillDataIntoView: function(){
     	
     	if(attemptedArray[pageCount] == 'notAttempted'){
     	filldataset = series[pageCount];
		filldataarray = filldataset[0];
		hidefilldata = filldataset[1];

		firstHiddenPlace = hidefilldata[0];
		secondHiddenPlace = hidefilldata[1];
		thirdHiddenPlace = hidefilldata[2];


				  $('.firstNumber').val(filldataarray[0]);
				  $('.secondNumber').val(filldataarray[1]);
				  $('.thirdNumber').val(filldataarray[2]);
				  $('.fourthNumber').val(filldataarray[3]);
				  $('.fifthNumber').val(filldataarray[4]);
				  $('.sixthNumber').val(filldataarray[5]);
				  $('.seventhNumber').val(filldataarray[6]);
				  $('.eightNumber').val(filldataarray[7]);

				 $('input').eq(firstHiddenPlace).val('');
				 $('input').eq(secondHiddenPlace).val('');
				 $('input').eq(thirdHiddenPlace).val('');	
     	}

     	else if(attemptedArray[pageCount] == 'attempted' && pageCount==0){
     		
		 	  	  $('.firstNumber').val(enteredSeries.a[0]);
				  $('.secondNumber').val(enteredSeries.a[1]);
				  $('.thirdNumber').val(enteredSeries.a[2]);
				  $('.fourthNumber').val(enteredSeries.a[3]);
				  $('.fifthNumber').val(enteredSeries.a[4]);
				  $('.sixthNumber').val(enteredSeries.a[5]);
				  $('.seventhNumber').val(enteredSeries.a[6]);
				  $('.eightNumber').val(enteredSeries.a[7]);
     	}

     	else if(attemptedArray[pageCount] == 'attempted' && pageCount==1){
     		
		 	  	  $('.firstNumber').val(enteredSeries.b[0]);
				  $('.secondNumber').val(enteredSeries.b[1]);
				  $('.thirdNumber').val(enteredSeries.b[2]);
				  $('.fourthNumber').val(enteredSeries.b[3]);
				  $('.fifthNumber').val(enteredSeries.b[4]);
				  $('.sixthNumber').val(enteredSeries.b[5]);
				  $('.seventhNumber').val(enteredSeries.b[6]);
				  $('.eightNumber').val(enteredSeries.b[7]);
     	}

     	else if(attemptedArray[pageCount] == 'attempted' && pageCount==2){
     		
		 	  	  $('.firstNumber').val(enteredSeries.c[0]);
				  $('.secondNumber').val(enteredSeries.c[1]);
				  $('.thirdNumber').val(enteredSeries.c[2]);
				  $('.fourthNumber').val(enteredSeries.c[3]);
				  $('.fifthNumber').val(enteredSeries.c[4]);
				  $('.sixthNumber').val(enteredSeries.a[5]);
				  $('.seventhNumber').val(enteredSeries.c[6]);
				  $('.eightNumber').val(enteredSeries.c[7]);
     	}

     	else if(attemptedArray[pageCount] == 'attempted' && pageCount==3){
     		
		 	  	  $('.firstNumber').val(enteredSeries.d[0]);
				  $('.secondNumber').val(enteredSeries.d[1]);
				  $('.thirdNumber').val(enteredSeries.d[2]);
				  $('.fourthNumber').val(enteredSeries.d[3]);
				  $('.fifthNumber').val(enteredSeries.d[4]);
				  $('.sixthNumber').val(enteredSeries.d[5]);
				  $('.seventhNumber').val(enteredSeries.d[6]);
				  $('.eightNumber').val(enteredSeries.d[7]);
     	}

     	else if(attemptedArray[pageCount] == 'attempted' && pageCount==4){
     		
		 	  	  $('.firstNumber').val(enteredSeries.e[0]);
				  $('.secondNumber').val(enteredSeries.e[1]);
				  $('.thirdNumber').val(enteredSeries.e[2]);
				  $('.fourthNumber').val(enteredSeries.e[3]);
				  $('.fifthNumber').val(enteredSeries.e[4]);
				  $('.sixthNumber').val(enteredSeries.e[5]);
				  $('.seventhNumber').val(enteredSeries.e[6]);
				  $('.eightNumber').val(enteredSeries.e[7]);
     	}

		},

     handlePage : function(){
     	var self = this;
     	$('#nextButton').unbind('click').click(function(){
     		if (pageCount < 4){
     			$('.previousButton').css({'display':'block'});
     			pageCount++;
     			// attempted = 'notAttempted';
     			$('.submitButton').css({'cursor':'auto','opacity':'0.5'});
     			self.fillDataIntoView();
     		}

     		else if(pageCount == 4){
     			$('.nextButton').css({'display':'none'});

     		}
     	});

     	$('#previousButton').unbind('click').click(function(){
     		if(pageCount > 0){
     			$('.nextButton').css({'display':'block'});
     			pageCount--;
     			// attempted = 'notAttempted';
     			$('.submitButton').css({'cursor':'auto','opacity':'0.5'});
     			self.fillDataIntoView();
     		}
     		else if(pageCount ==0){
     			$('.previousButton').css({'display':'none'});
     		}
     	});
     },

    checkInputState : function(){
		 
			  $(".form > :input").keyup(function() {
		        var $emptyFields = $('.form :input').filter(function() {
		            return $.trim(this.value) === "";
		        });

		        if (!$emptyFields.length) {
		           $('.submitButton').css({'cursor':'pointer','opacity':'1'});
		        }

		        else{
		        	$('.submitButton').css({'cursor':'auto','opacity':'0.5'});
		        }
		    });
    },

    submitHandler: function(){
    enteredAnswer = [];
      tempArray = [];
      if(attemptedArray[pageCount] != 'attempted'){
      	 $(".form :input").each(function(){
		 var input = $(this);
		 enteredAnswer.push(parseInt(input.val()));
		 tempArray.push(parseInt(input.val()));
		});
      	 enteredAnswer.sort(function(a, b){return a-b});
		}

		else{
      	$('#feedback').dialog({
       	  	open: function() {
			      var markup = 'You have attempted this question';
			      $(this).html(markup);
			    },
       	  });
      }

       if(pageCount == 0 && enteredSeries.a !=[]){
       	enteredSeries.a = tempArray;
       }
       if(pageCount == 1 && enteredAnswer.b !=[]){
       	enteredSeries.b = tempArray;
       }
       if(pageCount == 2 && enteredSeries.c != []){
       	enteredSeries.c = tempArray;
       }
       if(pageCount == 3 && enteredSeries.d != []){
       	enteredSeries.d = tempArray;
       }
       if(pageCount == 4 && enteredSeries.ce != []){
       	enteredSeries.e = tempArray;
       }

       enteredAnswer.forEach( function( value ) {
		    if( filldataarray.indexOf( value ) != -1 ) {
		       attemptedArray[pageCount] = 'attempted';
				   $('#feedback').dialog({
				   	open: function() {
					      var markup = 'Answer is Correct';
					      $(this).html(markup);
					    },
				   });
		    }

		    else{
		    	 attemptedArray[pageCount] = 'attempted';
			       	  $('#feedback').dialog({
			       	  	open: function() {
						      var markup = 'Answer is InCorrect';
						      $(this).html(markup);
						    },
			       	  });
		    }
        });
    }
 }
})();
