import express from 'express';
import { getQuizIdsDb } from '../db/quiz-questions.js';
const router = express.Router();

// get both quiz Ids
const getQuizIds = (req, res) => {
  try {
    const quizIds = getQuizIdsDb();
    res.status(200).json(quizIds);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// Getting the list of users from the mock database
// router.get('/quiz', (req, res) => {
//   const quizzes = getQuizOptions();
//   res.send(quizzes);
// });

router.get('/quiz', getQuizIds);

export default router;
