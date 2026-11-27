# Лабораторна робота №8 — SCSS

Адаптивна навчальна сторінка за мотивами головної сторінки Львівської політехніки.

## Структура
- `index.html` — сторінка лабораторної;
- `scss/styles.scss` — SCSS-джерело зі змінними, вкладеними селекторами, картою брейкпоінтів та mixin `respond-to`;
- `css/styles.css` — скомпільований CSS;
- `css/styles.css.map` — source map для зв’язку CSS із SCSS;
- `screenshots/` — знімки фактичного відображення на різних розмірах екрана.

## Компіляція
З кореня проєкту:

```bash
npx sass --watch lab8/scss:lab8/css
```

Один раз без режиму спостереження:

```bash
npx sass --style=expanded --source-map lab8/scss/styles.scss lab8/css/styles.css
```

Брейкпоінти: mobile — 576 px, tablet — 768 px, desktop — 1024 px.
