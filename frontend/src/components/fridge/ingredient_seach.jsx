import React from 'react';
import IngredientSearchItemContainer from './ingredient_search_item_container';

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

class IngredientSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      visible: false
    };

    this.update = this.update.bind(this);
    this.search = debounce(this.search, 100);
    this.handleClick = this.handleClick.bind(this);
    this.hitEnter = this.hitEnter.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
    document.addEventListener('keydown', this.hitEnter);

  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
    document.removeEventListener('keydown', this.hitEnter);
  }

  update(e) {
    this.setState({ query: e.target.value });
    this.search(e.target.value);
  }

  search(query) {
    if(query !== "") {
      this.props.searchIngredientByName(query)
        .then(res => {
          this.setState({ results: res.data, visible: true });
      });
    } else {
      this.setState({ visible: false });
    }
  }

  handleClick(e) {
    if(!(this.node && this.node.contains(e.target))) {
      this.setState({ visible: false, query: "" });
    }
  }

  hitEnter(e) {
    if(e.key === "Enter" && this.props.modal) {
      this.setState({ visible: false, query: "" });
    }
  }
  
  render() {
    let results;
    if(this.state.results.length > 0) {
      results = this.state.results.map( (ingredient, i) => {
        return (
          <IngredientSearchItemContainer key={i} ingredient={ingredient} />
        );
      });
    } else {
      results = <li className="ingredient-search-li">No Matches</li>
    }

    return(
      <div className="ingredient-search-container" >
        <div className="ingredient-search-box">
          <input type="text" value={this.state.query} onChange={this.update}
            className="search-input" placeholder="Search Ingredients"
          />
          { this.state.visible && <ul className="ingredient-search-ul" ref={node => this.node = node}>
            { results }
          </ul> }
        </div>
      </div>
    );
  }
}

export default IngredientSearch;