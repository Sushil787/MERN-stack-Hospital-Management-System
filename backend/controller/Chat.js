const conversation=require('../model/Conversation');
const message=require('../model/Message');



//create new conversation


const new_conversation=async(req,res)=>{

    const {senderId,receiverId}=req.body;
    console.log(senderId,receiverId);
    const newConversation=new conversation({
        member:[req.body.senderId,req.body.receiverId]
    });
    try{
        const savedConversation=await newConversation.save();
        res.status(200).json(savedConversation);
    }catch(err){
        res.status(500).json(err);
    }

    
}


//get conversation of a user

const get_conversation=async(req,res)=>{

    try{
        const conversation=await conversation.find({
            member:{$in:[req.params.userId]}
        });
        res.status(200).json(conversation);
    }catch(err){
        res.status(500).json(err);
    }
}



module.exports={get_conversation,new_conversation};