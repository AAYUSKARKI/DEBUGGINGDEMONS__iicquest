import React, { useState } from 'react';

import Reward from '../Reward';
import { TaskType } from '../../types';
import TaskList from '../TaskList';


const StageFirst: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, text: 'wake up at a consistent time ', completed: false },
    { id: 2, text: 'walk 2km', completed: false },
    { id: 3, text: 'read books', completed: false },
    { id: 4, text: 'Drink 4 ltr water', completed: false },
    { id: 5, text: 'morning hygiene like brushing teeth & taking a shower', completed: false },

    { id: 6, text: 'eat a healthy meals', completed: false }


  ]);

  const completeTask = (taskId: number) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: true } : task));
  };

  return (
    <div className="container mx-auto p-4">
      <h1>first stage</h1>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <TaskList tasks={tasks} onCompleteTask={completeTask} />
      <Reward tasks={tasks} />
    </div>
  );
};

export default StageFirst;





