# Global Adventures Blog — практична робота №1

Багатосторінковий адаптивний сайт про Львів, Париж і Токіо. Тексти подані як туристичні рекомендації та мрії про майбутню подорож; вони не стверджують, що автор відвідав ці міста.

## Сторінки
- `index.html` — головна;
- `lviv.html`, `paris.html`, `tokyo.html` — сторінки міст;
- `gallery.html` — галерея;
- `contact.html` — контактна форма;
- `subscribe.html` — форма підписки;
- `about.html`, `privacy.html`, `terms.html` — службові сторінки футера.

## Ресурси
- `css/style.css` — наданий викладачем `style1.css`, доповнений адаптивними стилями;
- `assets/site.js` — мобільне меню та прозоре повідомлення про демонстраційну роботу форм;
- `assets/images/` — локальні JPEG; `favicon.ico` — значок сайту.

## Фото та ліцензії
Фото отримані з Unsplash і використовуються відповідно до Unsplash License (https://unsplash.com/license).
- Львів: Kseniia Rastvorova, https://unsplash.com/photos/high-angle-photography-of-houses-under-white-clouds-Eg8HU1eyxNY
- Париж: Tsimur Asayonak, https://unsplash.com/photos/eiffel-tower-in-paris-omvjJ413iwM
- Токіо: Louie Martinez, https://unsplash.com/photos/tokyo-tower-illuminated-at-dusk-with-city-skyline-IocJwyqRv3M

## Форми
Форми мають `method="post"`, доступні label, нативну валідацію та Netlify Forms атрибути. У поточній локальній/статичній демоверсії JavaScript не відправляє й не зберігає значення; повідомлення прямо це пояснює. Для реального приймання потрібно розгорнути проєкт на Netlify та активувати оброблення форм у налаштуваннях. Розсилка потребує окремого сервісу.

## Запуск
Відкрийте `index.html` локально або розмістіть вміст папки `pw1` на статичному хостингу. Для окремого URL на GitHub Pages потрібне налаштування Pages із папкою `/pw1` як коренем; GitHub Pages зазвичай публікує корінь гілки або `/docs`, тому найпростіше окреме розміщення дасть Netlify чи Sites.
