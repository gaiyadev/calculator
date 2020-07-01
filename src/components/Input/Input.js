import React from 'react';
import '../../components/Input/Input.css';

const input = props => {
  return (
    <div className="Input">
      {props.input}
    </div>
  );
}

export default input;