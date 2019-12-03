

import React from 'react';
import { Link } from 'react-router-dom';

class FirstSide extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver(page) {
        // let that = this;
        // e.preventDefault();
        // console.log(this)
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
                    <a class="btn" onClick={this.handleMouseOver("list")} >
                        <span>
                            <span>
                            <span>My List</span>
                            </span>
                        </span>
                    </a>
                    <a class="btn" onClick={this.handleMouseOver("profile")}>
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