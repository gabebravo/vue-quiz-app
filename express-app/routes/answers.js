import express from 'express';
import { Answer } from '../models/answers.js';
import { Quiz } from '../models/quiz.js';
const router = express.Router();

const initAnswers = (req, res) => {
  const { genre, quizId, answer } = req.body;
  try {
    const newQuizAnswers = new Answer(genre, quizId, answer);
    setTimeout(() => {
      res.status(200).json(newQuizAnswers);
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const submitAnswer = (req, res) => {
  const quizAnswersLength = Answer.getAnswersLength();
  try {
    if (quizAnswersLength < 10) {
      const { answer } = req.body;
      Answer.setNewAnswer(answer);
      setTimeout(() => {
        res.status(200).json({ message: 'Answer submitted successfully' });
      }, 500);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getAnswers = (req, res) => {
  try {
    const answers = Answer.getAnswers();
    setTimeout(() => {
      res.status(200).json(answers);
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const nextQuestion = (req, res) => {
  try {
    const nextQuestionIndex = Answer.getAnswersLength();
    const { id } = req.query;
    const nextQuestionInQuiz = Quiz.getQuestionByIndex(id, nextQuestionIndex);
    setTimeout(() => {
      res.status(200).json(nextQuestionInQuiz);
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const rootPath = '/answer';
router.get(`${rootPath}/all`, getAnswers);
router.get(`${rootPath}/next`, nextQuestion);
router.post(`${rootPath}/init`, initAnswers);
router.post(`${rootPath}/submit`, submitAnswer);
export default router;
