import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";

const History = ({ taskHistory, setShowHistory, setTaskHistory }) => {
  const handleClearHistory = () => {
    setTaskHistory([]);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="flex items-center font-[Poppins-Regular] text-2xl font-bold tracking-wider text-[#5CD2C6]">
          History
        </h1>
        <button
          onClick={() => setShowHistory(!true)}
          className="transition-transform hover:scale-125"
        >
          <AiOutlineClose size="23" color="5CD2C6" />
        </button>
      </div>
      <div className="scrollbar-hide absolute mt-[3.5rem] h-[calc(100%-13rem)] w-[calc(100%-4rem)] overflow-y-auto">
        <ul>
          {taskHistory.map((task, index) => (
            <li
              key={index}
              className="font-sm relative flex h-16 items-center rounded-md border-b px-0 text-[#DFE3EE]"
            >
              <span className="mr-5">
                <RiTodoLine size="23" />
              </span>
              <span className="max-w-[19rem] truncate">{task}</span>
              <span className="absolute right-3 text-[#5CD2C6]">✓</span>
            </li>
          ))}
        </ul>
      </div>
      {taskHistory.length > 0 ? (
        <button
          onClick={handleClearHistory}
          className="absolute bottom-8 w-[calc(100%-4rem)] rounded-xl bg-[#5CD2C6] p-4 font-medium text-[#363753] transition-transform hover:scale-105"
        >
          Clear History
        </button>
      ) : null}
    </>
  );
};

export default History;
