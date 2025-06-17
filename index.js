import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import getRiskOverview from './routes/riskOverview.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use('/', getRiskOverview);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});