'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется ?", '');

    if ((typeof (a)) == 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 30) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        alert('Please answer the quastions!');
        i--;
    }
};

// let i = 0;
// do {

//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется ?", '');

//     if ((typeof (a)) == 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 30) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {

//     }
//     i++;
// } while (i < 2);

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется ?", '');

//     if ((typeof (a)) == 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 30) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {

//     }
//     i++;
// }

appData.moneyPerDay = appData.budget / 30;
alert("Budget per day: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Minimum money');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('midle level money');
} else if (appData.moneyPerDay > 2000) {
    console.log('Good level money');
} else {
    console.log('Error');
}