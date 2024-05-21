import { allQuizzes, emptyQuiz } from '../db/answers.js';
import { Quizzes } from '../models/quizzes.js';
import short from 'short-uuid';

export class Answer {
  #quizzes = allQuizzes;
  #quiz = emptyQuiz;

  // initialize the user's answers with the first answer
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

  getAnswers() {
    return this.#quizzes;
  }

  setNextAnswer(id, answer) {
    const userQuiz = this.#quizzes.find((quiz) => quiz.uuid === id);
    const sourceQuiz = Quizzes.getQuizById(userQuiz.quizId);
    const isComplete =
      userQuiz.answers.length + 1 === sourceQuiz.questions.length;
    const newQuiz = {
      ...userQuiz,
      answers: [...userQuiz.answers, answer],
      isComplete,
    };
    const allQuizzesWithNewQuiz = [newQuiz];
    this.#quizzes = allQuizzesWithNewQuiz;
    return newQuiz;
  }
}

export const Answers = new Answer();
