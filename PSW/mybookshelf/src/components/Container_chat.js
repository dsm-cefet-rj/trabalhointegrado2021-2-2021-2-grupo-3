import React from 'react';
import "../css/styles_text.css"

export default(props) => {
    return(
        props.chat.map((var_chat) => {
            return(<>
            <link  rel="stylesheet" href="css/styles_text.css"/>
            <div className="container">
            <img src={var_chat.img} alt={"Avatar"}/>
            <p>{var_chat.msg}</p>
            <span class="time-right">{var_chat.hora}</span>
            </div>
            </>
            )
        })
    );
}