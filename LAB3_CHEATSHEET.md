# Шпаргалка до лабораторної роботи №3

## Що пояснити

- `<img>` показує зображення; `src` задає файл, `alt` — текстовий опис, `width` і `height` задають розміри.
- `<video controls>` відтворює відео; джерело можна вказати в дочірньому `<source src="..." type="video/mp4">`.
- `<audio controls>` відтворює аудіо без відеокадру; для MP3 використовують `type="audio/mpeg"`.
- `<iframe>` створює вкладений контекст перегляду для сторінки, карти або YouTube-плеєра.
- У сторінці лабораторної №3 є два шари карти: музеї та театри, по п’ять позначок у кожному.

## Git-команди

```bash
git --version
git branch
git switch -c lab3
git status
git add index.html lab3 assets/style.css assets/college-logo.jpg assets/college-intro.mp4 assets/audio-demo.mp3
git commit -m "Add Lab 3 multimedia page"
git switch main
git merge lab3
git push origin main
```

Якщо в методичці написано `master`, а фактична головна гілка репозиторію має назву `main`, потрібно використати фактичну назву `main`.
