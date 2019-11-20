
import React from 'react';
import { connect } from "react-redux";
import { closeSide } from "../../actions/side_actions";
import FirstSide from '../sidebar/first_side_container';
import SecondSide from '../sidebar/second_side_container';

class Side extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        const { side, closeSide } = this.props
        if (!side) {
            return null;
        }
        let component
        let nextComponent;
        
        switch (side) {
            case 'first':
                component = <FirstSide />;
                break;
            case 'second':
                component = <FirstSide />;
                nextComponent = <SecondSide />;
                break;
            default:
                return null;
        }
        return (
            <div className="side-background" onClick={closeSide}>
                {component}
                {nextComponent}
            </div>
        );
    }

}

const mSTP = (state) => {
    return ({
        side: state.ui.side
    });
};

const mDTP = (dispatch) => {
    return ({
        closeSide: () => dispatch(closeSide())
    });
};

export default connect(mSTP, mDTP)(Side);