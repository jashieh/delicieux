import React from 'react';

export default class MainFilterDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.filterDropdown = React.createRef();
    this.state = {
      showDropdown: false,
      vegan: false,
      keto: false,
      paleo: false,
    }
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
 
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleDropdown() {
    this.setState({
      showDropdown: true,
    });
  }
  handleCheck(type) {
    return (e) => {
      this.setState({[type]: !this.state[type]})
    }
  }

  handleClickOutside(e) {
    if (this.filterDropdown.current && !this.filterDropdown.current.contains(e.target)) {
      this.setState({ showDropdown: false });
    }
  }
  render() {
    return (
      <div className="filter-param-dropdown" onClick={this.handleDropdown} ref={this.filterDropdown}>
        Param1
        <div className="g-o-b">
          {this.state.showDropdown ? (
            <div className="filter-dd-cont">
              <div className="filter-dd-item" >
                <label>
                  <input type="checkbox" name="vegan" checked={this.state.vegan} onChange={this.handleCheck("vegan")} />
                  Vegetarian
                </label>
               </div>
              <div className="filter-dd-item" >
                <input type="checkbox" name="keto" checked={this.state.keto} onChange={this.handleCheck("keto")}/>
                <label>Keto</label>
               </div>
              <div className="filter-dd-item" >
                <input type="checkbox" name="paleo" checked={this.state.paleo} onChange={this.handleCheck("paleo")}/>
                <label>Paleo</label>
              </div>
            
            </div>) : null}
        </div>
      </div>
    )
  }
}