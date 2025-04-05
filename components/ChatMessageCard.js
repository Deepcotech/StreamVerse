import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessageCard = ({ name, message }) => {
  return (
    <div className="flex gap-2  p-2 items-center">
      <img className="h-8 w-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/6084/6084503.png" alt="user"/>

      <p className="text-sm font-medium">{name}</p>
      <p className="text-sm break-all">{message}</p>
    </div>
  );
};

export default ChatMessageCard;
