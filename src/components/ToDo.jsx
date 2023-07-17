import React, { useState, useRef, useEffect } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import ListComponent from "./ListComponent";

const ToDo = () => {
  const inputRef = useRef();
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTask = (event) => {
    event.preventDefault();
    if (task) {
      setTaskList([task, ...taskList]);
      setTask("");
      setError("");
      setCount((prevState) => prevState + 1);
      inputRef.current.focus();
    } else {
      setError("Cannot be empty.");
      inputRef.current.focus();
    }
  };

  const handleRemove = (taskIndex) => {
    const filtered = taskList.filter((_, index) => index !== taskIndex);

    setTaskList(filtered);
    setCount((prevState) => prevState - 1);
    setError("");
  };

  const truncateText = (text, maxChars) => {
    if (text.length <= maxChars) return text;
    return text.slice(0, maxChars) + "...";
  };

  const handleClearAll = () => {
    setTaskList([]);
    setCount(0);
    setError("");
    inputRef.current.focus();
  };

  const handleEditTask = (taskIndex, editedTask) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[taskIndex] = editedTask;
    setTaskList(updatedTaskList);
  };

  return (
    <div className="relative flex h-[560px] w-[400px] flex-col overflow-hidden bg-[#363753] p-8 ">
      <h1 className="flex w-full  items-center font-[Poppins-Bold] text-3xl font-bold tracking-wider text-[#5CD2C6]">
        toD
        <BsCheck2Circle size="25" />s
        <span className="ml-3 font-[Poppins-Regular] text-[15px] text-[#DFE3EE]">
          {count === 0 ? null : count}
        </span>
      </h1>

      <div className="mt-5 flex w-full items-center justify-between">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add New To-Do"
          className=" h-11 w-[calc(100%-3.5rem)] rounded-lg p-2 font-regular text-sm placeholder:text-gray-400 focus:outline-none"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
            setError("");
          }}
        />
        <button
          onClick={handleAddTask}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#5CD2C6] text-[#363753] transition-transform hover:scale-110"
        >
          <AiOutlinePlus size="20" />
        </button>
      </div>
      {error ? (
        <p className="ml-1  mt-2 text-sm text-red-500">{error}</p>
      ) : null}
      {taskList.length === 0 ? (
        <div className="flex h-[calc(100%-11rem)] items-center justify-center">
          <h2 className="font-regular text-[#DFE3EE]">No To-DOs</h2>
        </div>
      ) : (
        <div className="scrollbar-hide absolute mt-[7.5rem] h-[calc(100%-16.5rem)] w-[calc(100%-4rem)] overflow-y-auto">
          <ul>
            {taskList.map((task, index) => (
              <ListComponent
                key={index}
                handleRemove={handleRemove}
                truncateText={truncateText}
                handleEditTask={handleEditTask}
                task={task}
                index={index}
                setError={setError}
                setTaskList={setTaskList}
              />
            ))}
          </ul>
        </div>
      )}
      {taskList.length > 0 ? (
        <button
          onClick={handleClearAll}
          className="absolute bottom-8 w-[calc(100%-4rem)] rounded-xl bg-[#5CD2C6] p-4 font-medium text-[#363753] transition-transform hover:scale-105"
        >
          Clear All ToDos
        </button>
      ) : null}
    </div>
  );
};

export default ToDo;