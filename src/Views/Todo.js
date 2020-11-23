import React from 'react';
import TodoCard from './../Components/TodoCard';

const data = require('./../param.json')

const Todo = () => {

  return (
    <div>
      {/* <p>{paramConfig}</p> */}
      {data.todo.map(x => <TodoCard x= {x}/>)}
    </div>
  );
}

export default Todo;
