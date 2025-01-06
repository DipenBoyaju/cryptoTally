import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/dbConfig.js';
import authRoute from './routes/authRoute.js'
import coinRoute from './routes/coinRoute.js'
import coinDataRoute from './routes/coinDatasRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors({
  // origin: 'http://localhost:5173',
  origin: 'https://crypto-tally.vercel.app',
  methods: 'GET,POST,DELETE',
  credentials: true,
}));

app.use(express.json())
app.use(cookieParser());

app.use('/api', authRoute)
app.use('/api', coinRoute)
app.use('/api', coinDataRoute)

connectDB()
  .then(
    () => {
      app.listen(PORT, () => {
        console.log(`Server is Live at port ${PORT}`);
      })
    }
  ).catch((err) => {
    console.error('Failed to connect to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my server</h1>');
});

app.use((req, res) => {
  res.status(400).json({
    status: 'error',
    message: 'Page not Found'
  })
})