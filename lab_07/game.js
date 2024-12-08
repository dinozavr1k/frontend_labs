function startGame() {
    
    let balance = 100;
    alert(`Ласкаво просимо в гру! Ваш початковий баланс: $${balance}`);

    while (balance >= 20) {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        let attempts = 3;

        while (attempts > 0) {
            let guess = parseInt(prompt(`Вгадайте число від 1 до 5. У вас ${attempts} спроби:`), 10);

            if (guess === randomNumber) {
                alert(`Вітаємо! Ви вгадали число: ${randomNumber}`);
                balance += 20;
                alert(`Ваш новий баланс: $${balance}`);
                break;
            } else {
                attempts--;
                balance -= 20;
                alert(`Неправильно! Залишилося спроб: ${attempts}`);
            }
        }

        if (attempts === 0) {
            alert(`Ви вичерпали всі спроби. Загадане число було: ${randomNumber}`);
        }

        if (balance < 20) {
            alert(`Ваш баланс недостатній для продовження гри. Дякуємо за гру!`);
            break;
        }

        alert(`Ваш поточний баланс: $${balance}. Починаємо новий раунд!`);
    }

    alert(`Гра завершена. Ваш фінальний баланс: $${balance}`);
    
}

startGame();