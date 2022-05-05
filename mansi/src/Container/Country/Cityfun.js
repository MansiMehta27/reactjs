import React, { useState } from 'react';
import City from './City';

function Cityfun(props) {
    const [City,setCity]=useState('Delhi')
    const[gst,setgst]=useState(8)

    const ChangeCity=()=>{
        setCity('surat')
    }

    return (
        <div>
                    <p>City:[Function based Componet]:{City}</p>
                    <button onClick={()=>ChangeCity()}>Change</button>
                    <p>gst:{gst}</p>
                    <button onClick={()=>setgst(12)}>Change</button>
                   
        </div>
    );
}

export default Cityfun;