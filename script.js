const numbers = [2, -5, 3.14, -2.3, 0, Math.sqrt(2), 7];
let index = 0;

function generateQuestion() {
    const number = numbers[index];
    document.querySelector('.number').textContent = number;
    index++;
}

document.querySelectorAll('.venn-diagram div').forEach(item => {
    item.addEventListener('click', checkAnswer);
});

function checkAnswer(event) {
    const number = parseFloat(document.querySelector('.number').textContent);
    const category = event.target.className;
    
    let correctAnswer = '';
    if (Number.isInteger(number)) {
        correctAnswer += 'Whole Numbers, Integers';
    } else if (Number.isFinite(number)) {
        correctAnswer += 'Integers, Rational Numbers';
    } else {
        correctAnswer += 'Irrational Numbers';
    }
    
    if (correctAnswer.includes(category)) {
        document.querySelector('.answer-feedback').textContent = 'Correct!';
    } else {
        document.querySelector('.answer-feedback').textContent = 'Incorrect! The number falls into ' + correctAnswer;
    }
}