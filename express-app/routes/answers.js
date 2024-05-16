import express from 'express';
import { Answers } from '../models/answers.js';
import { Quizzes } from '../models/quizzes.js';
const router = express.Router();

const initAnswers = (req, res) => {
  const { genre, quizId, answer } = req.body;
  try {
    const uuid = Answers.initAnswers(genre, quizId, answer);
    setTimeout(() => {
      res.status(200).json({ id: uuid });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const submitAnswer = (req, res) => {
  const { quizId, answer } = req.body;
  const quizAnswers = Answers.getQuizAnswers(quizId);
  try {
    if (!quizAnswers.answers.isComplete) {
      const updatedQuiz = Answers.setNextAnswer(quizId, answer);
      setTimeout(() => {
        res.status(200).json({ isComplete: updatedQuiz.isComplete });
      }, 500);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getAllAnswers = (req, res) => {
  try {
    const answers = Answers.getAnswers();
    setTimeout(() => {
      res.status(200).json(answers);
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const nextQuestion = (req, res) => {
  try {
    const { id } = req.query;
    const quizAnswers = Answers.getQuizAnswers(id);
    const nextQuestionInQuiz = Quizzes.getQuestionByIndex(
      quizAnswers.quizId,
      quizAnswers.answers.length
    );
    setTimeout(() => {
      res.status(200).json(nextQuestionInQuiz);
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const rootPath = '/answer';
router.get(`${rootPath}/all`, getAllAnswers);
router.get(`${rootPath}/next`, nextQuestion);
router.post(`${rootPath}/init`, initAnswers);
router.post(`${rootPath}/submit`, submitAnswer);
export default router;
