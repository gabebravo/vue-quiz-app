export const userQuizAnswers = {
  id: '',
  genre: '',
  quizId: '',
  answers: [],
};

export const initAnswers = (id, genre, quizId) => {
  userQuizAnswers.id = id;
  userQuizAnswers.genre = genre;
  userQuizAnswers.quizId = quizId;
};

export const getUserAnswers = () => userQuizAnswers.answers;
