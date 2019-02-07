class person{

	constructor(name){
		this.name = name;
	}

	get name(){ return this._name }

	set name(name){ this._name = name }

	toString(){
		let stringObj="";
		for(let property in this){
			stringObj += `\t${property} : ${this[property]}\n`
		}
		return stringObj;
	}
}

class student extends person{

	constructor(name,studentid){
		super(name);
		this.studentid = studentid;
	}

	get studentid() { return this._studentid }
	set studentid(studentid) { this._studentid = studentid }

	get marks() { return this._marks }
	set marks(marks) { this._marks = marks }

	generateMarks(){
		this.marks = Number(Math.random()*100).toFixed(2);
	}

	test(){
		if (this.name != undefined && this.studentid != undefined) {
			console.log(`${this.name} Appeared for test...`);
			this.generateMarks();
		}else{
			if(this.name == undefined && this.studentid == undefined) {
				throw new valuesNotSetError("StudentId and Name are not set yet");
			}else if (this.name == undefined) {
				throw new valuesNotSetError("Name is not set yet");
			}else if (this.studentid == undefined) {
				throw new valuesNotSetError("Studentid is not set yet");
			}
		}
	}

	
	test(num){
		console.log(num);
	}

	printResult(){
		// abc=0/0;
		if(this.marks == undefined){
			throw new testNotGivenError(`${this.name} is yet to be appeared for test.`);
		}
		console.log(`Result: ${this.name}(ID: ${this.studentid}) obtained ${this.marks} marks.`);		
	}

	toString(){
		return `(Student) \n ${super.toString()}`;
	}
}

class testNotGivenError extends Error{
	constructor(message, cause){
		super(message,cause);
	}
}

class valuesNotSetError extends Error{
	constructor(message, cause){
		super(message,cause);
	}
}

let person1 = new person("ABC");
console.log(`\n---:Person 1:--- \n${person1.toString()}`);

let student1 = new student("BCD",1);
console.log(`\n---:Person 2:--- \n${student1.toString()}`);
// student1.printResult();
student1.test();

let student2 = new student();
student2.test();