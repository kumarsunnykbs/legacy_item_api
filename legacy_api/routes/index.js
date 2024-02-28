var express = require('express');
var router = express.Router();
var axios = require('axios');
var legacyURL = 'https://sf-legacy-api.now.sh/items';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/items', async (req, res, next) => {
	const { page, perPage } = req.params;

	let params = {
		page: page,
		perPage: perPage
	}
	let response = await axios.get(legacyURL, params);

	let result = {
		data: response.data.data,
		recordsTotal: response.data.metadata.totalItems,
		recordsFiltered: response.data.metadata.totalItems
	}

	res.json(result);
});
module.exports = router;
