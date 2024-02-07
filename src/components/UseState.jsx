import React from "react";
import { useState } from "react";
import ForTest from "./ForTest";

function UseState(){
    const [json, setJson] = useState({
        array: ['A','B','C'],
        key2: 'B',
        key3: 'C'
      });

      return(
        <div>
            ========================
            <ForTest json={json.array}/>
            ========================
        </div>
      );
    
}

export default UseState;

