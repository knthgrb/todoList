import React, { useState, useRef, useEffect } from "react";
import { RiTodoLine } from "react-icons/ri";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { FaSave } from "react-icons/fa";

const ListComponent = ({
  task,
  index,
  handleRemove,
  handleEditTask,
  setError,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef();

  const onEdit = () => {
    handleEditTask(index, task);
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) {
      editRef.current.focus();
    }
  }, [isEditing]);

  const buttonDisable = task === "";

  return (
    <li className="font-sm relative flex h-16 items-center rounded-md border-b px-0 text-[#DFE3EE] hover:cursor-pointer">
      <span className="mr-5">
        <RiTodoLine size="23" />
      </span>

      {isEditing ? (
        <input
          className=" scrollbar-hide h-9 w-64 rounded-lg p-2 font-regular text-sm text-gray-600 focus:outline-none"
          type="text"
          ref={editRef}
          value={task}
          onBlur={() => {
            setIsEditing(false);
            if (task) {
              setError("");
            } else {
              setIsEditing(true);
              setError("Cannot be empty.");
              editRef.current.focus();
            }
          }}
          onChange={(event) => handleEditTask(index, event.target.value)}
        />
      ) : (
        <span className="max-w-[16.5rem] truncate">{task}</span>
      )}

      <button
        className={
          buttonDisable
            ? "absolute right-11 transition-transform"
            : "absolute right-11 transition-transform hover:scale-125"
        }
        disabled={buttonDisable}
        onClick={() => {
          setIsEditing((prevState) => !prevState);
          if (isEditing) onEdit();
        }}
      >
        {isEditing ? (
          <FaSave size="22" />
        ) : (
          <AiOutlineEdit size="23" color="#5CD2C6" />
        )}
      </button>

      <button
        className="absolute right-2 transition-transform hover:scale-125"
        onClick={() => handleRemove(index)}
      >
        <AiFillDelete size="23" color="#5CD2C6" />
      </button>
    </li>
  );
};

export default ListComponent;
