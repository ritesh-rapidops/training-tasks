let elemArray=[];
let firstElement=document.getElementById('firstElement');
let lastElement=document.getElementById('lastElement');


function arrSize() {
	return elemArray.length;
}

function createElement(value){
	let element=document.createElement('div');
	element.id="element"+(arrSize());
	element.classList.add('element');
	element.innerText=value;
	return element;
}

function addToArray(id, value, operation) {
	let elementObj={id: id, value: value};
	if(operation==="push")
		elemArray.push(elementObj);
	else
		elemArray.unshift(elementObj);
}

function removeFromArray(operation) {
	let element;
	if(operation==="pop")
		element=elemArray.pop();
	else
		element=elemArray.shift();
	return element;
}

function pushElement(value) {
	let element=createElement(value);			
	firstElement.parentNode.insertBefore(element, firstElement.nextSibling);
	addToArray(element.id, element.innerText, "push");
	element.classList.add('push-anim');
	setTimeout(function () {
		element.classList.remove('push-anim');
	}, 500);
}

function popElement() {
	if (arrSize() > 0) {
		let element=document.getElementById(elemArray[(arrSize()-1)].id);
		element.classList.add("pop-anim");	
		setTimeout(function () {
			element.classList.remove("pop-anim");
			element.remove();
		}, 500);
		removeFromArray("pop");
	}else{
		alert("You can\'t pop anything out of nothing!");
	}
}

function enqueueElement(value) {
	let element=createElement(value);			
	lastElement.parentNode.insertBefore(element, lastElement);
	addToArray(element.id, element.innerText, "enqueue");
	element.classList.add('enqueue-anim');
	setTimeout(function () {
		element.classList.remove('enqueue-anim');
	}, 500);
}

function dequeueElement() {
	if (arrSize() > 0) {
		let element=document.getElementById(elemArray[0].id);
		element.classList.add("dequeue-anim");	
		setTimeout(function () {
			element.classList.remove("dequeue-anim");
			element.remove();
		}, 500);
		removeFromArray("dequeue");
	}else{
		alert("Nothing in queue to get dequeued!");
	}
}