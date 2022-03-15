//import './App.css';
import React,{useState} from 'react';
import TodoList from './TodoList.js';
function App() {
  const [task,setTask]= useState('');
  const [todos,setTodos]=useState([]);
  const changeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e =>{
    e.preventDefault();
    const newTodos= [...todos,task];
    setTodos(newTodos);
    setTask('')
  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexValue);
    setTodos(newTodos);
  }
  return( 
    <div className='card'>
    <center>
    <div className='cardbody'>
      <h1 className='cardtitle'> Todo Management Application</h1>
      <form onSubmit={submitHandler}>
        <input  type='text' name='task' value={task} onChange={changeHandler} /> &nbsp;
        <input type='submit' value='Add' name='Add'/>
      </form>
      <TodoList todos={todos} deleteHandler={deleteHandler}/>
    </div>
    </center>
    </div> 
)
}

export default App;