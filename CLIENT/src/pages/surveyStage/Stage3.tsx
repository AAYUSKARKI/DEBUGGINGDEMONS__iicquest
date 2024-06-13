import React, { useState } from 'react';

import Reward from '../Reward';
import { TaskType } from '../../types';
import TaskList from '../TaskList';

const StageThird: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, text: 'Drink 4ltr water', completed: false },
    { id: 2, text: 'walk 2km', completed: false },
    { id: 3, text: 'read books', completed: false }
  ]);

  const completeTask = (taskId: number) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: true } : task));
  };

  return (
    <div className="container mx-auto p-4">
      <h1>third stage</h1>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <TaskList tasks={tasks} onCompleteTask={completeTask} />
      <Reward tasks={tasks} />
    </div>
  );
};

export default StageThird;





