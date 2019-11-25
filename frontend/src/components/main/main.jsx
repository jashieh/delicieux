import React from 'react';
import { withRouter } from 'react-router-dom';

import NavbarContainer from '../nav/navbar_container';
import Apron from '../stylesheets/assets/apron.png';
import Background1 from '../stylesheets/assets/background1.jpg';
import Background2 from '../stylesheets/assets/food_background2.jpg';
import ChooseMeal from '../stylesheets/assets/choose_meal.gif';
import PieChart from '../stylesheets/assets/pie_chart.gif';
import LineChart from '../stylesheets/assets/line_chart.gif';
import GroceryGif from '../stylesheets/assets/grocery.gif';

import KitchenCounter from '../stylesheets/assets/kitchen_counter.jpg';
import MainIndexItemContainer from './main_index_item_container';
import { recipe1 } from './main_index_seeds';                      

class MainPage extends React.Component {
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="codrops-top">
                        <NavbarContainer />
                        <div className="clr"></div>
                    </div>
        
                    <div className="st-container">

                        <input type="radio" name="radio-set" defaultChecked={false} id="st-control-1" />
                        <a href="#st-panel-1" className="splash-footer-tab">délicieux?</a>
                        <input type="radio" name="radio-set" id="st-control-2" />
                        <a href="#st-panel-2" className="splash-footer-tab">How it works</a>
                        <input type="radio" name="radio-set" id="st-control-3" />
                        <a href="#st-panel-3" className="splash-footer-tab">Tranquillity</a>
                        <input type="radio" name="radio-set" id="st-control-4" />
                        <a href="#st-panel-4" className="splash-footer-tab">Positivity</a>
                        <input type="radio" name="radio-set" id="st-control-5" />
                        <a href="#st-panel-5" className="splash-footer-tab">Passion</a>

                        <div className="st-scroll">

                            <section className="st-panel" id="st-panel-1">
                                <div className="img-container">
                                    <img src={Background1} alt=""
                                    className="splash-img"/>
                                </div>
                                <div className="st-deco" >
                                    <img className="apron" src={Apron} alt="" />;
                                </div>

                                <div className="splash-loading-container">

                                <h2 className="splash-main-title"
                                    onClick={()=>this.props.history.push('/login')}>
                                    délicieux
                                </h2>
                                <div className="very-top">
                                    <div className="top-top">
                                        <div className="meter">
                                            <span id="span-first" ><span className="progress"></span></span>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            
                                
                            </section>

                            <section className="st-panel st-color" id="st-panel-2">
                                <div className="img-container">
                                    <img src={Background2} alt=""
                                    className="splash-img"/>
                                </div>
                                <div className="st-deco">
                                    {/* <i class="fas fa-paw apron"></i> */}
                                </div>
                                <div className="splash-middle-container">
                                    <h2 className="how-it-works">How it works</h2>
                                    <div className="splash-gif-container">
                                        <div className="splash-gif-item">
                                            <img src={GroceryGif} alt="" className="splash-gif-2"/>
                                            <div className="splash-gif-label">
                                                TRACK YOUR INGREDIENTS
                                            </div>
                                            <div className="splash-gif-body">
                                                Never let your groceries go to waste by keeping a dynamic digital inventory.
                                            </div>
                                        </div>
                                        
                                        <div className="splash-gif-item">
                                            <img src={ChooseMeal} alt="" className="splash-gif"/>
                                            <div className="splash-gif-label">
                                                CHOOSE YOUR MEALS
                                            </div>
                                            <div className="splash-gif-body">
                                                Get recipe suggestions based on the ingredients you have and your fitness goals.
                                            </div>
                                        </div>
                                        <div className="splash-gif-item">
                                            <img src={PieChart} alt="" className="splash-gif"/>
                                            <div className="splash-gif-label">
                                                MACROS MADE EASY
                                            </div>
                                            <div className="splash-gif-body">
                                                Stay informed with detailed nutritional information on all recipes.
                                            </div>
                                        </div>
                                        <div className="splash-gif-item">
                                            <img src={LineChart} alt="" className="splash-gif"/>
                                            <div className="splash-gif-label">
                                                MONITOR YOUR PROGRESS
                                            </div>
                                            <div className="splash-gif-body">
                                                Reach your goals easier by visualizing your improvement.
                                            </div>
                                        </div>
                                    </div>
                                    {/* <p>Art party readymade beard labore cosby sweater culpa. Art party whatever incididunt, scenester umami polaroid tofu.</p> */}
                                </div>
                            </section>

                            <section className="st-panel" id="st-panel-3">
                                <div className="st-deco">

                                </div>
                                <h2>Tranquillity</h2>
                                <p>Sint aute occaecat id vice. Post-ironic fap pork belly next level godard, id fanny pack williamsburg forage truffaut.</p>
                            </section>

                            <section className="st-panel st-color" id="st-panel-4">
                                <div className="st-deco">

                                </div>
                                <div className="img-container">
                                  <img src={KitchenCounter} className="splash-image"/>
                                </div>

                                <div className="main-index">
                                  <div className="main-index-header">
                                    Browse From a Diverse Menu!
                                  </div>
                                  <div className="main-index-rows">
                                    <div className="main-index-row">
                                      <MainIndexItemContainer recipe={recipe1}/>
                                      <MainIndexItemContainer recipe={recipe1}/>
                                      <MainIndexItemContainer recipe={recipe1}/>
                                    </div>
                                    <div className="main-index-row">
                                      <MainIndexItemContainer recipe={recipe1}/>
                                      <MainIndexItemContainer recipe={recipe1}/>
                                      <MainIndexItemContainer recipe={recipe1}/>
                                    </div>
                                  </div>
                                </div>
                            </section>

                            <section className="st-panel" id="st-panel-5">
                                <div className="st-deco">

                                </div>
                                <h2>Passion</h2>
                                <p>Fixie ad odd future polaroid dreamcatcher, nesciunt carles bicycle rights accusamus mcsweeney's mumblecore nulla irony.</p>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default MainPage;