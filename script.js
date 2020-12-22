'use strict';

let yearOfBirth = document.getElementsByName('year');
let activity = document.getElementsByName('activity');
let eat = document.getElementsByName('eat');

let questions = document.getElementsByTagName('li');
let finishBtn = document.querySelector('button');

let answers = []; // массив с правильностью ответов

function checkAnswers() {
    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < yearOfBirth.length; j++) {
            if (yearOfBirth[0].checked) {
                answers[0] = 'true';
            } else {
                answers[0] = 'false';
            }
        }
        for (let j = 0; j < activity.length; j++) {
            if (activity[0].checked) {
                answers[1] = 'false';
            } else if (activity[1].checked) {
                answers[1] = 'false';
            } else {
                answers[1] = 'true';
            }
        }
        for (let j = 0; j < eat.length; j++) {
            if (eat[0].checked) {
                answers[2] = 'false';
            } else if (eat[1].checked) {
                answers[2] = 'false';
            } else if (eat[3].checked) {
                answers[2] = 'false';
            } else {
                answers[2] = 'true';
            }
        }
    }
}

let trueAnswers = [];

finishBtn.addEventListener('click', function(e){
    e.preventDefault();
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == 'true') {
            trueAnswers.push('true');
        }
    }
    alert('Результат: ' + trueAnswers.length + ' из 3');
    if (trueAnswers.length == 0) {
        alert('Я думал ты знаешь о Маше больше...Точно надо знакомить вас ближе)');
    } else if (trueAnswers.length == 1) {
        alert('Not bad, bro, но думал больше знаешь)');
    } else if (trueAnswers.length == 2) {
        alert('Хорошо знаешь Машу, надо отдавать в хорошие руки, пока не поздно))');
    } else {
        alert('Бро, это точно моя кошка, а не твоя?)');
    }
});