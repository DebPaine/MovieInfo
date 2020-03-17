const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json('Server started'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
