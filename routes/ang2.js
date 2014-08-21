/**
 * Created by yarvyk on 20.08.2014.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('ang2', { title: 'ang2' });
});
router.get('/data', function(req, res) {
    var data = [
        {
            'id': 'obj0',
            'name': 'Qwe',
            'snippet': 'qsc qscr',
            'date': (new Date()).getMilliseconds() + 10000,
            'image': 'images/ang/ang1.png'
        },
        {
            'id': 'obj1',
            'name': 'Asd',
            'snippet': 'axe axef',
            'date': (new Date()).getMilliseconds() + 5000,
            'image': 'images/ang/ang2.png'
        },
        {
            'id': 'obj2',
            'name': 'Zxc',
            'snippet': 'zwd zwdv',
            'date': (new Date()).getMilliseconds() + 2500,
            'image': 'images/ang/ang3.png'
        }
    ];
    res.send(data);
});

module.exports = router;
