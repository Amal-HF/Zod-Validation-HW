import express from 'express';
import parkRouter from './routes/park.route';

const app = express();
app.use(express.json());

app.use('/api/v1/park', parkRouter);

app.listen(5000, () => {
    console.log('Server is running in port 500')
})