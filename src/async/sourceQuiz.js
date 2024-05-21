import axios from 'axios';
const API_URL = 'http://localhost:5001/source-quiz';

export const getSourceQuizIdsAsync = async () => {
  try {
    const response = await axios.get(`${API_URL}/pick`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const startSourceQuizAsync = async (quizId) => {
  try {
    const response = await axios.get(`${API_URL}/start?id=${quizId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getSourceQuizQuestionsAsync = async (quizId) => {
  try {
    return await axios.get(`${API_URL}/questions?quizId=${quizId}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
