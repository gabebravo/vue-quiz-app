import express from 'express';
import { SourceQuizzes } from '../models/SourceQuizzes.js';
const router = express.Router();

const getIdsAndGenres = (_req, res) => {
  try {
    const quizIds = SourceQuizzes.getQuizIds();
    const quizGenres = SourceQuizzes.getQuizGenres();
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
    const { question, choices } = SourceQuizzes.getQuestionByIndex(id, 0);
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
    const quiz = SourceQuizzes.getQuizById(quizId);
    setTimeout(() => {
      res
        .status(200)
        .json({ questions: quiz.questions, answers: quiz.answers });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const rootPath = '/source-quiz';
router.get(`${rootPath}/pick`, getIdsAndGenres);
router.get(`${rootPath}/start`, getFirstQuestion);
router.get(`${rootPath}/questions`, getQuizInfo);
export default router;
