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

    const allQuizzesWithNewQuiz = [newQuiz];
    this.#quizzes = allQuizzesWithNewQuiz;
    return uuid;
  }

  getQuizById(id) {
    return this.#quizzes.find((quiz) => quiz.uuid === id);
  }

  getAllQuizzes() {
    return this.#quizzes;
  }

  setNextAnswer(id, answer) {
    const userQuiz = this.#quizzes.find((quiz) => quiz.uuid === id);
    const sourceQuiz = SourceQuizzes.getQuizById(userQuiz.quizId);
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

export const UserQuizzes = new UserQuiz();
