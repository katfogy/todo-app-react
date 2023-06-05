import React from 'react';

const Task = (prop) => {
  const { task, deleteTodo, Tog } = prop;
  return (
    <div>
      <h3>
        <input type="checkbox" checked={task.completed} onChange={() => Tog(task.id)} />
        {task.title}
        {' '}
        <button onClick={() => deleteTodo(task.id)} type="button">Delete</button>
      </h3>
    </div>
  );
};

export default Task;
