class QuizMaster{ // Mediator between Quiz and Participant
	constructor(){
		this._quizes = [];
		this._participants = [];
	}

	get quizes() {
		return this._quizes;
	}

	set quiz(quiz) {
		this._quizes.push(quiz);
	}

	get participants() {
		return this._quizes;
	}

	set participant(participant) {
		this._participants.push(participant);
	}

	createQuiz (name) {
		let quiz = new Quiz(name);
		this.quiz = quiz;
		quiz._questions=[];
		return quiz.id;
	}
	
	addQuestion(quizId, ...questionAttr) {
		let quizIndex = _.findIndex(this._quizes,{ id: quizId});
		// questionAttr: [0]question, [1]answer, [2]options, [3]hint
		this._quizes[quizIndex]._questions.push({
			question: questionAttr[0],
			answer : questionAttr[1],
			options: questionAttr[2]
		});
	}

	getAllQuizes() {
		let allQuizes=[]
		for(let quiz of this._quizes){
			allQuizes.push(quiz.getQuiz());
		}
		return allQuizes;
	}

	addParticipant(name) {
		let participant = new QuizParticipant(name);
		this.participant = participant;
		return participant;
	}

	registerParticipantToQuiz(quizId, participantId){
		let quizIndex = _.findIndex(this._quizes,{ id: quizId});
		let participantIndex = _.findIndex(this._participants,{ id: participantId});
		this._participants[participantIndex].quizes.push(quizId);
	}
}