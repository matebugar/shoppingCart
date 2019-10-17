var items = [{
	name: "Apple", 
	price: 1,
	qtty: 0
}, {
	name: "Banana", 
	price: 2,
	qtty: 0
}];

for ( let i = 0; i < items.length; i++){
	document.getElementById("items").innerHTML += `
	<p>Name:${items[i].name}</p>
	<p>Price:${items[i].price}</p>
	<input type="submit" class="btn" value ="Add to cart">
	<hr>
	`;
}

var cart = [];

function addToCart(obj) {
	console.log(obj);
	if(obj.qtty == 0) {
		cart.push(obj);
		obj.qtty ++;
		showCart();
	} else {
		obj.qtty ++;
		showCart(); 
	}
}

var btns = document.getElementsByClassName("btn");
console.log(btns)
for( let i = 0; i < btns.length ; i += 1){
	btns[i].addEventListener("click", function() {
		addToCart(items[i])
});
}


function showCart() { 
	document.getElementById("cart").innerHTML = "";

	for(let i = 0; i < cart.length; i ++ ){
		document.getElementById("cart").innerHTML += `
		<p>${cart[i].name} | ${cart[i].price} | ${cart[i].qtty}</p>
`
	}
}
