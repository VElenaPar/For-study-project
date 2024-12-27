let input = prompt("Введите промокод");
input = input.toLowerCase()
let promotionalCode = "скидка";
if (input == promotionalCode) {
    alert(`Промокод применён`);
} else {
    alert(`Промокод не работает`);
}