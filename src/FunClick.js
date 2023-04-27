import React from 'react';

function FunClick() {
  function clickHandler(){
    alert('Button Clicked');
  }


  return (
    <div>
        <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default FunClick;