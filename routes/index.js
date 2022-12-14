const router = require('express').Router();
const apiRoutes = require('./api/user');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('couldn\'t find the route');
});

module.exports = router;