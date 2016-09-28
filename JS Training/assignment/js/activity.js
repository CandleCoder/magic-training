var activity = (function () {
	
	var alphabets =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	return{
		createAlphabetSpan :function(){
		for(var i=0;i<alphabets.length;i++)	{
			console.log(alphabets[i]);
            var main = $('#mainDiv');
			var elm = '<div class="alphabet">' + alphabets[i] +
	          '</div>';
           $(elm).appendTo(main);
		}

		$( ".alphabet" ).draggable({
		  addClasses: false
		});
		
    },
}
})();

activity.createAlphabetSpan();