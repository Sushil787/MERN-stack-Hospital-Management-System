const express = require("express");
const chat_router = express.Router();
const chat_controller = require("../controller/Chat");
const auth_middleware = require("../middleware/auth");



chat_router.post("/new-conversation",chat_controller.new_conversation)






module.exports = chat_router;