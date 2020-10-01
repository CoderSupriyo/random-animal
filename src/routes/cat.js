const fetch = require('node-fetch');
const qs = require('querystring');

const express = require('express');
const router = express.Router();

router.get('/', async (_req, res) => {
	const queryParams = {
		size: 'full',
		order: 'RANDOM',
		limit: 1
	};
	// Fetching data from thecatapi
	const data = await fetch(`https://api.thecatapi.com/v1/images/search?${qs.stringify(queryParams)}`, {
		method: 'GET',
		headers: { 'X-API-KEY': process.env.CAT_API_KEY }
	}).then(res => res.json());

	return res.render('cat.ejs', {
		imgURL: data[0].url // Image URL
	});
});

module.exports = router;
