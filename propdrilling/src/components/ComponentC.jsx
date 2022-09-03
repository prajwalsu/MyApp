import React, { useState } from 'react'
import ComponentD from './ComponentD';


function ComponentC(props) {
    return (
        <div>ComponentC:
            {props.userName}
            {props.data}
            <ComponentD userName={props.userName} data={props.data} setData={props.setData} />

        </div>
    );
}

export default ComponentC