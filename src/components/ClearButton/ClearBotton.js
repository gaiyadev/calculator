import React from 'react';
import '../../components/ClearButton/ClearBotton.css'

const clearBtn = props => {
    return (
        <div onClick={props.clearHandler} className="Clear-Btn">
            {props.children}
        </div>
    );
}

export default clearBtn;