
import { connect } from 'react-redux';
import SecondSide from './second_side';
import { openSide, closeSide } from '../../actions/side_actions';
// import { hoverMasterListItem } from '../../actions/side_actions';

const mSTP = (state) => {
    return ({

    })
};

const mDTP = (dispatch) => {
    return ({
        openSide: (side) => dispatch(openSide(side))
    })
}

export default connect(mSTP, mDTP)(SecondSide);