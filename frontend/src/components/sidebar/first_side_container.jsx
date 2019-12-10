import { connect } from 'react-redux';
import React from 'react';
import { openSide, closeSide } from '../../actions/side_actions';
import FirstSide from './first_side';


const mSTP = (state) => {
    return ({

    })
}

const mDTP = (dispatch) => {
    return {
        closeSide: () => dispatch(closeSide()),
        openSide: (side, page) => dispatch(openSide(side, page))
    };
}

export default connect(mSTP, mDTP)(FirstSide);