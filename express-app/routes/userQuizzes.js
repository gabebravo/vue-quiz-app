import express from 'express';
import { UserQuizzes } from '../models/UserQuizzes.js';
import { SourceQuizzes } from '../models/SourceQuizzes.js';
const router = express.Router();

const initQuiz = (req, res) => {
  const { genre, quizId, answer } = req.body;
  try {
    const uuid = UserQuizzes.initQuiz(genre, quizId, answer);
    setTimeout(() => {
      res.status(200).json({ id: uuid });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateQuiz = (req, res) => {
  const { quizId, answer } = req.body;
  const userQuiz = UserQuizzes.getQuizById(quizId);
  try {
    if (!userQuiz.answers.isComplete) {
      const updatedQuiz = UserQuizzes.setNextAnswer(quizId, answer);
      setTimeout(() => {
        res.status(200).json({ isComplete: updatedQuiz.isComplete });
      }, 500);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getAllUserQuizzes = (_req, res) => {
  try {
    const userQuizzes = UserQuizzes.getAllQuizzes();
    setTimeout(() => {
      res.status(200).json(userQuizzes);
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getNextQuestion = (req, res) => {
  try {
    const { id } = req.query;
    const userQuiz = UserQuizzes.getQuizById(id);
    const nextQuestionInSourceQuiz = SourceQuizzes.getQuestionByIndex(
      userQuiz.quizId,
      userQuiz.answers.length
    );
    setTimeout(() => {
      res.status(200).json({
        ...nextQuestionInSourceQuiz,
        isComplete: userQuiz.isComplete,
      });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const rootPath = '/user-quiz';
router.get(`${rootPath}/all`, getAllUserQuizzes);
router.get(`${rootPath}/next`, getNextQuestion);
router.post(`${rootPath}/init`, initQuiz);
router.put(`${rootPath}/submit`, updateQuiz);
export default router;
