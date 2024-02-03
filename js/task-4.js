const credits = 23580;
const pricePerDroid = 3000;

// Запитати користувача про кількість телевізорів
const quantityToBuy = prompt('Скільки телевізорів ви хочете купити?');

// Перевірка, чи користувач натиснув Cancel
if (quantityToBuy === null) {
    console.log('Операцію скасовано!');
} else {
    // Розрахунок загальної ціни замовлення
    const totalPrice = quantityToBuy * pricePerDroid;

    // Перевірка можливості оплатити замовлення
    if (totalPrice > credits) {
        console.log('Недостатньо коштів на рахунку!');
    } else {
        // Розрахунок залишку кредитів та виведення повідомлення
        const remainingCredits = credits - totalPrice;
        console.log(`Ви купили ${quantityToBuy} телевізорів, на рахунку залишилось ${remainingCredits} кредитів.`);
    }
}
