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

    this.fridgeContainer = null;

    this.update = this.update.bind(this);
    this.search = debounce(this.search, 100);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fridgeContainer = document.querySelector('.fridge-container');
    this.fridgeContainer.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    this.fridgeContainer.removeEventListener('mousedown', this.handleClick);
  }

  update(e) {
    this.setState({ query: e.target.value });
    this.search(e.target.value);
  }

  search(query) {
    this.props.searchIngredientByName(query)
      .then(res => {
        this.setState({ results: res.data, visible: true });
      });
  }

  handleClick(e) {
    if(!(this.node && this.node.contains(e.target))) {
      this.setState({ visible: false });
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
            className="search-input" placeholder="Search Ingredients"/>
          { this.state.visible && <ul className="ingredient-search-ul" ref={node => this.node = node}>
            { results }
          </ul> }
        </div>
      </div>
    );
  }
}

export default IngredientSearch;