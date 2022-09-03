import React, { useContext } from "react";
import contextData from "./ContextApi";

const ComponentC = () => {
    const dataContext = useContext(contextData);
    return (
        <div>
            ComponentC
            <h3>these fnmae from app component is{dataContext}</h3>
        </div>
    )
}

export default ComponentC;
