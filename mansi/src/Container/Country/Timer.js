import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state={
            //1 Constructer set initial value
            time:new Date()
        }
    }
    tick=()=>{
        this.setState({
            time:new Date
        })
    }
    componentDidMount=()=>{
        //3 use this method for requset data to server
        this.timeId = setInterval(()=>this.tick(),1000);
    }
       
    componentDidUpdate=(prevProps, prevState)=>{
        //4 call componenrdidupdate when previos state and current state is not same.
        if(prevState.time!==this.state.time){
            console.log("componentDidUpdate called");
        }
    }
    componentWillUnmount=()=>{
        //5 componentWillUnmount used to realse resource from component
        clearInterval(this.timeId);
    }

    render() {
        return (
            <div>
                             {
                                this.state.time.toLocaleTimeString()
                             }
            </div>
        );
    }
}

export default Timer;