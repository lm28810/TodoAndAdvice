
import './App.css';
import NavBar from './NavBar';
import Advice from './pages/Advice';
import { Route, Routes } from 'react-router-dom';
import ToDoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      
      <Routes>
        <Route path='/item' element={ <ToDoList/>} />
        <Route path='/advice' element={ <Advice/>} />
      </Routes>
    </div>
  );
}

export default App;
