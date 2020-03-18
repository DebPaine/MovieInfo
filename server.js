const express = require('express');
const searchMovies = require('./routes/searchMovies');

const app = express();

app.use(express.json({ extended: false }));

app.use('/searchMovies', searchMovies);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
