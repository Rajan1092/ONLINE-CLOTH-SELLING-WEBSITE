
document.addEventListener('DOMContentLoaded', function(){
	
	
	var myObj = JSON.parse(localStorage.getItem('userInfo'));
	//console.log(myObj);
	
	// document.getElementById('userSalut').selectedIndex = myObj.userSalutation;
	document.getElementById('userFName').textContent = myObj.userFirstName;
	document.getElementById('userLName').textContent = myObj.userLastName;
	localStorage.removeItem('userInfo');
	//console.log(localStorage.getItem('userInfo'));

})


document.addEventListener('DOMContentLoaded', function(){

	var inputs = document.querySelectorAll("input");
	console.log(inputs);

	var pattern = {
	
		
		fName:/^[a-zA-Z\s]{1,}$/,
		lName:/^[a-zA-Z\s]{1,}$/,
		cNum:/^[0-9]{15}$/,
		cvv:/^[0-9]{2}$/
		
	}



	function validate(field, regex){

		if(regex.test(field.value)){
			
			field.className = "valid";

		}else{
		
			field.className = "invalid";
		}
	}

	inputs.forEach((input)=>{
		input.addEventListener("keydown",(e)=>{
			
			validate(e.target, pattern[e.target.attributes.name.value]);

		})
	})

	
})	



function showContent() {
	
	var chk = document.getElementById('content');
	chk.style.display = 'block'
	
  }

function radioBtn() {
	alert("You will be redirected to Paypal site");	
	window.open("https://www.paypal.com/ca/signin", '_blank')
}



function required(){
	var fr = document.forms["myForm"]["fName"].value;
	var ls = document.forms["myForm"]["lName"].value;
	var cNum = document.forms["myForm"]["cNum"].value;
	var cvv = document.forms["myForm"]["cvv"].value;

	if(fr == "" && ls == "" && cNum == "" && cvv == ""){
		alert("Please enter all field(s)");
		return false;
	}else if(fr == "" && ls != "" && cNum != "" && cvv != ""){
		alert("Please enter your first name");
		return false;
	}else if(fr != "" && ls == "" && cNum != "" && cvv != ""){
		alert("Please enter your last name");
		return false;
	}else if(fr != "" && ls != "" && cNum == "" && cvv != ""){
		alert("Please enter your card number");
		return false;
	}else if(fr != "" && ls != "" && cNum != "" && cvv == ""){
		alert("Please enter your card cvv number");
		return false;
	}
	else{
		alert("Thank you for shopping with us!");
		return true;
	}
}
