import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, TextField } from '@mui/material';

function ToDoList() {
  const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const { id } = useParams 
    

     // This method fetches the records from the database.
    //   useEffect(() => {
    //     async function getRecords() {
    //       const response = await fetch(`/item`);
 
    //       if (!response.ok) {
    //         const message = `An error occurred: ${response.statusText}`;
    //         window.alert(message);
    //         return;
    //       }
 
    //       const records = await response.json();
    //       setRecords(records);
    //     }
 
    //     getRecords();

        
 
    //     return;
    //   }, [records.length]);
  
  

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const editTodo = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
      const newTodos = [...todos];
     
    newTodos.splice(index, 1);
          setTodos(newTodos);
          
  };

  return (
    <div>
          <form onSubmit={addTodo} >
              <Container maxWidth="md" >
        <TextField fullWidth
          type="text"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
              </Container>
          </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <TextField
              type="text"
              value={todo}
              onChange={(e) => editTodo(index, e.target.value)}
            />
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;