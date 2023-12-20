/* eslint-disable react/prop-types */
import { useState } from "react";
import ChatApp from "../coponents/ChatApp";

function Input(props) {
  return (
    <>
      <input
        placeholder="Search"
        type="text"
        value={props.value}
        onChange={props.onChange}
        className=" w-[90%] pl-4 py-1 bg-[#F7F7F7] rounded-[5px]"
      />
    </>
  );
}

const Chating = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-between bg-[rgba(217,217,217,0.22)]  ">
      <div
        className="h-[100%] w-[58px] rounded-[10px]  ml-4 my-4 "
        style={{
          background: "linear-gradient(1deg, #43A5DC -3.37%, #FF7BAC 99.6%)",
        }}
      >
        <img src="images/chat.png" alt="chat" className="rounded-t-[10px] " />
        <div className="flex justify-center mt-[16rem] ">
          <div className="flex flex-col items-center justify-center w-[46px] h-[58px] bg-[rgba(217,217,217,0.63)] ">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                id="Ellipse 3"
                cx="14.5"
                cy="14"
                rx="14.5"
                ry="14"
                fill="white"
              />
            </svg>
            <p className="text-white text-[9px] ">Profile</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20 mb-2 ">
          <img src="images/logout.png" alt="logout" className="w-[46px] " />
          <a href="#" className="text-white text-[10px] ">
            Logout
          </a>
        </div>
      </div>
      <div className="bg-white w-[450px] rounded-[10px] my-4 ">
        <div className="flex justify-between p-4 ">
          <h2 className="text-black text-[18px] font-[800] ml-2">Chat</h2>
          <img src="images/edit.png" alt="edit" className="w-8" />
        </div>
        <div className="flex justify-center">
          <Input value={search} onChange={handleSearchChange} />
        </div>
        <div className="flex items-center ml-5 mt-2">
          <img src="images/logo.png" alt="logo" />
          <div className="ml-2">
            <h4 className="text-black text-[15px] font-[800]">Pie Chat</h4>
            <p className="text-[rgba(0,0,0,0.32)] text-[10px]">
              How are you doing?
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white w-[650px] rounded-[10px] my-4 mr-4 ">
        <div className="flex items-center justify-between p-4 ">
          <div className="flex">
            <img src="images/logo.png" alt="logo" />
            <h4 className="text-black text-[15px] font-[700] ml-2">Pie Chat</h4>
          </div>
          <img src="images/dot3.png" alt="" />
        </div>
        <div className="bg-[rgba(0,0,0,0.13)] h-[1px] w-[604px] ml-6  " />
      <div>
      <ChatApp />
      </div>
      </div>
    </div>
  );
};

export default Chating;
