import React, { Component } from 'react';

class country extends Component {
    constructor(props) {
        super(props);
          
        this.state={
            Country:'india'
        };
    }
  
    render() {

        return (
            <>
                <div>Country:{this.state.Country}</div>
                
            </>
       
        );
    }
}

export default country;