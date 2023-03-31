import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState("");
  const [listData, setListData] = useState([]);



  function addTodos(){
    // setListData([...listData, todos]) //append new todo
    // console.log(listData);
    setListData((listData)=>{
      const updatedList = [...listData, todos];
      console.log(updatedList)
      setTodos([]);
      return updatedList;
    })
  }

  function removeTodos(i){
    const removeAndUpdateData = listData.filter((elem,id)=>{
      return i!=id;
    })
    setListData(removeAndUpdateData);
  }

  function removeAll(){
    setListData([])
  }

  return (
    <>
    <div className='container'>
      <div className='header'><h2>Todo List</h2></div><br/>
      <input type="text" placeholder='Add your Todos' value={todos} onChange={(e)=>setTodos(e.target.value)}/>&nbsp;
      <button style={{height:"25px"}} onClick={addTodos}>Add</button>
      <p style={{padding:"20px 0px"}}>Here is Your List...</p>
      {listData!=[] && listData.map((data, i)=>{
        
        return(
          <>
          <div className='todos--display' key={i}>
            <p>{data}</p>
            <button onClick={()=>removeTodos(i)}>remove</button>
          </div>
          </>
        )
        
      })}
     {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
    </div>
    </>
  );
}

export default App;
