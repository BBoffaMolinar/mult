"use strict";

/*
const opacDisabled = 0.3;  //transparência para botões desactivados
const imgFolder = "../resources/image/";
const txtFolder = "../resources/text/";
const audioVolume = 1;
*/

(function()
{
	window.addEventListener("load", main);
}());


function main(){	
	const imgFolder = "../resources/image/";
	const txtFolder = "../resources/text/";
	const opacDisabled = 0.3;
	const audioVolume = 1;
	const min = 1;
	const max = 16;
	var musica = new Audio();
	musica.src = "../resources/audio/track.mp3";
	musica.controls = true;
	musica.play();
	var num = 1;
	var numphoto = document.getElementById("photo");
	var numtxt = document.getElementById("text");
	numtxt.src = txtFolder+ "0" + num +".txt";
	numphoto.src = imgFolder+ "0" + num +".jpg";

	

	var btnInicio = document.getElementById("firstBtn");
	var btnBack = document.getElementById("backBtn");
	var btnNext = document.getElementById("nextBtn");
	var btnEnd = document.getElementById("lastBtn");
	var btnSlide = document.getElementById("slideShowBtn");
	var btnSom = document.getElementById("soundBtn");
	

 	
	var btnIn = function(ev){
		btnInicioHandler(ev, num,numtxt, numphoto, txtFolder,imgFolder,opacDisabled);
	}

	btnInicio.addEventListener("click", btnIn);
	btnInicio.addEventListener("minclick",DISABLE);
	var btnBa = function(ev){
		btnBackHandler(ev, num,numtxt, numphoto, txtFolder,imgFolder);
	}
	btnBack.addEventListener("click", btnBa);
	btnBack.addEventListener("minclick",DISABLE);

	var btnNe = function(ev){
		 btnNextHandler(ev, num,numtxt, numphoto, txtFolder,imgFolder);
	}
	btnNext.addEventListener("click", btnNe);
	btnNext.addEventListener("maxclick",DISABLE);

	var btnEn = function(ev){
		btnEndHandler(ev, num,numtxt, numphoto, txtFolder,imgFolder);
	}
	btnEnd.addEventListener("click", btnEn);
	btnEnd.addEventListener("maxclick",DISABLE);
	var btnSl = function(ev){
		btnSlideHandler(ev, num, numtxt, numphoto, txtFolder,imgFolder);
	}
	btnSlide.addEventListener("click", btnSl);

	var Som = function(ev){
		btnSomHandler(ev,musica);
	}
	btnSom.addEventListener("click", Som);
	}



/*
ADD CODE
*/

/*window.addEventListener(keypress)
	teclado keypress == click
	teclado key down == clica na tecla
	teclado	key up == solta a tecla*/ 

/* som se muted, load muted img
	som se nao muted, load sound img*/ 

function btnSomHandler(ev,musica){
var volume = musica.muted;
	if(volume == false){
		volume = true;
		var off = ev.target;
		off.src = "../resources/extra/soundOffBtn.png";
		off.display = "block";
	}
else if(volume == true){
		volume = false;
		var on = ev.target;
		on.src = "../resources/extra/soundOnBtn.png";
		on.display = "block";
	}
}


function btnInicioHandler(ev,num,numtxt, numphoto, txtFolder,imgFolder){
	num = 1;
 numtxt.src = txtFolder + 0 + num +".txt";
 numphoto.src = imgFolder + 0 + num +".jpg";
 var btnI = ev.currentTarget;
 	var evp = new Event("minlicks");
   btnI.dispatchEvent(evp);
}

function btnBackHandler(ev,num,numtxt, numphoto,txtFolder,imgFolder){
if(num > 2){
	let but = ev.currentTarget;
	but.style.opacity = 1;
	but.disabled = false;
	num = num -1;
	if (num <=9){
		numtxt.src = txtFolder + "0" + num +".txt";
		numphoto.src = imgFolder + "0" + num +".jpg";
		}
	else{
	 numtxt.src = txtFolder + num +".txt";
	 numphoto.src = imgFolder + num +".jpg";
		}
}
else if(num == 2){
		num = num -1;
		numtxt.src = txtFolder + "0" + num +".txt";
		numphoto.src = imgFolder + "0" + num +".jpg";
		var btnB = ev.currentTarget;
		var evp = new Event("minlicks");
    	btnB.dispatchEvent(evp);
	}
}

function btnNextHandler(ev,num,numtxt, numphoto,txtFolder,imgFolder){
if(num < 15){
	let but = ev.currentTarget;
	but.style.opacity = 1;
	but.disabled = false;
	num = num +1;
	if (num <=9){
		 numtxt.src = txtFolder+"0"+ num +".txt";
 		 numphoto.src = imgFolder+"0"+ num +".jpg";
		}
		else{
		 numtxt.src = txtFolder+ num +".txt";
		 numphoto.src = imgFolder+ num +".jpg";
    	}
} 	
 else if(num == 15){
		num = num +1;
		numtxt.src = txtFolder+ num +".txt";
		numphoto.src = imgFolder+ num +".jpg";
		var btnN = ev.currentTarget;
		var evp = new Event("maxlicks");
    	btnN.dispatchEvent(evp);
	 }
} 

function btnEndHandler(ev, num, numtxt, numphoto,txtFolder,imgFolder){
 	num = 16;
 	numtxt.src = txtFolder + num +".txt";
 	numphoto.src = imgFolder +  num +".jpg";
 	var btnE = ev.currentTarget;
	var evp = new Event("maxlicks");
   	btnE.dispatchEvent(evp); 
 
}

function DISABLE(evp){
	var disbtn = evp.currentTarget;
	disbtn.style.ocacity = opacDisabled;
	disbtn.style = disable;
}

function CHANGE(num,txtFolder,imgFolder){
	numtxt.src = txtFolder+ num +".txt";
	numphoto.src = imgFolder+ num +".jpg";
}