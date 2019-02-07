async function readFile(path) {
	let fileDataReq = await fetch(path);
	let fileText = await fileDataReq.text();
	return fileText;
}

parseCSV('./assets/test.csv');

async function parseCSV(path){
	let fileText = await readFile(path);
	let linesArr = fileText.toString().split('\n');

	//let headLine = linesArr.splice(0,1); //built-in js function
	let headLine = _.head(linesArr); //lodash function
	linesArr = _.tail(linesArr); //lodash function

	// linesArr = linesArr.splice(0,linesArr.length-1); //built-in js function
	linesArr=_.initial(linesArr); //lodash function

	let keys = headLine.toString().split(',');
	let jArr=[];
	for(let line of linesArr) {
		let object={};
		line=line.substr(0,line.length-1);
		let values = line.split(',');
		for(let i=0; i<keys.length;i++) {
			object[keys[i]]=values[i];
		}
		jArr.push(object);
	}
	console.log(jArr);
}