
import React from 'react';

// QUESTION: WHY DOES THE HEIGHT CHANGE EVERYTIME THE CLOCK TICK?
//           WHY DOES THIS GO AWAY WHEN I REMOVE THE MARGIN-TOP?
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

    componentWillUnmount() {
        clearInterval(this.intervalId);
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


