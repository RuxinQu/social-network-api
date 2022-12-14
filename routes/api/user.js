const router = require('express').Router();
const { getAllUser, getOneUser, postUser, updateUser, deleteUser } = require('../../controllers/userController')

router.get('/users', getAllUser)
    .post('/users', postUser)
    .get('/users/:id', getOneUser)
    .put('/users/:id', updateUser)
    .delete('/users/:id',deleteUser)



module.exports = router;