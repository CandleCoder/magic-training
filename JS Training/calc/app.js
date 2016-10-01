var calculatedValue = '';
var calculator = (function() {
     return {
     	calculate : function(string){
     		
			try {
				calculatedValue = eval(string);
				} catch (e) {
					if (e instanceof SyntaxError) {
					console.log("Handling Exception");
					}
					
				}
		}
     }
})();


/*Dom Manupulations*/

var domManipulator = (function(){
	
	return {
		 pressed : function(ref){  
			var value = ref.innerHTML;
			if( value != "="){
			calculatedValue = calculatedValue + value;
			document.getElementById("inputNumber").value = calculatedValue;
			calculator.calculate(calculatedValue);
			
			}
			
			else{
			calculatedValue = calculatedValue;
			calculator.calculate(calculatedValue);
			document.getElementById("inputNumber").value = calculatedValue;
			}
	    },


		 clearDom : function(ref){
			document.getElementById("inputNumber").value = "";
			calculatedValue = '';
		}
	}
})();

function clearAction(ref){
	domManipulator.clearDom(ref);
}

function actions(ref){
	domManipulator.pressed(ref);
}
