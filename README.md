Условие тестового задания Back-end:

node.js, база данных mysql

1. таблица user - поля: (firstName, lastName, image(binary), pdf(binary))

2. сделать веб сервис в который подается firstName

3. далее функция находит пользователя в базе по firstName

    a. генерит pdf файл вида firstName + lastName + image

4. сохраняет pdf файл в поле pdf базы данных- возвращает пользователю результат в виде JSON (true/false).

Комментраии по запуску:

Для начала работы программы неоходимо запустить сервер (node server.js) и затем открыть main.html(/views/main.html).