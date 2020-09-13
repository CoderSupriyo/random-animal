const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	// Fetching data from randomfox.ca
	const data = await fetch('https://randomfox.ca/floof/').then(res => res.json());

	res.render('fox.ejs', {
		image: data.image,
		link: data.link
	});
});

module.exports = router;
