const express = require("express");
const {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handlePostUserById,
} = require("../controllers/user");

const router = express.Router();

router.route("/")
    .get(handleGetAllUsers)
    .post(handlePostUserById);

router.route("/:id")
    .get(handlegetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;