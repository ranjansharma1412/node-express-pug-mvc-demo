import express from 'express';
import { dbConnection } from './src/dbConnection.js'
import Config from './src/constants/config.js';
import userRouter from './src/routes/user.route.js';
const app = express()

dbConnection();
app.set("Pug view","pug")
app.set("views","./src/views")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter)

app.use('/pug',(req,res,next)=>{
    res.render("registration.pug")
})

app.listen(Config.PORT, () => {
    console.log(`Example app listening on port ${Config.PORT}`)
})