/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Svg from "../coponents/Svg";
import Form from "../coponents/Form";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <>
      <div className="">
        <div className="h-[100%] w-[50%] fixed z-index-[1] top-0 overflow-x-hidden pt-[20px] left-0 ">
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
            <h1 className="text-[35px] text-center text-black leading-[26px] font-[800] ">
              Welcome Back
            </h1>
            <p className="text-[13px] text-center text-[rgba(0,0,0,0.50)] leading-[8px] font-[400] mt-4 mb-6">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <Form
              handleSubmit={handleSubmit}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleRememberMeChange={handleRememberMeChange}
              email={email}
              password={password}
              rememberMe={rememberMe}
            />
          </div>
          <div className="flex justify-end ">
            <Svg />
          </div>
        </div>

        <div
          className="h-[100%] w-[51%] fixed top-0 overflow-x-hidden right-0 rounded-[10px] "
          style={{
            background: "linear-gradient(1deg, #43A5DC -3.37%, #FF7BAC 99.6%)",
          }}
        >
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
            <div className="flex justify-center  ">
              <img
                src="/images/chatMsg.png"
                alt="PieChat"
                className="rounded-[30px]"
              />
            </div>
            <h1 className="text-center text-white text-[35px] leading-[29px] font-[800] mb-10 mt-20 ">
              PieChat
            </h1>
            <div className="flex justify-center mb-10">
              <img
                className="flex justify-center"
                src="/images/builtBy.png"
                alt="button"
              />
            </div>
            <p className="text-center text-white text-[13px] leading-[14px] font-[400] mb-10 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="flex justify-center">
              <img src="/images/Rectangle8.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
