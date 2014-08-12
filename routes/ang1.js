/**
 * Created by yarvyk on 12.08.2014.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('ang1', { title: 'ang1' });
});

module.exports = router;
