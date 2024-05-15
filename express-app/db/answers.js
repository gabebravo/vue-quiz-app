// import short from 'short-uuid';
// import { getQuizOptions } from './quizzes.js';

// import express from 'express';
// const router = express.Router();

// // make this a Set
// export const allQuizzes = [];
// const newQuiz = {
//   uuid: '',
//   genre: '',
//   quizId: '',
//   isComplete: false,
//   answers: [],
// };

// export const initAnswers = (quizId, answer) => {
//   const quiz = getQuizOptions().find((q) => q.id === quizId);
//   newQuiz.uuid = short.generate();
//   newQuiz.genre = quiz.genre;
//   newQuiz.quizId = quiz.id;
//   allQuizzes.answers.push({
//     ...newQuiz,
//     answers: [{ ...quiz.quiz[0], userAnswer: answer }],
//   });
// };

// export const submitAnswer = (uuid, answer) => {
//   const userQuiz = allQuizzes.find((q) => q.uuid === uuid);
//   if (userQuiz.currentQuestion === 5) {
//     userQuiz.isComplete = true;
//     return;
//   }
//   userQuiz.currentQuestion = userQuiz.currentQuestion + 1;
//   userQuiz.answers.push({ ...userQuiz, userAnswer: answer });
// };

// router.post('/answers', initAnswers);
// export default router;
