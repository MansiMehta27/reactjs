import*as ActionTypes from "../ActionTypes";

import { base_url } from "../../Sharad/baseurl";


export const getmedicines=()=>(dispatch)=>{
    try{
        fetch(base_url + 'medisin')
        .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
      .then(response => response.json())
      .then(medicines => dispatch({ type: ActionTypes.GET_MEDISION, payload: medicines }))
      .catch(error=>console.log(error));
    }catch(error){
            console.log(Error);
    }
}