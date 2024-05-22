import React from "react";
import Navbar from "../components/Navbar";
import PromptInput from "../components/PromptInput";
import DisplayChat from "../components/DisplayChat";

const Chat = () => {
  return (
    <>
      <Navbar />
      <div className="chat-container w-screen h-screen bg-[#161b22] mt-16">
        <DisplayChat />
        <div className="prompt-input flex items-center justify-center h-[12%]">
          <PromptInput />
        </div>
      </div>
    </>
  );
};
export default Chat;
