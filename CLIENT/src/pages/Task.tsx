// src/Task.js
import React from 'react';

const Task = ({ task, onCompleteTask }) => {
  return (
    <li className="flex justify-between items-center mb-2 p-2 border rounded">
      <span className={`${task.completed ? 'line-through' : ''}`}>
        {task.text}
      </span>
      {!task.completed && <button className="bg-blue-500 text-white py-1 px-3 rounded" onClick={() => onCompleteTask(task.id)}>Complete</button>}
    </li>
  );
};

export default Task;