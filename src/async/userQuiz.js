import axios from 'axios';
const API_URL = 'http://localhost:5001/user-quiz';

export const getNextUserQuestionAsync = async (quizId) => {
  try {
    const response = await axios.get(`${API_URL}/next?id=${quizId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getUserQuizResultsAsync = async (quizId) => {
  try {
    const response = await axios.get(`${API_URL}/results?id=${quizId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const submitInitialUserAnswerAsync = async ({
  genre,
  quizId,
  answer,
}) => {
  try {
    const response = await axios.post(`${API_URL}/init`, {
      genre,
      quizId,
      answer,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const submitNextUserAnswerAsync = async ({ quizId, answer }) => {
  try {
    const response = await axios.put(`${API_URL}/submit`, {
      quizId,
      answer,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
