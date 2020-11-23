import React from 'react';

const TodoCard = (props) => {
  return (
    <div>
      { props.x.done ? 
      <img src="https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-512.png" style={{ width : '40px' }}/> 
      : 
      <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-02-512.png" style={{ width : '40px' }}/> 
      }
      <p>{props.x.activity}</p>
      <p>{props.x.done}</p>
    </div>
  );
}

export default TodoCard;
