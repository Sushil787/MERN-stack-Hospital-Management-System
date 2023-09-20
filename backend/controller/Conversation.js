const conversation=require('../model/Conversation');




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
        const Conversation=await conversation.find({
            member:{$in:[req.params.userId]}
        });
        console.log(Conversation)
        res.status(200).json(Conversation);
    }catch(err){
        res.status(500).json(err);
    }
}



module.exports={get_conversation,new_conversation};