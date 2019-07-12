let ID=0;
function createArrowUp(){

	var svgURI = 'http://www.w3.org/2000/svg';
	var svg = document.createElementNS( svgURI, 'svg' );
	svg.setAttribute('viewBox', '0 0 100 100' );
	var path = document.createElementNS( svgURI, 'path' );
	path.setAttribute( 'd', 'M2 26h32L18 10 2 26z' );
	path.setAttribute('height', '50');
	path.setAttribute('width', '50');
	svg.appendChild(path);
	return svg;
}
function createArrowDown(){
	
	var svgURI = 'http://www.w3.org/2000/svg';
	var svg = document.createElementNS( svgURI, 'svg' );
	svg.setAttribute( 'viewBox', '0 0 100 100' );
	var path = document.createElementNS( svgURI, 'path' );
	path.setAttribute( 'd', 'M2 10h32L18 26 2 10z');
	path.setAttribute('height', '50');
	path.setAttribute('width', '50');
	svg.appendChild(path);
	return svg;
}
function createCounter(localId) {

	let counterDiv=document.createElement('div');
	counterDiv.id="div"+localId;

	let counterText=document.createElement('p')
	counterText.innerHTML=0;
	counterText.className="buttonSet countClass";
	counterText.id="p"+localId;

	let incrementButton=document.createElement('button');
	incrementButton.className="buttonSet buttonUp";
	var upArrowSvg=createArrowUp();
	incrementButton.appendChild(upArrowSvg);
	incrementButton.onclick=()=> {

		var counterP = document.getElementById("p"+localId);
		var count = counterP.innerHTML;
		count++;
		counterP.innerHTML=count;
	};
	counterDiv.appendChild(incrementButton);

	let remButton=document.createElement('button');
	remButton.className="buttonSet myRectangle";
	remButton.innerHTML="X";
	remButton.onclick=()=> {

		var currentDiv = document.getElementById("div"+localId);
		currentDiv.parentNode.removeChild(currentDiv);
		ID--;
	};
	counterDiv.appendChild(remButton);

	counterDiv.appendChild(counterText);

	let decrementButton=document.createElement('button');
	decrementButton.className="buttonSet buttonDown";
	var downArrowSvg=createArrowDown();
	decrementButton.appendChild(downArrowSvg);
	decrementButton.onclick=()=> {

		var counterP = document.getElementById("p"+localId);
		var count = counterP.innerHTML;
		count--;
		counterP.innerHTML=count;
	};
	counterDiv.appendChild(decrementButton);

	let resetButton=document.createElement('button');
	resetButton.className="buttonSet resetB";
	resetButton.innerHTML="Reset";
	resetButton.onclick=()=> {

		var counterP = document.querySelectorAll("p"+localId);
		var count = counterP.innerHTML;
		count=0;
		counterP.innerHTML=count;
	};
	counterDiv.appendChild(resetButton);

	return counterDiv;
}

function addCounter() {

	let localId=ID;
	var currentDiv = document.getElementById("container");
	newCounter=createCounter(localId);
	currentDiv.appendChild(newCounter);
	ID++;
}

function removeCounter() {

	var currentDiv = document.getElementById("container");
	if (currentDiv.hasChildNodes()) {
		currentDiv.removeChild(currentDiv.lastChild);
		ID--;
	}
	else {
		alert("No counters to remove!");
	}
}

function allReset() {
		let resetAllVar = document.querySelectorAll('.countClass');
		for( let i=0; i < resetAllVar.length; i++ ) {
			resetAllVar[i].innerHTML=0;
		} 
	}