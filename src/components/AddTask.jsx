import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ addNewTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: uuidv4(), title, date };
    addNewTask(newTask);

    setTitle("");
    setDate("");
  };

  return (
    <div className="container items-center text-center mt-3">
      <form className="container p-2" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-left text-md font-medium text-gray-900"
          >
            Task
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="Enter Your Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Add"
            className="block mb-2 text-left text-md font-medium text-gray-900"
          >
            Day & Time
          </label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-6"></div>
        <button
          type="submit"
          className="text-white bg-red-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center "
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
