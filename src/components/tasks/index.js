import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";

export default function Tasks({ tarefas, handleDeleteTask, handleEditTask }) {
  return (
    <ul className="tasks">
      {tarefas.map((task, index) => {
        return (
          <li key={index}>
            {task}
            <span>
              <FaEdit
                onClick={(e) => handleEditTask(e, index)}
                className="edit"
              />
              <FaWindowClose
                onClick={(e) => handleDeleteTask(e, index)}
                className="delete"
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
}
