import React from 'react';

export default(props) => {
    return(
        <div class="container">
        <img src={props.img} alt={"Avatar"}/>
        <p>{props.msg}</p>
        <span class="time-right">{props.hora}</span>
        </div>
    );
}