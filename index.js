
const Questionnaire = document.querySelector('#Questionnaire');
Questionnaire.addEventListener('submit', addquest);
function addquest(e) {
    e.preventDefault();
    const formData = new FormData(Questionnaire);
    const name = formData.get('name');
    const firstname = formData.get('firstname');
    const age = formData.get('age');
    const promo = formData.get('promo');
    const Q1 = formData.get('Q1');
    console.log('answer', { name, firstname, age, promo, Q1})
    const newanswer = { name: name, firstname, age, promo, Q1};
    sentquest(newanswer);
    Questionnaire.reset();
}

function sentquest(answer) {
    let answers = JSON.parse(localStorage.getItem("answers")) || [];
    answers = [...answers,answer];
    localStorage.setItem("answers",JSON.stringify(answers));
}