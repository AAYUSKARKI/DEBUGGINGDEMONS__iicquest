// src/TaskList.js
import React from 'react';
import Task from './Task'
import { TaskType } from '../types';

interface TaskListProps {
  tasks: TaskType[];
  onCompleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteTask }) => {
  return (
    <ul className="list-none p-0">
      {tasks.map(task => (
        <Task key={task.id} task={task} onCompleteTask={onCompleteTask} />
      ))}
    </ul>
  ); 
};

export default TaskList;