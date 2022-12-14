const router = require('express').Router();
const { getAllUser } = require('../../controllers/userController')

router.get('/users', getAllUser)



module.exports = router;