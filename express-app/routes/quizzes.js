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
    const { question, choices } = Quizzes.getQuestionByIndex(id, 0);
    setTimeout(() => {
      res.status(200).json({ question, choices });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// get quiz questions and answers
const quizInfo = (req, res) => {
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
router.get(`${rootPath}/pick`, pickQuiz);
router.get(`${rootPath}/start`, startQuiz);
router.get(`${rootPath}/questions`, quizInfo);
export default router;
