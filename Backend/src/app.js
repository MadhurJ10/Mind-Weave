import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';

configDotenv()

const app = express();

app.use(express.json())

app.get('/', (req ,res)=>{
    res.send('eheheh working')
}
)

export default app;