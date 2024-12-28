import express from 'express';
import configureRoutes from './routes';
import connectToDatabase from './db/connection';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(express.static("public"));
app.use(express.json());

(async () => {
  try {
    // Подключение к базе данных
    await connectToDatabase();

    // Подключение маршрутов
    configureRoutes(app);

    // Запуск сервера
    app.listen(port, host, () => {
        console.log(`[ ready ] http://${host}:${port}`);
    });
  }catch(err) {
    return console.log(err);
  } 
})();