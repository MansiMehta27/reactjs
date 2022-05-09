import React, { useState } from 'react';
import Cityfun from './Cityfun';

function Countryfun({gdpval}) {
    const[Country, setContry]=useState('india')
    // const[gdp,setgdp]=useState(0)

    const ChangeCountry=()=>{
           setContry('UK')
    }
    return (
       <>
        <div>
                    <p>Country[Function based componet] : {Country}</p>
                    <button onClick={()=>ChangeCountry()}>change</button>

                    {/* <p>gdp:{gdp}</p>
                    <button onClick={()=>setgdp(gdpval)}>change</button> */}

         </div>
           <Cityfun fanpla={Country}/>
       </>
    );
}

export default Countryfun;