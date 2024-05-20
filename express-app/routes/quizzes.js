import express from 'express';
import { Quizzes } from '../models/quizzes.js';
const router = express.Router();

const getQuizIds = (req, res) => {
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

const getFirstQuestion = (req, res) => {
  const { id } = req.query;
  try {
    const { question, choices } = Quizzes.getQuestionByIndex(id, 0);
    setTimeout(() => {
      res.status(200).json({ question, choices });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getQuizInfo = (req, res) => {
  const { quizId } = req.query;
  try {
    const quiz = Quizzes.getQuizById(quizId);
    setTimeout(() => {
      res
        .status(200)
        .json({ questions: quiz.questions, answers: quiz.answers });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const rootPath = '/quiz';
router.get(`${rootPath}/pick`, getQuizIds);
router.get(`${rootPath}/start`, getFirstQuestion);
router.get(`${rootPath}/questions`, getQuizInfo);
export default router;
