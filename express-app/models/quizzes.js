import { QuizzesDb } from '../db/quizzes.js';

class Quiz {
  // Declare: every Color instance has a private field called #values.
  #quizzes = QuizzesDb;

  getQuizIds() {
    return this.#quizzes.map((quiz) => quiz.id);
  }

  getQuizGenres() {
    return this.#quizzes.map((quiz) => quiz.genre);
  }

  getQuizByIdDb(id) {
    return this.#quizzes.find((quiz) => quiz.id === id);
  }
}

export const Quizzes = new Quiz();
