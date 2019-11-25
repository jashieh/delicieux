import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import Apron from '../stylesheets/assets/cup.png'
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
                    <a href="#st-panel-2" className="splash-footer-tab">Happiness</a>
                    <input type="radio" name="radio-set" id="st-control-3" />
                    <a href="#st-panel-3" className="splash-footer-tab">Tranquillity</a>
                    <input type="radio" name="radio-set" id="st-control-4" />
                    <a href="#st-panel-4" className="splash-footer-tab">Positivity</a>
                    <input type="radio" name="radio-set" id="st-control-5" />
                    <a href="#st-panel-5" className="splash-footer-tab">Passion</a>

                    <div className="st-scroll">

                        <section className="st-panel" id="st-panel-1">
                            <div className="st-deco" >
                                <img className="apron" src={Apron} alt="" />;
                            </div>

                            <div className="splash-loading-container">

                            <h2>délicieux</h2>
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
                            <div className="st-deco">
                                <i class="fas fa-paw apron"></i>
                            </div>
                            <h2>Happiness</h2>
                            <p>Art party readymade beard labore cosby sweater culpa. Art party whatever incididunt, scenester umami polaroid tofu.</p>
                        </section>

                        <section className="st-panel" id="st-panel-3">
                            <div className="st-deco">
                            </div>

                            
                            
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