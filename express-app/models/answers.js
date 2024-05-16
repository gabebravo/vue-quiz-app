import { allQuizzes, emptyQuiz } from '../db/answers.js';
import short from 'short-uuid';

export class Answer {
  #quizzes = allQuizzes;
  #quiz = emptyQuiz;

  initAnswers(genre, quizId, answer) {
    const uuid = short.generate();
    const newQuiz = {
      ...emptyQuiz,
      uuid,
      genre,
      quizId,
      answers: [answer],
    };

    const allQuizzesWithNewQuiz = [newQuiz];
    this.#quizzes = allQuizzesWithNewQuiz;
    return uuid;
  }

  getQuizAnswers(id) {
    return this.#quizzes.find((quiz) => quiz.uuid === id);
  }

  setNextAnswer(answer) {
    this.#quiz.answers.add(answer);
  }
}

export const Answers = new Answer();
