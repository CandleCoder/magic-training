var activity = (function () {
	
	var alphabets =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	return{
		createAlphabetSpan :function(){
		for(var i=0;i<alphabets.length;i++)	{
            var main = $('#mainDiv');
			var elm = '<div class="alphabet">' + alphabets[i] +
	          '</div>';
           $(elm).appendTo(main);
		}

		$( ".alphabet" ).draggable({
		  addClasses: false,
		  helper: "clone",
		  	//revert: true,
		    stop: function(event, ui) {
		        // ui.helper.css('background-color', 'red');
		        // console.log('dragging done;');
		    },

		    revert : function(event, ui) {
            return !event;
         },



		});

		$(".droppable").droppable({
		    accept: '.alphabet',
		    drop: function(event, ui) {
		    	var droppable = $(this);
		    	var draggable = ui.helper;
		        draggable.clone().appendTo(droppable);
		    },

		    over: function(event, ui) {
            ui.draggable.remove();
            }

		});
		
    },

    fetchJSONData :function(){


    }
}
})();

activity.createAlphabetSpan();
activity.fetchJSONData();
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

//usage:
readTextFile("data/data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);

   // for (var key in data) {
   //     var arr = data[key];
   //     for( var i = 0; i < arr.length; i++ ) {
   //         var obj = arr[ i ];
   //         for (var instructions in obj) {
   //             if(obj.hasOwnProperty(instructions)){
   //                 console.log(instructions + " = " + obj[instructions]);
   //             }
   //         }
   //     }
   //  }

   //  // ...
   //  }
});