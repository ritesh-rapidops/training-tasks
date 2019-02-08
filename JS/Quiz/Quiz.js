class Quiz{
	constructor(name){
		if(Quiz.ID === undefined){
			Quiz.ID = 0;
		}
		this.id = ++Quiz.ID;
		this.name = name;
		return this;
	}

	getQuiz(){
		return this;
	}

	quizEvaluation(){

	}
}

