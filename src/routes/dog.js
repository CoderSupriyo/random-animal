const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	// Fetching data from dog.ceo
	const data = await fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json());
	const breedName = data.message.split('/');
	const name = breedName[4].charAt(0).toUpperCase() + breedName[4].slice(1);

	res.render('dog.ejs', {
		imgURL: data.message,  // Image URL
		name  // Breed Name
	});
});

module.exports = router;
