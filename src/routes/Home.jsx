const Home = () => {
  return (
    <div className="w-full">
      <div className="">
        <img src="/images/RectangleH.png" alt="" className="w-screen" />
      </div>
      <div className="flex items-center justify-center m-10 ">
        <div>
          <img src="/images/chatMsg.png" alt="" />
        </div>
        <div className="ml-20">
          <h1 className="text-center text-[24px] leading-[29px] font-[800] mb-2 ">PieChat</h1>
          <div className="flex justify-center mb-2">
            <img className="flex justify-center" src="/images/builtBy.png" alt="button" />
          </div>
          <p className="text-center text-[rgba(0,0,0,0.25)] text-[12px] leading-[14px] font-[400] mb-2 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            perspiciatis <br /> delectus reiciendis fugiat esse!
          </p>
          <div className="flex justify-center mb-2">
            <button className="bg-black text-white text-[10px] leading[12px] rounded-[5px] py-2 px-8 " type="button">
            Get Started
          </button>
          </div>
          <div className="flex justify-center">
            <img src="/images/Rectangle5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 ">
        <img className="w-screen" src="/images/RectangleF.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
