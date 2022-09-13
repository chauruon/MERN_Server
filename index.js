import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRouter from './routes/post.js'

const app = express();


app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

const CONNECTION_URI = "mongodb+srv://chauruon:chauruon@gzfashion.abbacbz.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000


mongoose.connect(CONNECTION_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(
    ()=> app.listen(PORT, ()=> console.log(`Server đang chạy port: ${PORT}`))
)
.catch((error)=> console.log(error.message));

// Router
// http://localhost:5000/

app.use(`/post`,postRouter);