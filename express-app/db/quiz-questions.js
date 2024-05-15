export const movieQuiz = {
  id: '2FuLkPtNgPWYnC8xWWCXsq',
  genre: 'Movies',
  quiz: [
    {
      number: '1',
      question:
        'Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?',
      answer: 'Harry Potter',
      choices: ['Ted', 'Spy Kids', 'Harry Potter', 'Pirates of the Caribbean '],
    },
    {
      number: '2',
      question: 'What was the first James Bond film?',
      answer: 'Dr. No',
      options: ['Goldfinger', 'Dr. No', 'From Russia With Love', 'Thunderball'],
    },
    {
      number: '3',
      question:
        'Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989 movie &quot;Batman&quot;?',
      answer: 'Michael Keaton',
      choices: ['George Clooney', 'Val Kilmer', 'Adam West', 'Michael Keaton'],
    },
    {
      number: '4',
      question: 'Who plays the character of Po in the Kung Fu Panda movies?',
      answer: 'Jack Black',
      choices: [
        'Jack Black',
        'Mirana Jonnes',
        'McConahey Ramses',
        'Jim Petersson',
      ],
    },
    {
      number: '5',
      question:
        'What is the orange and white bot&#039;s name in &quot;Star Wars: The Force Awakens&quot;?',
      answer: 'BB-8',
      choices: ['BB-3', 'AA-A', 'BB-8', 'R2-D2'],
    },
  ],
};

export const musicQuiz = {
  id: 'cU7wEHMDLWgdmFuAfBDSrL',
  genre: 'Music',
  quiz: [
    {
      number: '1',
      question: 'Who is the lead singer of the British pop rock band Coldplay?',
      answer: 'Chris Martin',
      choices: [
        'Jonny Buckland',
        'Guy Berryman',
        'Will Champion',
        'Chris Martin',
      ],
    },
    {
      number: '2',
      question:
        'According to the American rapper Nelly, what should you do when its hot in here?',
      answer: 'Take off all your clothes',
      choices: [
        'Take a cool shower',
        'Drink some water',
        'Take off all your clothes',
        'Go skinny dipping',
      ],
    },
    {
      number: '3',
      question:
        'Who had a 1969 top 5 hit with the song,  &#039;A Boy Named Sue&#039;?',
      correct_answer: 'Johnny Cash',
      incorrect_answers: [
        'Bob Dylan',
        'Johnny Cash',
        'Willie Nelson',
        'Kris Kristofferson',
      ],
    },
    {
      number: '4',
      question:
        'Sting, the lead vocalist of The Police, primarily plays what instrument?',
      answer: 'Bass Guitar',
      choices: ['Drums', 'Guitar', 'Bass Guitar', 'Keyboards'],
    },
    {
      number: '5',
      question: 'Which Nirvana album had a naked baby on the cover?',
      answer: 'Nevermind',
      choices: ['Nevermind', 'Bleach', 'In Utero', 'Incesticide'],
    },
  ],
};

export const getQuizOptions = () => [movieQuiz, musicQuiz];
export const getQuizIdsDb = () => ({
  movieQuizId: movieQuiz.id,
  musicQuizId: musicQuiz.id,
});
