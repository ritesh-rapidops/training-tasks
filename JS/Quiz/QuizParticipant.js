class QuizParticipant{
	constructor(name){
		if(QuizParticipant.ID === undefined){
			QuizParticipant.ID = 0;
		}
		this.id = ++QuizParticipant.ID;
		this.name = name;
		this.quizes = [];
		this.submissions = [];
		this.results = [];
		return this;
	}

	registerQuiz(quizId){
		let quizRegistration = fetch('') /*Request URL for registration*/
	}

	initiateQuiz(quizId){
		let quizData = fetch(''); /*Request URL for all Quiz Data*/
	}

	submitQuiz(quizId){
		let submissionData = localstorage.get('QuizData');
		this.submissions.push(submissionData);
		let resultData = fetch(''); /*Request URL for all Submission of quiz and getting result*/
	}
}