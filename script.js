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
    correct: "Бобры",
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
//Сброс квиза
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scopeContainer.classList.add("hide");
});

//Обработчик Кнопки "Дальше"
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //Увеличить счетчик вопросов
    questionCount += 1;
    //Если последнйи вопрос
    if (questionCount == quizArray.length) {
      //Скрыть квиз после последнего вопроса
      displayContainer.classList.add("hide");
      scopeContainer.classList.remove("hide");
      const scoreImg = scopeContainer.querySelector(".scope-img");

      //Результат
      const answer = `Ваш результат: ${scoreCount} из ${questionCount}.`;

      if (scoreCount > 0 && scoreCount <=4) {
        userScore.textContent = `${answer} Вы идиот`;
        scoreImg.src = "img/01.jpg";
      }

      if (scoreCount > 4 && scoreCount <=7) {
        userScore.textContent = `${answer} Вы Среднячок`;
        scoreImg.src = "img/02.jpg";
      }

      if (scoreCount > 8 && scoreCount <= questionCount) {
        userScore.textContent = `${answer} Вы Гений`;
        scoreImg.src = "img/03.jpg";
      }

    } else {
      //Показать счетчик вопросов
      countOfQuestion.innerHTML =
        questionCount + 1 + " из " + quizArray.length + " Вопросов";
      //Показать квиз
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Таймер
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count} с`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Отображение квиза
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Скрыть другие карточки с вопросами
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //Показать текущую карточку с вопросом
  quizCards[questionCount].classList.remove("hide");
};

//Создание квиза
function quizCreator() {
  //Рэндомная сортировка вопросов
  quizArray.sort(() => Math.random() - 0.5);
  //генерация квиза
  for (let i of quizArray) {
    //Рэндомная сортировка ответов
    i.options.sort(() => Math.random() - 0.5);
    //создание карточки с вопросом
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //Номер вопроса
    countOfQuestion.innerHTML = 1 + " из " + quizArray.length + " Вопросов";
    //Создание вопроса, его заполнение и добавление
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //Ответы
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Провека правильности ответа
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //Если кликнули на ответ, указанный в ответах объекта с вопросами
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //Отметка верного ответа
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //Очистка таймера
  clearInterval(countdown);
  //Блокировка ответов после выбранного ответа
  options.forEach((element) => {
    element.disabled = true;
  });
}

//Начальные настройки
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//После нажатия "Начать"
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//Скрыть квиз при загрузке страницы
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};