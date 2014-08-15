/**
 * Created by yarvyk on 12.08.2014.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('ang1', { title: 'ang1' });
});
router.get('/data', function(req, res) {
    var data = [
        {
            'id': 'obj0',
            'name': 'Qwe',
            'snippet': 'qsc qscr',
            'date': (new Date()).getMilliseconds() + 10000,
            'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB8UlEQVRYR+2WSysFYRyHnbIhYoOFXFL2LikUNkQuC2Wl7GShfAQUvgArEjvFDiFkI2KjKGvKJdkJkZJ4fjWjabznnHmPM+dszltPc+H8f8+8t5lIVppbJM35WRmBWD1Qx/AUwDF8hjVU0QRWCBx0Qs849sFjGBImgRqCzn1h11y3wEOyJUwCHYTsG4IuudcGT8mUMAlkE3ACDYYg3Zfge7Ikos2BEgKOoNoQtM69AfhKhkSsVVBMwB5oTvjbEjeGwxZQ/SJHotYQNsK9xf9KBNkJtResQacv7IPrZvCvGCunIAIqqIk5C6O+6ldc18OzVarnn4MKuD/p52QZCj01DjjvgoQmpa2AcitgFRo9ElOcTybSC4kIKCcX5mHICdXTd4NpA4vplaiAW1QCEpHQK7TChU1P2Aj0UngOvmEMdpygJo4boCV7A1oZgd8ZNgK3FC5zQhVU6XlS7Zi7UAValnpnqEfiNhuBe6qVOhXvOJb7qmv7Vq/oO+IQeuAtnoGNgIZgATQE2gXdIfBm5HOxBZoLgSRsBOI9jPv3HE42oR1OQXvES7QfhyGgrDzY9vTEDOeanNNOD/76hCXgl3ADJaFeSYmAQrxfV3r6Cf9QhNkDyhoHbdM6ahj+tLAFVF9vS31ZG1vYAtFyUzYHMgJxe+AH/lFKIf+FmOgAAAAASUVORK5CYII='
        },
        {
            'id': 'obj1',
            'name': 'Asd',
            'snippet': 'axe axef',
            'date': (new Date()).getMilliseconds() + 5000,
            'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACaklEQVRYR+2WPUhWURjHte8lamhxyUEwIXGpJUqhQRARcZFCoS0KIYqESqLFpS/CD3TIzcUCh6AGUReLaAorrZYGDYnQINKWoqx+/3juy/F4z733TeNd3gd+nHPPec5z//ec55xzS0sKbKUFfn9JUUBxBrLOQBnJ2gLNUA77YJsl8G/KOXgDs/AYpmE1S4KnCdCLr8Jp2JEloPl8phyFGzCfNC5JQCMDh+1roxjvqbyDY7DLGr9RPoVK2O+97AfPfdAFP+OEhAS04nwftjiDPlA/CMvQBI+sT0LHYC+8Bc2ab5M0KKbGrrE4AYfti3Z6vuM8N1jbHsovTn3F6hOU9XFfSptEaPwvt98XsJXOl1AdE+Q7bUrCKbgF582nh/IKHIeHoFz5CtdA8btht/meoRxKEqBMf2AOSWsb+Mhc82UTqQaJu249yqEKyO0QfwYG6eww5yxrGxJyiY7b1ikx2g2R1VJR0v41X4CmR1tOpnXOsrZxIkJLIF93dtYJcNXGrW3oi/Npv4vz2dAMVNHxGpSM/8tGCNweEhBNkbtmmy1kgIDnkgSo7yicAGWszv0DlhObIUbbtz9NgP8iHUpat16n4yP1m6BEVtbHnYB+HF1cuswW8hUQ+Ss/dBzL3O1Ux7NuwTS7h0Ob65R2G/oBFeCkNbrb1D2aQyKW6KiBxY0I0LGqI1Z2AXTTyS7CnYTP1yWko/qF75PvDCgZ9eMRbdPn1BXjUMLLdbecAv2srLN8BSiAsliHVNrYGXx0sgr9F8RaWpDQON0TnXAEtsMnQ/8Dz+AJvEqYlVzXvwrIEjuTT1FAcQYKPgN/APEeaSHEmmQjAAAAAElFTkSuQmCC'
        },
        {
            'id': 'obj2',
            'name': 'Zxc',
            'snippet': 'zwd zwdv',
            'date': (new Date()).getMilliseconds() + 2500,
            'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC+klEQVRYR+2WWaiOQRjHz2fJdnGklCVLTpYQEmVNuSBuUEKScLhAJNnXbGUJkRxlS6IsIRdSbmRLIlxZsxU6JedkubDF7695T3OmmTnD99V3c6Z+ve9sz/zneZ6Z982VFLnkirx+Sb2AQnlgJqHcaMK5huex1NAWQkAZiz2GRmbRnzy7wcsUEXUJ6IqR9vAQqgIGR9N+2ekbRf1KvgLk1oPQEN7BEHjtMVpK2yNoa/re8uwJn/IVIEPtLCO7eV8cMNqF9iWmb0eq+zU+FgLtOtuVxu6BRZFdNaZvKoyFVvAeToIbnlomYgJSQyCDveEE9PEIPGyEf/GJzzcJNX8hbIWmEe88o28a3HHHhAQsY+BKaAnf4TjMdiYrPEdBp+AXfIPmzpiz1DvDAPgBG4xYjf9bfAJW0b7Fs5sZtGUXjIQp89vAc1DfRHBz5CltvUAbWgdN4AxMCglYS4duNMXrI3S0hNzlfaCpy93nQK6V4K/QD+57hPeg7QkoT/bCK5jlE7CcRsVSiyuTtTPdZlKdFR1LZXeovKGjg9M5j3pFaIIdgmoGNTCL3zATzvMcb00exvvNiIBT9NW414yLHl9bgG66D6C4ZWU7L0ut+hTetUiobKND8bbLaSqTUzzgG7OTRvv2U5JpR6Gi06LjpoyXN3WNX4Rx/yvgKhNHWJPloQdWXbflAtC9r8TU9a1bUF7qBINAidodfvtExC4iGXhhdiIv6Gg28xgZStstUOyz8AznXcfvgBmv0Nyz5moTEhb9FujHYpMxrkV05mXUFq3LRwmr3V2CMaCj2B/0bbgG8oJb5MnWMQFaRGdX/wNz4JDHiN2kfwZ9qhXzcjhiOlvwVN70debfpr4rJkDH7Tp8Bl25umhiZTWdm6ESFDp5JqmEcmA/s+eCsnp6giX9kinRFOsVCeNrhoQEKHm0sJLJTh6f7cE0Kgn1gdH/oe+vKaiprs9xymb2MWg+XIAJKRPsMYUQsB6DSrSR4PsYRTUVQsC/brrW+HoBRffAH2EriyHLILpHAAAAAElFTkSuQmCC'
        }
    ];
    res.send(data);
});

module.exports = router;
