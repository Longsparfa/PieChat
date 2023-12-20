/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit} className="">
        <label className="text-black text-[13px] leading-[11px] ">Email</label>
        <input
          placeholder="Enter Email Here"
          type="text"
          value={props.email}
          onChange={props.handleEmailChange}
          className="w-[100%] border-2 border-solid border-[rgba(0,0,0,0.13)] rounded-[10px] py-2 px-3 mb-4 "
        />
        <label className=" text-black text-[13px] leading-[1px]">
          Password
        </label>
        <input
          placeholder="Enter Password Here"
          type="password"
          value={props.password}
          onChange={props.handlePasswordChange}
          className="w-[100%] border-2 border-solid border-[rgba(0,0,0,0.13)] rounded-[10px] py-2 px-3 mb-2"
        />
        <div className="flex mt-2">
          <input
            type="checkbox"
            checked={props.rememberMe}
            onChange={props.handleRememberMeChange}
            className="rounded-[1px] border-2 border-solid border-[rgba(0,0,0,0.13)] mb-6 "
          />
          <div className="flex ">
            <p className="text-black text-[12px] leading-[11px] font-[400px] ml-2 mr-20">
              Remember me?
            </p>
            <p className="text-[#0A7DBD] text-[12px] leading-[11px] font-[600px] ">
              Forgot Password?
            </p>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="w-[100%] bg-black text-white rounded-[5px] text-[12px] leading-[12px] font-[700px] py-4 "
          >
            Login
          </button>
          <button
            type="submit"
            className="w-[100%] bg-white text-black rounded-[5px] text-[12px] leading-[12px] font-[700px] border-2 border-solid border-[rgba(0,0,0,0.73)] py-4 mt-4 "
          >
            Demo Login
          </button>
          <p className="text-[rgba(0,0,0,0.75)] text-[12px] text-center leading-[11px] font-[400px] mt-2">
            Don't have a account? <span className="text-[#0A7DBD]">Signup</span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
