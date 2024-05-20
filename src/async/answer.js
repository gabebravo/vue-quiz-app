import axios from 'axios';

const API_URL = 'http://localhost:5001/answer';

export const getNextQuestionAsync = async (quizId) => {
  try {
    const response = await axios.get(`${API_URL}/next?id=${quizId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getAllAnswersAsync = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const submitInitialAnswerAsync = async ({ genre, quizId, answer }) => {
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

export const submitNextAnswerAsync = async ({ quizId, answer }) => {
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
