const express = require('express');
const app = express();
const port = 3000;

// Устанавливаем шаблонный движок EJS
app.set('view engine', 'ejs');

// Роут для главной страницы
app.get('/', (req, res) => {
  // Рендерим шаблон index.ejs
  res.render('index');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
