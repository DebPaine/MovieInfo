const express = require('express');
const axios = require('axios');
const config = require('config');

const router = express.Router();
const api_key = config.get('api_key');

router.get('/:movie', async (req, res) => {
	try {
		const movies = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${req.params.movie}`
		);
		res.json(movies.data['results']);
	} catch (err) {
		res.status(400).json('Error');
	}
});

module.exports = router;
