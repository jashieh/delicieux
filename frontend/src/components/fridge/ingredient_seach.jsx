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
      results: []
    };

    this.update = this.update.bind(this);
    this.search = debounce(this.search, 1000);
  }

  update(e) {
    this.setState({ query: e.target.value });
    this.search(e.target.value);
  }

  search(query) {
    this.props.searchIngredientByName(query)
      .then(res => {
        this.setState({ results: res.data });
      });
  }
  
  render() {
    const results = this.state.results.map( (ingredient, i) => {
      return (
        <IngredientSearchItemContainer key={i} ingredient={ingredient} />
        // <li key={i} >{ ingredient.name }</li>
      );
    });

    return(
      <div className="ingredient-search-container">
        <input type="text" value={this.state.query} onChange={this.update}/>
        <ul className="ingredient-search-ul">
          { results }
        </ul>
      </div>
    );
  }
}

export default IngredientSearch;