import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Task = ({ task, handleDelete, showAlert }) => {
  const [completed, setCompleted] = useState(false);
  const dateTime = new Date(task.date);
  const formattedDateTime = dateTime.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const handleToggle = () => {
    setCompleted(!completed);
    (!completed
      ? showAlert(true, "red", `${task.title} is completed 🚀🚀🚀`)
      : showAlert(true, "white", `${task.title} is uncompleted`));
  };

  return (
    <div className="w-full p-4">
      <div
       
        className={`block p-3 text-base font-bold text-gray-900 rounded-lg ${
          completed
            ? "bg-red-800 line-through"
            : " bg-gray-50 hover:bg-gray-100 group hover:shadow"
        }`}
      >
        <div className="flex ">

          <span  onClick={handleToggle} className="flex-1 ml-3 whitespace-nowrap">{task.title}</span>
          <button
            onClick={() => handleDelete(task.id)}
            className="inline-flex text-right px-2 py-0.5 ml-3 text-xs font-mediumrounded"
          >
            <RiDeleteBinLine className="text-2xl my-1" />
          </button>
        </div>

        <div className="flex text-sm ml-3">
        
          <p>{formattedDateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
