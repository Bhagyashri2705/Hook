import React from 'react';
import './myStyle.css';

function Stylesheet(props) {
    let className = props.primary ? 'primary':'';
  return (
    <h2 className={`${className} font_xl`} >Stylesheet</h2>
  )
}

export default Stylesheet;