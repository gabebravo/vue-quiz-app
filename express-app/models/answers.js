import { allQuizzes, newQuiz } from './answers.js';
import short from 'short-uuid';

export class Answers {
  #quizzes = allQuizzes;
  #quiz = newQuiz;

  constructor(genre, quizId, answer) {
    this.#quiz = {
      ...newQuiz,
      uuid: short.generate(),
      genre,
      quizId,
      answers: new Set(answer),
    };
  }

  setNewAnswer(answer) {
    this.#quiz.answers.add(answer);
  }

  getAnswersLength() {
    return this.#quiz.answers.size;
  }

  getAnswers() {
    return this.#quiz.answers.entries();
  }
}
