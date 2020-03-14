let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?", '');
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();

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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Budget per day: " + appData.moneyPerDay);
}
detectDayBudget();


if (appData.moneyPerDay < 100) {
    console.log('Minimum money');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('midle level money');
} else if (appData.moneyPerDay > 2000) {
    console.log('Good level money');
} else {
    console.log('Error');
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сума накоплейний?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }

}
checkSavings();