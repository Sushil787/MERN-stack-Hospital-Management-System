const mongoose = require('mongoose');

const Message_schema = mongoose.Schema({
   ConversationId:{
    type:String,
   },
    sender:{
     type:String,
    },
    text:{
        type:String,
    },  
   

},{timestamps:true});


const Message = mongoose.model("Message", Message_schema);
module.exports = Message;