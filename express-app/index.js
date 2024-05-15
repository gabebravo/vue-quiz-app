import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import quizApi from './routes/answers.js';
import userAnswersApi from './routes/quiz.js';

const app = express();
const PORT = 5001;

const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(quizApi);
app.use(userAnswersApi);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
