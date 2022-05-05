import React, { Component } from 'react'

export default class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Country: 'India'
        };
    }
    ChangeCountry = () => {
        this.setState({
            Country: 'UK'
        });
    }
    render() {
        return (
            <>
                <div>Country:{this.state.Country}</div>
                <button onClick={() => this.ChangeCountry()}>Change</button>
            </>
        )
    }
}