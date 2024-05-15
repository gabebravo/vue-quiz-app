import express from 'express';
import { getQuizIdsDb, getQuizByIdDb } from '../db/quizzes.js';
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

// get first question to start quiz
const startQuiz = (req, res) => {
  const { id } = req.query;
  try {
    const quiz = getQuizByIdDb(id);
    const { question, choices } = quiz.questions[0];
    const payload = {
      question,
      choices,
      genre: quiz.genre,
    };
    res.status(200).json(payload);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const rootPath = '/quiz';
router.get(`${rootPath}/ids`, getQuizIds);
router.get(`${rootPath}/start`, startQuiz);
export default router;
