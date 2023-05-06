import React from 'react';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="w-full bg-blue-600 h-[15%] text-white relative">
      <div className="flex items-center justify-between p-4">
        <h2 className=" font-bold">Logo Todo</h2>
        <div className="flex items-center gap-1 border py-1 rounded-lg text-sm px-3">
          Logout
          <HiOutlineArrowRightOnRectangle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
