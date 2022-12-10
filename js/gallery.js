

var items = document.getElementsByClassName('preview-item');
let titles = ["War Heros 2022", "Assasins Creed- Brotherhood", "Sniper 3","PUBG World"] 


var k = 0;
setInterval(function(){
	document.getElementById('preview').src = items[k].src;
		document.getElementById('title').innerHTML = titles[k];
	k++;
	if(k==items.length){
		k=0;
	}
	
},3000)