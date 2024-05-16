import { allQuizzes, newQuiz } from '../db/answers.js';
import short from 'short-uuid';

export class Answer {
  #quizzes = allQuizzes;
  #quiz = newQuiz;

  initAnswers(genre, quizId, answer) {
    const uuid = short.generate();
    this.#quiz = {
      ...newQuiz,
      uuid,
      genre,
      quizId,
      answers: [answer],
    };

    return uuid;
  }

  setNextAnswer(answer) {
    this.#quiz.answers.add(answer);
  }

  getAnswersLength() {
    return this.#quiz.answers.size;
  }

  getAnswers() {
    return this.#quiz;
  }
}

export const Answers = new Answer();
