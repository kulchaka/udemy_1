let num = 50;

if (num > 50) {
    console.log("Too much")
} else if (num < 50) {
    console.log("Not enough")
} else {
    console.log("All right!!!")
}

(num == 50) ? console.log("Good!😎👍🏻"): console.log("Not good🤔");

switch (num) {
    case num < 50:
        console.log("Not enough");
        break;
    case 50:
        console.log("Good!👍🏻");
        break;
    case num > 50:
        console.log("Too much");
        break;
}