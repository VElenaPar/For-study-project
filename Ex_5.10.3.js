const UserName = prompt("Введите Ваше имя");
const UserYearOfBirth = +prompt("Введите Ваш год рождения");
let сurrentYear = 2023;
if(!isNaN(UserYearOfBirth) && typeof UserYearOfBirth === "number") {
    alert(`${UserName} : ${сurrentYear - UserYearOfBirth}`);
} else {
    alert("Год должен быть числом!")
}