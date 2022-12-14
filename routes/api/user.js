const router = require('express').Router();
const { getAllUser, getOneUser, postUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController')

router.get('/', getAllUser)
    .post('/', postUser)
    .get('/:id', getOneUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser)
    .post('/:userId/friends/:friendId', addFriend)
    .delete('/:userId/friends/:friendId', deleteFriend)


module.exports = router;