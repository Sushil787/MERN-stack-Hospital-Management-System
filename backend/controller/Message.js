const message=require('../model/Message');




//create new message

const Add_Message=async(req,res)=>{

    const newMessage=new message(req.body);
    try{
        const savedMessage=await newMessage.save();
        res.status(200).json(savedMessage);
    }catch(err){
        res.status(500).json(err);
    }

    
}


//get message of a conversation

const get_message=async(req,res)=>{
    try{
        const Message=await message.find({
            ConversationId:req.params.ConversationId
        });
        res.status(200).json(Message);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports={Add_Message,get_message};