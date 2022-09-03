import React, { useState } from 'react';

function ComponentD(props) {
    function changeData() {
        props.setData("Nuthana");
    }

    return (
        <div>ComponentD
            {props.userName}
            {props.data}
            <button onClick={changeData}>click</button>
        </div>
    )
}

export default ComponentD