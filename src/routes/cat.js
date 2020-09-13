const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	// Fetching data from thecatapi
	const _res = await fetch('https://api.thecatapi.com/v1/images/search');
	const data = await _res.json();

	res.render('cat.ejs', {
		imgURL: data[0].url // Image URL
	});
});

module.exports = router;
