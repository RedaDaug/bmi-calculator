
function bmiCalculator(){
	
	var weight = parseInt(document.getElementById("weight").value);
	var height = parseInt(document.getElementById("height").value);
	height = height/100;
	
	console.log(weight);
	console.log(height);
	
	var errMsg ="";
	
	if (weight <= 0) {
		errMsg += "Weight cannot be less than 0 kg. Please double check your value. \n"
			
	} 
	
	if (height <= 0) {
		errMsg += "Height cannot be less than 0 cm. Please double check your value. \n"		
	} 
	
	if (errMsg != "") {
		alert(errMsg);
	}
	
	else {			
		var bmi = (weight/(height*height));	
		bmi = bmi.toFixed(2);
	}
	
	if (bmi < 19) {
		alert("Your BMI is: " + bmi +". Your are underweight.");
	}	
	
	else if (bmi >= 19) {
		alert("Your BMI is: " + bmi +". You have a healthy weight.");
	}	
	
	else if (bmi >= 25) {
		alert("Your BMI is: " + bmi +". You are overweight.");
	}	
	
	else if (bmi >= 30) {
		alert("Your BMI is: " + bmi +". You are obese.");
	}

}


