import express from 'express';
import { dbConnection } from './src/dbConnection.js'
import Config from './src/constants/config.js';
import userRouter from './src/routes/user.route.js';
import path from 'path'
const app = express()

dbConnection();
const __dirname = path.resolve();
const staticPath = path.join(__dirname, "./public");
app.use("/css",express.static('css'));
app.use(express.static(staticPath))
app.set("Pug view", "pug")
app.set("views", "./src/views")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter)

app.listen(Config.PORT, () => {
    console.log(`Example app listening on port ${Config.PORT}`)
})