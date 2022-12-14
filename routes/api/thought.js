const router = require('express').Router();
const { getAllThought } = require('../../controllers/thoughtController')

router.get('/', getAllThought)



module.exports = router;