
let i = 0;
let text1 = "Hey! Burina!";
let text2 = "It is our anniversary!"
let text3 = "Know you laa, you always forgot"
let text4 = "It is our anniversary!"
let speed = 100;

function typeWriter(text, para){
	if(ok == 4){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
		else if(ok == 2){
			typeWriter(text2, "txt3");
		}
		else if(ok == 3){
			typeWriter(text2, "txt4");
		}
	}, 100);
//};
