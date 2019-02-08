let quizMst = new QuizMaster();
let quiz1ID = quizMst.createQuiz('Test Quiz');

let quiz2ID = quizMst.createQuiz('Test Quiz2');
quizMst.addQuestion(quiz1ID,"Test Question", "Answer", ['OP1','OP2','answer','OP3']);
quizMst.addQuestion(quiz1ID,"Test Question", "Answer", ['OP1','OP2','answer','OP3']);
console.log(quizMst.getAllQuizes());

let part1 = quizMst.addParticipant("ABC");
quizMst.registerParticipantToQuiz(quiz1ID, part1.id);
console.log(part1);
