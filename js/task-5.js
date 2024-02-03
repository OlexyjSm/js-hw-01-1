const country = prompt('Введіть країну для доставки:');
let deliveryPrice;

switch (country.toLowerCase()) {
    case 'китай':
        deliveryPrice = 100;
        break;
    case 'чилі':
        deliveryPrice = 250;
        break;
    case 'австралія':
        deliveryPrice = 170;
        break;
    case 'індія':
        deliveryPrice = 80;
        break;
    case 'ямайка':
        deliveryPrice = 120;
        break;
    default:
        alert('В вашій країні доставка не доступна');
        break;
}

if (deliveryPrice !== undefined) {
    const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
    alert(`Доставка в ${formattedCountry} буде коштувати ${deliveryPrice} кредитів.`);
}
