import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';

const Tasks = () => {
  const [tasks, setTask] = useState([{
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: 3,
    title: 'Deploy to live server',
    completed: false,
  }]);
  const deleteTodo = (id) => {
    setTask([...tasks.filter((task) => task.id !== id)]);
  };

  const Tog = (id) => {
    setTask((pre) => pre.map((task) => {
      if (task.id === id) {
        return {
          ...task, completed: !task.completed,
        };
      }
      return task;
    }));
  };

  const AddNewTask = (task) => {
    const newTodo = {
      id: 4,
      title: task,
      completed: false,
    };
    setTask([...tasks, newTodo]);
  };
  return (
    <div>
      <AddTask AddNewTask={AddNewTask} />
      {
        tasks.map((task) => <Task key={task.id} Tog={Tog} task={task} deleteTodo={deleteTodo} />)
     }
    </div>
  );
};

export default Tasks;
