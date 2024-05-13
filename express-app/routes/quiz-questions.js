import express from 'express';
import { getQuizOptions } from '../db/quiz-questions.js';
const router = express.Router();

// Getting the list of users from the mock database
router.get('/quiz', (req, res) => {
  const quizzes = getQuizOptions();
  res.send(quizzes);
});

export default router;
