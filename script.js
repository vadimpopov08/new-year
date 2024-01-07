let poems = [
    {
        poemText: `
            <p>
                Сверкающей желаем ночи,<br>
                Цветных таинственных огней.<br>
                И все, что Ваше сердце хочет,<br>
                Пускай исполнится скорей.<br>
                Пусть холод не тревожит душу,<br>
                Зима не навевает грусть,<br>
                И радость согревает в стужу,<br>
                И счастье будет с Вами пусть.<br>
            </p>`,
        bg: `url('img/bg/bg1.jpg')`,
    },
    {
        poemText:
            `<p>
                С ароматом мандарина<br>
                Новый год приходит в дом!<br>
                Пусть у теплого камина<br>
                Мы подарочки найдем:<br>
            </p>

            <p>
                Счастье, радость и здоровье,<br>
                Доброту, веселый смех,<br>
                Мир, уют, тепло с любовью,<br>
                Взлет в карьере и успех!<br>
            </p>`,
        bg: `url('img/bg/bg2.jpg')`,
    },
    {
        poemText: `<p>
        Хочешь дачу на Мальдивах?<br>
        Или может на Бали?<br>
        Но на Кролика милашку<br>
        Ты всё это не вали!<br>
        Это не его стихия,<br>
        Он с умеренных широт,<br>
        Пусть подарит тебе силы,<br>
        Много дел невпроворот,<br>
        Чтоб везде, всегда фартило<br>
        И везения волну,<br>
        Чтобы сам всего добился<br>
        И держался на плаву!<br>
    </p>`,
        bg: `url(img/bg/bg3.jpg)`,
    },
    {
        poemText: `<p>
        Волшебный, дивный праздник на пороге,<br>
        И в Новый Год открыта уже дверь,<br>
        Оставь в году ушедшем все тревоги<br>
        И только в лучшее и доброе поверь.<br>
        Пусть будут дни прекрасными и яркими,<br>
        И каждый новый день календаря<br>
        Запомнится счастливыми подарками,<br>
        И каждый миг не будет прожит зря.<br>
        Пусть рядом будут люди дорогие<br>
        И те, кого мы любим горячо,<br>
        Друзья, коллеги, близкие, родные,<br>
        Их мудрость и надежное плечо.<br>
        Под звон бокалов пусть желания исполнятся,<br>
        И колесо судьбы подарит много лет.<br>
        Пусть дом уютом и теплом наполнится,<br>
        Желаю в Новый год больших побед!<br>
        Достичь вершин заветных, без сомнения,<br>
        Поймать успех в круговороте дней,<br>
        Пусть в Новый Год веселым будет настроение,<br>
        А рядом — смех и искренность друзей!<br>
    </p>`,
        bg: `url(img/bg/bg4.jpg)`,
    },
    {
        poemText: `
            <p>
                Желаю вам успехов и свершений.<br>
                Для вас пусть лучшим будет этот год.<br>
                Открытий, мудрых правильных решений.<br>
                Не отступать, всегда идти вперед.<br>
            </p>
            <p>
                С коллегами взаимопонимания,<br>
                Достатка в доме и уютных дней.<br>
                Не обращать на пустяки внимания.<br>
                Пусть окружающие станут к вам добрей.<br>
            </p>`,
        bg: `url(img/bg/bg422.jpg)`,
    },
    {
        poemText: `
            <p>
                К сожаленью, эта картинка <br>
                не является новогодней,<br>
                поэтому поздравлений нет.<br>
            </p>`,
        bg: `url(img/bg/body-bg.png)`,
    },
]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.poem');

btn.addEventListener('click', function () {
    randomIndex = Math.floor(Math.random() * poems.length);
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;
    wrapper.style.backgroundImage = poems[randomIndex].bg;
})