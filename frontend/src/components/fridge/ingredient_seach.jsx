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
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
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
  
  render() {
    const results = this.state.results.map( (ingredient, i) => {
      return (
        <IngredientSearchItemContainer key={i} ingredient={ingredient} />
      );
    });

    return(
      <div className="ingredient-search-container" >
        <div className="ingredient-search-box">
          <input type="text" value={this.state.query} onChange={this.update}
            className="ingredient-search-input" placeholder="Search Ingredients"/>
          { this.state.visible && <ul className="ingredient-search-ul" ref={node => this.node = node}>
            { results }
          </ul> }
        </div>
      </div>
    );
  }
}

export default IngredientSearch;