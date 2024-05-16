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

  getAnswers() {
    return this.#quizzes;
  }

  setNextAnswer(id, answer) {
    const quiz = this.#quizzes.find((quiz) => quiz.uuid === id);
    // TODO : compare the length of the answers array with the number of questions in the quiz
    const isComplete = quiz.answers.length + 1 === 5;
    const newQuiz = { ...quiz, answers: [...quiz.answers, answer], isComplete };
    const allQuizzesWithNewQuiz = [newQuiz];
    this.#quizzes = allQuizzesWithNewQuiz;
    return newQuiz;
  }
}

export const Answers = new Answer();
