

import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileContainer from '../profile/user_profile_container';


class FirstSide extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    componentDidMount() {
        console.log("x")
    }

    handleMouseOver(page) {
        // e.preventDefault();
        return e => {e.preventDefault(); 
            this.props.openSide("second", page)};
        // this.props.hoverMasterList(option);
    }

    render() {
        return (
            <div className="first-side" onClick={e => e.stopPropagation()} >
                <div className="first-drawer-contain">
                    <div className="first-drawer-main-text">
                        délicieux
                    </div>
                    <a className="btn" onClick={this.handleMouseOver("list")} >
                        <span>
                            <span>
                            <span>My List</span>
                            </span>
                        </span>
                    </a>
                    <a className="btn" onClick={this.handleMouseOver("profile")}>
                        <span>
                            <span>
                            <span>Profile</span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}

export default FirstSide;