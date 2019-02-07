/*
* Switch case
*/

	console.log("\n---------------------Switch-Case---------------------");

	var x=1;

	switch(x){
		case "1": /*Data type matters in case checking, it won't execute this*/
			console.log("Switch case: value of x is string");
			break;
		case 1:
			console.log("Switch case: value of x is 1");
			break;
		case 2:
			console.log("Switch case: value of x is 2");
			break;
		case 3:
			console.log("Switch case: value of x is 3");
			break;
	}

/* Grouping of case */

	switch(x){
		case 0:
	case 1:
		console.log("Switch case: value of x is either 0 or 1(Grouping of case)");
		break;
	case 2:
		console.log("Switch case: value of x is 2");
		break;
	case 3:
		console.log("Switch case: value of x is 3");
		break;
	}

/*
* Switch case
*/


/*
* Alert, Prompt and Confirm
*/

	/* alert("This is an alert");

	let promptRes=prompt("This is a prompt. Is this good?");
	alert(promptRes);

	if (confirm("Are sure about this confirmation?")) {
		alert("Yes");
	}else{
		alert("No");
	}*/

/*
* Alert, Prompt and Confirm
*/


/*
* Functions and Arrow functions
*/

	console.log("\n---------------------Functions and Arrow functions---------------------");

	function tempFunc(tempArg) {
		console.log("this is from Temp function: "+tempArg);
	}

	let tempFuncVar = tempFunc;

	this.tempFunc("Just an argument");
	tempFuncVar("from function variable");

	let arrowFunc = (tempArg) => { 
		console.log("This is arrow function: "+tempArg); 
	}

	arrowFunc("Just an argument");

/*
* Functions and Arrow functions
*/


/*
* JavaScript Objects
*/

	console.log("\n---------------------JavaScript Objects---------------------");

	let userObj={
		name: "ABC",
		surname: "XYZ"
	}

	console.log(userObj);
	console.log('Changing User\'s name...');
	userObj.name="ABCD";
	console.log(userObj);
	console.log("Deleting surname property...");
	delete userObj.surname;
	console.log(userObj);

/*
* JavaScript Objects
*/

/*
* Symbol Type
*/

	console.log("\n---------------------Symbol-Type---------------------");
	let id1=Symbol('id');
	let id2=Symbol('id');
	console.log("Symbol id1: " + id1.toString());
	console.log("Symbol id2: " + id2.toString());
	console.log("Comparision of these ids: " + (id1==id2));

	let user=[{
		[id1]: 1,
		name: "john"
	},
	{
		[id2]:2,
		name: "John2"
	}];

	console.log("Finding the unique symbol for user: " + user[1][id2]);


/*
* Symbol Type
*/

/*
* Object to primitive conversion
*/

	console.log("\n---------------------Object to primitive type---------------------");

	let obj = {
		name: "Object",
		value: 10,

		toString(){
			return "Object: " + this.value; 
		},

		toNumber(){
			return 10;
		},

		valueOf(){
			return this.value; 
		}
	};

	console.log("Object to String: "+obj.toString());
	console.log("Value of Object: "+obj.valueOf());
	console.log("Object to Number: "+obj.toNumber());

/*
* Object to primitive conversion
*/

function getRequest() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Mr6isDRkq59CQS2xyjpb5uZQbJPMcgX6&limit=5', true);
	
	request.send();

	request.onload = function() {
	  if (request.status != 200) { 
	    alert(request.status + ': ' + request.statusText); 
	  } else {
	    alert(request.responseText); 
	  }
	};
}