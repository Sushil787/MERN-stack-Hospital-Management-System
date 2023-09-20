const mongoose = require('mongoose');

const Conversation_schema = mongoose.Schema({
    member:{
        type:Array
    }
   

},{timestamps:true});


const conversation = mongoose.model("conversation", Conversation_schema);
module.exports = conversation;