import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className=" flex flex-row items-center justify-between p-1 px-[3%] py-[1%]">
        <div className="">
          <p>Home</p>
        </div>

        <div className="flex flex-row items-center justify-between w-[50%] text-[15px]">
          <div>
            <p>Project-1</p>
          </div>
          <div>
            <p>Project-2</p>
          </div>
          <div>
            <p>Project-3</p>
          </div>
          <div>
            <p>Project-4</p>
          </div>
          <div>
            <p>Project-5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
