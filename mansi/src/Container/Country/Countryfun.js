import React, { useState } from 'react';

function Countryfun(props) {
    const[Country, setContry]=useState('india')
    const[gdp,setgdp]=useState(0)

    const ChangeCountry=()=>{
           setContry('UK')
    }
    return (
        <div>
                    <p>Country[Function based componet] : {Country}</p>
                    <button onClick={()=>ChangeCountry()}>change</button>

                    <p>gdp:{gdp}</p>
                    <button onClick={()=>setgdp(5.5)}>change</button>


        </div>
    );
}

export default Countryfun;