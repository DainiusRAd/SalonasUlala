const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Prijungiamas MongoDB
mongoose.connect('mongodb://localhost:27017/ulala', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Prisijungta prie MongoDB'))
  .catch(err => console.error('Klaida prisijungiant prie MongoDB', err));

app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);

// Maršrutai

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveris paleistas portu ${PORT}`));
