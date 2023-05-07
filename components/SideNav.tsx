'use client';
import { MdOutlineWavingHand } from 'react-icons/md';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { RxFilePlus } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
type Props = {};

const SideNav = (props: Props) => {
  return (
    <div
      className="absolute inset-y-16 bg-white
     rounded-tr-xl left-0 flex flex-col h-full w-40 p-5 z-10"
    >
      <div className=" flex flex-col gap-6">
        <div className="flex items-center gap-1 ">
          <h2 className=" font-bold">welcome</h2>
          <MdOutlineWavingHand />
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="flex gap-2 items-center font-medium text-gray-500"
          >
            <HiBars3BottomLeft />
            <h2>Todos</h2>
          </Link>
          <Link
            href="/add-todo"
            className="flex gap-2 items-center font-medium text-gray-500"
          >
            <RxFilePlus />
            <h2>Add Todo</h2>
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center font-medium text-gray-500"
          >
            <CgProfile />
            <h2>Profile</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
