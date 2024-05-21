import { SourceQuizzesDb } from '../db/SourceQuizzesDb.js';

class SourceQuiz {
  #quizzes = SourceQuizzesDb;

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
}

export const SourceQuizzes = new SourceQuiz();
