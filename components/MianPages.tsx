'use client';

import { useState } from 'react';
import Modal from './Modal';

type Props = {};

enum STEPS {
  TODO,
  INPROGRESS,
  REVIEW,
  DONE,
}

const MianPages = (props: Props) => {
  const [step, setStep] = useState(STEPS.TODO);
  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };
  return (
    <div className=" flex flex-grow pl-40">
      <div className=" w-full grid grid-flow-col p-4 gap-5 max-h-[60%]">
        <div className=" bg-white flex flex-col items-center rounded-t-md">
          <div
            className="w-full flex flex-col items-center
           bg-orange-400 overflow-hidden rounded-t-md"
          >
            <h2 className=" text-white font-medium">Todo</h2>
          </div>
          <Modal />
        </div>
        <div className=" bg-white rounded-t-md">
          <div className=" bg-white flex flex-col items-center rounded-t-md">
            <div className="w-full flex flex-col items-center bg-green-400 overflow-hidden rounded-t-md">
              <h2 className=" text-white font-medium">In Progress</h2>
            </div>
            <Modal />
          </div>
        </div>
        <div className=" bg-white rounded-t-md">
          <div className=" bg-white  flex flex-col items-center rounded-t-md">
            <div className="w-full flex flex-col items-center bg-blue-500 overflow-hidden rounded-t-md">
              <h2 className=" text-white font-medium">Review</h2>
            </div>
            <Modal />
          </div>
        </div>
        <div className=" bg-white rounded-t-md">
          <div className=" bg-white flex flex-col items-center rounded-t-md">
            <div className="w-full flex flex-col items-center bg-lime-300 overflow-hidden rounded-t-md">
              <h2 className=" text-white font-medium">Done</h2>
            </div>
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MianPages;
