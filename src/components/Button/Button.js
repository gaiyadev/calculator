import React from 'react';
import '../../components/Button/Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}
const button = props => (
    <div className={`Button-Wrapper ${
        isOperator(props.children) ? null : "Operator"
        }`}
        onClick={() => props.click(props.children)}
    >
        {props.children}
    </div>
);
export default button;


