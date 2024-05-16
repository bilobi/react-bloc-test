/* eslint-disable @typescript-eslint/no-explicit-any */

import useSubscribe from './hooks/useSubscribe'
import TodoBloc from './bloc/TodoBloc'
import { useState } from 'react';
import Todo from './models/Todo';
import React from 'react';
import TodoItem from './component/TodoItem';


const todoBloc=new TodoBloc();

function App() {
  const todos=useSubscribe(todoBloc.todo$);
  const [currentTodo,setCurrentTodo]=useState<string>("");



  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault();
      todoBloc.addTodo({
        text:currentTodo,
        isDone:false,
        id:((todos?.length??0)+1).toString()
    } as Todo)
    setCurrentTodo("");
    }}>

      <input
        type="text"
        value={currentTodo}
        onChange={(e:any)=>setCurrentTodo(e.target.value)}
      />
      <button type='submit' disabled={currentTodo==""}>
        submit
      </button>

      <ul>
        {
          todos?.map((t:Todo)=>(
            <React.Fragment key={t.id}>
              <TodoItem todo={t} onToggle={()=>todoBloc.toogleTodo(t)} />
            </React.Fragment>
          ))
        }
      </ul>

    </form>
    </>
  )
}

export default App
