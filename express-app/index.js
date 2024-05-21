import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sourceQuizzesApi from './routes/sourceQuizzes.js';
import userQuizzesApi from './routes/userQuizzes.js';

const app = express();
const PORT = 5001;

const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(sourceQuizzesApi);
app.use(userQuizzesApi);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
