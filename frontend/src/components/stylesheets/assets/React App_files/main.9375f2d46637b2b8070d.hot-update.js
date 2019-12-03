webpackHotUpdate("main",{

/***/ "./src/components/recipes_yj/main_filter.jsx":
/*!***************************************************!*\
  !*** ./src/components/recipes_yj/main_filter.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_filter_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_filter_dropdown */ "./src/components/recipes_yj/main_filter_dropdown.jsx");
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toggle */ "./node_modules/react-toggle/dist/component/index.js");
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toggle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheets_recipes_index_main_filter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/recipes_index/main_filter.scss */ "./src/components/stylesheets/recipes_index/main_filter.scss");
/* harmony import */ var _stylesheets_recipes_index_main_filter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_recipes_index_main_filter_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheets_recipes_index_toggle_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheets/recipes_index/toggle.scss */ "./src/components/stylesheets/recipes_index/toggle.scss");
/* harmony import */ var _stylesheets_recipes_index_toggle_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_recipes_index_toggle_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stylesheets_assets_loupe_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheets/assets/loupe-2.png */ "./src/components/stylesheets/assets/loupe-2.png");
/* harmony import */ var _stylesheets_assets_loupe_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_loupe_2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stylesheets_assets_harvest_two_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stylesheets/assets/harvest-two.png */ "./src/components/stylesheets/assets/harvest-two.png");
/* harmony import */ var _stylesheets_assets_harvest_two_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_harvest_two_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/recipes_yj/main_filter.jsx";


 // import "react-toggle/style.css";





class MainFilter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientToggle: false,
      query: "",
      ingredientQuery: "",
      ingredientList: [],
      includeFridge: true,
      tabs: 0,
      cuisines: ["American", "Chinese", "French", "German", "Indian", "Italian", "Japanese", "Korean", "Mexican", "Thai"],
      allergies: ["Dairy", "Egg", "Gluten", "Peanut", "Seafood", "Shellfish", "Soy", "Sulfite", "Wheat"],
      cuisine: "",
      vegan: false,
      vegetarian: false,
      paleo: false,
      glutenFree: false,
      ketogenic: false,
      dairy: false,
      egg: false,
      gluten: false,
      peanut: false,
      seafood: false,
      shellfish: false,
      soy: false,
      sulfite: false,
      wheat: false,
      maxCalories: 0,
      maxCarbs: 0,
      maxFat: 0,
      minProtein: 0
    };
    this.addIngredient = this.addIngredient.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleCuisine = this.handleCuisine.bind(this);
    this.removeCuisine = this.removeCuisine.bind(this);
    this.toggleIngredients = this.toggleIngredients.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    this.handleIngredientSubmit = this.handleIngredientSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchFridge(this.props.userId);
    let input = document.getElementsByClassName("filter-text-input")[0];

    this.enterEvent = event => {
      event.stopPropagation();
      if (event.keyCode === 13) this.handleQuerySubmit();
    };

    input.addEventListener("keydown", this.enterEvent);
  }

  componentWillUnmount() {
    let input = document.getElementsByClassName("filter-text-input")[0];
    input.removeEventListener("keydown", this.enterEvent);
  }

  addIngredient() {
    let x = this.state.ingredientList;
    x.push(this.state.ingredientQuery.trim());
    this.setState({
      ingredientList: x
    }, () => {
      this.setState({
        ingredientQuery: ""
      });
    });
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleTab(num) {
    return e => {
      this.setState({
        tabs: num
      });
    };
  }

  handleCheck(type) {
    return e => {
      this.setState({
        [type]: !this.state[type]
      });
    };
  }

  handleCuisine(type) {
    return e => {
      this.setState({
        cuisine: type.cuisine
      });
    };
  }

  handleQuerySubmit() {
    let diet = [];
    if (this.state.vegan) diet.push("vegan");
    if (this.state.vegetarian) diet.push("vegetarian");
    if (this.state.paleo) diet.push("paleo");
    if (this.state.glutenFree) diet.push("gluten free");
    if (this.state.ketogenic) diet.push("ketogenic");
    let intolerances = [];
    if (this.state.dairy) intolerances.push("dairy");
    if (this.state.egg) intolerances.push("egg");
    if (this.state.peanut) intolerances.push("peanut");
    if (this.state.seafood) intolerances.push("seafood");
    if (this.state.shellfish) intolerances.push("shellfish");
    if (this.state.soy) intolerances.push("soy");
    if (this.state.sulfite) intolerances.push("sulfite");
    if (this.state.wheat) intolerances.push("wheat");
    this.props.startLoad("loading");
    this.props.complexRecipeSearch({
      search: this.state.query,
      cuisine: this.state.cuisine,
      diet,
      intolerances,
      maxCalories: this.state.maxCalories,
      maxFat: this.state.maxFat,
      maxCarbs: this.state.maxCarbs,
      minProtein: this.state.minProtein
    });
    this.setState({
      tabs: 0
    });
  }

  handleIngredientSubmit() {
    let fridgeContent = [];

    if (this.props.fridge.ingredients) {
      fridgeContent = Object.values(this.props.fridge.ingredients).map(item => {
        return item.name;
      });
    }

    const ingredientList = this.state.includeFridge ? this.state.ingredientList.concat(fridgeContent) : this.state.ingredientList;
    this.props.startLoad("loading");
    this.props.getRecipesByIngredients(ingredientList);
    this.setState({
      tabs: 0
    });
  }

  handleSlider(type) {
    const maxc = 800;
    const maxn = 100;
    return e => {
      if (type === "maxCalories") {
        if (parseInt(e.target.value) > maxc) e.target.value = maxc.toString();
      } else {
        if (parseInt(e.target.value) > maxn) e.target.value = maxn.toString();
      }

      this.setState({
        [type]: e.target.value
      });
    };
  }

  toggleIngredients() {
    this.setState({
      ingredientToggle: !this.state.ingredientToggle
    });
  }

  removeCuisine(e) {
    e.stopPropagation();

    if (e.target.classList.value === "filter-bot-cuisine") {
      this.setState({
        cuisine: ""
      });
    }
  }

  removeIngredient(idx) {
    return () => {
      let x = this.state.ingredientList;
      x.splice(idx.idx, 1);
      this.setState({
        ingredientList: x
      });
    };
  }

  renderIngredients() {
    if (!this.state.ingredientList) return null;
    return this.state.ingredientList.map((ingredient, idx) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: idx,
        className: "filter-ing-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "filter-x",
        onClick: this.removeIngredient({
          idx
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "\xD7"), ingredient, " ", idx);
    });
  }

  renderTab() {
    if (this.state.tabs === 0) return null;else if (this.state.tabs === 1) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-bot-diet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "filter-x",
        onClick: this.handleTab(0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "glutenFree",
        checked: this.state.glutenFree,
        onChange: this.handleCheck("glutenFree"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), "Gluten Free"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "ketogenic",
        checked: this.state.ketogenic,
        onChange: this.handleCheck("ketogenic"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), "Ketogenic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "vegetarian",
        checked: this.state.vegetarian,
        onChange: this.handleCheck("vegetarian"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), "Vegetarian"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "vegan",
        checked: this.state.vegan,
        onChange: this.handleCheck("vegan"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), "Vegan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "paleo",
        checked: this.state.paleo,
        onChange: this.handleCheck("paleo"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), "Paleo"));
    } else if (this.state.tabs === 2) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-bot-cuisine",
        onClick: this.removeCuisine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "filter-x",
        onClick: this.handleTab(0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "\xD7"), this.state.cuisines.map((cuisine, idx) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: idx,
          className: "filter-dd-item2",
          onClick: this.handleCuisine({
            cuisine
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, cuisine);
      }));
    } else if (this.state.tabs === 3) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-bot-allergies",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "filter-x",
        onClick: this.handleTab(0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "dairy",
        checked: this.state.dairy,
        onChange: this.handleCheck("dairy"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }), "Dairy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "egg",
        checked: this.state.egg,
        onChange: this.handleCheck("egg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }), "Egg"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "peanut",
        checked: this.state.peanut,
        onChange: this.handleCheck("peanut"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }), "Peanut"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "seafood",
        checked: this.state.seafood,
        onChange: this.handleCheck("seafood"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), "Seafood"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "shellfish",
        checked: this.state.shellfish,
        onChange: this.handleCheck("shellfish"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }), "Shellfish"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "soy",
        checked: this.state.soy,
        onChange: this.handleCheck("soy"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), "Soy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "sulfite",
        checked: this.state.sulfite,
        onChange: this.handleCheck("sulfite"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), "Sulfite"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter-dd-item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "wheat",
        checked: this.state.wheat,
        onChange: this.handleCheck("wheat"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }), "Wheat"));
    } else if (this.state.tabs === 4) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-bot-allergies",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "filter-x",
        onClick: this.handleTab(0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Max Calories [ 0 - 800 ]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider-second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "filter-nutr-slider",
        type: "range",
        min: "0",
        max: "800",
        value: this.state.maxCalories,
        onChange: this.handleSlider("maxCalories"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "slide",
        type: "number",
        min: "0",
        max: "800",
        maxength: "3",
        value: this.state.maxCalories,
        onChange: this.handleSlider("maxCalories"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Max Fat [ 0 - 100 ]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider-second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "filter-nutr-slider",
        type: "range",
        min: "0",
        max: "100",
        value: this.state.maxFat,
        onChange: this.handleSlider("maxFat"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "slide",
        type: "number",
        min: "0",
        max: "100",
        maxLength: "3",
        value: this.state.maxFat,
        onChange: this.handleSlider("maxFat"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Max Carbs [ 0 - 100 ]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider-second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "filter-nutr-slider",
        type: "range",
        min: "0",
        max: "100",
        value: this.state.maxCarbs,
        onChange: this.handleSlider("maxCarbs"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "slide",
        type: "number",
        min: "0",
        max: "100",
        maxLength: "3",
        value: this.state.maxCarbs,
        onChange: this.handleSlider("maxCarbs"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Min Protein [ 0 - 100 ]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider-second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "filter-nutr-slider",
        type: "range",
        min: "0",
        max: "100",
        value: this.state.minProtein,
        onChange: this.handleSlider("minProtein"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "slide",
        type: "number",
        min: "0",
        max: "100",
        pattern: "\\d",
        maxLength: "3",
        value: this.state.minProtein,
        onChange: this.handleSlider("minProtein"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      })));
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, this.state.ingredientToggle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "filter-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "filter-x",
      onClick: this.toggleIngredients,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-text-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "filter-text-input",
      placeholder: "Ingredients",
      onChange: this.handleInput("ingredientQuery"),
      value: this.state.ingredientQuery,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "filter-query-search",
      disabled: !this.state.ingredientQuery,
      onClick: this.addIngredient,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-query-search",
      onClick: this.handleIngredientSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_loupe_2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-param-cont fridge-add",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "filter-dd-item1",
      style: this.state.glutenFree ? {
        backgroundColor: "black"
      } : {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toggle__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "toggle",
      defaultChecked: this.state.includeFridge,
      onChange: this.handleCheck("includeFridge"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, "Include Fridge")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-bot-allergies",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, this.renderIngredients())) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "filter-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-text-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "filter-text-input",
      placeholder: "Find a recipe",
      onChange: this.handleInput("query"),
      value: this.state.query,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-query-search",
      onClick: this.handleQuerySubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_loupe_2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-text-button",
      onClick: this.toggleIngredients,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_harvest_two_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "",
      className: "ingredient-search-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "toggle-span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, "Ingredient Search"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-param-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-text",
      onClick: this.handleTab(1),
      style: this.state.tabs === 1 ? {
        backgroundColor: "inherit",
        color: "black"
      } : {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, "Diets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-text",
      onClick: this.handleTab(2),
      style: this.state.tabs === 2 ? {
        backgroundColor: "inherit",
        color: "black"
      } : {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, "Cuisines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-text",
      onClick: this.handleTab(3),
      style: this.state.tabs === 3 ? {
        backgroundColor: "inherit",
        color: "black"
      } : {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, "Allergies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-text",
      onClick: this.handleTab(4),
      style: this.state.tabs === 4 ? {
        backgroundColor: "inherit",
        color: "black"
      } : {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, "Nutrition"))), this.renderTab()));
  }

}

/***/ })

})
//# sourceMappingURL=main.9375f2d46637b2b8070d.hot-update.js.map