document.addEventListener('DOMContentLoaded', function(){

    var myForm = document.forms[0];
    console.log(myForm);
	
	myForm.addEventListener('submit', function(e){
		
		// e.preventDefault();
        
        // var salutation = document.getElementsByTagName('option')[x].value;s
		var fName = document.getElementById('frname').value;
		var lName = document.getElementById('lsname').value;
		
		//console.log(fName);
	
		
		var personalInfo = {
            
            // 'userSalutation':salutation,
            'userFirstName':fName,
            'userLastName':lName,

		}
		
		//console.log(personalInfo);
		//console.log(JSON.stringify(contactInfo));
		
		localStorage.setItem('userInfo',JSON.stringify(personalInfo));
		
		
	})
})

document.addEventListener('DOMContentLoaded', function(){

//---------------------------------------------------------------------------------------------------------//
	var myObj = JSON.parse(localStorage.getItem('purchaseInfo'));
	console.log(myObj);
	
	// document.getElementById('userSalut').selectedIndex = myObj.userSalutation;
	var itemPrice = document.getElementById('userPurchaseTotal').innerHTML = myObj.purchaseTotal;


	// localStorage.removeItem('userInfo');
	// console.log(localStorage.getItem('userInfo'));
	var price = parseFloat(itemPrice.replace('$', ''));
	console.log(price);
	var priceIncl = (price + ((0.05 * price) + (0.1 * price)));
	// console.log(Math.round((priceIncl * 100) /100));
	priceIncl = priceIncl.toFixed(2);
	console.log(priceIncl);
	document.getElementsByClassName('inclPrice')[0].innerText = '$' + priceIncl;



	var inputs = document.querySelectorAll("input");
	console.log(inputs);

	var pattern = {
	
		
		fName:/^[a-zA-Z\s]{1,}$/,
		lName:/^[a-zA-Z\s]{1,}$/,
		add:/^[a-zA-z0-9\s]+$/,
		city:/^[a-zA-Z\s]{2,}$/,
		prov:/^[a-zA-Z\s]{1,}$/,
		code:/^[a-zA-Z0-9\s]{5}$/,
		phnum:/^[0-9]{9}$/,
		email:/^([a-z\d-\.]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
		//(username)@(domain).(extension)(.something)
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
			
			//console.log(e.target.attributes.name.value);
			
			validate(e.target, pattern[e.target.attributes.name.value]);
			//aa = pattern[e.target.attributes.name.value]
			//console.log(aa);

		})
	})
	
})


function required(){
	var em = document.forms["myForm"]["email"].value;
	var fr = document.forms["myForm"]["fName"].value;
	var ls = document.forms["myForm"]["lName"].value;
	var adr = document.forms["myForm"]["add"].value;
	var ct = document.forms["myForm"]["city"].value;
	var cd = document.forms["myForm"]["code"].value;
	var pr = document.forms["myForm"]["prov"].value;


	if(em == "" && fr == "" && ls == "" && adr == "" && ct == "" && cd == "" && pr == ""){
		alert("Please enter all field(s)");
		return false;
	}else if(em == "" && (fr != "" && ls != "" && adr != "" && ct != "" && cd != "" && pr != "")){
		alert("Please enter your email");
		return false;
	}else if(fr == "" && (em != "" && ls != "" && adr != "" && ct != "" && cd != "" && pr != "")){
		alert("Please enter your first name");
		return false;
	}else if(ls == "" && (fr != "" && em != "" && adr != "" && ct != "" && cd != "" && pr != "")){
		alert("Please enter your last name");
		return false;
	}else if(adr == "" && (em != "" && fr != "" && ls != "" && ct != "" && cd != "" && pr != "")){
		alert("Please enter your address");
		return false;
	}else if(ct == "" && (em != "" && fr != "" && ls != "" && adr != "" && cd != "" && pr != "")){
		alert("Please enter your city");
		return false;
	}else if(cd == "" && (em != "" && fr != "" && ls != "" && adr != "" && ct != "" && pr != "")){
		alert("Please enter your zip code");
		return false;
	}else if(pr == "" && (em != "" && fr != "" && ls != "" && adr != "" && ct != "" && cd != "")){
		alert("Please enter your province");
		return false;
	}
	else{
		return true;
	}
}








