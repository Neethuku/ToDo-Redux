import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, toggleCompleted } from "./Redux/TodoSlice";

const App = () => {
  const [newTodo, setNewTodo] = useState('');

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(add(newTodo));
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch(remove(index));
  };

  const handleToggleCompleted = (index) => {
    dispatch(toggleCompleted(index));
  };

  const countCompletedItems = () => {
    return todos.filter((todo) => todo.completed).length;
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-dark" style={{ height: '100vh' }}>
      <Card className='shadow rounded bg-secondary' style={{ width: '35rem' }}>
        <Card.Body>
          <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>My TODO-LIST</h4>
          <div className="d-flex">
            <input
              type="text"
              placeholder='Enter a Todo..'
              className="form-control"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              style={{ marginRight: '10px', width: '100%', marginLeft: '25px' }}
            />
            <div style={{ display: 'flex' }}>
              <Button className='bg-dark' onClick={handleAddTodo} style={{ marginRight: '5px', border: 'none', outline: 'none' }}>Add</Button>
            </div>
          </div>
          {todos.map((todo, index) => (
            <div key={index} className="d-flex mt-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleted(index)}
                style={{ marginRight: '10px' }}
              />
              <input
                type="text"
                className="form-control"
                value={todo.text}
                readOnly={todo.completed}
                style={{ marginRight: '10px', backgroundColor: todo.completed ? ' rgb(153, 233, 153)' : '' }}
              />
              <div style={{ display: 'flex' }}>
                <Button className='bg-dark' onClick={() => handleDeleteTodo(index)} style={{ border: 'none', outline: 'none' }}><i className="fa-solid fa-trash"></i></Button>
              </div>
            </div>
          ))}
        </Card.Body>
        <p style={{ color: 'white', marginLeft: '15px', fontWeight: 'bold' }}>Total Completed Items: {countCompletedItems()}</p>
      </Card>
    </div>
  );
};

export default App;
