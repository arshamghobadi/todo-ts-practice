import React from 'react';
import { IconType } from 'react-icons';

interface AddTodoCheckBoxProps {
  backGruond: string;
  icon: IconType;
  title: string;
}

const AddTodoCheckBox: React.FC<AddTodoCheckBoxProps> = ({
  backGruond,
  icon: Icon,
  title,
}) => {
  return (
    <div
      className={`${backGruond} flex items-center justify-between rounded-lg`}
    >
      <div className="flex items-center p-1 gap-1">
        <Icon />
        <span>{title}</span>
      </div>
      <input className="p-1 mr-2" type="checkbox" />
    </div>
  );
};

export default AddTodoCheckBox;
