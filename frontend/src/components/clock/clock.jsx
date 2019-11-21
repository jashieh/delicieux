
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        this.intervalId = setInterval( () => {
            this.setState({ time : new Date().toLocaleTimeString() })
        }, 1000)
    }

    render() {

        const time = this.state.time.split("").slice(0,8)
        return (
            <div>
                <p className="clock">
                    {time}
                </p>
            </div>
        )
    }
}

export default Clock;


