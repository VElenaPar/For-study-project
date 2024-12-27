const UserName = prompt("Введите Ваше имя");
const UserYearOfBirth = +prompt("Введите Ваш год рождения");
let сurrentYear = 2023;
if(!isNaN(UserYearOfBirth) && typeof UserYearOfBirth === "number") {
let userAge = сurrentYear - UserYearOfBirth;
let ost = userAge % 10;
switch (ost) {
    case 1:
        alert(`${UserName} : ${userAge} год`);
        break;
    case 2:
        alert(`${UserName} : ${userAge} года`);
        break;
    case 3:
        alert(`${UserName} : ${userAge} года`);
        break;
    case 4:
        alert(`${UserName} : ${userAge} года`);
        break;
    case 5:
        alert(`${UserName} : ${userAge} лет`);
        break;
    case 6:
        alert(`${UserName} : ${userAge} лет`);
        break;
    case 7:
        alert(`${UserName} : ${userAge} лет`);
        break;
    case 8:
        alert(`${UserName} : ${userAge} лет`);
        break;
    case 9:
        alert(`${UserName} : ${userAge} лет`);
        break;
};
} else {
    alert("Год не число или пустое имя")
}
