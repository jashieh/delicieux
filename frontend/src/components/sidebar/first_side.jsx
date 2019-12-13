import React from 'react';


class FirstSide extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
    }
    
    handleMouseOver(page) {
        return e => {e.preventDefault(); 
            this.props.openSide("second", page)};
    }

    render() {
        return (
            <div className="first-side" onClick={e => e.stopPropagation()} >
                <div className="first-drawer-contain">
                    <div className="first-drawer-main-text">
                        délicieux
                    </div>
                    <a className="btnn" onClick={this.handleMouseOver("list")} >
                        <span>
                            <span>
                            <span>My List</span>
                            </span>
                        </span>
                    </a>
                    <a className="btnn" onClick={this.handleMouseOver("profile")}>
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