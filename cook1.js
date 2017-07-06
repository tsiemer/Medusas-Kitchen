//MY FIRST COOK WHO IS WALKIN ONE WAY DAMN IT!!
let w = document.getElementById("waiter");

function listener(e) {
	console.dir(e);
	switch(e.type) {
		case "animationstart":
		console.log('start');
		footSteps1();
		  break;

		case "animationend":
		document.getElementById('type').play();
		document.getElementById('orderUp').play();
		console.log('end');
		  break;
		case "animationiteration":
			if(w.attributes["src"].nodeValue.indexOf('right') > 0) {
				w.attributes['src'].nodeValue = "pizza-kitchen/pizza-man-right.gif";
			}else{
				w.attributes['src'].nodeValue = "pizza-kitchen/pizza-man-left.gif";
			}
		  console.log(`new loop started after ${e.elapsedTime} seconds`);
		  break;
	}
}
w.addEventListener("animationstart",listener, false);
w.addEventListener("animationend",listener, false);
w.addEventListener("animationiteration",listener, false);
