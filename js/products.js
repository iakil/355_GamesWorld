	let nettotal=0;
	let totalqty = 0;
	let items = "<b>Item ---  Price <b><br>";

	var check_btns =document.getElementsByClassName('check-out');

		
	function setItem(i){
			var check_btns =document.getElementsByClassName('check-out');
			var item = check_btns[i].getAttribute('id');
			var price = check_btns[i].getAttribute('value');
			var qty = 1;

			nettotal+= parseInt(price);
			items += "<i>"+item+"  | "+ parseInt(price)+'$</i><br>';
			alert('Added to Cart!');
	}
		

	document.getElementById('cart').addEventListener('click',function(){
		document.getElementById('popup').style.display = 'block';

		document.getElementById('itemprice').innerHTML = items;
		
		document.getElementById('totalprice').innerHTML =nettotal+'$';
	})

	document.getElementById('close-popup').addEventListener('click',function(){
		document.getElementById('popup').style.display = 'none';

	})
	

		