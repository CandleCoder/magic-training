//var randomnumber1 =  Math.floor(Math.random()*11)+1;
var activity = (function () {
	   
var serialdata=new Array();
	var pageCount = 1;

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
     	},

     	generateSeries: function(){
	// 		    var rand1=Math.floor(Math.random()*11)+1;
	// 			rand1=rand1*5;
	// 			var rand2=Math.floor(Math.random()*28)+1;
	// 			var rand3=Math.floor(Math.random()*91)+1;
	// 			var rand4=Math.floor(Math.random()*91)+8;
	// 			var rand5=Math.floor(Math.random()*21)+78;
				
	// 			for(var i=0;i<=7;i++)
	// 			{
	// 			serialdata[0][0][i]=rand1;
	// 			serialdata[1][0][i]=rand2;
	// 			serialdata[2][0][i]=rand3;
	// 			serialdata[3][0][i]=rand4;
	// 			serialdata[4][0][i]=rand5;
	// 			rand1=rand1+5;
	// 			rand2=rand2+10;
	// 			rand3=rand3+1;
	// 			rand4=rand4-1;
	// 			rand5=rand5-10;
	// 			}
				
	// 			var arr1=[],arr2=[],arr3=[],arr4=[],arr5=[];
	// 			while(arr1.length < 3)
	// 			{ 
				
	// 				var randomnumber1=Math.ceil(Math.random()*6)+1;
	// 				var randomnumber2=Math.ceil(Math.random()*6)+1;
	// 				var randomnumber3=Math.ceil(Math.random()*6)+1;
	// 				var randomnumber4=Math.ceil(Math.random()*6)+1;
	// 				var randomnumber5=Math.ceil(Math.random()*6)+1;
	// 				var found=false;
	// 				for(var i=0;i<arr1.length;i++)
	// 				{
	// 					if(arr1[i]==randomnumber1){found=true;break}
	// 					if(arr2[i]==randomnumber2){found=true;break}
	// 					if(arr3[i]==randomnumber3){found=true;break}
	// 					if(arr4[i]==randomnumber4){found=true;break}
	// 					if(arr5[i]==randomnumber5){found=true;break}
	// 				}
	// 				if(!found)
	// 				{
					
	// 					arr1[arr1.length]=randomnumber1;
					
					
	// 					arr2[arr2.length]=randomnumber2;
					
					
	// 					arr3[arr3.length]=randomnumber3;
					
					
					
	// 					arr4[arr4.length]=randomnumber4;
					
					
	// 					arr5[arr5.length]=randomnumber5;
					
						
	// 				}
	// 			}
	// 			arr1.sort();arr2.sort();arr3.sort();arr4.sort();arr5.sort();
	// 			for(var i=0;i<=2;i++)
	// 			{
	// 				serialdata[0][1][i]=arr1[i];
	// 				serialdata[1][1][i]=arr2[i];
	// 				serialdata[2][1][i]=arr3[i];
	// 				serialdata[3][1][i]=arr4[i];
	// 				serialdata[4][1][i]=arr5[i];
	// 			}
	// serialdata.sort( function() { return Math.random() - 0.5 } );
 //     	}
	
     },

     handlePage : function(){
     	$('#nextButton').unbind('click').click(function(){
     		if (pageCount < 4){
     			$('.previousButton').css({'display':'block'});
     			console.log(pageCount);
     			pageCount++;
     		}

     		else if(pageCount == 4){
     			$('.nextButton').css({'display':'none'});

     		}
     	});

     	$('#previousButton').unbind('click').click(function(){
     		console.log(pageCount);
     		if(pageCount > 1){
     			$('.nextButton').css({'display':'block'});
     			pageCount--;
     			console.log(pageCount);
     		}
     		else if(pageCount ==1){
     			$('.previousButton').css({'display':'none'});
     			console.log(pageCount);
     		}
     	});
     }
 }
})();

activity.init();