import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import quizQuestions from './routes/quiz-questions.js';
import quizAnswers from './routes/quiz-answers.js';

const app = express();
const PORT = 5001;

const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(quizQuestions);
app.use(quizAnswers);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
