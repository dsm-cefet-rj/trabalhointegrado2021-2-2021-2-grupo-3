import React from 'react';
import "../css/styles_text"

export default(props) => {
    return(
        <>
        <link  rel="stylesheet" href="css/styles_text.css"/>
        <div className={props.className}>
        <img src={props.img} alt={"Avatar"}/>
        <p>{props.msg}</p>
        <span class="time-right">{props.hora}</span>
        </div>
        </>
    );
}