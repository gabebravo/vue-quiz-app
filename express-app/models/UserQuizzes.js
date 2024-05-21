import { AllUserQuizzes, EmptyUserQuiz } from '../db/UserQuizzesDb.js';
import { SourceQuizzes } from './SourceQuizzes.js';
import short from 'short-uuid';

export class UserQuiz {
  #quizzes = AllUserQuizzes;
  #quiz = EmptyUserQuiz;

  // initialize the user's answers with the first answer
  initQuiz(genre, quizId, answer) {
    const uuid = short.generate();
    const newQuiz = {
      ...this.#quiz,
      uuid,
      genre,
      quizId,
      answers: [answer],
    };

    this.#quizzes = [...this.#quizzes, newQuiz];
    return uuid;
  }

  getQuizById(id) {
    return this.#quizzes.find((quiz) => quiz.uuid === id);
  }

  getAllQuizzes() {
    return this.#quizzes;
  }

  setNextAnswer(id, answer) {
    const userQuiz = this.getQuizById(id);
    const sourceQuiz = SourceQuizzes.getQuizById(userQuiz.quizId);
    const isComplete =
      userQuiz.answers.length + 1 === sourceQuiz.questions.length;
    const updatedQuiz = {
      ...userQuiz,
      answers: [...userQuiz.answers, answer],
      isComplete,
    };
    this.#quizzes = [...this.#quizzes].map((quiz) =>
      quiz.uuid === id ? updatedQuiz : quiz
    );
    return updatedQuiz;
  }
}

export const UserQuizzes = new UserQuiz();
