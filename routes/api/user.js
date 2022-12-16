const router = require('express').Router();
const { getAllUser, getOneUser, postUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController')

router.route('/')
    .get(getAllUser)
    .post(postUser)

router.route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)
    
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)


module.exports = router;