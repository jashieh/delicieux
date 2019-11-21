import React from 'react';
import MainFilterDropdown from './main_filter_dropdown';
import '../stylesheets/recipes_index/main_filter.scss';

export default class MainFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientToggle: false,
      query: "",
      tabs: 0,
      cuisine: "",
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleCuisine = this.handleCuisine.bind(this);
  }
  handleInput(e) {
    this.setState({ query: e.target.value });
  }
  handleTab(num) {
    return (e) => {
      this.setState({tabs: num})
    }
  }
  handleCheck(type) {
    return (e) => {
      this.setState({ [type]: !this.state[type] })
    }
  }
  handleCuisine(type) {
    return () => {
      this.setState({ cuisine: [type] })
    }
  }
  render() {
    return(
      <div className="filter-cont">
        <div className="filter-top">
          <div className="filter-header">
            <h4 className="filter-h4">
              délicieux
          </h4>
            <div className="filter-text-cont">
              <input type="text"
                className="filter-text-input"
                placeholder="Find a recipe"
                onChange={this.handleInput}
                value={this.state.query}
                onKeyDown={this.handleKeyDown} />
              <div className="filter-text-button">
                Ingr
              </div>
            </div>
          </div>
          <div className="filter-param-cont">
            <MainFilterDropdown/>
            <div>
              <div onClick={this.handleTab(2)}>
                Param 2
              </div>
            </div>
            <div>
              <div onClick={this.handleTab(2)}>
                Param 3
            </div>
            </div>
          </div>
        </div>
        {this.state.tabs === 2 ? (
        <div className="filter-bot">
          <div className="filter-dd-item2" onClick={this.handleCuisine("korean")}>
            Korean
          </div>
          <div className="filter-dd-item2" onClick={this.handleCuisine("Italian")}>
            Italian
          </div>
          <div className="filter-dd-item2" onClick={this.handleCuisine("American")}>
            American
          </div>
          <div className="filter-dd-item2" onClick={this.handleCuisine("Indian")}>
            Indian
          </div>
        </div>) : null}
      </div>
    );
  }
}