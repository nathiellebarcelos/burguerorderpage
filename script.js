//Function to verify if character lenght is equal to 9
function lengthRestriction(elem, min, max){
	var uInput = elem.value;
	if(uInput.length >= min && uInput.length <= max){
    window.location.href = "order.html";
		return true;
	}else{
		alert("Please enter 9 characters");
		elem.focus();
		return false;
	}
}

//Funciotn to verify if field is not empty
function required(){
  var empt = document.forms["form1"]["text1"].value;
    if (empt == ""){
    alert("Please enter your username");
    return false;
  }
  else {
    
    return true; 
  }
}

 //Set up an associative array 
 //The value represents the cost of the burguer i.e. 6oz Large is €7.00
 //We use this this array when the user selects a burguer option from the form
 var burguer_prices= new Array();
     burguer_prices["None"]=0;
     burguer_prices["6oz Large"]=7.00;
     burguer_prices["10oz Extra-Large"]=9.00;
     burguer_prices["16oz Supersize"]=17.50;

//---------------------------------------------------------------------------------------------------//
//Function to increase and deacrease buttons for Classic Burguer
    function increment() {
      document.getElementById('demoInput').stepUp();
   }
   function decrement() {
      document.getElementById('demoInput').stepDown();
   }

function getClassicBurguerPrice(){
    var classicprice=0;
        qtd = document.getElementById('demoInput').value;
        i = 0;
        
    //Get a reference to the form id="orderform"
    var theForm = document.forms["orderform"];
    //Get a reference to the select id="burguer-size"
     var selectedburguer = theForm.elements["burguer-size"];

   //Alert user of buyng a superSize burguer
    /*if (burguer_prices[selectedburguer.value] == burguer_prices["16oz Supersize"]){
      alert('You selected a SuperSize burguer. This could be unheathy!');
     }*/
   //add buguer price to total each time user increasing quantity button 
   while (document.getElementById('demoInput').value != i){
    classicprice += burguer_prices[selectedburguer.value];
    i++
   }
   //finally we return burguerPrice
    return classicprice;
  }
//---------------------------------------------------------------------------------------------------//
//Function to increase and deacrease buttons for Cheese Burguer
  function increment2() {
    document.getElementById('demoInput2').stepUp();
 }
 function decrement2() {
    document.getElementById('demoInput2').stepDown();
 }

  function getCheeseBurguerPrice(){
    var cheeseprice=0;
        qtd = document.getElementById('demoInput2').value;
        j = 0;
    //Get a reference to the form id="orderform1"
    var theForm = document.forms["orderform1"];
    //Get a reference to the select id="burguer-size"
     var selectedburguer = theForm.elements["burguer-size"];
  
   //Alert user of buyng a superSize burguer
   /* if (burguer_prices[selectedburguer.value] == burguer_prices["16oz Supersize"]){
      alert('You selected a SuperSize burguer. This could be unheathy!');
     }*/
  //add buguer price to total each time user increasing quantity button    
   while (document.getElementById('demoInput2').value != j){
    cheeseprice += burguer_prices[selectedburguer.value];
    j++;
   }
    //finally we return burguerPrice
    return cheeseprice;
  }
//---------------------------------------------------------------------------------------------------//
//Function to increase and deacrease buttons for Bacon Burguer
function increment3() {
    document.getElementById('demoInput3').stepUp();
 }
 function decrement3() {
    document.getElementById('demoInput3').stepDown();
 }

 //Function to get Bacon bruguer price
  function getBaconBurguerPrice(){
    var baconprice=0;
        qtd = document.getElementById('demoInput3').value;
        j = 0;
    //Get a reference to the form id="orderform2"
    var theForm = document.forms["orderform2"];
    //Get a reference to the select id="burguer-size"
     var selectedburguer = theForm.elements["burguer-size"];
     
    //Alert user of buyng a superSize burguer
    /*if (burguer_prices[selectedburguer.value] == burguer_prices["16oz Supersize"]){
      alert('You selected a SuperSize burguer. This could be unheathy!');
     }*/
    
  //add buguer price to total each time user increasing quantity button   
   while (document.getElementById('demoInput3').value != j){
    baconprice += burguer_prices[selectedburguer.value];
    j++;
   }
    //finally we return burguerPrice
    return baconprice;
  }
//---------------------------------------------------------------------------------------------------//
//Function to calculate the total of all burguers
     function calculateTotal(){
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var burguerprice =  getClassicBurguerPrice() + getCheeseBurguerPrice() + getBaconBurguerPrice();
    //display the result

    var divobj = document.getElementById('totalPrice');
    var discountvalidate = document.getElementById('discount').value;
    var dct = (10/100) * burguerprice;
    divobj.style.display='block';
    
    //Validade and apply discount of 10%
    if (discountvalidate == "tacotopping"){
      burguerprice = burguerprice - dct;
    } else if (discountvalidate == ""){
      
    }else{
      alert('Code invalid!');
    }
    divobj.innerHTML = "Total  €"+burguerprice;   
    
} 
