import express from 'express';
import { Quizzes } from '../models/quizzes.js';
const router = express.Router();

// get both quiz Ids
const pickQuiz = (req, res) => {
  try {
    const quizIds = Quizzes.getQuizIds();
    const quizGenres = Quizzes.getQuizGenres();
    setTimeout(() => {
      res.status(200).json({ ids: quizIds, genres: quizGenres });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// get first question to start quiz
const startQuiz = (req, res) => {
  const { id } = req.query;
  try {
    const quiz = Quizzes.getQuizById(id);
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
router.get(`${rootPath}/pick`, pickQuiz);
router.get(`${rootPath}/start`, startQuiz);
export default router;
