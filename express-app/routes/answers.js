import express from 'express';
import { Answers } from '../models/answers.js';
import { Quizzes } from '../models/quizzes.js';
const router = express.Router();

const initAnswers = (req, res) => {
  const { genre, quizId, answer } = req.body;
  try {
    const uuid = Answers.initAnswers(genre, quizId, answer);
    setTimeout(() => {
      // need respond with the new quiz info
      res.status(200).json({ id: uuid });
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const submitAnswer = (req, res) => {
  const quizAnswersLength = Answers.getAnswersLength();
  try {
    if (quizAnswersLength < 10) {
      const { answer } = req.body;
      Answers.setNewAnswer(answer);
      setTimeout(() => {
        res.status(200).json({ message: 'Answer submitted successfully' });
      }, 500);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getAllAnswers = (req, res) => {
  try {
    const answers = Answers.getAnswers();
    console.log('gb - answers:', answers);
    setTimeout(() => {
      res.status(200).json(answers);
    }, 500);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const nextQuestion = (req, res) => {
  try {
    const nextQuestionIndex = Answers.getAnswersLength();
    const { id } = req.query;
    const nextQuestionInQuiz = Quizzes.getQuestionByIndex(
      id,
      nextQuestionIndex
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
