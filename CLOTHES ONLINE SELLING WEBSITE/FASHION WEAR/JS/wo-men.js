if(document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready)
}
else{
    ready()
}

function ready(){

    var searchItems = document.getElementById("srchProducts");
    console.log(searchItems);
    
    searchItems.addEventListener("keyup", function(e){

        showContent();


        let filter = e.target.value.toLowerCase();
        //console.log(filter);

        let items = document.getElementsByClassName("items");
        //console.log(items);

        Array.from(items).forEach((item)=>{
            let heading = item.textContent.toLowerCase();

            if(heading.indexOf(filter) != -1){
                item.style.display = "inline-block";
            }
            else
            {
                item.style.display = "none";
            }
        })
    })

    var buttonremove = document.getElementsByClassName("btn-rem");
    console.log(buttonremove);

    for(var i = 0; i < buttonremove.length; i++){
        var rem = buttonremove[i]
        rem.addEventListener('click', removeItem);
    }

    var inputQuantity = document.getElementsByClassName('cart-quantity-input');
    for(var i = 0; i < inputQuantity.length; i++){
        var iQuant = inputQuantity[i];
        iQuant.addEventListener('change', quantityChanged);
    }    

    var buttonAdd = document.getElementsByClassName('btn-add');
    console.log(buttonAdd);
    for(var i = 0; i < buttonAdd.length; i++){
        var add = buttonAdd[i]
        //console.log(add);
        add.addEventListener('click', addItem);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

}

function addItem(e){
    var itemAdded = e.target
    var Items = itemAdded.parentElement.parentElement;
    //console.log(Items);
    var itemImage = Items.getElementsByClassName('iImage')[0].src;
    console.log(itemImage);
    var itemName = Items.getElementsByClassName('iName')[0].innerText;
    console.log(itemName);
    var itemPrice = Items.getElementsByClassName('iPrice')[0].innerText;
    console.log(itemPrice);

    addItemToCart(itemImage, itemName, itemPrice);
    updateCartTotal(); 
}

function addItemToCart(itemImage, itemName, itemPrice){
     var cartRow = document.createElement('li');
    //cartRow.innerText = itemName;
     var allCarts = document.getElementsByClassName('cartAllItems')[0];
    // console.log(allCarts);
    var cartItemNames = allCarts.getElementsByClassName('itemCart-Name');

    for(var i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == itemName){
            alert("This item is already added in the shopping cart");
            return;
        }
    }
     var cartRowContent = `<li class="item-cartRow">
        <div class="itemCart-Image">
            <img src=" ${itemImage}" width="20%" height="20%" >
        </div>
        <!-- <div id="item-heading"> -->
        <h4 class="itemCart-Name">${itemName}</h4>

        <h5 class="itemCart-Price">${itemPrice}</h5>
        <div class="itemCart-Quantity">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-rem" type="button">Remove</button>
        </div>
        <!-- </div> -->
        </li>`

    cartRow.innerHTML  = cartRowContent;

     allCarts.append(cartRow);
     alert("Item is added in the shopping cart");

     cartRow.getElementsByClassName('btn-rem')[0].addEventListener('click', removeItem);
     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);


}


    
  

function quantityChanged(e){
    var quant = e.target
    if(isNaN(quant.value) || quant.value <= 0){
        quant.value = 1;
    }
    updateCartTotal();
}
function removeItem(e){
    var buttonClicked = e.target

    buttonClicked.parentElement.parentElement.remove()
    //console.log('clicked');
    updateCartTotal();
}

function updateCartTotal(){
  
    var allProducts = document.getElementsByClassName('cartAllItems')[0];
    //console.log(allProducts);
    var cartItems = allProducts.getElementsByClassName('item-cartRow');
    var total = 0;
    for(var i = 0; i < cartItems.length; i++){
        var cartItem = cartItems[i];
        var itemPrice = cartItem.getElementsByClassName('itemCart-Price')[0];
        var itemQuantity = cartItem.getElementsByClassName('cart-quantity-input')[0];
        console.log(itemPrice, itemQuantity);
        var Price = parseFloat(itemPrice.innerText.replace('$', ''));
        var quantity = itemQuantity.value;
        total = total + (Price * quantity);
    }
    total = Math.round(total * 100) /100;
    document.getElementsByClassName('item-PriceTotal')[0].innerText = '$' + total;
} 
  

  
function purchaseClicked(){

    var calPrice = document.getElementsByClassName('item-PriceTotal')[0].innerText;
    console.log(calPrice);
 
    if(calPrice != "$0"){

    var purchaseDetail = {
            
        'purchaseTotal': calPrice,

    }
    
        localStorage.setItem('purchaseInfo',JSON.stringify(purchaseDetail));

        window.open("../HTML/checkout.html", '_blank')
    }
    else{
        alert("Your shopping cart is empty!");
    }


}



//--------------------------------------------------------------------------------------------------------------//

/* Open when someone clicks on the span element */
function openCart() {
    document.getElementById("myItem").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */

function closeCart() {
    document.getElementById("myItem").style.width = "0%";
}   
  //--------------------------------------------------------------------------------------------------------------//

function showContent(){
    document.getElementById("hidden").style.display = "block";
    document.getElementById("loadMore").style.display = "none";
}

function hideContent(){
    document.getElementById("hidden").style.display = "none";
    document.getElementById("loadMore").style.display = "block";

}


 




//--------------------------------------------------------------------------------------------------------------//


