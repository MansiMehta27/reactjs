import React, { useState } from 'react';


function Cityfun({fanpla}) {
    // const [City,setCity]=useState('Dehli')
    // // const[gst,setgst]=useState(8)

    // const ChangeCity=()=>{
    //     setCity('surat')
    // }

    return (
        <div>
                    
                   {/* <p>City:[Function based Componet]:{City}</p>
                     <button onClick={()=>ChangeCity()}>Change</button>
                     <p>gst:{gst}</p>
                    <button onClick={()=>setgst(12)}>Change</button> */}
          
             {
                     fanpla==='india'?<p>famouse place:tajmahal</p>:<p>famouse place : london</p> 
             }
                   
          </div>
    );
}

export default Cityfun;