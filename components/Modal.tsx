import React from 'react';
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiChevronRight,
  HiChevronLeft,
} from 'react-icons/hi2';
type Props = {};

const Modal = (props: Props) => {
  return (
    <div className="flex flex-col border shadow-lg rounded-md mt-5 gap-4">
      <div className="w-[60%] h-[3px] bg-orange-600 mt-5 ml-2" />
      <div className="p-2">
        <HiOutlineChatBubbleLeftEllipsis />
        <p>salam bat toa kos khole azam</p>
      </div>
      <div className="flex items-center justify-between p-2">
        <button className=" flex items-center bg-green-200 text-green-600 gap-1 px-2">
          <HiChevronLeft />
          <span>Back</span>
        </button>
        <button className=" flex items-center bg-orange-200 text-orange-600 gap-1 px-2">
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Modal;
