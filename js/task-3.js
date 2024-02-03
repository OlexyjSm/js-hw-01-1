const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

// Запитати користувача про пароль
const userPassword = prompt('Будь ласка, введіть пароль для авторизації в панелі управління:');

// Перевірити введений пароль
if (userPassword === null) {
    message = 'Операцію скасовано!';
} else if (userPassword === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонено, невірний пароль!';
}

// Вивести повідомлення в alert
alert(message);