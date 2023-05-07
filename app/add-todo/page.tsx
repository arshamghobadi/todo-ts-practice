'use client';
import AddTodoCheckBox from '@/components/AddTodoCheckBox';
import {
  HiOutlineFolderPlus,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCog6Tooth,
  HiOutlineEye,
  HiOutlineCheckBadge,
} from 'react-icons/hi2';
type Props = {};

const AddTodo = (props: Props) => {
  return (
    <div className=" ml-44 p-4 space-y-6">
      <div className="flex items-center gap-1">
        <HiOutlineFolderPlus />
        <span>Add new todo</span>
      </div>
      <div className="flex flex-col">
        <label className=" text-gray-600">Title</label>
        <input
          className="text-gray-600 placeholder:p-2 w-[60%]"
          type="text"
          placeholder="new todo"
        />
      </div>
      <div className="w-[20%]">
        <AddTodoCheckBox
          backGruond=" bg-orange-500"
          title="todo"
          icon={HiOutlineChatBubbleBottomCenterText}
        />
        <AddTodoCheckBox
          backGruond=" bg-green-400"
          title="todo"
          icon={HiOutlineChatBubbleBottomCenterText}
        />
        <AddTodoCheckBox
          backGruond=" bg-blue-500"
          title="todo"
          icon={HiOutlineChatBubbleBottomCenterText}
        />
        <AddTodoCheckBox
          backGruond=" bg-lime-300"
          title="todo"
          icon={HiOutlineChatBubbleBottomCenterText}
        />
      </div>

      <div></div>
    </div>
  );
};

export default AddTodo;
