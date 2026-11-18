# Як створити гілки на GitHub

Команди запускайте **в терміналі в папці репозиторію лабораторної 1.10**, а не всередині ZIP. Перед запуском збережіть свої незакомічені зміни. Замініть `URL_ВАШОГО_РЕПОЗИТОРІЮ` справжнім HTTPS-посиланням на ваш порожній репозиторій, якщо `origin` ще не налаштований.

## 1. Початкова гілка

Якщо це ще не Git-репозиторій:

```bash
git init
git branch -M master
git add .
git commit -m "Version 1.0.0"
git remote add origin URL_ВАШОГО_РЕПОЗИТОРІЮ
git push -u origin master
```

Якщо репозиторій уже є, не виконуйте `git init`, `git branch -M` чи `git remote add` повторно: спочатку перевірте `git status`, `git branch` і `git remote -v`.

## 2. Develop

```bash
git switch master
git switch -c develop
git push -u origin develop
```

## 3. Реєстрація

```bash
git switch -c task_1.12 develop
```

Додайте `register.html` і `register.js` з комплекту, а також доповніть ваш `style.css` стилями форми. У попередній лабораторній 1.10 додайте посилання `href="register.html"` до пункту «Реєстрація».

Методичка вимагає **коміт після створення кожного поля**. Для справжньої історії такі коміти слід виконати послідовно під час розробки, наприклад:

```bash
git add register.html
git commit -m "Додано поле Прізвище"
```

Так само після додавання окремих полів: `Ім'я`, `Логін`, `Навчальна група`, `Пароль`, `Підтвердження паролю`. Якщо всі поля вже вставлені одразу з готового файлу, ці коміти не відповідатимуть фактичній послідовності розробки, тому не створюйте фіктивні коміти.

Після завершення:

```bash
git add .
git commit -m "Завершено форму реєстрації"
git push -u origin task_1.12
git switch develop
git merge --no-ff task_1.12 -m "Merge task_1.12 into develop"
git push origin develop
```

## 4. Команди Git

```bash
git switch -c git_commands develop
```

Додайте `git_commands.html` і доповніть стилі. Методичка просить коміт **після кожної групи команд**, тож поступово додавайте секції і після кожної виконуйте:

```bash
git add git_commands.html
git commit -m "Додано групу команд Git: робота з гілками"
```

Після завершення:

```bash
git add .
git commit -m "Завершено сторінку з командами Git"
git push -u origin git_commands
git switch develop
git merge --no-ff git_commands -m "Merge git_commands into develop"
git push origin develop
```

Якщо Git повідомить `nothing to commit`, пропустіть відповідний коміт: змін немає. Якщо виникне конфлікт злиття, розв'яжіть його перед завершенням `merge`.

## 5. Перевірка

```bash
git branch -a
git log --oneline --graph --decorate --all
```

У GitHub мають бути `master`, `develop`, `task_1.12`, `git_commands`. Не видаляйте ці гілки. **Завдання 3** зі слайдів — окрема групова робота з форками, для якої потрібні дані вашої групи та інших студентів.
