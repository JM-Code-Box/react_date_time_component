import React, { Component } from 'react';

class clock extends Component {
  
    state = {
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    }

    getTime = () => {
        const takeTwelve = (n) => n > 12 ? n - 12 : n;
        const addZero = (n) => n < 10 ? '0' + n : n;
        const amPm = (n) => n > 12 ? 'pm' : 'am';
        
        let getDate = new Date();
        let h = addZero(takeTwelve(getDate.getHours()));
        let m = addZero(getDate.getMinutes());
        let s = addZero(getDate.getSeconds());
        let tale = amPm(getDate.getHours());
        let timeString = `${h}:${m}:${s} ${tale}`;
        this.setState(
            { time: timeString }
        );
    
    };

    componentWillMount() {
        setInterval(
            () => this.getTime(), 1000);
    }

    render() {
        return (
        <div>
            <p>{this.state.date} | {this.state.time}</p>
        </div>
        )
    }
}

export default clock;
