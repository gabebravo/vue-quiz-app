import express from 'express';
import { initAnswers } from '../db/user-answers.js';
const router = express.Router();

// Getting the list of users from the mock database
router.get('/answers', (req, res) => {
  // const answers = getUserAnswers();
  const answers = [];
  res.send(answers);
});

router.post('/answers', (req, res) => {
  const { id, genre, quizId } = req.body;
  initAnswers(id, genre, quizId);
  res.send('Quiz initialized successfully!');
});

export default router;
