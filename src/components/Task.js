import React from 'react';

const Task = (prop) => {
  const { task, deleteTodo, Tog } = prop;
  return (
    <div className="task">
      <input type="checkbox" checked={task.completed} onChange={() => Tog(task.id)} />
      <h3 className={task.completed ? 'linethtough' : ''}>
        {task.title}
        {' '}
      </h3>
      <button onClick={() => deleteTodo(task.id)} type="button" className="btn">Delete</button>
    </div>
  );
};

export default Task;
