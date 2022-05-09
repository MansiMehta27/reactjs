import React, { useState } from 'react';
import Course from './Course';

function Branch(props) {
    const [Branch,setBranch]=useState('RNw1')
    

     const ChangeBranch=()=>{
         setBranch('RNw2')
     }

    return (
        <>
            <div>
                    
                    <p>Branch:{Branch}</p>
                    <button onClick={()=>ChangeBranch()}>Change</button>
                    
           </div>

           <Course Changec={Branch}/>
        
        </>
    
    );
}
export default Branch;


