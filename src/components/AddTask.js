import React, { useState } from 'react';

const AddTask = (prop) => {
  const { AddNewTask } = prop;
  const [tasknew, setNewTask] = useState('');
  const onChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewTask(tasknew);
    setNewTask('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Please Add Todo" value={tasknew} onChange={onChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTask;
