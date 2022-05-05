import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);

        this.state = {
            City: 'Surat'
        };

    }
    ChangeCity = () => {
        this.setState({
            City: 'Mumbai'
        });
    }

    render() {
        return (
            <>
                <div>City:{this.state.City}</div>
                <button onClick={() => this.ChangeCity()}>Change</button>
            </>

        );
    }
}

export default City;