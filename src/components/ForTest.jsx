import React from "react";

const ForTest=(props)=>{
    // const propsLength = Object.keys(props).length;
    const propsKey  = Object.keys(props);
    console.log("propsKey : "  + propsKey);

    return(
        <div>
            {props.json.map((item, index)=>(
                <h3 key={index}>{item}</h3>
            ))}
        </div>
    );
   
}
export default ForTest;