import React, { useState } from 'react';

const AddTask = (prop) => {
  const { AddNewTask } = prop;
  const [tasknew, setNewTask] = useState('');
  const [message, setMessage] = useState('');
  const onChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tasknew) {
      setMessage('Todo Title Cannot be empty');
    } else {
      AddNewTask(tasknew);
      setNewTask('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Please Add Todo" value={tasknew} onChange={onChange} className="input-control" />
      <button type="submit" className="btn">Add Todo</button>
      <span className="msg">{message}</span>
    </form>
  );
};

export default AddTask;
