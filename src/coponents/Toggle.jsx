import { useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import { HiOutlineArchive } from "react-icons/hi";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      {toggle ? (
        <AiOutlineClose
          color="#000"
          fontSize={18}
          className="cursor-pointer"
          onClick={() => setToggle(false)}
        />
      ) : (
        <BsThreeDotsVertical
          className="cursor-pointer"
          onClick={() => setToggle(true)}
        />
      )}

      {toggle && (
        <div className="flex flex-col bg-[#fff] p-[1rem] absolute top-[40px] right-0 mt-[1rem] min-w-[0px] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] z-[99999]">
          <div className="flex">
            <HiOutlineArchive />
            <a
              href="#projects"
              className="text-[13px] leading-[12px] text-black transition 0.4s ease hover:text-[rgba(0,0,0,0.75)] ml-1"
            >
              Archive
            </a>
          </div>
          <div className="flex mt-2">
            <AiOutlineDelete />
            <a
              href="#tech"
              className="text-[13px] leading-[12px] text-black transition 0.4s ease hover:text-[rgba(0,0,0,0.75)] ml-1"
            >
              Delete
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toggle;
