import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import quizzesApi from './routes/quizzes.js';
import answersApi from './routes/answers.js';

const app = express();
const PORT = 5001;

const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(quizzesApi);
app.use(answersApi);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
