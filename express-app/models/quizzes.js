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

  getQuizById(id) {
    return this.#quizzes.find((quiz) => quiz.id === id);
  }

  getQuestionByIndex(id, index) {
    const quiz = this.getQuizById(id);
    return quiz.questions[index];
  }

  getQuestionsById(id) {
    const quiz = this.getQuizById(id);
    return quiz.questions;
  }
}

export const Quizzes = new Quiz();
