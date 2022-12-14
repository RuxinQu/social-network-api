const router = require('express').Router();
const { getAllUser, getOneUser, postUser, updateUser, deleteUser, addFriend } = require('../../controllers/userController')

router.get('/', getAllUser)
    .post('/', postUser)
    .get('/:id', getOneUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser)
    .post('/:userId/friends/:friendId', addFriend)


module.exports = router;