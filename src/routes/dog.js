const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (_req, res) => {
	// Fetching data from dog.ceo
	const data = await fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json());
	const breedName = data.message.split('/');
	const name = breedName[4].replace(/\b(\w)/g, char => char.toUpperCase());

	res.render('dog.ejs', {
		imgURL: data.message,  // Image URL
		name  // Breed Name
	});
});

module.exports = router;
