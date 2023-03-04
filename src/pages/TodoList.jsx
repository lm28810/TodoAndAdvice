import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TodoList() {
  const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
     const { itemId } = useParams 

  useEffect(() => {
    axios.get('/item')
      .then(response => {
          setItems(response.data);
          console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    const handleAddItem = (e) => {
        e.preventDefault();
        axios.post('/add', { name: inputValue })
      .then(response => {
        setItems([...items, response.data]);
        setInputValue('');
      })
      .catch(error => {
        console.log(error);
      });
  };
    
//   const deleteRecord = async (id) => {
//     await axios.delete(`http://localhost:4000/items/${id}`);

  const handleEditItem = (itemId, newText) => {
    axios.post(`/update/${itemId}`, { name: newText })
      .then(response => {
        const updatedItems = items.map(item => {
          if (item._id === itemId) {
            return response.data;
          }
          return item;
        });
        setItems(updatedItems);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeleteItem = (itemId) => {
    axios.delete(`/${itemId}`)
      .then(response => {
        const filteredItems = items.filter(item => item._id !== itemId);
        setItems(filteredItems);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
          <h1>Todo List</h1>
           <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map(item => (
            <li key={item._id}>
                
            <input
              type="text"
              value={item.name}
              onChange={(event) => handleEditItem(item._id, event.target.value)}
            />
                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default TodoList;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Container, TextField } from '@mui/material';
// import './TodoList.css'

// function ToDoList() {
//   const [todos, setTodos] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//    
    

//      // This method fetches the records from the database.
//       useEffect(() => {
//     axios.get("http://localhost:4000/item").then(res => {
//       setTodos(res.data);
//     })
//   }, [])
  
// //     const getData = async() => {
// //         const { data } = await axios.get("http://localhost:4000/item").then(res => {
// //           setTodos(res.data)  
// //         })
    
// // }
  
// // useEffect(() => {
// //     getData()
// // },[])

//   const addTodo = (e) => {
//     e.preventDefault();
//     setTodos([...todos, inputValue]);
//     setInputValue('');
//   };

//   const editTodo = (index, newValue) => {
//     const newTodos = [...todos];
//     newTodos[index] = newValue;
//     setTodos(newTodos);
//   };

//   const deleteTodo = (index) => {
//       const newTodos = [...todos];
     
//     newTodos.splice(index, 1);
//           setTodos(newTodos);
          
//   };

//   return (
//     <div>
//           <form onSubmit={addTodo} >
//               <Container maxWidth="md" >
//         <TextField fullWidth
//           type="text"
//           placeholder="Add todo..."
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button type="submit">Add</button>
//               </Container>
//           </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <input
//               type="text"
//               value={todo.name}
//               onChange={(e) => editTodo(index, e.target.value)}
//             />
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ToDoList;