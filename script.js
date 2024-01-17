window.onload = function () {
    const database1 = ['1. Пьяный', '2. Математический', '3. Арбузная', '4. Кирпичный',
        '5. Магический', '6. Больной', '7. Грязный',
        '8. Бриллиантовый', '9. Сломанная', '10. Школьная', '11. Медвежья', '12. Ягодная',
        '13. Прозрачная', '14. Тяжелая', '15. Китайский', '16. Хлебный',
        '17. Шерстяной', '18. Доисторический', '19. Звуковой', '20. Электрический', '21. Острый',
        '22. Дырявый', '23. Стирательная', '24. Пищевой', '25. Огненный',
        '26. Розовый', '27. Микробный',
        '28. Радиоционный', '29. Космический', '30. Снежная',
        '31. Бумажный', '32. Эзотерический', '33. Энциклопедический',
        '34. Пространственный', '35. Мирокскопическая',
        '36. Электронная', '37. Добрый', '38. Гневный', '39. Австралийский',
        '40. Экономическая', '41. Просроченный', '42. Земляной',
        '43. Турецкий', '44. Веселый', '45. Депрессивный', '46. Стеклянный',
        '47. Анимешный', '48. Водяной', '49. Мотивирующий', '50. Астрологический'];
    const database2 = ['1. надувная кукла', '2. тест на беременность', '3. печенье',
        '4. одеяло', '5. дневник', '6. робот', '7. футбольный мяч',
        '8. линейка', '9. ручка', '10. стол', '11. сковородка', '12. листок бумаги',
        '13. лупа', '14. приложение на телефон', '15. будильник', '16. человек',
        '17. барби', '18. коктейль', '19. вареники', '20. дубинка', '21. фотоаппарат',
        '22. утюг', '23. телевизор', '24. принтер', '25. кот', '26. бегемот', '27. веревка',
        '28. шляпа', '29. очки', '30. автомобиль', '31. дом', '32. цветок',
        '33. сигнализация', '34. зеркало', '35. подушка',
        '36. часы', '37. наручники', '38. пистолет', '39. костюм полицейского',
        '40. клей', '41. банан', '42. помидор',
        '43. кровать', '44. симпл-димпл', '45. дверь', '46. диктофон', '47. лимонад',
        '48. чипсы', '49. батарея ', '50. свадебный наряд'];
    const database3 = ['1. помогает готовить пельмени', '2. умеет решать теорию вероятности',
        '3. шепчет на ушко', '4. может ломать стены', '5. убивает назойливых комаров',
        '6. является виртуальным питомцем', '7. работает от эмоций человека',
        '8. может подбодрить вас', '9. издает звук сигнализации', '10. убивает 99% микробов',
        '11. работает от громкости человека', '12. позволяет кататься на нем по дороге',
        '13. стреляет водными патронами', '14. рассказывает анекдоты', '15. может закрыть ваши глаза',
        '16. умеет целоваться', '17. может отпугивать посторонних', '18. является игрушкой для котов',
        '19. действует как успокоительное', '20. отрезволяет после алкоголя', '21. работает от знака зодиака человека',
        '22. заменяет общение с людьми', '23. может помочь человеку поспать',
        '24. очень сильно может разозлить человека', '25. определяет - врет ли человек',
        '26. показывает прогноз погоды', '27. уменьшается со временем',
        '28. работает на солнечных батарейках', '29. только унижает человека', '30. дает возможность спр',
        '31. убирает мусор', '32. бьет, если на нее дышат', '33. предсказывает будущую вторую половинку',
        '34. не работает днем', '35. помогает принять ванну',
        '36. увеличивает зрение в три раза', '37. пишет стихи', '38. используется в ремонте',
        '39. заменяет еду', '40. помогает доставать вещи',
        '41. помогает мыть посуду', '42. очищает ваш гнев',
        '43. раскрашивает вещи', '44. учит новым языкам',
        '45. поддерживает ЗОЖ', '46. помогает в поиске потерянных вещей',
        '47. поддерживает уход за растениями', '48. оказывает психологическую поддержку',
        '49. является музыкальным инструментом', '50. может позволить списать на экзамене'];

    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    function updateMarketingOffer(elementId) {
        const randomIndex1 = getRandomIndex(database1);
        const randomIndex2 = getRandomIndex(database2);
        const randomIndex3 = getRandomIndex(database3);

        const marketingOffer = `${database1[randomIndex1]} ${database2[randomIndex2]}, который ${database3[randomIndex3]}`;

        document.getElementById(elementId).textContent = marketingOffer;
    }

    function updateTimer() {
        const timerElement = document.getElementById('timer');
        if (timerSeconds > 0) {
            timerSeconds--;
            timerElement.textContent = `Осталось времени: ${timerSeconds}`;
        } else {
            timerElement.textContent = 'Время вышло!';
            clearInterval(timerInterval);
            // Дополнительные действия после завершения таймера, если нужно
        }
    }

    let timerInterval;

    function startTimer() {
        timerSeconds = 60;
        const timerElement = document.getElementById('timer');
        timerElement.textContent = `Осталось времени: ${timerSeconds}`;

        if (timerInterval) {
            clearInterval(timerInterval);
        }

        timerInterval = setInterval(updateTimer, 1000);
    }

    document.getElementById('randomizeButton').addEventListener('click', () => {
        updateMarketingOffer('marketingOffer');
    });

    document.getElementById('randomizeButton2').addEventListener('click', () => {
        updateMarketingOffer('marketingOffer2');
    });

    document.getElementById('redButton').addEventListener('click', startTimer);
};
let timerInterval;

function startTimer() {
    timerSeconds = 60;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `Осталось времени: ${timerSeconds}`;
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

document.getElementById('randomizeButton').addEventListener('click', () => {
    updateMarketingOffer('marketingOffer');
});

document.getElementById('randomizeButton2').addEventListener('click', () => {
    updateMarketingOffer('marketingOffer2');
});

document.getElementById('redButton').addEventListener('click', stopTimer);
