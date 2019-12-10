

import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileContainer from '../profile/user_profile_container';
import WeeklyIngredientsContainer from '../weekly_ingredients/weekly_ingredients_container';

class SecondSide extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let page;

        if(this.props.page === "profile") {
          page = <UserProfileContainer />;
        } else if (this.props.page === "list") {
          page = <WeeklyIngredientsContainer />;
        }
        
        return (
          <div className="second-side" onClick={e => e.stopPropagation()}>
            <div className="second-drawer-contain">
                <div>
                  { page }
                </div>
            </div>
          </div>
        );
    }
}

export default SecondSide;