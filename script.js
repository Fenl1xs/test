//DOM - элементы и переменные
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scopeContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Вопросы и ответы

const quizArray = [
  {
    id: "0",
    question: "Самый большой орган тела?",
    options: ["кожа", "желудок", "мозг", "легкие"],
    correct: "кожа",
  },
  {
    id: "1",
    question: "Юпитер — которая планета от Солнца?",
    options: ["третья", "пятая", "четвертая", "шестая"],
    correct: "пятая",
  },
  {
    id: "2",
    question: "Как звали Лермонтова?",
    options: ["Александр Сергеевич", "Александр Юрьевич", "Михаил Юрьевич", " Михаил Сергеевич"],
    correct: "Михаил Юрьевич",
  },
  {
    id: "3",
    question: "Денежная единица в Турции?",
    options: ["Лира", "Юань", "Евро", "Рупия"],
    correct: "Лира",
  },
  {
    id: "4",
    question: "У каких животных зубы растут всю жизнь?",
    options: ["Волки", "Бобры", "Медведи", "Алигаторы"],
    correct: "бобры",
  },
  {
    id: "5",
    question: "Всем известно, что у осьминога 8 щупалец, а сколько у него сердец?",
    options: ["5", "8", "3", "7"],
    correct: "3",
  },
  {
    id: "6",
    question: "квадратный корень из 144?",
    options: ["13", "17", "9", "12"],
    correct: "12",
  },
  {
    id: "7",
    question: "Сколько месяцев в году имеют 28 дней?",
    options: ["12", "9", "2", "5"],
    correct: "12",
  },
  {
    id: "8",
    question: "На парковке было 3 красных, 4 желтых и 5 зеленых автомобиля.Потом уехали восемь машин.Какого цвета сейчас определенно меньше, чем раньше?",
    options: ["желтых", "зеленых", "красных", "поровну"],
    correct: "зеленых",
  },
  {
    id: "9",
    question: "Жаба = 3, корова = 2, рыба = 0, собака = 3. А чему равняется кошка?",
    options: ["2", "0", "3", "5"],
    correct: "3",
  },
];
