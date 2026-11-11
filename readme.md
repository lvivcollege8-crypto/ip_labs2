# ip_labs2

Навчальний вебпроєкт з дисципліни «Програмування в Internet» для Чонки Максима Андрійовича, група ІП-41.

## Структура

- `index.html` — головна сторінка з меню та картками лабораторних.
- `lab1/index.html` — чесно позначена заготовка лабораторної №1.
- `lab2/index.html` — лабораторна №2 про створення меню сайту.
- `lab3/index.html` — сторінка з логотипом, MP4, MP3, YouTube iframe, п’ятьма відеопрев’ю та картою варіанта 2.
- `lab3/map.html` — інтерактивна карта з двома перемикними шарами і 10 маркерами (5 музеїв і 5 театрів). Карта використовує Leaflet та OpenStreetMap; це поки не користувацька карта Google My Maps.
- `assets/style.css` — адаптивні стилі всіх сторінок.
- `assets/college-logo.jpg`, `assets/college-intro.mp4`, `assets/audio-demo.mp3` — графічний та медіафайли для сторінки Lab3.
- `LAB3_CHEATSHEET.md` — шпаргалка до захисту.

## Локальний запуск

Відкрий `index.html` у браузері. Для коректної роботи вбудованих зовнішніх карт і відео відкрий проєкт через HTTP-сервер у корені: `python3 -m http.server 8000`, потім перейди на `http://localhost:8000`. Для зовнішнього вмісту потрібне підключення до Інтернету.

## Статус GitHub і Netlify

Існуючий GitHub-репозиторій: https://github.com/lvivcollege8-crypto/ip_labs2. Він публічний, головна гілка — `main`. Локальна гілка `lab3` має коміт, але підключення GitHub відхилило створення віддаленої гілки; Lab3 ще не завантажено в репозиторій.

Попередня адреса Netlify: https://bespoke-dango-45b158.netlify.app/. Вона була опублікована для попереднього стану проєкту; розгортання Lab3 після цієї роботи ще не підтверджено.

## Джерела

- Офіційний сайт коледжу: https://itcollege.lviv.ua/
- YouTube-канал коледжу: https://www.youtube.com/@itcollegelviv
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Multimedia_and_embedding
