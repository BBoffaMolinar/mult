"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var elAnim = document.getElementById("animLast");
	elAnim.addEventListener("animationend", animLastAnimEndHandler);
}


function animLastAnimEndHandler(ev)
{
	var el = ev.target;
	el.removeEventListener("animationend", animLastAnimEndHandler);

	//remove animation elements from the main tag
	el.parentNode.removeChild(el.parentNode.children[0]);
	el.parentNode.removeChild(el.parentNode.children[0]);
	//nota: não é 1 porque o que era 1 passou a 0 depois da eliminação do anterior
	var vid = document.getElementById("video");
	vid.style.display = "block";
	vid.controls = true;
	vid.play();
	vid.addEventListener("ended",videoOff);
	}

/*
ADD CODE
*/


function videoOff(ev){
	var vel =ev.target;
	var btn1  = document.querySelector("button");
	
	btn1.click();
	vel.removeEventListener("ended",videoOff);
}	
	