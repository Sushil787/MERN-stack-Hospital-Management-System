const express = require("express");
const chat_router = express.Router();
const chat_controller = require("../controller/Conversation");
const Message_controller=require("../controller/Message");
const auth_middleware = require("../middleware/auth");




chat_router.post("/new-conversation",chat_controller.new_conversation)
chat_router.get("/get-conversation/:userId",chat_controller.get_conversation)
chat_router.post("/Add-message",Message_controller.Add_Message)
chat_router.get("/get-message/:ConversationId",Message_controller.get_message)






module.exports = chat_router;