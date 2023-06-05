import React from 'react';

const Task = (prop) => {
  const { task, deleteTodo } = prop;
  return (
    <div>
      <h3>
        {task.title}
        {' '}
        <button onClick={() => deleteTodo(task.id)} type="button">Delete</button>
      </h3>
    </div>
  );
};

export default Task;
