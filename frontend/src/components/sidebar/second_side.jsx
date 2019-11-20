

import React from 'react';
import { Link } from 'react-router-dom';

class SecondSide extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        
        return (
          <div className="second-side" onClick={e => e.stopPropagation()}>
            <div className="second-drawer-contain">
                <div>
                    
                </div>
            </div>
          </div>
        );
    }
}

export default SecondSide;