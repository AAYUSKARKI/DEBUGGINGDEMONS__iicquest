// src/Reward.js
import React from 'react';
import { TaskType } from '../types';

interface RewardProps {
  tasks: TaskType[];
}

const Reward: React.FC<RewardProps> = ({ tasks }) => {
  const allTasksCompleted = tasks.every(task => task.completed);

  return (
    <div className="mt-4">
      {allTasksCompleted ? (
        <div className="bg-green-100 p-4 rounded">
          <h2 className="text-xl font-bold">Congratulations!</h2>
          <p>You've completed all tasks and earned a reward!</p>
        </div>
      ) : (
        <p className="text-gray-600">Complete all tasks to earn a reward.</p>
      )}
    </div>
  ); 
};

export default Reward;