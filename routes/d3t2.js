/**
 * Created by jaric on 11.08.2014.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('d3t2', { title: 'd3t2' });
});

module.exports = router;
