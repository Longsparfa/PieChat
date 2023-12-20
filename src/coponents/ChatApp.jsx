/* eslint-disable react/prop-types */
import { useState } from "react";

function Input(props) {
  return (
    <>
      <input
        placeholder="Type your message..."
        type="text"
        value={props.value}
        onChange={props.onChange}
        className=" w-[90%] pl-4 py-1 bg-[#F7F7F7] rounded-[5px]"
      />
    </>
  );
}

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <div className=" ">
      <p className="absolute bottom-0 top-60 w-[60px] h-[31px] bg-[#D9D9D9] text-black text-[13px] font-[400] rounded-[10px] pl-4 pt-1 ml-10 mt-10">
        Hello
      </p>
      <p className="absolute bottom-0 top-80  w-[150px] h-[31px] bg-[#D9D9D9] text-black text-[13px] font-[400] rounded-[10px] pl-4 pt-1 ml-10 mt-10">
        How are you doing?
      </p>
      <div></div>
      <div className="">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`absolute right-0 top-80 mt-20 mr-10 w-[115px] h-[31px]  ${
              message.sender === "user"
                ? "bg-[#43A5DC] text-black text-[13px] pl-4 pt-1 font-[400] "
                : null
            } rounded-[10px] `}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="mt-[25rem] p-4">
        <div className="">
          <Input value={newMessage} onChange={handleInputChange} />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-2 py-1 bg-black text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatApp;
