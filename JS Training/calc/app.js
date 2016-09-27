var tempArray = [];
var calculatedValue;
var calculator = (function() {
    
     return {
     	add : function(n1,n2){
     		calculatedValue = n1+n2;
		},

		mult: function(n1,n2){
			calculatedValue =  n1*n2;
		}
     }
})();

// calculator.add(2,4);

/*Dom Manupulations*/
var calculatorView = (function(){

})();
function pressed(ref){  
    var value = ref.innerHTML;
    tempArray.push(value);
    document.getElementById("inputNumber").value = this.tempArray;
}

function calculate(ref){
	var value = ref.innerHTML;
	if(tempArray[1] == "+"){
		var num1 = parseInt(tempArray[0]);
		var num2 = parseInt(tempArray[2]);
		calculator.add(num1,num2);
		//console.log(calculatedValue);
		document.getElementById("inputNumber").value = "";
		document.getElementById("inputNumber").value = calculatedValue;
	}

	if(tempArray[1] == "*"){
		var num1 = parseInt(tempArray[0]);
		var num2 = parseInt(tempArray[2]);
		calculator.mult(num1,num2);
		console.log(calculatedValue);
		document.getElementById("inputNumber").value = "";
		document.getElementById("inputNumber").value = calculatedValue;
	}
}

function clearDom(ref){
	document.getElementById("inputNumber").value = "";
	tempArray = [];
	calculatedValue = null;
}