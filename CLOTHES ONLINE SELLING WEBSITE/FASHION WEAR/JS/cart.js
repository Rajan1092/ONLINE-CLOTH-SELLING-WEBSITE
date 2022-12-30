
document.addEventListener('DOMContentLoaded', function(){
	
	var myObj = JSON.parse(localStorage.getItem('itemInfo'));
	console.log(myObj);
	
	// document.getElementById('userSalut').selectedIndex = myObj.userSalutation;
	document.getElementById('name').textContent = myObj.ProdName;
	document.getElementById('price').textContent = myObj.ProdPrice;


	localStorage.removeItem('itemInfo');
	console.log(localStorage.getItem('itemInfo'));
	
})