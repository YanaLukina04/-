const quizData = [
     {
        url:"img/рисунок1.jpg",
        question: "Какая программа задаёт  мотору вращение на строго определённое количество раз:",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "d",
    },
    {
        url:"img/рисунок2.jpg",
        question: "Что должно происходить согласно программе, представленной ниже:",
        a: "на экране появляется цифра 10, и она периодически, с интервалом времени 10 с,видна;",
        b: "на экране появляется цифра 10, и она периодически, с интервалом времени 10 оборотов мотора, видна;",
        c: "на экране появляется цифра 10, и дальше выводится сумма чисел предыдущего с числом 10, с интервалом времени 10 оборотов мотора;",
        d: "на экране появляется цифра 10, и дальше выводится сумма чисел предыдущего с числом 10, с интервалом времени 10 с.",
        correct: "d",
    },
    {
        url:"img/рисунок3.jpg",
        question: "Назовите деталь из набора Lego WeDo:",
        a: "мотор",
        b: "коммутатор",
        c: "датчик наклона",
        d: "датчик расстояния",
        correct: "b",
    },
    {
        url:"img/рисунок4.jpg",
        question: "Согласно программе:",
        a: "мотор начинает вращение по часовой стрелке с мощностью 5 при срабатывании датчика расстояния, и мотор не работает, когда датчик расстояния не обнаруживает препятствия;",
        b: "мотор начинает вращение против часовой стрелки с мощностью 5 при срабатывании датчика расстояния, и мотор не работает, когда датчик расстояния не обнаруживает препятствия;",
        c: "мотор начинает вращение по часовой стрелке с мощностью 5 при срабатывании датчика наклона (наклон на 45°) и мотор не работает, когда датчик наклона находится в горизонтальном положении.",
        d: "нет правильного ответа",
        correct: "c",
    },
    {
        url:"img/рисунок5.jpg",
        question: "Мальчик Петя собрал из набора Lego WeDo автомобиль и составил программу.Как будет себя вести автомобиль, согласно этой программе:",
        a: "при нажатии клавиши «A» автомобиль совершает движение вперед 30 с, при нажатии клавиши «B» автомобиль остановится, при нажатии клавиши «C» автомобиль совершает движение назад в течение 30 с;",
        b: "программа не выполнится. Машина останется неподвижной;",
        c: "при нажатии клавиши «A» автомобиль совершает движение вперед 30 оборотов, при нажатии клавиши «B» автомобиль остановится, при нажатии клавиши «C» автомобиль совершает движение назад в течение 30 оборотов;",
        d: "выполнится только команда с клавишей «A», автомобиль совершит движение вперед 30 оборотов и остановится.",
        correct: "a",
    },
    {
        url:"img/рисунок6.jpg",
        question: "Датчик расстояния:",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "a",
    },
    {
        url:"img/рисунок7.jpg",
        question: "Что будет происходить согласно этой программе",
        a: "циклический процесс вращения мотора 20 с и звучание мелодии;",
        b: "циклический процесс вращения мотора 20 оборотов и звучание мелодии;",
        c: "циклический процесс вращения мотора 20 оборотов и звучание мелодии. Цикл совершается 3 раза;",
        d: "циклический процесс вращения мотора 20 с и звучание мелодии. Цикл совершается 3 раза",
        correct: "d",
    },
    {
        url:"img/рисунок8.jpg",
        question: "Выберите правильный ответ",
        a: "циклический процесс вращение мотора 30 оборотов;",
        b: " циклический процесс вращение мотора 30 с;",
        c: "циклический процесс вращение мотора 30 оборотов с выпадением случайной мощности мотора;",
        d: "циклический процесс вращение мотора 30 с с выпадением случайной мощности мотора.",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');
const img = document.getElementById('image');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    img.src = currentQuizData.url;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы ответили правильно на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Решить заново</button>
            `;
        }
    }
});