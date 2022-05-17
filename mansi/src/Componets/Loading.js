import React from 'react';

function Loading(Componet) {
    return function withloadinganycomponents({isloading,data}){
        console.log(isloading,data);
        if(isloading){
            return(
                <p>loading.....</p>
            )
        }
        else{
            return(
                <Componet data ={data}/>
            )
        }
    }
    
 }

export default Loading;