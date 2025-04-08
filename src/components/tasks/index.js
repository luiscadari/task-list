import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";

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

Tasks.propTypes = {
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
};
