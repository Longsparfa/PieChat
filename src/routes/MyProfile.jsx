/* eslint-disable react/prop-types */
import { useState } from "react";

function Input(props) {
  return (
    <>
      <label className=" text-black text-[13px] leading-[1px ml-20">
        {props.title}
      </label>
      <input
        placeholder="Enter Password Here"
        type="password"
        value={props.value}
        onChange={props.onChange}
        className="block w-[60%] border-2 border-solid border-[rgba(0,0,0,0.13)] rounded-[10px] py-2 px-3 ml-20 mb-2"
      />
    </>
  );
}

const MyProfile = () => {
  const [displayName, setDisplayName] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeProfession = (e) => {
    setProfession(e.target.value);
  };

  const handleChangeDisplayName = (e) => {
    setDisplayName(e.target.value);
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
        <div className="flex pl-4 pt-4">
          <img src="images/arrow.png" alt="arrow" />
          <p className="text-black text-[18px] font-[800] ml-2">Profile</p>
        </div>
        <div className="flex justify-center">
          <img src="images/E.png" alt="E" className="w-[80px] " />
        </div>
        <form action="#" className="">
          <Input
            title="Display Name"
            value={displayName}
            onChange={handleChangeDisplayName}
          />

          <Input
            title="Profession"
            value={profession}
            onChange={handleChangeProfession}
          />

          <Input title="Phone" value={phone} onChange={handleChangePhone} />

          <Input title="Email" value={email} onChange={handleChangeEmail} />
          <button
            type="submit"
            className="w-[60%] bg-black text-white rounded-[5px] text-[12px] leading-[12px] font-[700px] py-4 ml-20 mt-4 "
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="bg-white w-[650px] rounded-[10px] my-4 mr-4 ">
        <div className=" ">
          <div className="flex justify-center  ">
            <img
              src="/images/chatMsg.png"
              alt="PieChat"
              className="rounded-[30px] mt-20"
            />
          </div>
          <h1 className="text-center text-black text-[35px] leading-[29px] font-[800] mb-8 mt-20 ">
            PieChat
          </h1>
          <div className="flex justify-center mb-10">
            <img
              className="flex justify-center"
              src="/images/builtBy.png"
              alt="button"
            />
          </div>
          <p className="text-center text-[rgba(0,0,0,0.25] text-[13px] leading-[14px] font-[400] mb-10 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="flex justify-center">
            <img src="/images/Rectangle5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
