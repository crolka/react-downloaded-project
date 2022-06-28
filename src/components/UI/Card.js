import React from 'react';
import "./Card.css";

function Card(props){
  const inheritedStyles = "card " + props.className;
  return (
    <div className={inheritedStyles}>
      {props.children}
    </div>
  );
}

export default Card;