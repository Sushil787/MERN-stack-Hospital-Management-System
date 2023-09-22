import { Avatar } from "@mui/material";
import React from "react";

const Message = ({ message }) => {
  return (
    <div
      className={
        message.sender!==localStorage.getItem("userId")?"message owner":"message"
      }
    >
      <div className="messageinfo">
        <Avatar sx={{ width: 30, height: 30 }}>U</Avatar>
      </div>
      <div className="messagecontent">
        <p className="texts">{message?.text}</p>
      </div>
    </div>
  );
};

export default Message;
