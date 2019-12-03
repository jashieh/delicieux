(this["webpackJsonpfrontend"] = this["webpackJsonpfrontend"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/App.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/App.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center; }\n\n.App-logo {\n  height: 40vmin; }\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; }\n\n.App-link {\n  color: #09d3ac; }\n\n/*\nhtml5doctor.com Reset Stylesheet\nv1.6.1\nLast Updated: 2010-09-17\nAuthor: Richard Clark - http://richclarkdesign.com\nTwitter: @rich_clark\n*/\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n  font: inherit;\n  color: inherit;\n  text-align: inherit;\n  text-decoration: inherit;\n  box-sizing: inherit; }\n\nbody {\n  line-height: 1; }\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nul {\n  list-style: none; }\n\nnav ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\n/* change colours to suit your needs */\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none; }\n\n/* change colours to suit your needs */\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* change border colour to suit your needs */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cccccc;\n  margin: 1em 0;\n  padding: 0; }\n\ninput, select {\n  vertical-align: middle; }\n\n.main-auth {\n  padding-left: 20px; }\n  .main-auth .main-sign {\n    color: #c7b9a9;\n    font-family: Open Sans;\n    font-size: 13px; }\n  .main-auth .main-sign:hover {\n    color: white; }\n\n.splash-loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  box-sizing: border-box;\n  top: 2%;\n  right: 0%;\n  width: 300px;\n  height: 80px; }\n\n.meter {\n  height: 2px;\n  width: 220px;\n  margin-top: 20px;\n  overflow: hidden;\n  background-color: #fcfcfc; }\n  .meter .meter #span-first {\n    width: 100%; }\n\n.meter span {\n  display: block;\n  height: 100%; }\n\n.progress {\n  background: #a78d56;\n  animation: progressBar 3s ease-in-out;\n  animation-fill-mode: both; }\n\n@keyframes progressBar {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n\n#st-panel-4 .st-deco {\n  background-color: silver; }\n\n.img-container {\n  position: absolute;\n  width: 100vw;\n  height: 100vh; }\n\n.splash-image {\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover; }\n\n.main-index {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 20%;\n  left: calc(50% - 450px);\n  min-width: 800px;\n  height: auto;\n  padding: 50px;\n  padding-top: 20px;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 1px 1px 4px 1px #c4c2c2; }\n\n.main-index-header {\n  line-height: 36px;\n  font-size: 36px;\n  font-weight: bold;\n  vertical-align: middle;\n  text-align: center;\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 5px; }\n\n.main-index-rows {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0 50px; }\n\n.main-index-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.recipe-index-item.main {\n  max-height: 180px;\n  max-width: 200px; }\n\n.recipe-index-item-name.main {\n  font-size: 14px;\n  font-weight: bold;\n  color: black; }\n\n.login-form {\n  letter-spacing: 0.5px;\n  background-color: #2e0471;\n  max-width: 470px;\n  border-radius: 5px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 500px;\n  padding: 20px;\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 2s; }\n\n.signup-form {\n  letter-spacing: 0.5px;\n  background-color: #040404;\n  border: 1px solid grey;\n  max-width: 470px;\n  border-radius: 5px;\n  position: fixed;\n  height: 500px;\n  padding: 50px;\n  color: white;\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 2s, details 0.7s ease-in; }\n  .signup-form .signup-contain {\n    width: 100%;\n    height: 100%;\n    background-color: purple; }\n    .signup-form .signup-contain .signup-text-contain {\n      width: 70%;\n      height: 100%;\n      background-color: green;\n      margin: 0 auto;\n      display: flex;\n      flex-direction: row; }\n\n@keyframes fadein {\n  from {\n    opacity: 0.5; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@keyframes details {\n  0% {\n    transform: translateY(100px); }\n  100% {\n    transform: translateY(0px); } }\n\n.go-back {\n  font-family: Open Sans;\n  font-size: 12px;\n  font-weight: 300;\n  display: flex;\n  flex-direction: row; }\n  .go-back h2 {\n    width: max-content;\n    align-self: center;\n    margin-right: 10px; }\n  .go-back .back-sign {\n    width: max-content; }\n\n.signup-text {\n  height: 0;\n  font-family: Sacramento;\n  position: absolute;\n  top: 150px;\n  left: 38%;\n  color: white;\n  font-size: 38px;\n  font-weight: 100; }\n\n.submit {\n  background-color: black;\n  border: none;\n  color: #b0abab;\n  font-size: 13px;\n  padding: 10px 30px;\n  margin: 0 auto;\n  width: 130px;\n  font-family: Open Sans; }\n\n.login-bottom {\n  display: flex;\n  flex-direction: row;\n  padding: 20px 0px;\n  justify-content: space-around; }\n\n.modal-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(12, 11, 11, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100; }\n\n.session-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #0c0b0b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100; }\n\n.modal-child {\n  position: absolute;\n  z-index: 999; }\n\n.side-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.536);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 900; }\n\n* {\n  text-decoration: none; }\n\n/* Remove all underline/italicize/etc. */\n.top {\n  background-color: #d2eaf3;\n  border-bottom: 1px solid #d5d5d8;\n  width: 100%;\n  height: 35px;\n  display: flex; }\n  .top .nav-main {\n    align-self: center;\n    display: flex;\n    flex-direction: row;\n    color: white;\n    font-family: Sacramento;\n    font-size: 30px;\n    padding: 10px 20px; }\n\n.logout {\n  font-family: Open Sans;\n  background-color: #d2eaf3;\n  color: black;\n  border: none;\n  font-size: 14px; }\n\n.right-left-contain {\n  width: 100%;\n  height: calc(100vh - 55px);\n  display: flex; }\n\n.left {\n  width: 70%;\n  height: calc(100vh - 60px);\n  background-color: white;\n  margin: auto 0;\n  display: flex;\n  justify-content: center; }\n  .left .left-contain {\n    width: 950px;\n    align-self: center;\n    height: 97%;\n    background-color: white;\n    border-radius: 3px;\n    display: flex;\n    flex-direction: column; }\n    .left .left-contain .left-ingredients {\n      width: 600px;\n      height: 70px;\n      background-color: #ffae00;\n      margin: 10px auto; }\n    .left .left-contain .left-filter {\n      width: 900px;\n      height: 70px;\n      background-color: #eee1fa;\n      margin: 10px auto;\n      margin-top: 20px;\n      border-radius: 3px;\n      overflow: hidden; }\n    .left .left-contain .left-recipe-contain {\n      width: 900px;\n      height: 70px;\n      background-color: #3c4565;\n      border-radius: 3px;\n      margin: 10px auto;\n      flex-grow: 1;\n      overflow: hidden;\n      display: flex; }\n      .left .left-contain .left-recipe-contain .boxes-contain {\n        width: 100%;\n        height: 100%;\n        background-color: white;\n        border-radius: 3px; }\n      .left .left-contain .left-recipe-contain .index-boxlink-square {\n        width: calc(30% - 20px) !important;\n        margin: 21px;\n        margin-bottom: 0;\n        height: 130px;\n        background-color: white;\n        float: left;\n        box-shadow: 1px 1px 8px 1px #1a1919;\n        /* minus the margins (60px in total for each side of each box)\n        we need to override the width from the div!!  */\n        display: flex;\n        padding: 20px; }\n        .left .left-contain .left-recipe-contain .index-boxlink-square h3 {\n          align-items: center;\n          align-self: center;\n          font-weight: normal; }\n      .left .left-contain .left-recipe-contain .index-links div h3 {\n        line-height: 70px; }\n\n.right {\n  width: 30%;\n  height: calc(100vh - 60px);\n  background-color: yellow;\n  margin: auto 0; }\n  .right .right-contain {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    background: white;\n    padding: 10px;\n    padding-left: 20px; }\n    .right .right-contain .macro-contain {\n      height: 200px;\n      width: 80%;\n      flex-grow: 3;\n      background-color: pink; }\n    .right .right-contain .ingredient-contain {\n      height: 100%;\n      width: max-content;\n      background-color: #F9F9F9; }\n\n.boxes-contain::-webkit-scrollbar {\n  width: 25px; }\n\n.boxes-contain::-webkit-scrollbar-track {\n  border: 7px solid #232943; }\n\n.boxes-contain::-webkit-scrollbar-thumb {\n  background: red;\n  border-radius: 2px; }\n\n#menuToggle {\n  display: none; }\n\n.menu {\n  width: 100%;\n  height: 50px;\n  background: red;\n  display: hidden; }\n\n.left {\n  position: relative; }\n\n#menuToggle:checked ~ .menu {\n  position: absolute;\n  top: 200px; }\n\n#menuToggle:checked ~ .left-filter {\n  position: absolute;\n  top: 300px; }\n\n.first-side {\n  text-align: center;\n  width: 25%;\n  height: 100vh;\n  position: absolute;\n  left: 0; }\n  .first-side .first-drawer-contain {\n    height: 100%;\n    border: 0;\n    border-radius: 0.1em;\n    animation: fadein 2s, first 0.7s ease-in;\n    background-color: #100f0f; }\n\n.first-drawer-main-text {\n  display: block;\n  padding: 35px 30px 20px 20px;\n  font-family: Sacramento;\n  font-size: 26px;\n  color: #b6aaaa; }\n\n@keyframes fadein {\n  from {\n    opacity: 0.3; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@keyframes first {\n  0% {\n    transform: translateX(-100px); }\n  100% {\n    transform: translateX(0px); } }\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  -webkit-font-smoothing: antialiased; }\n\na {\n  font-size: 1.2em;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  text-decoration: none;\n  margin: 16px 0; }\n\n.btn {\n  position: relative;\n  display: inline-block;\n  padding: 0.7em 2.6em;\n  cursor: pointer;\n  overflow: hidden; }\n  .btn:before, .btn:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background-color: #252525; }\n  .btn:before {\n    top: 0; }\n  .btn:after {\n    bottom: 0; }\n  .btn:hover > * > *:before, .btn:hover > * > *:after {\n    transform: translate3d(0, 0, 0); }\n  .btn:hover > * > * > *:before, .btn:hover > * > * > *:after {\n    transform: translate3d(0, 0, 0); }\n  .btn > *:before, .btn > *:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 1px;\n    background-color: #252525; }\n  .btn > *:before {\n    left: 0; }\n  .btn > *:after {\n    right: 0; }\n  .btn > * > *:before, .btn > * > *:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    z-index: 9;\n    height: 1px;\n    width: 100%;\n    background-color: #d0deeb; }\n  .btn > * > *:before {\n    top: 0;\n    transform: translate3d(-105%, 0, 0);\n    transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1); }\n  .btn > * > *:after {\n    bottom: 0;\n    transform: translate3d(105%, 0, 0);\n    transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1); }\n  .btn > * > * > *:before, .btn > * > * > *:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    z-index: 9;\n    height: 100%;\n    width: 1px;\n    background-color: #d0deeb; }\n  .btn > * > * > *:before {\n    left: 0;\n    transform: translate3d(0, 105%, 0);\n    transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1); }\n  .btn > * > * > *:after {\n    right: 0;\n    transform: translate3d(0, -105%, 0);\n    transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1); }\n\n.second-side {\n  text-align: center;\n  width: 25%;\n  height: 100vh;\n  position: absolute;\n  left: 25%;\n  border-left: 1px solid rgba(114, 106, 106, 0.988); }\n  .second-side .second-drawer-contain {\n    height: 100%;\n    border: 0;\n    border-radius: 0.1em;\n    animation: fadein 2s, second 0.7s ease-in;\n    background-color: #100f0f; }\n\n@keyframes fadein {\n  from {\n    opacity: 0.6; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@keyframes second {\n  0% {\n    transform: translateX(-30px); }\n  100% {\n    transform: translateX(0px); } }\n\n.fridge-container {\n  height: 100vh;\n  width: 100%;\n  border: 5px solid black;\n  background-color: black; }\n  .fridge-container .contain-all {\n    height: 90%;\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row; }\n    .fridge-container .contain-all .left-fridge {\n      width: 50%;\n      height: 90%;\n      margin: auto 0;\n      background-color: black;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column; }\n    .fridge-container .contain-all .right-fridge {\n      flex-grow: 1;\n      height: 100%; }\n\n.ingredient-search-container {\n  height: max-content;\n  background-color: black;\n  width: 100%; }\n\n.ingredient-search-box {\n  display: flex;\n  background-color: black;\n  height: 100%;\n  justify-content: center;\n  margin-top: 20px; }\n  .ingredient-search-box .ingredient-search-contain {\n    position: relative;\n    width: max-content;\n    height: 100%;\n    background-color: black; }\n    .ingredient-search-box .ingredient-search-contain .search-input {\n      padding: 20px 15px;\n      width: 300px;\n      border-radius: 2px;\n      animation: FadeIn 1s;\n      border: 1px solid white;\n      background-color: #131111; }\n    .ingredient-search-box .ingredient-search-contain .search-input:focus {\n      outline: none;\n      border: 1px solid white;\n      color: #b6b6b6;\n      background-color: #2A2C2F; }\n    .ingredient-search-box .ingredient-search-contain .ingredient-search-ul {\n      position: absolute;\n      background-color: #2A2C2F;\n      color: grey;\n      box-sizing: border-box;\n      width: 300px;\n      font-weight: 400;\n      font-size: 15px;\n      font-family: Open Sans; }\n      .ingredient-search-box .ingredient-search-contain .ingredient-search-ul .ingredient-search-li {\n        padding: 12px 15px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between; }\n      .ingredient-search-box .ingredient-search-contain .ingredient-search-ul .ingredient-search-li:hover {\n        cursor: pointer;\n        filter: brightness(80%);\n        background-color: #24B6FF;\n        color: white;\n        font-weight: 600; }\n\n.add-ingredient-modal-container {\n  width: 380px;\n  border-radius: 5px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 10px; }\n  .add-ingredient-modal-container div {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .add-ingredient-modal-container .title {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: relative;\n    padding: 10px;\n    padding-top: 20px;\n    padding-left: 23px;\n    background-color: #ffffff;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    font-size: 19px;\n    font-family: Open Sans;\n    color: black;\n    letter-spacing: 1px; }\n    .add-ingredient-modal-container .title .add-ingredient-modal-close {\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      font-size: 18px;\n      font-weight: 600;\n      cursor: pointer; }\n    .add-ingredient-modal-container .title .add-ingredient-modal-close:hover {\n      filter: brightness(80%); }\n  .add-ingredient-modal-container .add-ingredient-body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    font-family: Open Sans;\n    width: 80%;\n    margin: 0 auto;\n    margin-top: 5px; }\n    .add-ingredient-modal-container .add-ingredient-body img {\n      width: 75px;\n      height: 75px; }\n    .add-ingredient-modal-container .add-ingredient-body .add-ingredient-input-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around; }\n      .add-ingredient-modal-container .add-ingredient-body .add-ingredient-input-container .add-ingredient-input-text {\n        padding: 10px;\n        font-size: 14px;\n        letter-spacing: 1px; }\n      .add-ingredient-modal-container .add-ingredient-body .add-ingredient-input-container .add-ingredient-input {\n        margin-top: 10px;\n        margin-right: 5px;\n        margin-bottom: 10px;\n        width: 65px;\n        height: 40px;\n        line-height: 40px;\n        font-size: 16px;\n        padding: 0 0 0 10px;\n        border-radius: 5px;\n        box-shadow: 2px 2px 10px 1px #c4c2c2; }\n      .add-ingredient-modal-container .add-ingredient-body .add-ingredient-input-container .add-ingredient-input-box {\n        width: 100%; }\n        .add-ingredient-modal-container .add-ingredient-body .add-ingredient-input-container .add-ingredient-input-box div {\n          margin-left: 10px; }\n  .add-ingredient-modal-container .error {\n    min-height: 30px;\n    text-align: center;\n    color: #f04747;\n    font-size: 14px;\n    font-family: Open Sans; }\n  .add-ingredient-modal-container .add-ingredient-footer {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    margin-bottom: 10px; }\n    .add-ingredient-modal-container .add-ingredient-footer .add-ingredient-submit {\n      width: 30%;\n      background-color: #6fb3e8;\n      color: white;\n      font-family: Open Sans;\n      font-size: 14px;\n      letter-spacing: 1px;\n      margin-bottom: 4px;\n      border-radius: 8px;\n      padding: 10px 15px 10px 15px;\n      box-shadow: 1px 1px 3px 1px rgba(194, 194, 194, 0.523);\n      cursor: pointer; }\n    .add-ingredient-modal-container .add-ingredient-footer .add-ingredient-submit:hover {\n      filter: brightness(90%); }\n    .add-ingredient-modal-container .add-ingredient-footer .add-ingredient-submit:active {\n      box-shadow: inset 1px 1px 5px 0 #000000; }\n    .add-ingredient-modal-container .add-ingredient-footer .remove-ingredient {\n      position: absolute;\n      right: 20px;\n      cursor: pointer; }\n      .add-ingredient-modal-container .add-ingredient-footer .remove-ingredient .hover-flag {\n        position: absolute;\n        top: -35px;\n        background-color: white;\n        border: 1px solid black;\n        padding: 5px 10px 5px 10px;\n        border-radius: 5px;\n        color: #f04747; }\n    .add-ingredient-modal-container .add-ingredient-footer .remove-ingredient:hover {\n      color: red; }\n\n.fridge-ingredients-container {\n  background-color: black;\n  height: 100%;\n  width: 100%; }\n  .fridge-ingredients-container .fridge-contain {\n    width: 78%;\n    height: 100%;\n    background: #62625d;\n    background: linear-gradient(98deg, #62625d 0%, #757673 35%, #616261 44%, #505151 52%, #454647 57%, #3c3e3f 61%, #313335 66%, #2b2d30 72%, #282a2d 78%, #0f1216 98%);\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px; }\n    .fridge-ingredients-container .fridge-contain .ingredients-contain {\n      width: 90%;\n      height: 90%;\n      background-color: rgba(15, 48, 130, 0.55);\n      box-shadow: inset 3px 4px 5px #000; }\n      .fridge-ingredients-container .fridge-contain .ingredients-contain ul {\n        height: 100%;\n        width: 100%;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        padding: 10px; }\n      .fridge-ingredients-container .fridge-contain .ingredients-contain li {\n        width: 30%;\n        min-width: 180px;\n        min-height: 38px;\n        margin: 10px;\n        background-color: white;\n        box-shadow: 1px 1px 7px 1px #242222;\n        color: black;\n        border-radius: 4px;\n        font-family: Open Sans;\n        font-size: 14px;\n        font-weight: 100;\n        cursor: pointer;\n        animation: FadeIn 1s;\n        animation-fill-mode: both;\n        position: relative;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center; }\n        .fridge-ingredients-container .fridge-contain .ingredients-contain li div {\n          margin-top: 5px;\n          margin-bottom: 5px;\n          font-size: 13px;\n          font-weight: 600;\n          text-align: center; }\n        .fridge-ingredients-container .fridge-contain .ingredients-contain li .fridge-item-image {\n          height: 25px;\n          width: 25px;\n          margin-left: 10px; }\n        .fridge-ingredients-container .fridge-contain .ingredients-contain li .fridge-item-name {\n          font-weight: 400; }\n        .fridge-ingredients-container .fridge-contain .ingredients-contain li .fridge-item-amount {\n          min-width: 40px;\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n      .fridge-ingredients-container .fridge-contain .ingredients-contain li:hover {\n        filter: brightness(80%); }\n\n@keyframes FadeIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.7); }\n  85% {\n    opacity: 1;\n    transform: scale(1.02); }\n  100% {\n    transform: scale(1); } }\n\n.search-input {\n  animation-delay: 8s; }\n\nli:nth-child(2) {\n  animation-delay: 1s; }\n\nli:nth-child(3) {\n  animation-delay: 1.5s; }\n\nli:nth-child(4) {\n  animation-delay: 2s; }\n\n.clock {\n  font-size: 70px;\n  color: white;\n  font-family: Roboto Mono;\n  font-weight: 200;\n  width: max-content;\n  background-color: black; }\n\n.profile-container {\n  width: 200px;\n  border: 1px solid black; }\n  .profile-container .profile-item-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    height: 50px;\n    border-bottom: 1px solid gray; }\n\n.user-info-input {\n  width: 50px; }\n\n.gender-radio-container {\n  width: 50px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid black;\n  border-radius: 5px; }\n  .gender-radio-container .gender-radio {\n    margin: 0;\n    padding: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  .gender-radio-container .gender-radio:checked + .gender-icon {\n    background-color: green;\n    color: white; }\n  .gender-radio-container .gender-icon {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center; }\n  .gender-radio-container .gender-icon:nth-child(2) {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px; }\n  .gender-radio-container .gender-icon:nth-child(4) {\n    border-left: 1px solid green;\n    border-right: 1px solid green; }\n  .gender-radio-container .gender-icon:nth-child(6) {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/cart/cart.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/cart/cart.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cart {\n  width: 350px;\n  height: 600px;\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-left: 1px solid #aca9a9;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #f2f1f1; }\n\n.cart-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Open Sans;\n  font-size: 15px;\n  width: 100%;\n  height: 10%; }\n\n.cart-header-date {\n  margin: 0px 12px; }\n\n.cart-header-left, .cart-header-right {\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 80px;\n  display: flex; }\n\n.cart-header-left {\n  justify-content: flex-end; }\n\n.cart-header-left:hover, .cart-header-right:hover {\n  cursor: pointer; }\n\n.cart-date {\n  width: 100%;\n  height: 890px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\n.cart-save-button {\n  width: 100px;\n  margin-left: 100px;\n  margin-right: 100px;\n  padding: 5px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  background: maroon;\n  color: white;\n  text-align: center; }\n\n.cart-save-button:hover {\n  cursor: pointer; }\n\n.cart-item {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 161px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  background: #e0eecf;\n  box-shadow: 1px 1px 7px 1px #d0cece;\n  overflow: hidden; }\n\n.cart-item-time {\n  width: max-content;\n  font-size: 13px;\n  font-weight: 400;\n  padding: 12px 10px;\n  padding-left: 29px;\n  background: white;\n  background: inherit; }\n\n.cart-item-info {\n  width: 90%;\n  height: 110px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  background: whitesmoke;\n  box-shadow: 1px 1px 8px 1px #c6c4c4;\n  margin: 0 auto;\n  font-family: Open Sans;\n  font-size: 15px; }\n  .cart-item-info .cart-image {\n    width: 30%;\n    display: flex;\n    justify-content: center; }\n    .cart-item-info .cart-image .cart-item-info-image {\n      width: 85%;\n      height: 85%;\n      box-shadow: 1px 1px 5px 1px #b6b5b5;\n      border-radius: 10px;\n      object-fit: cover;\n      align-self: center; }\n  .cart-item-info .cart-item-info-text {\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    margin-top: 13px;\n    background: inherit;\n    height: 55%; }\n    .cart-item-info .cart-item-info-text .cart-item-name {\n      width: 70%;\n      height: 50px;\n      background: inherit;\n      font-size: 14px;\n      font-weight: bold;\n      padding-top: 9px;\n      padding-left: 10px; }\n\n.cart-item-name {\n  height: 70%;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300; }\n\n.cart-item-remove {\n  width: max-content;\n  font-size: 12px;\n  color: black;\n  vertical-align: middle;\n  text-align: center; }\n\n.cart-item-remove:hover {\n  cursor: pointer; }\n\n.cart-item-main {\n  height: 110px;\n  background: inherit; }\n  .cart-item-main .cart-item-bottom {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    background: inherit;\n    width: 275px;\n    font-size: 12px;\n    margin-left: 20px; }\n\n.cart-item-main:hover {\n  cursor: pointer; }\n\n.cuisine {\n  display: flex;\n  flex-direction: row; }\n  .cuisine .cuisine-image {\n    padding-right: 5px; }\n    .cuisine .cuisine-image .uten-icon {\n      width: 13px;\n      height: 12px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/modal/modal.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/modal/modal.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".modal-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(12, 11, 11, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100; }\n\n.session-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #0c0b0b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100; }\n\n.modal-child {\n  position: absolute;\n  z-index: 999; }\n\n.side-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.536);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 900; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipe_index/recipe_index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/recipe_index/recipe_index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".recipe-index {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: calc(100% + 25px);\n  max-height: 100%;\n  padding-bottom: 10px;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n  .recipe-index ::-webkit-scrollbar {\n    width: 5px; }\n  .recipe-index ::-webkit-scrollbar-track {\n    border: 7px solid black; }\n  .recipe-index ::-webkit-scrollbar-thumb {\n    background: red;\n    border-radius: 2px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipe_index/recipe_index_item.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/recipe_index/recipe_index_item.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".recipe-index-item {\n  height: 250px;\n  width: 269px;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 1px 1px 6px 1px #dddada;\n  margin: 14px;\n  margin-bottom: 0;\n  font-family: Open Sans;\n  font-weight: 400;\n  font-size: 12px; }\n  .recipe-index-item .title-time {\n    display: flex;\n    flex-direction: row; }\n  .recipe-index-item .icon-box {\n    display: flex;\n    flex-direction: row;\n    background-color: #dff2f7;\n    border-radius: 5px;\n    font-size: 11px;\n    justify-content: space-around; }\n    .recipe-index-item .icon-box .vegan {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n    .recipe-index-item .icon-box .leaf {\n      width: 20px;\n      height: 20px; }\n\n.recipe-index-item:hover {\n  cursor: pointer; }\n\n.recipe-index-item-remove {\n  position: relative;\n  top: calc(0%);\n  left: calc(100% - 5px);\n  font-size: 14px;\n  height: 14px;\n  width: 14px; }\n\n.recipe-index-item-remove:hover {\n  cursor: pointer; }\n\n.recipe-index-item-name {\n  width: 100%;\n  overflow-wrap: normal;\n  padding: 14px 9px;\n  color: #1d1a1a; }\n\n.make {\n  color: #5c5c5c;\n  display: block;\n  width: 25px;\n  height: 22px;\n  border: 1px solid #787676;\n  border-radius: 50%;\n  position: relative;\n  margin-top: 8px;\n  margin-right: 10px; }\n  .make p {\n    position: absolute;\n    top: 20%;\n    left: 14%; }\n\n.recipe-index-item-image {\n  height: 150px;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 5px;\n  overflow: hidden; }\n  .recipe-index-item-image img {\n    width: 100%;\n    height: 150px; }\n\n.recipe-index-item-number {\n  border: 1px solid gray;\n  border-radius: 3px;\n  font-size: 16px;\n  width: 16px;\n  text-align: center;\n  margin: 5px;\n  margin-left: 8px; }\n\n.recipe-index-item-add {\n  height: 20%;\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.recipe-index-item-add:hover {\n  cursor: pointer; }\n\n.loading-cont {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 300px;\n  padding-top: 50px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center; }\n\n.loading-img-cont {\n  height: 300px;\n  width: 300px;\n  position: relative;\n  top: 10%; }\n\n.loading-img {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/main_filter.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/recipes_index/main_filter.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".filter-cont {\n  width: 900px;\n  min-height: 70px;\n  background-color: white;\n  border: 1px solid #e9e8e8;\n  box-shadow: 1px 1px 5px 1px #e9e8e8;\n  border-radius: 3px;\n  margin: 10px auto;\n  margin-top: 20px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative; }\n  .filter-cont .filter-top {\n    display: flex;\n    flex-direction: row; }\n  .filter-cont .filter-header {\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    border-radius: 13px;\n    padding: 9px; }\n  .filter-cont .filter-text-cont {\n    border-radius: 11px;\n    background: #DFF2F7;\n    width: 300px;\n    height: 22x;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    box-shadow: 1px 1px 2px 1px #b7d6ee; }\n    .filter-cont .filter-text-cont .filter-text-input {\n      width: 230px;\n      height: 30px;\n      outline: none;\n      background: inherit;\n      border: none;\n      padding-left: 10px; }\n    .filter-cont .filter-text-cont .filter-query-search {\n      width: 50px;\n      height: 30px;\n      background: inherit;\n      display: flex;\n      justify-content: center; }\n      .filter-cont .filter-text-cont .filter-query-search img {\n        width: 20px;\n        height: 20px;\n        align-self: center; }\n  .filter-cont .filter-text-button {\n    height: 44px;\n    width: 50px;\n    border-radius: 2px;\n    background: white;\n    box-shadow: 1px 1px 2px 1px #d8d5d5;\n    display: flex;\n    justify-content: center; }\n    .filter-cont .filter-text-button img {\n      width: 35px;\n      height: 35px;\n      margin-top: 3px; }\n  .filter-cont .filter-text-button:hover {\n    cursor: pointer;\n    background: #cbcdcd; }\n  .filter-cont .filter-param-cont {\n    width: 400px;\n    height: 20px;\n    margin: auto 0px;\n    margin-left: 33px;\n    margin-right: 10px;\n    display: flex;\n    font-family: Open Sans;\n    font-size: 15px;\n    color: #767575;\n    justify-content: space-between; }\n    .filter-cont .filter-param-cont .filter-ing-item {\n      height: 30px;\n      width: 70px;\n      background: pink;\n      margin: 5px;\n      position: relative; }\n    .filter-cont .filter-param-cont .filter-param-dropdown {\n      position: relative; }\n      .filter-cont .filter-param-cont .filter-param-dropdown .filter-dd-cont {\n        position: absolute;\n        left: 0;\n        top: 18px;\n        width: 200px;\n        height: 50px;\n        z-index: 2;\n        background-color: purple;\n        border: 1px solid black; }\n        .filter-cont .filter-param-cont .filter-param-dropdown .filter-dd-cont .filter-dd-item {\n          background-color: white;\n          border: 1px solid black;\n          display: flex;\n          align-items: center; }\n        .filter-cont .filter-param-cont .filter-param-dropdown .filter-dd-cont .filter-dd-item:hover {\n          background-color: lightblue; }\n  .filter-cont .filter-bot {\n    height: 50px;\n    width: 400px;\n    background: pink;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: flex; }\n  .filter-cont .filter-bot-cuisine {\n    height: 70px;\n    width: 780px;\n    margin: 10px 0px;\n    background: #f1eaf7;\n    padding-top: 8px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    position: relative; }\n\n.filter-dd-item1 {\n  display: flex;\n  background-color: inherit;\n  align-items: center;\n  margin: 0 10px;\n  height: 20px;\n  width: 120px;\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 0 5px;\n  font-size: 13px;\n  font-family: Open Sans; }\n\n.filter-dd-item1:hover {\n  font-weight: bold;\n  cursor: pointer; }\n\n.filter-dd-item2 {\n  font-family: Open Sans;\n  font-size: 14px;\n  background-color: inherit;\n  text-align: center;\n  margin: 0 10px;\n  height: 20px;\n  width: 90px;\n  -webkit-user-select: none;\n          user-select: none; }\n\n.filter-dd-item2:hover {\n  cursor: pointer;\n  font-weight: bold; }\n\n.filter-x {\n  position: absolute;\n  top: 0;\n  right: 10px; }\n\n.filter-x:hover {\n  cursor: pointer;\n  color: white; }\n\n.filter-bot-diet {\n  height: 70px;\n  width: 780px;\n  background: #f1eaf7;\n  padding-top: 8px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  position: relative;\n  margin: 10px 0px; }\n\n.filter-bot-allergies {\n  height: 70px;\n  width: 850px;\n  margin: 10px 0px;\n  padding-top: 8px;\n  background: #f1eaf7;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  position: relative; }\n\n.filter-slider {\n  width: 355px;\n  display: flex;\n  flex-direction: row;\n  padding-left: 18px;\n  font-family: Open Sans;\n  font-size: 14px; }\n  .filter-slider :first-child {\n    width: 300px; }\n\n.filter-nutr-slider {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  width: 70%;\n  background: #b583b2;\n  outline: none;\n  opacity: 0.7;\n  height: 1px;\n  transition: opacity .2s; }\n\n.filter-nutr-slider {\n  opacity: 1; }\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: 1px solid #5b9de8;\n  height: 10px;\n  width: 16px;\n  border-radius: 3px;\n  background: #ade7f9;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #e6a4fc, 0px 0px 1px #d7a1f2; }\n\ninput[type=number] {\n  background: inherit;\n  border: none;\n  margin-left: 11px;\n  width: 50px; }\n\n::placeholder {\n  color: #7babe4;\n  font-size: 17px;\n  padding-left: 10px; }\n\n.toggle .react-toggle--checked {\n  background-color: red; }\n\n.slider-second {\n  display: flex;\n  width: 140px; }\n  .slider-second input[type=range] {\n    align-self: center; }\n\n.toggle-span {\n  background: #F8F8F8;\n  color: #575656;\n  font-size: 13px;\n  letter-spacing: 1px;\n  border: 1px solid #d7d5d5;\n  position: relative;\n  top: -53px;\n  display: none;\n  white-space: nowrap;\n  align-self: center;\n  padding: 10px;\n  border-radius: 5px; }\n\n.filter-text-button {\n  margin: 10px;\n  margin-left: 20px;\n  margin-right: 0px;\n  float: left;\n  position: relative;\n  cursor: pointer; }\n\n.filter-text-button:hover .toggle-span {\n  display: block; }\n\n.filter-text-button:hover img {\n  position: absolute;\n  top: 0px; }\n\n.fridge-add {\n  display: flex;\n  justify-content: flex-end !important; }\n  .fridge-add .filter-dd-item1 {\n    width: max-content; }\n\n.filter-bot-allergies {\n  height: 70px;\n  width: 850px;\n  margin: 10px 0px;\n  padding-top: 8px;\n  background: #f1eaf7;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  position: relative; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/recipe_show.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/recipes_index/recipe_show.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cont-cont {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 10px; }\n  .cont-cont .recipe-show-cont {\n    display: flex;\n    width: 710px;\n    height: 550px;\n    padding: 20px;\n    border: 1px solid lightgray;\n    justify-content: center;\n    border-radius: 10px; }\n    .cont-cont .recipe-show-cont .recipe-show-ls {\n      padding: 5px;\n      display: flex;\n      width: 320px;\n      flex-direction: column;\n      justify-content: space-between; }\n      .cont-cont .recipe-show-cont .recipe-show-ls .recipe-show-photo-cont {\n        height: 265px;\n        width: 308px;\n        padding-top: 10px; }\n        .cont-cont .recipe-show-cont .recipe-show-ls .recipe-show-photo-cont .recipe-show-photo {\n          height: 100%;\n          width: 100%;\n          border-radius: 23px;\n          box-shadow: 0px 5px 10px 1px black; }\n      .cont-cont .recipe-show-cont .recipe-show-ls .rs-icon-cont {\n        display: flex;\n        width: 70%;\n        margin: 0px auto;\n        justify-content: space-evenly; }\n        .cont-cont .recipe-show-cont .recipe-show-ls .rs-icon-cont .rs-icon {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 40px;\n          width: 40px;\n          border-radius: 100%;\n          text-align: center;\n          border: 2px solid gray;\n          color: gray;\n          margin-right: 10px; }\n      .cont-cont .recipe-show-cont .recipe-show-ls .chart-cont {\n        height: 220px;\n        width: 250px;\n        display: flex;\n        flex-direction: column;\n        margin: 0 auto; }\n        .cont-cont .recipe-show-cont .recipe-show-ls .chart-cont :first-child {\n          font-family: EB Garamond;\n          letter-spacing: 1px; }\n  .cont-cont .recipe-show-ing-list {\n    list-style: none;\n    overflow-y: auto;\n    width: 92%;\n    margin: 0 auto;\n    font-family: EB Garamond;\n    padding-left: 13px;\n    padding-bottom: 10px;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black; }\n  .cont-cont .rs-main-cont {\n    width: 60%;\n    margin: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start; }\n  .cont-cont .modal-text-contain {\n    padding-left: 10px; }\n    .cont-cont .modal-text-contain .rs-title {\n      font-size: 29px;\n      font-family: EB Garamond;\n      letter-spacing: 1px;\n      line-height: 39px;\n      padding: 5px 5px 0px 0px; }\n    .cont-cont .modal-text-contain .rs-link {\n      display: flex;\n      justify-content: flex-start;\n      font-family: EB Garamond;\n      font-size: 15px;\n      line-height: 28px;\n      margin-bottom: 8px; }\n  .cont-cont .list-title {\n    font-size: 19px;\n    padding: 10px 0px; }\n  .cont-cont .rs-li-item {\n    margin: 7px 0;\n    display: flex;\n    align-items: center;\n    letter-spacing: 2.5px;\n    font-family: EB Garamond;\n    color: black !important;\n    line-height: 24px; }\n  .cont-cont .rs-li-item-pic-cont {\n    height: 20px;\n    width: 20px;\n    margin-right: 10px; }\n  .cont-cont .rs-l-i-p {\n    height: 100%;\n    width: 100%; }\n  .cont-cont .chart-test {\n    margin: 5px;\n    height: 6px;\n    width: 95px;\n    text-align: right;\n    position: relative; }\n  .cont-cont .bar-graph-cont {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100px;\n    height: 35px;\n    margin: 5px 23px;\n    font-family: Open Sans;\n    font-size: 14px;\n    padding-left: 10px; }\n  .cont-cont .bar-chart-cont {\n    height: 250px;\n    width: 200px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: 0 auto; }\n\n.bar-text {\n  position: absolute;\n  top: -20px;\n  right: -46px;\n  font-size: 13px;\n  padding: 10px 6px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/toggle.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/recipes_index/toggle.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".react-toggle {\n  touch-action: pan-x;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent; }\n\n.react-toggle-screenreader-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.react-toggle--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  transition: opacity 0.25s; }\n\n.react-toggle-track {\n  width: 25px;\n  height: 12px;\n  padding: 0;\n  border-radius: 15px;\n  background-color: #4D4D4D;\n  transition: all 0.2s ease; }\n\n.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #000000; }\n\n.react-toggle--checked .react-toggle-track {\n  background-color: skyblue; }\n\n.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: lightblue; }\n\n.react-toggle-track-check {\n  position: absolute;\n  width: 7px;\n  height: 5px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  left: 4px;\n  opacity: 0;\n  transition: opacity 0.25s ease; }\n\n.react-toggle--checked .react-toggle-track-check {\n  opacity: 1;\n  transition: opacity 0.25s ease; }\n\n.react-toggle-track-x {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  right: 5px;\n  opacity: 1;\n  transition: opacity 0.25s ease; }\n\n.react-toggle--checked .react-toggle-track-x {\n  opacity: 0; }\n\n.react-toggle-thumb {\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 11px;\n  height: 11px;\n  border: 1px solid #4D4D4D;\n  border-radius: 50%;\n  background-color: #FAFAFA;\n  box-sizing: border-box;\n  transition: all 0.25s ease; }\n\n.react-toggle--checked .react-toggle-thumb {\n  left: 13px;\n  border-color: #19AB27; }\n\n.react-toggle--focus .react-toggle-thumb {\n  box-shadow: 0px 0px 1px 1.5px #0099E0; }\n\n.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {\n  box-shadow: 0px 0px 2.5px 2.5px #0099E0; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_cart.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/weekly_cart/weekly_cart.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".weekly-cart {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.weekly-cart-header {\n  height: 5%;\n  width: 100%;\n  font-size: 30px;\n  line-height: 40px;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 20px; }\n\n.weekly-cart-days {\n  height: 45%;\n  width: 80%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-x: scroll;\n  border: 1px solid black;\n  border-radius: 5px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_cart_day.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/weekly_cart/weekly_cart_day.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".weekly-cart-days {\n  min-height: 450px;\n  background-color: #f7f6f6; }\n\n.weekly-cart-day {\n  width: 100%;\n  height: calc(100% - 50px);\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-left: 1px solid #aca9a9;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.weekly-cart-header-date {\n  height: 30px;\n  margin: 0px 12px;\n  line-height: 30px;\n  text-align: center;\n  vertical-align: middle; }\n\n.weekly-cart-date {\n  min-width: 300px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\n.weekly-cart-item {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 161px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  background: #e0eecf;\n  box-shadow: 1px 1px 7px 1px #d0cece;\n  overflow: hidden; }\n\n.weekly-cart-item-time {\n  width: max-content;\n  font-size: 13px;\n  font-weight: 400;\n  padding: 12px 10px;\n  padding-left: 18px;\n  padding-bottom: 8px;\n  background: white;\n  background: inherit; }\n\n.weekly-cart-item-info {\n  width: 94%;\n  height: 78px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: whitesmoke;\n  box-shadow: 1px 1px 8px 1px #c6c4c4;\n  margin: 0 auto;\n  font-family: Open Sans;\n  font-size: 15px; }\n  .weekly-cart-item-info .weekly-cart-item-info-left {\n    width: 70%; }\n  .weekly-cart-item-info .weekly-cart-image {\n    width: 30%;\n    height: 100%;\n    display: flex;\n    justify-content: center; }\n    .weekly-cart-item-info .weekly-cart-image .weekly-cart-item-info-image {\n      width: 100%;\n      height: 100%;\n      box-shadow: 1px 1px 5px 1px #b6b5b5;\n      opacity: 90%;\n      border-radius: 10px;\n      object-fit: cover;\n      align-self: center; }\n  .weekly-cart-item-info .weekly-cart-image:hover {\n    cursor: pointer; }\n  .weekly-cart-item-info .weekly-cart-item-info-text {\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n    margin-top: 10px;\n    background: inherit;\n    height: 100%; }\n\n.weekly-cart-item-name {\n  width: 100%;\n  height: 20px;\n  background: inherit;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 20px;\n  vertical-align: middle;\n  padding-top: 3px;\n  padding-left: 10px; }\n\n.weekly-cart-item-buttons {\n  display: flex;\n  justify-content: flex-start;\n  padding-top: 10px;\n  padding-left: 10px; }\n\n.weekly-cart-item-remove, .weekly-cart-item-eat {\n  width: auto;\n  line-height: 12px;\n  font-size: 12px;\n  border-bottom: 1px solid #f7f6f6;\n  padding: 0 1px;\n  padding-bottom: 2px;\n  margin-right: 10px;\n  transition: 0.3s; }\n\n.weekly-cart-item-remove:hover {\n  cursor: pointer;\n  border-bottom: 1px solid maroon; }\n\n.weekly-cart-item-eat:hover {\n  cursor: pointer;\n  border-bottom: 1px solid #03a003; }\n\n.weekly-cart-item-main {\n  height: 120px;\n  width: 100%;\n  background: inherit; }\n  .weekly-cart-item-main .weekly-cart-item-bottom {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    background: inherit;\n    width: 275px;\n    font-size: 12px;\n    margin-left: 20px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_macro.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/components/stylesheets/weekly_cart/weekly_macro.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".weekly-macro-cont {\n  display: flex;\n  width: 500px; }\n", ""]);



/***/ }),

/***/ "./src/actions/cart_actions.js":
/*!*************************************!*\
  !*** ./src/actions/cart_actions.js ***!
  \*************************************/
/*! exports provided: ADD_RECIPE, REMOVE_RECIPE, ADD_DATE, SWITCH_DATE, RECEIVE_CART, RECEIVE_CART_ERRORS, addRecipe, removeRecipe, addDate, switchDate, getCart, addCartDate, addCartMeal, removeCartMeal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECIPE", function() { return ADD_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_RECIPE", function() { return REMOVE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DATE", function() { return ADD_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_DATE", function() { return SWITCH_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CART", function() { return RECEIVE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CART_ERRORS", function() { return RECEIVE_CART_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRecipe", function() { return addRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRecipe", function() { return removeRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDate", function() { return addDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchDate", function() { return switchDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartDate", function() { return addCartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartMeal", function() { return addCartMeal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartMeal", function() { return removeCartMeal; });
/* harmony import */ var _util_cart_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/cart_api_util */ "./src/util/cart_api_util.js");

const ADD_RECIPE = "ADD_RECIPE";
const REMOVE_RECIPE = "REMOVE_RECIPE";
const ADD_DATE = "ADD_DATE";
const SWITCH_DATE = "SWITCH_DATE";
const RECEIVE_CART = "RECEIVE_CART";
const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";
const addRecipe = ({
  date,
  time,
  recipeId
}) => ({
  type: ADD_RECIPE,
  date,
  time,
  recipeId
});
const removeRecipe = ({
  date,
  time
}) => ({
  type: REMOVE_RECIPE,
  date,
  time
});
const addDate = ({
  date
}) => {
  return {
    type: ADD_DATE,
    date
  };
};
const switchDate = date => ({
  type: SWITCH_DATE,
  date
});

const receiveCart = payload => ({
  type: RECEIVE_CART,
  cart: payload.data
});

const receiveCartErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors
});

const getCart = userId => dispatch => _util_cart_api_util__WEBPACK_IMPORTED_MODULE_0__["getCart"](userId).then(payload => dispatch(receiveCart(payload)), errors => dispatch(receiveCartErrors(errors)));
const addCartDate = (cartId, dateInfo) => dispatch => _util_cart_api_util__WEBPACK_IMPORTED_MODULE_0__["addCartDate"](cartId, dateInfo).then(() => dispatch(addDate(dateInfo)), errors => dispatch(receiveCartErrors(errors)));
const addCartMeal = (cartId, mealInfo) => dispatch => _util_cart_api_util__WEBPACK_IMPORTED_MODULE_0__["setCartMeal"](cartId, mealInfo).then(() => dispatch(addRecipe(mealInfo)), errors => dispatch(receiveCartErrors(errors)));
const removeCartMeal = (cartId, mealInfo) => dispatch => _util_cart_api_util__WEBPACK_IMPORTED_MODULE_0__["setCartMeal"](cartId, mealInfo).then(() => dispatch(removeRecipe(mealInfo)), errors => dispatch(receiveCartErrors(errors)));

/***/ }),

/***/ "./src/actions/fridge_actions.js":
/*!***************************************!*\
  !*** ./src/actions/fridge_actions.js ***!
  \***************************************/
/*! exports provided: RECEIVE_FRIDGE, RECEIVE_FRIDGE_INGREDIENT, REMOVE_FRIDGE_INGREDIENT, fetchFridge, addFridgeIngredient, modifyIngredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_FRIDGE", function() { return RECEIVE_FRIDGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_FRIDGE_INGREDIENT", function() { return RECEIVE_FRIDGE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FRIDGE_INGREDIENT", function() { return REMOVE_FRIDGE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFridge", function() { return fetchFridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFridgeIngredient", function() { return addFridgeIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyIngredient", function() { return modifyIngredient; });
/* harmony import */ var _util_fridge_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/fridge_api_util */ "./src/util/fridge_api_util.js");

const RECEIVE_FRIDGE = 'RECIEVE_FRIDGE';
const RECEIVE_FRIDGE_INGREDIENT = 'RECEIVE_FRIDGE_INGREDIENT';
const REMOVE_FRIDGE_INGREDIENT = 'REMOVE_FRIDGE_INGREDIENT';

const receiveFridge = fridge => ({
  type: RECEIVE_FRIDGE,
  fridge
});

const receiveFridgeIngredient = ingredient => ({
  type: RECEIVE_FRIDGE_INGREDIENT,
  ingredient: ingredient.data
});

const removeFridgeIngredient = id => ({
  type: REMOVE_FRIDGE_INGREDIENT,
  id
});

const fetchFridge = userId => dispatch => _util_fridge_api_util__WEBPACK_IMPORTED_MODULE_0__["fetchFridge"](userId).then(({
  data
}) => dispatch(receiveFridge(data)));
const addFridgeIngredient = (userId, ingredient, amount) => dispatch => _util_fridge_api_util__WEBPACK_IMPORTED_MODULE_0__["addFridgeIngredient"](userId, ingredient, amount).then(ingredient => dispatch(receiveFridgeIngredient(ingredient)));
const modifyIngredient = (userId, ingredient, amount) => dispatch => _util_fridge_api_util__WEBPACK_IMPORTED_MODULE_0__["modifyIngredient"](userId, ingredient, amount).then(res => {
  if (res.data === "") {
    dispatch(removeFridgeIngredient(ingredient.id));
  } else {
    dispatch(receiveFridgeIngredient(res));
  }
});

/***/ }),

/***/ "./src/actions/ingredient_actions.js":
/*!*******************************************!*\
  !*** ./src/actions/ingredient_actions.js ***!
  \*******************************************/
/*! exports provided: searchIngredientByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchIngredientByName", function() { return searchIngredientByName; });
/* harmony import */ var _util_ingredient_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ingredient_api_util */ "./src/util/ingredient_api_util.js");

const searchIngredientByName = query => _util_ingredient_api_util__WEBPACK_IMPORTED_MODULE_0__["searchIngredientByName"](query);

/***/ }),

/***/ "./src/actions/loading_actions.js":
/*!****************************************!*\
  !*** ./src/actions/loading_actions.js ***!
  \****************************************/
/*! exports provided: START_LOAD, STOP_LOAD, startLoad, stopLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_LOAD", function() { return START_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LOAD", function() { return STOP_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLoad", function() { return startLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLoad", function() { return stopLoad; });
const START_LOAD = "START_LOAD";
const STOP_LOAD = "STOP_LOAD";
const startLoad = load => ({
  type: START_LOAD,
  load
});
const stopLoad = () => ({
  type: STOP_LOAD
});

/***/ }),

/***/ "./src/actions/modal_actions.js":
/*!**************************************!*\
  !*** ./src/actions/modal_actions.js ***!
  \**************************************/
/*! exports provided: OPEN_MODAL, CLOSE_MODAL, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL", function() { return OPEN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MODAL", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const openModal = (modal, other) => {
  return {
    type: OPEN_MODAL,
    modal: {
      type: modal,
      other
    }
  };
};
const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

/***/ }),

/***/ "./src/actions/profile_actions.js":
/*!****************************************!*\
  !*** ./src/actions/profile_actions.js ***!
  \****************************************/
/*! exports provided: RECEIVE_USER, updateUser, fetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USER", function() { return RECEIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony import */ var _util_profile_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/profile_api_util */ "./src/util/profile_api_util.js");

const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const updateUser = user => dispatch => _util_profile_api_util__WEBPACK_IMPORTED_MODULE_0__["updateUser"](user).then(({
  data
}) => dispatch(receiveUser(data)));
const fetchUser = id => dispatch => _util_profile_api_util__WEBPACK_IMPORTED_MODULE_0__["fetchUser"](id).then(({
  data
}) => dispatch(receiveUser(data)));

/***/ }),

/***/ "./src/actions/recipe_actions.js":
/*!***************************************!*\
  !*** ./src/actions/recipe_actions.js ***!
  \***************************************/
/*! exports provided: RECEIVE_RECIPE, RECEIVE_RECIPES, RECEIVE_RECIPE_ERRORS, ROTATE_RECIPE, rotateRecipe, getRecipeDB, getRecipeById, getRandomRecipe, getRandomRecipes, getRecipesByIngredients, getRecipesByName, complexRecipeSearch, searchRecipeByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_RECIPE", function() { return RECEIVE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_RECIPES", function() { return RECEIVE_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_RECIPE_ERRORS", function() { return RECEIVE_RECIPE_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATE_RECIPE", function() { return ROTATE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRecipe", function() { return rotateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipeDB", function() { return getRecipeDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipeById", function() { return getRecipeById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomRecipe", function() { return getRandomRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomRecipes", function() { return getRandomRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipesByIngredients", function() { return getRecipesByIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipesByName", function() { return getRecipesByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complexRecipeSearch", function() { return complexRecipeSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRecipeByName", function() { return searchRecipeByName; });
/* harmony import */ var _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/recipe_api_util */ "./src/util/recipe_api_util.js");
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors/selectors */ "./src/selectors/selectors.js");
/* harmony import */ var _loading_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading_actions */ "./src/actions/loading_actions.js");



const RECEIVE_RECIPE = "RECEIVE_RECIPE";
const RECEIVE_RECIPES = "RECEIVE_RECIPES";
const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";
const ROTATE_RECIPE = "ROTATE_RECIPE"; // receives an aray of recipes

const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes: Object(_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__["recipeArrayToObject"])(recipes)
}); // receives a single recipe


const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

const receiveRecipeErrors = errors => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors
});

const rotateRecipe = recipe_idx => ({
  type: ROTATE_RECIPE,
  recipe_idx
});
const getRecipeDB = recipeId => dispatch => _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getRecipe"](recipeId).then(({
  data
}) => dispatch(receiveRecipe(data)), errors => dispatch(receiveRecipeErrors(errors)));
const getRecipeById = recipeId => dispatch => _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getRecipeById"](recipeId).then(({
  data
}) => {
  let apiData = data;
  _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getRecipe"](apiData.id).then(({
    data
  }) => {
    apiData = data;
    dispatch(receiveRecipes([data]));
  }).catch(() => {
    _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["postRecipeId"](apiData).then(({
      data
    }) => {
      apiData = data;
      dispatch(receiveRecipes([apiData]));
    });
  });
}, errors => dispatch(receiveRecipeErrors(errors)));

const getMultipleRecipes = recipeIds => dispatch => _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getMultipleRecipes"](recipeIds).then(({
  data
}) => {
  let apiData = data;
  let results = 0;

  for (let i = 0; i < apiData.length; i++) {
    results++;
    _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getRecipe"](apiData[i].id).then(({
      data
    }) => {
      results--;
      apiData[i] = data; // if (results === 0) dispatch(receiveRecipes(apiData))
      //   .then( ()=> dispatch(stopLoad()));    

      if (results === 0) {
        dispatch(receiveRecipes(apiData));
        dispatch(Object(_loading_actions__WEBPACK_IMPORTED_MODULE_2__["stopLoad"])());
      }
    }).catch(() => {
      _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["postRecipeId"](apiData[i]).then(payload => {
        results--;
        apiData[i] = payload.data; // if (results === 0) dispatch(receiveRecipes(apiData))
        //   .then(() => dispatch(stopLoad()));

        if (results === 0) {
          dispatch(receiveRecipes(apiData));
          dispatch(Object(_loading_actions__WEBPACK_IMPORTED_MODULE_2__["stopLoad"])());
        }
      });
    });
  }
}, errors => dispatch(receiveRecipeErrors(errors)));

const getRandomRecipe = () => dispatch => _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getRandomRecipe"]().then(({
  data
}) => {
  let recipeId = data.recipes[0].id;
  dispatch(getRecipeById(recipeId));
}, errors => dispatch(receiveRecipeErrors(errors))); // Nested structure handles the issue of returned recipes not having
// defailed nutrition information.

const getRandomRecipes = number => dispatch => _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getRandomRecipes"](number).then(({
  data
}) => {
  let recipeIds = data.recipes.map(recipe => recipe.id);
  dispatch(getMultipleRecipes(recipeIds));
}, errors => dispatch(receiveRecipeErrors(errors)));
const getRecipesByIngredients = (ingredients, limit, ranking, ignorePantry) => dispatch => _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getRecipesByIngredients"](ingredients, limit, ranking, ignorePantry).then(({
  data
}) => {
  let recipeIds = data.map(recipe => recipe.id);
  dispatch(getMultipleRecipes(recipeIds));
}, errors => dispatch(receiveRecipeErrors(errors)));
const getRecipesByName = (name, limit = 5) => dispatch => _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["searchRecipeByName"](name, limit).then(({
  data
}) => {
  let recipeIds = data.map(recipe => recipe.id);
  dispatch(getMultipleRecipes(recipeIds));
}, errors => dispatch(receiveRecipeErrors(errors))); // TAKES AN OPTIONS HASH

const complexRecipeSearch = ({
  search,
  cuisine,
  diet,
  intolerances,
  sort,
  sortDirection,
  minCalories,
  maxCalories,
  maxFat,
  maxCarbs,
  minProtein,
  ignorePantry,
  limit
}) => dispatch => {
  _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["complexRecipeSearch"]({
    search,
    cuisine,
    diet,
    intolerances,
    sort,
    sortDirection,
    minCalories,
    maxCalories,
    maxFat,
    maxCarbs,
    minProtein,
    ignorePantry,
    limit
  }).then(({
    data
  }) => {
    let apiData = data.results;
    let results = 0;

    for (let i = 0; i < apiData.length; i++) {
      results++;
      _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["getRecipe"](apiData[i].id).then(({
        data
      }) => {
        results--;
        apiData[i] = data;

        if (results === 0) {
          dispatch(receiveRecipes(apiData));
          dispatch(Object(_loading_actions__WEBPACK_IMPORTED_MODULE_2__["stopLoad"])());
        }
      }).catch(() => {
        _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["postRecipeComplex"](apiData[i]).then(({
          data
        }) => {
          results--;
          apiData[i] = data;

          if (results === 0) {
            dispatch(receiveRecipes(apiData));
            dispatch(Object(_loading_actions__WEBPACK_IMPORTED_MODULE_2__["stopLoad"])());
          }
        });
      });
    }
  }, errors => dispatch(receiveRecipeErrors(errors)));
};
const searchRecipeByName = (name, limit = 5) => dispatch => _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_0__["searchRecipeByName"](name, limit) // .then(
//   ({ data }) = dispatch(receiveRecipeNames([ data ])), // an action for pulling in search data so you can search a recipe by name and get the show page
//   errors => dispatch(receiveRecipeErrors(errors))
// )
;

/***/ }),

/***/ "./src/actions/session_actions.js":
/*!****************************************!*\
  !*** ./src/actions/session_actions.js ***!
  \****************************************/
/*! exports provided: RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, RECEIVE_USER_LOGOUT, receiveCurrentUser, receiveErrors, logoutUser, signup, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CURRENT_USER", function() { return RECEIVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SESSION_ERRORS", function() { return RECEIVE_SESSION_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USER_LOGOUT", function() { return RECEIVE_USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveCurrentUser", function() { return receiveCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveErrors", function() { return receiveErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/session_api_util */ "./src/util/session_api_util.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "../node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);


const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});
const signup = user => dispatch => _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["signup"](user).then(res => {
  const token = res.data.token;
  localStorage.setItem("jwtToken", token);
  _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["setAuthToken"](token);
  const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
  dispatch(receiveCurrentUser(decoded));
}).catch(err => dispatch(receiveErrors(err.response.data)));
const login = user => dispatch => _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["login"](user).then(res => {
  const token = res.data.token;
  localStorage.setItem("jwtToken", token);
  _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["setAuthToken"](token);
  const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
  dispatch(receiveCurrentUser(decoded));
}).catch(err => dispatch(receiveErrors(err.response.data)));
const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["setAuthToken"](false);
  dispatch(logoutUser());
};

/***/ }),

/***/ "./src/actions/side_actions.js":
/*!*************************************!*\
  !*** ./src/actions/side_actions.js ***!
  \*************************************/
/*! exports provided: OPEN_SIDE, CLOSE_SIDE, HOVER_MASTER_LIST, openSide, closeSide, hoverMasterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SIDE", function() { return OPEN_SIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SIDE", function() { return CLOSE_SIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOVER_MASTER_LIST", function() { return HOVER_MASTER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSide", function() { return openSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSide", function() { return closeSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoverMasterList", function() { return hoverMasterList; });
const OPEN_SIDE = "OPEN_SIDE";
const CLOSE_SIDE = "CLOSE_SIDE";
const HOVER_MASTER_LIST = "HOVER_MASTER_LIST";
const openSide = side => ({
  type: OPEN_SIDE,
  side
});
const closeSide = () => ({
  type: CLOSE_SIDE
});
const hoverMasterList = master_list => ({
  type: HOVER_MASTER_LIST,
  master_list
});

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/route_util */ "./src/util/route_util.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _recipes_yj_recipe_show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes_yj/recipe_show */ "./src/components/recipes_yj/recipe_show.jsx");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal */ "./src/components/modal/modal.jsx");
/* harmony import */ var _modal_side__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/side */ "./src/components/modal/side.jsx");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main */ "./src/components/main/main.js");
/* harmony import */ var _userform_login_form_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userform/login_form_container */ "./src/components/userform/login_form_container.js");
/* harmony import */ var _userform_user_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userform/user_form */ "./src/components/userform/user_form.js");
/* harmony import */ var _recipes_yj_main_filter_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes_yj/main_filter_container */ "./src/components/recipes_yj/main_filter_container.js");
/* harmony import */ var _fridge_fridge_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fridge/fridge_container */ "./src/components/fridge/fridge_container.js");
/* harmony import */ var _recipe_index_recipe_index_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipe_index/recipe_index_container */ "./src/components/recipe_index/recipe_index_container.js");
/* harmony import */ var _main_index_main_index_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main_index/main_index_container */ "./src/components/main_index/main_index_container.js");
/* harmony import */ var _profile_user_profile_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/user_profile_container */ "./src/components/profile/user_profile_container.js");
/* harmony import */ var _cart_weekly_weekly_cart_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart_weekly/weekly_cart_container */ "./src/components/cart_weekly/weekly_cart_container.js");
/* harmony import */ var _stylesheets_App_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stylesheets/App.scss */ "./src/components/stylesheets/App.scss");
/* harmony import */ var _stylesheets_App_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_App_scss__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/app.js";

















const App = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal_side__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/recipeshow",
  component: _recipes_yj_recipe_show__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/filter",
  component: _recipes_yj_main_filter_container__WEBPACK_IMPORTED_MODULE_9__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/",
  component: _main_main__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["AuthRoute"], {
  exact: true,
  path: "/signup",
  component: _userform_user_form__WEBPACK_IMPORTED_MODULE_8__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["AuthRoute"], {
  exact: true,
  path: "/login",
  component: _userform_login_form_container__WEBPACK_IMPORTED_MODULE_7__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["ProtectedRoute"], {
  exact: true,
  path: "/fridge",
  component: _fridge_fridge_container__WEBPACK_IMPORTED_MODULE_10__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["ProtectedRoute"], {
  exact: true,
  path: "/index",
  component: _main_index_main_index_container__WEBPACK_IMPORTED_MODULE_12__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["ProtectedRoute"], {
  exact: true,
  path: "/profile/",
  component: _profile_user_profile_container__WEBPACK_IMPORTED_MODULE_13__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["ProtectedRoute"], {
  exact: true,
  path: "/weeklyCart",
  component: _cart_weekly_weekly_cart_container__WEBPACK_IMPORTED_MODULE_14__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
  to: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (App); // Install npm i material-uiy

/***/ }),

/***/ "./src/components/cart/cart.jsx":
/*!**************************************!*\
  !*** ./src/components/cart/cart.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart_item_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart_item_container */ "./src/components/cart/cart_item_container.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/cart/cart.jsx";



class Cart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.previousDate = this.previousDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
  }

  componentDidMount() {
    let _this$props = this.props,
        getCart = _this$props.getCart,
        userId = _this$props.userId;
    getCart(userId).then(() => this.setState({
      loading: false
    }));
  }

  previousDate() {
    const _this$props2 = this.props,
          currentDate = _this$props2.currentDate,
          dates = _this$props2.dates,
          switchDate = _this$props2.switchDate,
          addCartDate = _this$props2.addCartDate,
          cartId = _this$props2.cartId;
    let previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    let date = previousDate.toString().slice(0, 15);
    if (!dates[date]) addCartDate(cartId, {
      date: date
    });else switchDate(date);
  }

  nextDate() {
    const _this$props3 = this.props,
          currentDate = _this$props3.currentDate,
          dates = _this$props3.dates,
          switchDate = _this$props3.switchDate,
          addCartDate = _this$props3.addCartDate,
          cartId = _this$props3.cartId;
    let nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    let date = nextDate.toString().slice(0, 15); // MUST PREVENT CART FROM LOADING DURING THIS, OR FOR SOME REASON THE
    // COMPONENT WILL RE-RENDER BEFORE ADDCARTDATE EVEN HAPPENS

    if (!dates[date]) addCartDate(cartId, {
      date: date
    });else switchDate(date);
  } //TODO: MAKE CLICKING THE CURRENT DATE OPEN A CALENDAR, WHERE WE CAN SELECT A DATE TO GO TO
  //      WILL NEED TO POPULATE ALL DATES IN BETWEEN IF YOU SKIP DATES...SO WILL NEED TO ACCOUNT FOR THAT


  render() {
    if (this.state.loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    });
    const _this$props4 = this.props,
          dates = _this$props4.dates,
          currentDate = _this$props4.currentDate;
    const times = ["BREAKFAST", "LUNCH", "DINNER"];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-header-left",
      onClick: this.previousDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "<")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-header-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, currentDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-header-right",
      onClick: this.nextDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, ">")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, times.map((time, idx) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cart_item_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: idx,
        time: time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      });
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/components/cart/cart_container.js":
/*!***********************************************!*\
  !*** ./src/components/cart/cart_container.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ "./src/components/cart/cart.jsx");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/cart_actions */ "./src/actions/cart_actions.js");
/* harmony import */ var _stylesheets_cart_cart_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/cart/cart.scss */ "./src/components/stylesheets/cart/cart.scss");
/* harmony import */ var _stylesheets_cart_cart_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_cart_cart_scss__WEBPACK_IMPORTED_MODULE_3__);





const mapStateToProps = state => ({
  dates: state.entities.cart.dates,
  cartId: state.entities.cart.id,
  userId: state.session.user.id,
  currentDate: state.session.currentDate
});

const mapDispatchToProps = dispatch => ({
  getCart: userId => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["getCart"])(userId)),
  addCartDate: (cartId, dateInfo) => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["addCartDate"])(cartId, dateInfo)),
  switchDate: date => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["switchDate"])(date))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_cart__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/cart/cart_item.jsx":
/*!*******************************************!*\
  !*** ./src/components/cart/cart_item.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesheets_assets_cutlery_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/assets/cutlery.png */ "./src/components/stylesheets/assets/cutlery.png");
/* harmony import */ var _stylesheets_assets_cutlery_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_cutlery_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/cart/cart_item.jsx";



class CartItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.recipe = this.recipe.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  recipe() {
    let _this$props = this.props,
        date = _this$props.date,
        time = _this$props.time,
        cart = _this$props.cart,
        recipes = _this$props.recipes;
    let recipeId = null;
    if (cart.dates[date]) recipeId = cart.dates[date][time]; //just a precaution

    if (recipes[recipeId]) return recipes[recipeId];else if (recipeId) this.props.getRecipeDB(recipeId).then(() => recipes[recipeId]);
    return recipeId ? {
      id: null,
      title: "ERROR: Recipe Not Found",
      img: "..."
    } : null;
  } // TODO: Implement an undo button


  removeFromCart(e) {
    e.stopPropagation();
    const _this$props2 = this.props,
          date = _this$props2.date,
          time = _this$props2.time,
          cart = _this$props2.cart;
    this.props.removeCartMeal(cart.id, {
      date,
      time
    });
  }

  onDrop(e) {
    if (e.dataTransfer.getData("recipeId")) {
      let _this$props3 = this.props,
          cart = _this$props3.cart,
          date = _this$props3.date,
          time = _this$props3.time,
          userId = _this$props3.userId,
          addCartMeal = _this$props3.addCartMeal,
          getCart = _this$props3.getCart;
      addCartMeal(cart.id, {
        date,
        time,
        recipeId: parseInt(e.dataTransfer.getData("recipeId"))
      });
    } // .then(
    //   () => getCart(userId)  
    // )

    /* 
      precaution so re-render only happens AFTER the item is added to backend
       comment this in and comment out "ADD_RECIPE" in the cart_reducer to active
    */

  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleModal(recipe) {
    this.props.openModal(recipe);
  }

  render() {
    const time = this.props.time;
    let recipe = this.recipe();

    if (recipe && recipe.nutrition) {
      let timeC = recipe.readyInMinutes < 60 ? recipe.readyInMinutes.toString() + "m" : recipe.readyInMinutes < 180 ? Math.floor(recipe.readyInMinutes / 60).toString() + "h" : "3h+";
      let calorieC = Math.floor(recipe.nutrition[0].amount);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-item",
        onDragOver: this.onDragOver,
        onDrop: this.onDrop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-item-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-item-main",
        onClick: () => this.handleModal(recipe),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-item-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-item-info-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-item-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, recipe.title.slice(0, 20) + ".."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cart-item-info-image",
        src: recipe.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-item-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cuisine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cuisine-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _stylesheets_assets_cutlery_png__WEBPACK_IMPORTED_MODULE_1___default.a,
        className: "uten-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), recipe.cuisines && recipe.cuisines[0] ? recipe.cuisines[0] : "General"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, timeC), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, calorieC), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart-item-remove",
        onClick: this.removeFromCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "X")))));
    } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-item",
      onDragOver: this.onDragOver,
      onDrop: this.onDrop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-item-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-item-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./src/components/cart/cart_item_container.js":
/*!****************************************************!*\
  !*** ./src/components/cart/cart_item_container.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart_item */ "./src/components/cart/cart_item.jsx");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/cart_actions */ "./src/actions/cart_actions.js");
/* harmony import */ var _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/recipe_actions */ "./src/actions/recipe_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");






const mapStateToProps = (state, ownProps) => ({
  time: ownProps.time,
  date: state.session.currentDate,
  userId: state.session.user.id,
  cart: state.entities.cart,
  recipes: state.entities.recipes
});

const mapDispatchToProps = dispatch => ({
  addCartMeal: (cartId, mealInfo) => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["addCartMeal"])(cartId, mealInfo)),
  removeCartMeal: (cartId, mealInfo) => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["removeCartMeal"])(cartId, mealInfo)),
  getRecipeDB: recipeId => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_3__["getRecipeDB"])(recipeId)),
  getCart: userId => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["getCart"])(userId)),
  openModal: other => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["openModal"])('showRecipe', other))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_cart_item__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/cart_weekly/weekly_cart.jsx":
/*!****************************************************!*\
  !*** ./src/components/cart_weekly/weekly_cart.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav_navbar_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/navbar_container */ "./src/components/nav/navbar_container.js");
/* harmony import */ var _weekly_cart_day_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly_cart_day_container */ "./src/components/cart_weekly/weekly_cart_day_container.js");
/* harmony import */ var _weekly_macro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekly_macro */ "./src/components/cart_weekly/weekly_macro.jsx");
/* harmony import */ var _stylesheets_weekly_cart_weekly_cart_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheets/weekly_cart/weekly_cart.scss */ "./src/components/stylesheets/weekly_cart/weekly_cart.scss");
/* harmony import */ var _stylesheets_weekly_cart_weekly_cart_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_weekly_cart_weekly_cart_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/cart_weekly/weekly_cart.jsx";





const TIMES = ['BREAKFAST', 'LUNCH', 'DINNER']; // TODO: ON MOUNT LOADS ALL INFORMATION

class WeeklyCart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      fiber: 0
    };
    this.generateDates = this.generateDates.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.addMacros = this.addMacros.bind(this);
  } // generate an array of weekdates and fetch recipe info


  componentDidMount() {
    let _this$props = this.props,
        getCart = _this$props.getCart,
        user = _this$props.user,
        cart = _this$props.cart,
        fetchFridge = _this$props.fetchFridge,
        fetchUser = _this$props.fetchUser;
    fetchFridge(user.id).then(() => {
      if (!cart.dates) getCart(user.id).then(() => this.getRecipes());else this.getRecipes();
    });
    fetchUser(user.id);
  }

  componentDidUpdate() {
    let _this$props2 = this.props,
        getCart = _this$props2.getCart,
        user = _this$props2.user,
        cart = _this$props2.cart,
        fetchFridge = _this$props2.fetchFridge;
  } // Generates an array of dateStrings that represent the week's cart


  generateDates() {
    let currentDate = new Date();
    currentDate = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());
    let dateStrings = [currentDate.toDateString().slice(0, 15)];

    while (dateStrings.length < 7) {
      currentDate.setDate(currentDate.getDate() + 1);
      dateStrings.push(currentDate.toDateString().slice(0, 15));
    }

    return dateStrings;
  } // fetches all necessary recipes for a given week


  getRecipes() {
    let dates = this.generateDates();
    let _this$props3 = this.props,
        cart = _this$props3.cart,
        recipes = _this$props3.recipes,
        addCartDate = _this$props3.addCartDate,
        getRecipeDB = _this$props3.getRecipeDB;
    let recipeId;
    let results = 0;

    for (let i = 0; i < dates.length; i++) {
      if (!cart.dates[dates[i]]) {
        results++;
        addCartDate(cart.id, {
          date: dates[i]
        }).then(() => {
          results--;
          if (results === 0) this.setState({
            dates
          });
        });
      } else for (let j = 0; j < TIMES.length; j++) {
        recipeId = cart.dates[dates[i]][TIMES[j]];

        if (recipeId && !recipes[recipeId]) {
          results++;
          getRecipeDB(recipeId).then(({
            recipe
          }) => {
            this.addMacros(recipe);
            results--;
            if (results === 0) this.setState({
              dates
            });
          });
        } else if (!recipeId) if (results === 0) this.setState({
          dates
        });
      }
    }
  }

  addMacros(recipe) {
    let recipeCalories = Object.values(recipe.nutrition).filter(nutrient => ["Calories"].includes(nutrient.title))[0].amount;
    let recipeProtein = Object.values(recipe.nutrition).filter(nutrient => ["Protein"].includes(nutrient.title))[0].amount;
    let recipeFat = Object.values(recipe.nutrition).filter(nutrient => ["Fat"].includes(nutrient.title))[0].amount;
    let recipeCarbs = Object.values(recipe.nutrition).filter(nutrient => ["Carbohydrates"].includes(nutrient.title))[0].amount;
    let recipeFiber = Object.values(recipe.nutrition).filter(nutrient => ["Fiber"].includes(nutrient.title))[0].amount;
    this.setState({
      calories: this.state.calories + recipeCalories,
      protein: this.state.protein + recipeProtein,
      fat: this.state.fat + recipeFat,
      carbs: this.state.carbs + recipeCarbs,
      fiber: this.state.fiber + recipeFiber
    });
    this.calories = this.calories + recipeCalories;
    this.fat = this.fat + recipeFat;
  }

  render() {
    let dates = this.state.dates;

    if (dates.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weekly-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_navbar_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weekly-cart-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Weekly Summary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weekly-cart-days",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, dates.map((date, idx) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_weekly_cart_day_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
          date: date,
          key: idx,
          addMacros: this.addMacros,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_weekly_macro__WEBPACK_IMPORTED_MODULE_3__["default"], {
        calories: this.state.calories,
        carbs: this.state.carbs,
        protein: this.state.protein,
        fat: this.state.fat,
        fiber: this.state.fiber,
        user: this.props.currentUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weekly-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WeeklyCart);

/***/ }),

/***/ "./src/components/cart_weekly/weekly_cart_container.js":
/*!*************************************************************!*\
  !*** ./src/components/cart_weekly/weekly_cart_container.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _weekly_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly_cart */ "./src/components/cart_weekly/weekly_cart.jsx");
/* harmony import */ var _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/recipe_actions */ "./src/actions/recipe_actions.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/cart_actions */ "./src/actions/cart_actions.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/profile_actions */ "./src/actions/profile_actions.js");







const mapStateToProps = state => ({
  user: state.session.user,
  currentUser: state.entities.user,
  cart: state.entities.cart,
  recipes: state.entities.recipes
});

const mapDispatchToProps = dispatch => ({
  getRecipeDB: recipeId => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["getRecipeDB"])(recipeId)),
  addCartDate: (cartId, dateInfo) => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__["addCartDate"])(cartId, dateInfo)),
  getCart: userId => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__["getCart"])(userId)),
  fetchFridge: userId => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_4__["fetchFridge"])(userId)),
  fetchUser: userId => dispatch(Object(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["fetchUser"])(userId))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_weekly_cart__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/cart_weekly/weekly_cart_day.jsx":
/*!********************************************************!*\
  !*** ./src/components/cart_weekly/weekly_cart_day.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_fridge_api_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/fridge_api_util */ "./src/util/fridge_api_util.js");
/* harmony import */ var _stylesheets_weekly_cart_weekly_cart_day_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/weekly_cart/weekly_cart_day.scss */ "./src/components/stylesheets/weekly_cart/weekly_cart_day.scss");
/* harmony import */ var _stylesheets_weekly_cart_weekly_cart_day_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_weekly_cart_weekly_cart_day_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/cart_weekly/weekly_cart_day.jsx";



const TIMES = ["BREAKFAST", "LUNCH", "DINNER"];

class WeeklyCartDay extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.recipe = {
      BREAKFAST: null,
      LUNCH: null,
      DINNER: null
    };
    this.removeItem = this.removeItem.bind(this);
    this.makeItem = this.makeItem.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  removeItem(e, time) {
    e.stopPropagation();
    const _this$props = this.props,
          cart = _this$props.cart,
          date = _this$props.date,
          removeCartMeal = _this$props.removeCartMeal;
    removeCartMeal(cart.id, {
      date,
      time
    });
  }

  makeItem(e, recipe) {
    e.stopPropagation();

    if (recipe.image !== "...") {
      const user = this.props.user;
      Object(_util_fridge_api_util__WEBPACK_IMPORTED_MODULE_1__["modifyFridge"])(user.id, recipe);
    }
  }

  openModal(e, recipe) {
    e.stopPropagation();
    if (recipe.image !== "...") this.props.openModal(recipe);
  }

  render() {
    const _this$props2 = this.props,
          recipes = _this$props2.recipes,
          cart = _this$props2.cart,
          date = _this$props2.date,
          openModal = _this$props2.openModal,
          addMacros = _this$props2.addMacros;
    let cartContent = TIMES.map((time, idx) => {
      // Must pull recipes into an instance variable otherwise it won't be available
      //      ... map has it's own scope!
      this.recipe[time] = recipes[cart.dates[date][time]];

      if (!this.recipe[time] && recipes[cart.dates[date][time]]) {
        this.recipe[time] = {
          title: "Recipe Not Found",
          image: "...",
          recipeId: cart.dates[date][time]
        };
      }

      if (this.recipe[time]) {
        // addMacros(this.recipe[time]);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item",
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-main",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-info-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-info-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, this.recipe[time].title.slice(0, 20) + ".."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-buttons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-remove",
          onClick: e => {
            this.removeItem(e, time);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "Remove"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-eat",
          onClick: e => {
            this.makeItem(e, this.recipe[time]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "Make Meal"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "weekly-cart-item-info-image",
          src: this.recipe[time].image,
          onClick: e => this.openModal(e, this.recipe[time]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }))))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item",
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weekly-cart-item-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }));
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weekly-cart-day",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weekly-cart-header-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weekly-cart-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, cartContent));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WeeklyCartDay);

/***/ }),

/***/ "./src/components/cart_weekly/weekly_cart_day_container.js":
/*!*****************************************************************!*\
  !*** ./src/components/cart_weekly/weekly_cart_day_container.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _weekly_cart_day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly_cart_day */ "./src/components/cart_weekly/weekly_cart_day.jsx");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/cart_actions */ "./src/actions/cart_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");





const mapStateToProps = (state, ownProps) => ({
  recipes: state.entities.recipes,
  cart: state.entities.cart,
  user: state.session.user,
  date: ownProps.date
}); // For the "I ATE THIS" action


const mapDispatchToProps = dispatch => ({
  removeCartMeal: (cartId, mealInfo) => dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["removeCartMeal"])(cartId, mealInfo)),
  openModal: other => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["openModal"])('showRecipe', other))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_weekly_cart_day__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/cart_weekly/weekly_macro.jsx":
/*!*****************************************************!*\
  !*** ./src/components/cart_weekly/weekly_macro.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeeklyMacro; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! victory */ "./node_modules/victory/es/index.js");
/* harmony import */ var _stylesheets_weekly_cart_weekly_macro_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/weekly_cart/weekly_macro.scss */ "./src/components/stylesheets/weekly_cart/weekly_macro.scss");
/* harmony import */ var _stylesheets_weekly_cart_weekly_macro_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_weekly_cart_weekly_macro_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_calorie_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/calorie_util */ "./src/util/calorie_util.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/cart_weekly/weekly_macro.jsx";




class WeeklyMacro extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      nutritionReq: {
        "Calories": 2000,
        "Carbohydrates": 250,
        "Protein": 80,
        "Fat": 75,
        "Fiber": 30
      },
      pieData: [{
        y: 100,
        label: ""
      }, {
        y: 0,
        label: ""
      }, {
        y: 0,
        label: ""
      }],
      legendData: [{
        name: "Carbs"
      }, {
        name: "Protein"
      }, {
        name: "Fat"
      }],
      calories: false,
      protein: false,
      fat: false,
      carbs: false,
      fiber: false
    };
    this.handleBarOn = this.handleBarOn.bind(this);
    this.handleBarOff = this.handleBarOff.bind(this);
  }

  componentDidMount() {
    let _this$props = this.props,
        calories = _this$props.calories,
        carbs = _this$props.carbs,
        protein = _this$props.protein,
        fat = _this$props.fat;
    let calorieAc = carbs * 4 + protein * 4 + fat * 9;
    let carbPer = Math.round(carbs * 4 / calorieAc * 1000) / 10;
    let proteinPer = Math.round(protein * 4 / calorieAc * 1000) / 10;
    let fatPer = Math.round(fat * 9 / calorieAc * 1000) / 10;
    debugger;
    setTimeout(() => {
      this.setState({
        pieData: [{
          x: "Carbs",
          y: carbPer,
          label: "".concat(carbPer, "%")
        }, {
          x: "Protein",
          y: proteinPer,
          label: "".concat(proteinPer, "%")
        }, {
          x: "Fat",
          y: fatPer,
          label: "".concat(fatPer, "%")
        }],
        label: true
      });
    }, 1000);
  }

  handleBarOn(type) {
    return e => {
      this.setState({
        [type]: true
      });
    };
  }

  handleBarOff(type) {
    return e => {
      this.setState({
        [type]: false
      });
    };
  }

  render() {
    let _this$props2 = this.props,
        calories = _this$props2.calories,
        carbs = _this$props2.carbs,
        protein = _this$props2.protein,
        fat = _this$props2.fat,
        fiber = _this$props2.fiber,
        user = _this$props2.user;
    let calorieReq = Object(_util_calorie_util__WEBPACK_IMPORTED_MODULE_3__["calorieCalc"])(user);
    let nutritionReq = {
      calories: calorieReq ? calorieReq * 7 : 2000 * 7,
      carbs: calorieReq ? 250 * calorieReq / 2000 * 7 : 250 * 7,
      protein: calorieReq ? 80 * calorieReq / 2000 * 7 : 80 * 7,
      fat: calorieReq ? 75 * calorieReq / 2000 * 7 : 75 * 7,
      fiber: 210
    };
    let caloriePer = Math.floor(calories / nutritionReq.calories * 100);
    let carbsPer = Math.floor(carbs / nutritionReq.carbs * 100);
    let proteinPer = Math.floor(protein / nutritionReq.protein * 100);
    let fatPer = Math.floor(fat / nutritionReq.fat * 100);
    let fiberPer = Math.floor(fiber / nutritionReq.fiber * 100);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weekly-macro-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weekly-macro-pie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: 300,
      height: 200,
      style: {
        border: "1px solid #ccc"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryLegend"], {
      standalone: false,
      colorScale: ["#3a9691", "skyblue", "lightblue"],
      x: 20,
      y: 40,
      gutter: 10,
      rowGutter: -5,
      data: this.state.legendData,
      style: {
        data: {
          fontSize: 12,
          lineHeight: 1
        },
        border: {
          stroke: "black"
        },
        title: {
          fontSize: 14
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryPie"], {
      standalone: false,
      width: 300,
      height: 200,
      padding: {
        left: 120,
        bottom: 20,
        top: 20
      },
      animate: {
        duration: 2000
      },
      colorScale: ["#3a9691", "skyblue", "lightblue"],
      data: this.state.pieData,
      labelComponent: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }),
      labelRadius: 60,
      style: {
        labels: {
          fill: "black",
          fontSize: 15
        },
        data: {
          fillOpacity: 0.9,
          stroke: "black",
          strokeWidth: 2
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "weekly-macro-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar-graph-cont",
      onMouseEnter: this.handleBarOn("calories"),
      onMouseLeave: this.handleBarOff("calories"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, " Calories "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-test",
      style: {
        background: "linear-gradient(90deg, #FFC0CB ".concat(caloriePer, "%, darkgrey ").concat(caloriePer, "%)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, this.state.calories ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, Math.floor(calories), " cal") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, caloriePer, "%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar-graph-cont",
      onMouseEnter: this.handleBarOn("protein"),
      onMouseLeave: this.handleBarOff("protein"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, " Protein "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-test",
      style: {
        background: "linear-gradient(90deg, #FFC0CB ".concat(proteinPer, "%, darkgrey ").concat(proteinPer, "%)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, this.state.protein ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, Math.floor(protein), " g") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, proteinPer, "%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar-graph-cont",
      onMouseEnter: this.handleBarOn("fat"),
      onMouseLeave: this.handleBarOff("fat"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, " Fat "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-test",
      style: {
        background: "linear-gradient(90deg, #FFC0CB ".concat(fatPer, "%, darkgrey ").concat(fatPer, "%)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, this.state.fat ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, Math.floor(fat), " g") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, fatPer, "%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar-graph-cont",
      onMouseEnter: this.handleBarOn("carbs"),
      onMouseLeave: this.handleBarOff("carbs"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, " Carbohydrates "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-test",
      style: {
        background: "linear-gradient(90deg, #FFC0CB ".concat(carbsPer, "%, darkgrey ").concat(carbsPer, "%)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, this.state.carbs ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, Math.floor(carbs), " g") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, carbsPer, "%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar-graph-cont",
      onMouseEnter: this.handleBarOn("fiber"),
      onMouseLeave: this.handleBarOff("fiber"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, " Fiber "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-test",
      style: {
        background: "linear-gradient(90deg, #FFC0CB ".concat(fiberPer, "%, darkgrey ").concat(fiberPer, "%)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, this.state.fiber ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, Math.floor(fiber), " g") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, fiberPer, "%")))));
  }

}

/***/ }),

/***/ "./src/components/clock/clock.jsx":
/*!****************************************!*\
  !*** ./src/components/clock/clock.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/clock/clock.jsx";
 // QUESTION: WHY DOES THE HEIGHT CHANGE EVERYTIME THE CLOCK TICK?
//           WHY DOES THIS GO AWAY WHEN I REMOVE THE MARGIN-TOP?

class Clock extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const time = this.state.time.split("").slice(0, 8);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "clock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, time));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Clock);

/***/ }),

/***/ "./src/components/fridge/add_ingredient.jsx":
/*!**************************************************!*\
  !*** ./src/components/fridge/add_ingredient.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/fridge/add_ingredient.jsx";


class AddIngredient extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      error: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyEvent = this.keyEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyEvent);
  }

  update(e) {
    this.setState({
      amount: e.target.value,
      error: ""
    });
  }

  keyEvent(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    } else if (e.key === 'Escape') {
      this.props.closeModal();
    }
  }

  handleSubmit(e) {
    if (this.props.fridge.ingredients.hasOwnProperty(this.props.ingredient.id)) {
      if (parseInt(this.state.amount) > 0) {
        this.props.modifyIngredient(this.props.userId, this.props.ingredient, parseInt(this.state.amount)).then(() => {
          this.props.closeModal();
        });
      } else {
        this.setState({
          error: "Amount must be greater than 0."
        });
      }
    } else {
      if (parseInt(this.state.amount) > 0) {
        this.props.addFridgeIngredient(this.props.userId, this.props.ingredient, parseInt(this.state.amount)).then(() => {
          this.props.closeModal();
        });
      } else {
        this.setState({
          error: "Amount must be greater than 0."
        });
      }
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-modal-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, this.props.ingredient.name.charAt(0).toUpperCase() + this.props.ingredient.name.slice(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-modal-close",
      onClick: this.props.closeModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "x")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://spoonacular.com/cdn/ingredients_100x100/".concat(this.props.ingredient.image),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-input-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-input-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Input Amount:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-input-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      className: "add-ingredient-input",
      value: this.state.amount,
      onChange: this.update,
      autoFocus: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "g")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, this.state.error), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleSubmit,
      className: "add-ingredient-submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Submit")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddIngredient);

/***/ }),

/***/ "./src/components/fridge/add_ingredient_container.js":
/*!***********************************************************!*\
  !*** ./src/components/fridge/add_ingredient_container.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");
/* harmony import */ var _add_ingredient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_ingredient */ "./src/components/fridge/add_ingredient.jsx");





const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  fridge: state.entities.fridge
});

const mapDispatchToProps = dispatch => ({
  addFridgeIngredient: (userId, ingredient, amount) => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__["addFridgeIngredient"])(userId, ingredient, amount)),
  modifyIngredient: (userId, ingredient, amount) => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__["modifyIngredient"])(userId, ingredient, amount)),
  closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_add_ingredient__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/components/fridge/fridge.jsx":
/*!******************************************!*\
  !*** ./src/components/fridge/fridge.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ingredient_search_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredient_search_container */ "./src/components/fridge/ingredient_search_container.js");
/* harmony import */ var _fridge_ingredients_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fridge_ingredients_container */ "./src/components/fridge/fridge_ingredients_container.js");
/* harmony import */ var _nav_navbar_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/navbar_container */ "./src/components/nav/navbar_container.js");
/* harmony import */ var _clock_clock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clock/clock */ "./src/components/clock/clock.jsx");
/* harmony import */ var _stylesheets_assets_pot_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheets/assets/pot.gif */ "./src/components/stylesheets/assets/pot.gif");
/* harmony import */ var _stylesheets_assets_pot_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_pot_gif__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/fridge/fridge.jsx";







class Fridge extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFridge(this.props.userId);
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fridge-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_navbar_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contain-all",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-fridge",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_clock_clock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ingredient_search_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right-fridge",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fridge_ingredients_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fridge);

/***/ }),

/***/ "./src/components/fridge/fridge_container.js":
/*!***************************************************!*\
  !*** ./src/components/fridge/fridge_container.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _fridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fridge */ "./src/components/fridge/fridge.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");





const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  fetchFridge: userId => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__["fetchFridge"])(userId)),
  closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["closeModal"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_fridge__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/fridge/fridge_ingredients.jsx":
/*!******************************************************!*\
  !*** ./src/components/fridge/fridge_ingredients.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fridge_item_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fridge_item_container */ "./src/components/fridge/fridge_item_container.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/fridge/fridge_ingredients.jsx";



class FridgeIngredients extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ingredients;

    if (this.props.ingredients) {
      let fridge = this.props.ingredients;
      ingredients = Object.keys(fridge).map(ingredientId => {
        return (// <li>{fridge[ingredientId].name}({fridge[ingredientId].amount})</li>
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fridge_item_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
            ingredient: fridge[ingredientId],
            key: ingredientId,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          })
        );
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fridge-ingredients-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fridge-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ingredients-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, ingredients))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FridgeIngredients);

/***/ }),

/***/ "./src/components/fridge/fridge_ingredients_container.js":
/*!***************************************************************!*\
  !*** ./src/components/fridge/fridge_ingredients_container.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fridge_ingredients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fridge_ingredients */ "./src/components/fridge/fridge_ingredients.jsx");



const mapStateToProps = (state, ownProps) => ({
  ingredients: state.entities.fridge.ingredients,
  fridge: state.entities.fridge
});

const mapDispatchToProps = dispatch => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_fridge_ingredients__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/fridge/fridge_item.jsx":
/*!***********************************************!*\
  !*** ./src/components/fridge/fridge_item.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/fridge/fridge_item.jsx";


class FridgeItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.props.openModal(this.props.ingredient),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fridge-item-image-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://spoonacular.com/cdn/ingredients_100x100/".concat(this.props.ingredient.image),
      alt: "",
      className: "fridge-item-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fridge-item-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.ingredient.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fridge-item-amount",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, Math.floor(this.props.ingredient.amount)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FridgeItem);

/***/ }),

/***/ "./src/components/fridge/fridge_item_container.js":
/*!********************************************************!*\
  !*** ./src/components/fridge/fridge_item_container.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");
/* harmony import */ var _fridge_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fridge_item */ "./src/components/fridge/fridge_item.jsx");





const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  modifyIngredient: (userId, ingredient, amount) => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__["modifyIngredient"])(userId, ingredient, amount)),
  openModal: other => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])('modifyIngredient', other))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_fridge_item__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/components/fridge/ingredient_seach.jsx":
/*!****************************************************!*\
  !*** ./src/components/fridge/ingredient_seach.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ingredient_search_item_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredient_search_item_container */ "./src/components/fridge/ingredient_search_item_container.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/fridge/ingredient_seach.jsx";



const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

class IngredientSearch extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    this.setState({
      query: e.target.value
    });
    this.search(e.target.value);
  }

  search(query) {
    if (query !== "") {
      this.props.searchIngredientByName(query).then(res => {
        this.setState({
          results: res.data,
          visible: true
        });
      });
    } else {
      this.setState({
        visible: false
      });
    }
  }

  handleClick(e) {
    if (!(this.node && this.node.contains(e.target))) {
      this.setState({
        visible: false,
        query: ""
      });
    }
  }

  hitEnter(e) {
    if (e.key === "Enter" && this.props.modal) {
      this.setState({
        visible: false,
        query: ""
      });
    }
  }

  render() {
    let results;

    if (this.state.results.length > 0) {
      results = this.state.results.map((ingredient, i) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ingredient_search_item_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: i,
          ingredient: ingredient,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        });
      });
    } else {
      results = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ingredient-search-li",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "No Matches");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ingredient-search-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ingredient-search-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ingredient-search-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: this.state.query,
      onChange: this.update,
      className: "search-input",
      placeholder: "Search Ingredients",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), this.state.visible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "ingredient-search-ul",
      ref: node => this.node = node,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, results))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IngredientSearch);

/***/ }),

/***/ "./src/components/fridge/ingredient_search_container.js":
/*!**************************************************************!*\
  !*** ./src/components/fridge/ingredient_search_container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_ingredient_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/ingredient_actions */ "./src/actions/ingredient_actions.js");
/* harmony import */ var _ingredient_seach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredient_seach */ "./src/components/fridge/ingredient_seach.jsx");
 // import { addFridgeIngredient, modifyIngredient } from '../../actions/fridge_actions';




const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  // addFridgeIngredient: (userId, ingredient, amount) => dispatch(addFridgeIngredient(userId, ingredient, amount)),
  // modifyIngredient: (userId, ingredient, amount) => dispatch(modifyIngredient(userId, ingredient, amount)),
  searchIngredientByName: query => Object(_actions_ingredient_actions__WEBPACK_IMPORTED_MODULE_1__["searchIngredientByName"])(query)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_ingredient_seach__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/fridge/ingredient_search_item.jsx":
/*!**********************************************************!*\
  !*** ./src/components/fridge/ingredient_search_item.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/fridge/ingredient_search_item.jsx";


class IngredientSearchItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.enter = this.enter.bind(this);
    this.leave = this.leave.bind(this);
  }

  enter() {
    this.setState({
      visible: true
    });
  }

  leave() {
    this.setState({
      visible: false
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "ingredient-search-li",
      onClick: () => this.props.openModal(this.props.ingredient),
      onMouseEnter: this.enter,
      onMouseLeave: this.leave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ingredient-search-li-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, this.props.ingredient.name), this.state.visible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "+"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IngredientSearchItem);

/***/ }),

/***/ "./src/components/fridge/ingredient_search_item_container.js":
/*!*******************************************************************!*\
  !*** ./src/components/fridge/ingredient_search_item_container.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _util_ingredient_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/ingredient_api_util */ "./src/util/ingredient_api_util.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");
/* harmony import */ var _ingredient_search_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingredient_search_item */ "./src/components/fridge/ingredient_search_item.jsx");






const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  addFridgeIngredient: (userId, ingredient, amount) => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__["addFridgeIngredient"])(userId, ingredient, amount)),
  modifyIngredient: (userId, ingredient, amount) => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__["modifyIngredient"])(userId, ingredient, amount)),
  getIngredientById: (id, amount, unit) => Object(_util_ingredient_api_util__WEBPACK_IMPORTED_MODULE_2__["getIngredientById"])(id, amount, unit),
  openModal: other => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["openModal"])('addIngredient', other))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_ingredient_search_item__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/components/fridge/modify_ingredient.jsx":
/*!*****************************************************!*\
  !*** ./src/components/fridge/modify_ingredient.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/fridge/modify_ingredient.jsx";


class ModifyIngredient extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.ingredient.amount,
      error: "",
      hover: false
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyEvent = this.keyEvent.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.mouseHover = this.mouseHover.bind(this);
  }

  toggleHoverState(state) {
    return {
      hover: !state.hover
    };
  }

  mouseHover() {
    this.setState(this.toggleHoverState);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyEvent);
  }

  update(e) {
    this.setState({
      amount: e.target.value,
      error: ""
    });
  }

  keyEvent(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    } else if (e.key === 'Escape') {
      this.props.closeModal();
    }
  }

  handleSubmit(e) {
    if (parseInt(this.state.amount) > 0) {
      this.props.modifyIngredient(this.props.userId, this.props.ingredient, parseInt(this.state.amount - this.props.ingredient.amount)).then(() => {
        this.props.closeModal();
      });
    } else {
      this.setState({
        error: "Amount must be greater than 0."
      });
    }
  }

  removeIngredient() {
    this.props.modifyIngredient(this.props.userId, this.props.ingredient, Number.MIN_SAFE_INTEGER).then(() => {
      this.props.closeModal();
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-modal-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, this.props.ingredient.name.charAt(0).toUpperCase() + this.props.ingredient.name.slice(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-modal-close",
      onClick: this.props.closeModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "x")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://spoonacular.com/cdn/ingredients_100x100/".concat(this.props.ingredient.image),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-input-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-input-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Modify Amount:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-input-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      className: "add-ingredient-input",
      value: Math.floor(this.state.amount),
      onChange: this.update,
      autoFocus: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "g")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, this.state.error), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-ingredient-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleSubmit,
      className: "add-ingredient-submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.removeIngredient,
      className: "remove-ingredient",
      onMouseEnter: this.mouseHover,
      onMouseLeave: this.mouseHover,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "far fa-trash-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), this.state.hover && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hover-flag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Discard"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ModifyIngredient);

/***/ }),

/***/ "./src/components/fridge/modify_ingredient_container.js":
/*!**************************************************************!*\
  !*** ./src/components/fridge/modify_ingredient_container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");
/* harmony import */ var _modify_ingredient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modify_ingredient */ "./src/components/fridge/modify_ingredient.jsx");





const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  fridge: state.entities.fridge
});

const mapDispatchToProps = dispatch => ({
  addFridgeIngredient: (userId, ingredient, amount) => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__["addFridgeIngredient"])(userId, ingredient, amount)),
  modifyIngredient: (userId, ingredient, amount) => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_1__["modifyIngredient"])(userId, ingredient, amount)),
  closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_modify_ingredient__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/components/main/main.js":
/*!*************************************!*\
  !*** ./src/components/main/main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _nav_navbar_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/navbar_container */ "./src/components/nav/navbar_container.js");
/* harmony import */ var _stylesheets_assets_apron_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/assets/apron.png */ "./src/components/stylesheets/assets/apron.png");
/* harmony import */ var _stylesheets_assets_apron_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_apron_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheets_assets_background1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheets/assets/background1.jpg */ "./src/components/stylesheets/assets/background1.jpg");
/* harmony import */ var _stylesheets_assets_background1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_background1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stylesheets_assets_food_background2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheets/assets/food_background2.jpg */ "./src/components/stylesheets/assets/food_background2.jpg");
/* harmony import */ var _stylesheets_assets_food_background2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_food_background2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stylesheets_assets_choose_meal_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stylesheets/assets/choose_meal.gif */ "./src/components/stylesheets/assets/choose_meal.gif");
/* harmony import */ var _stylesheets_assets_choose_meal_gif__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_choose_meal_gif__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stylesheets_assets_pie_chart_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stylesheets/assets/pie_chart.gif */ "./src/components/stylesheets/assets/pie_chart.gif");
/* harmony import */ var _stylesheets_assets_pie_chart_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_pie_chart_gif__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stylesheets_assets_line_chart_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stylesheets/assets/line_chart.gif */ "./src/components/stylesheets/assets/line_chart.gif");
/* harmony import */ var _stylesheets_assets_line_chart_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_line_chart_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _stylesheets_assets_grocery_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stylesheets/assets/grocery.gif */ "./src/components/stylesheets/assets/grocery.gif");
/* harmony import */ var _stylesheets_assets_grocery_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_grocery_gif__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stylesheets_assets_cooking_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stylesheets/assets/cooking.jpg */ "./src/components/stylesheets/assets/cooking.jpg");
/* harmony import */ var _stylesheets_assets_cooking_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_cooking_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _stylesheets_assets_meal_plan_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stylesheets/assets/meal_plan.jpg */ "./src/components/stylesheets/assets/meal_plan.jpg");
/* harmony import */ var _stylesheets_assets_meal_plan_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_meal_plan_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _stylesheets_assets_easy_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../stylesheets/assets/easy.jpeg */ "./src/components/stylesheets/assets/easy.jpeg");
/* harmony import */ var _stylesheets_assets_easy_jpeg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_easy_jpeg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _stylesheets_assets_note_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../stylesheets/assets/note.jpg */ "./src/components/stylesheets/assets/note.jpg");
/* harmony import */ var _stylesheets_assets_note_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_note_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _stylesheets_assets_kitchen_counter_flipped_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../stylesheets/assets/kitchen_counter_flipped.jpg */ "./src/components/stylesheets/assets/kitchen_counter_flipped.jpg");
/* harmony import */ var _stylesheets_assets_kitchen_counter_flipped_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_kitchen_counter_flipped_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _main_index_item_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main_index_item_container */ "./src/components/main/main_index_item_container.js");
/* harmony import */ var _main_index_seeds__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main_index_seeds */ "./src/components/main/main_index_seeds.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/main/main.js";


















class MainPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "codrops-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_navbar_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clr",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "st-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      name: "radio-set",
      defaultChecked: false,
      id: "st-control-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#st-panel-1",
      className: "splash-footer-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "d\xE9licieux?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      name: "radio-set",
      id: "st-control-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#st-panel-2",
      className: "splash-footer-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "The experience"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      name: "radio-set",
      id: "st-control-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#st-panel-3",
      className: "splash-footer-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "How it works"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      name: "radio-set",
      id: "st-control-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#st-panel-4",
      className: "splash-footer-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Preview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      name: "radio-set",
      id: "st-control-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#st-panel-5",
      className: "splash-footer-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Passion"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "st-scroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "st-panel st-color",
      id: "st-panel-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_note_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
      alt: "",
      className: "splash-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-loading-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "splash-main-title",
      onClick: () => this.props.history.push('/login'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "d\xE9licieux"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "st-panel st-color",
      id: "st-panel-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "second-main-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img-container-second",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_easy_jpeg__WEBPACK_IMPORTED_MODULE_12___default.a,
      alt: "",
      className: "splash-img-second",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-middle-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "the-exp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Meal planning made easy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "the-exp-middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "the-exp-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "the-exp-sub-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "d\xE9licieux is your smart cooking sidekick"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "the-exp-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Find the perfect recipe to make from the ingredients available in your fridge."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "the-exp-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Reach your diet goals faster with detailed nutritional information and progress visualization."))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "st-panel st-color",
      id: "st-panel-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_food_background2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "",
      className: "splash-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "st-deco",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-middle-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "how-it-works",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "How it works"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_grocery_gif__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: "",
      className: "splash-gif-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "TRACK YOUR INGREDIENTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Never let your groceries go to waste by keeping a dynamic digital inventory.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_choose_meal_gif__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "",
      className: "splash-gif",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "CHOOSE YOUR MEALS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Get recipe suggestions based on the ingredients you have and your fitness goals.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_pie_chart_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "",
      className: "splash-gif",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "MACROS MADE EASY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Stay informed with detailed nutritional information on all recipes.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_line_chart_gif__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "",
      className: "splash-gif",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "MONITOR YOUR PROGRESS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splash-gif-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Reach your goals easier by visualizing your improvement."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "st-panel st-color",
      id: "st-panel-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "st-deco",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "img-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _stylesheets_assets_kitchen_counter_flipped_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
      className: "splash-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-index-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Browse From a Diverse Menu!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-index-rows",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-index-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_index_item_container__WEBPACK_IMPORTED_MODULE_15__["default"], {
      recipe: _main_index_seeds__WEBPACK_IMPORTED_MODULE_16__["recipe1"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_index_item_container__WEBPACK_IMPORTED_MODULE_15__["default"], {
      recipe: _main_index_seeds__WEBPACK_IMPORTED_MODULE_16__["recipe1"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_index_item_container__WEBPACK_IMPORTED_MODULE_15__["default"], {
      recipe: _main_index_seeds__WEBPACK_IMPORTED_MODULE_16__["recipe1"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-index-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_index_item_container__WEBPACK_IMPORTED_MODULE_15__["default"], {
      recipe: _main_index_seeds__WEBPACK_IMPORTED_MODULE_16__["recipe1"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_index_item_container__WEBPACK_IMPORTED_MODULE_15__["default"], {
      recipe: _main_index_seeds__WEBPACK_IMPORTED_MODULE_16__["recipe1"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_index_item_container__WEBPACK_IMPORTED_MODULE_15__["default"], {
      recipe: _main_index_seeds__WEBPACK_IMPORTED_MODULE_16__["recipe1"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "st-panel",
      id: "st-panel-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "st-deco",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Passion"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Fixie ad odd future polaroid dreamcatcher, nesciunt carles bicycle rights accusamus mcsweeney's mumblecore nulla irony."))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./src/components/main/main_index_item.jsx":
/*!*************************************************!*\
  !*** ./src/components/main/main_index_item.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesheets_recipe_index_recipe_index_item_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/recipe_index/recipe_index_item.scss */ "./src/components/stylesheets/recipe_index/recipe_index_item.scss");
/* harmony import */ var _stylesheets_recipe_index_recipe_index_item_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_recipe_index_recipe_index_item_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_assets_leaf_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/assets/leaf.png */ "./src/components/stylesheets/assets/leaf.png");
/* harmony import */ var _stylesheets_assets_leaf_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_leaf_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheets_assets_leaf2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/assets/leaf2.png */ "./src/components/stylesheets/assets/leaf2.png");
/* harmony import */ var _stylesheets_assets_leaf2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_leaf2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheets_assets_salami_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheets/assets/salami.png */ "./src/components/stylesheets/assets/salami.png");
/* harmony import */ var _stylesheets_assets_salami_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_salami_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/main/main_index_item.jsx";





const MAX = 21;
const MIN = 0;

class MainIndexItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  onDragStart(e) {
    let recipe = this.props.recipe;
    e.dataTransfer.setData("recipeId", recipe.recipeId);
  }

  handleModal(recipe) {
    this.props.openModal(recipe);
  } // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART


  render() {
    const _this$props = this.props,
          recipe = _this$props.recipe,
          rotateToBack = _this$props.rotateToBack,
          fridge = _this$props.fridge;
    const _this$props$recipe = this.props.recipe,
          vegetarian = _this$props$recipe.vegetarian,
          vegan = _this$props$recipe.vegan,
          title = _this$props$recipe.title,
          spoonacularScore = _this$props$recipe.spoonacularScore,
          image = _this$props$recipe.image,
          servings = _this$props$recipe.servings,
          readyInMinutes = _this$props$recipe.readyInMinutes,
          nutrition = _this$props$recipe.nutrition;
    let timeC = readyInMinutes < 60 ? readyInMinutes.toString() : readyInMinutes < 180 ? Math.floor(readyInMinutes / 60).toString() + "h" : "3h";
    let isVegan;

    if (vegan) {
      isVegan = "Vegan";
    } else if (vegetarian) {
      isVegan = "Vegetarian";
    } else {
      isVegan = "Non Vegan";
    }

    let calorieC = Math.floor(nutrition[0].amount);
    let leaf;

    if (isVegan === "Vegan") {
      leaf = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "leaf",
        src: _stylesheets_assets_leaf2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      });
    } else if (isVegan === "Vegetarian") {
      leaf = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "leaf",
        src: _stylesheets_assets_leaf_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    } else {
      leaf = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "leaf",
        src: _stylesheets_assets_salami_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item main",
      draggable: true,
      onDragStart: this.onDragStart,
      onClick: () => this.handleModal(recipe),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item-image main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image,
      draggable: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item-name main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, title)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainIndexItem);

/***/ }),

/***/ "./src/components/main/main_index_item_container.js":
/*!**********************************************************!*\
  !*** ./src/components/main/main_index_item_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _main_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_index_item */ "./src/components/main/main_index_item.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");




const mapStateToProps = (state, ownProps) => ({
  recipe: ownProps.recipe,
  rotateToBack: ownProps.rotateToBack
});

const mapDispatchToProps = dispatch => ({
  openModal: other => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])("showRecipe", other)),
  closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_main_index_item__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/main/main_index_seeds.js":
/*!*************************************************!*\
  !*** ./src/components/main/main_index_seeds.js ***!
  \*************************************************/
/*! exports provided: recipe1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipe1", function() { return recipe1; });
const recipe1 = {
  "image": "https://spoonacular.com/recipeImages/41813-556x370.jpg",
  "nutrition": [{
    "title": "Calories",
    "amount": 107.15,
    "unit": "cal",
    "percentOfDailyNeeds": 5.36
  }, {
    "title": "Fat",
    "amount": 1.88,
    "unit": "g",
    "percentOfDailyNeeds": 2.89
  }, {
    "title": "Saturated Fat",
    "amount": 0.25,
    "unit": "g",
    "percentOfDailyNeeds": 1.58
  }, {
    "title": "Carbohydrates",
    "amount": 23.56,
    "unit": "g",
    "percentOfDailyNeeds": 7.85
  }, {
    "title": "Sugar",
    "amount": 0.82,
    "unit": "g",
    "percentOfDailyNeeds": 0.91
  }, {
    "title": "Cholesterol",
    "amount": 0,
    "unit": "mg",
    "percentOfDailyNeeds": 0
  }, {
    "title": "Sodium",
    "amount": 107.33,
    "unit": "mg",
    "percentOfDailyNeeds": 4.67
  }, {
    "title": "Caffeine",
    "amount": 11.83,
    "unit": "mg",
    "percentOfDailyNeeds": 3.94
  }, {
    "title": "Protein",
    "amount": 3.29,
    "unit": "g",
    "percentOfDailyNeeds": 6.57
  }, {
    "title": "Manganese",
    "amount": 6.03,
    "unit": "mg",
    "percentOfDailyNeeds": 301.62
  }, {
    "title": "Fiber",
    "amount": 7.21,
    "unit": "g",
    "percentOfDailyNeeds": 28.84
  }, {
    "title": "Copper",
    "amount": 0.52,
    "unit": "mg",
    "percentOfDailyNeeds": 25.89
  }, {
    "title": "Magnesium",
    "amount": 92.7,
    "unit": "mg",
    "percentOfDailyNeeds": 23.18
  }, {
    "title": "Iron",
    "amount": 3.38,
    "unit": "mg",
    "percentOfDailyNeeds": 18.76
  }, {
    "title": "Calcium",
    "amount": 157.45,
    "unit": "mg",
    "percentOfDailyNeeds": 15.75
  }, {
    "title": "Potassium",
    "amount": 475.11,
    "unit": "mg",
    "percentOfDailyNeeds": 13.57
  }, {
    "title": "Zinc",
    "amount": 1.91,
    "unit": "mg",
    "percentOfDailyNeeds": 12.71
  }, {
    "title": "Vitamin C",
    "amount": 6.81,
    "unit": "mg",
    "percentOfDailyNeeds": 8.25
  }, {
    "title": "Vitamin B6",
    "amount": 0.13,
    "unit": "mg",
    "percentOfDailyNeeds": 6.52
  }, {
    "title": "Phosphorus",
    "amount": 58.96,
    "unit": "mg",
    "percentOfDailyNeeds": 5.9
  }, {
    "title": "Vitamin B2",
    "amount": 0.07,
    "unit": "mg",
    "percentOfDailyNeeds": 3.9
  }, {
    "title": "Vitamin B1",
    "amount": 0.06,
    "unit": "mg",
    "percentOfDailyNeeds": 3.78
  }, {
    "title": "Vitamin B3",
    "amount": 0.65,
    "unit": "mg",
    "percentOfDailyNeeds": 3.26
  }, {
    "title": "Folate",
    "amount": 8.41,
    "unit": "µg",
    "percentOfDailyNeeds": 2.1
  }, {
    "title": "Vitamin K",
    "amount": 1.69,
    "unit": "µg",
    "percentOfDailyNeeds": 1.6
  }, {
    "title": "Vitamin B5",
    "amount": 0.12,
    "unit": "mg",
    "percentOfDailyNeeds": 1.18
  }],
  "cuisines": [],
  "diets": ["gluten free", "dairy free", "paleolithic", "lacto ovo vegetarian", "primal", "fodmap friendly", "whole 30", "vegan"],
  "dishtypes": [],
  "_id": "5dda7b0e66c9242cd0ee5398",
  "recipeId": 41813,
  "title": "Iced Ginger Chai",
  "sourceUrl": "http://www.elanaspantry.com/iced-ginger-chai/",
  "sourceName": "Elana's Pantry",
  "ingredients": [{
    "_id": "5dda7b0e66c9242cd0ee539e",
    "id": 1022030,
    "image": "black-pepper.png",
    "name": "black peppercorns",
    "amount": 10,
    "unit": ""
  }, {
    "_id": "5dda7b0e66c9242cd0ee539d",
    "id": 1002006,
    "image": "cardamom.jpg",
    "name": "cardamon pods",
    "amount": 10,
    "unit": ""
  }, {
    "_id": "5dda7b0e66c9242cd0ee539c",
    "id": 2018,
    "image": "fennel-seeds.jpg",
    "name": "fennel seed",
    "amount": 0.5,
    "unit": "tsp"
  }, {
    "_id": "5dda7b0e66c9242cd0ee539b",
    "id": 11216,
    "image": "ginger.png",
    "name": "fresh ginger",
    "amount": 0.5,
    "unit": "cup"
  }, {
    "_id": "5dda7b0e66c9242cd0ee539a",
    "id": 10114355,
    "image": "tea-bags.jpg",
    "name": "rooibos tea",
    "amount": 0.25,
    "unit": "cup"
  }, {
    "_id": "5dda7b0e66c9242cd0ee5399",
    "id": 14412,
    "image": "water.png",
    "name": "water",
    "amount": 2,
    "unit": "qts"
  }],
  "servings": 1,
  "spoonacularScore": 98,
  "readyInMinutes": 30,
  "dairyFree": true,
  "glutenFree": true,
  "ketogenic": false,
  "vegan": true,
  "vegetarian": true,
  "veryPopular": true,
  "__v": 0
};

/***/ }),

/***/ "./src/components/main_index/ingredient/ingredient_index.js":
/*!******************************************************************!*\
  !*** ./src/components/main_index/ingredient/ingredient_index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/main_index/ingredient/ingredient_index.js";


class IngredientIndex extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IngredientIndex);

/***/ }),

/***/ "./src/components/main_index/main_index.js":
/*!*************************************************!*\
  !*** ./src/components/main_index/main_index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _nav_navbar_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/navbar_container */ "./src/components/nav/navbar_container.js");
/* harmony import */ var _ingredient_ingredient_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredient/ingredient_index */ "./src/components/main_index/ingredient/ingredient_index.js");
/* harmony import */ var _cart_cart_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart_container */ "./src/components/cart/cart_container.js");
/* harmony import */ var _recipe_index_recipe_index_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipe_index/recipe_index_container */ "./src/components/recipe_index/recipe_index_container.js");
/* harmony import */ var _recipes_yj_main_filter_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recipes_yj/main_filter_container */ "./src/components/recipes_yj/main_filter_container.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/main_index/main_index.js";


 // import RecipeIndexContainer from '../recipe_index/recipe_index_container';






class MainIndex extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFridge(this.props.userId);
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const fridge = this.props.fridge;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contain-all",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_navbar_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right-left-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_recipes_yj_main_filter_container__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fridge: fridge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-recipe-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "boxes-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_recipe_index_recipe_index_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
      fridge: fridge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ingredient-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cart_cart_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
      fridge: fridge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainIndex);

/***/ }),

/***/ "./src/components/main_index/main_index_container.js":
/*!***********************************************************!*\
  !*** ./src/components/main_index/main_index_container.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_index */ "./src/components/main_index/main_index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/profile_actions */ "./src/actions/profile_actions.js");





const mapStateToProps = state => ({
  userId: state.session.user.id,
  fridge: state.entities.fridge
});

const mapDispatchToProps = dispatch => ({
  fetchFridge: userId => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_2__["fetchFridge"])(userId)),
  fetchUser: userId => dispatch(Object(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["fetchUser"])(userId))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_main_index__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/components/modal/modal.jsx":
/*!****************************************!*\
  !*** ./src/components/modal/modal.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fridge_add_ingredient_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fridge/add_ingredient_container */ "./src/components/fridge/add_ingredient_container.js");
/* harmony import */ var _fridge_modify_ingredient_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fridge/modify_ingredient_container */ "./src/components/fridge/modify_ingredient_container.js");
/* harmony import */ var _recipes_yj_recipe_show_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipes_yj/recipe_show_container */ "./src/components/recipes_yj/recipe_show_container.js");
/* harmony import */ var _stylesheets_modal_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stylesheets/modal/modal.scss */ "./src/components/stylesheets/modal/modal.scss");
/* harmony import */ var _stylesheets_modal_modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_modal_modal_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/modal/modal.jsx";


 // import LoginFormContainer from '../session/login_form_container';
// import SignupFormContainer from '../session/signup_form_container';






class Modal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _this$props = this.props,
          modal = _this$props.modal,
          closeModal = _this$props.closeModal;

    if (!modal) {
      return null;
    }

    let component;

    switch (modal.type) {
      case 'login':
        // component = <LoginFormContainer />;
        break;

      case 'signup':
        // component = <SignupFormContainer />;
        break;

      case 'addIngredient':
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fridge_add_ingredient_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
          ingredient: modal.other,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
        break;

      case 'modifyIngredient':
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fridge_modify_ingredient_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
          ingredient: modal.other,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        });
        break;

      case 'showRecipe':
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_recipes_yj_recipe_show_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
          recipe: modal.other,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });
        break;

      default:
        return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-background",
      onClick: closeModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-child",
      onClick: e => e.stopPropagation(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, component));
  }

}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__["closeModal"])())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mSTP, mDTP)(Modal));

/***/ }),

/***/ "./src/components/modal/side.jsx":
/*!***************************************!*\
  !*** ./src/components/modal/side.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_side_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/side_actions */ "./src/actions/side_actions.js");
/* harmony import */ var _sidebar_first_side_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/first_side_container */ "./src/components/sidebar/first_side_container.jsx");
/* harmony import */ var _sidebar_second_side_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/second_side_container */ "./src/components/sidebar/second_side_container.jsx");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/modal/side.jsx";






class Side extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _this$props = this.props,
          side = _this$props.side,
          closeSide = _this$props.closeSide;

    if (!side) {
      return null;
    }

    let component;
    let nextComponent;

    switch (side) {
      case 'first':
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar_first_side_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        });
        break;

      case 'second':
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar_first_side_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        });
        nextComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar_second_side_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });
        break;

      default:
        return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "side-background",
      onClick: closeSide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, component, nextComponent);
  }

}

const mSTP = state => {
  return {
    side: state.ui.side
  };
};

const mDTP = dispatch => {
  return {
    closeSide: () => dispatch(Object(_actions_side_actions__WEBPACK_IMPORTED_MODULE_2__["closeSide"])())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP, mDTP)(Side));

/***/ }),

/***/ "./src/components/nav/navbar.js":
/*!**************************************!*\
  !*** ./src/components/nav/navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/nav/navbar.js";



class NavBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.history.push("/");
    this.props.logout();
  }

  renderErrors() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, Object.keys(this.state.errors).map((error, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "error-".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, this.state.errors[error])));
  }

  getLinks() {
    if (this.props.loggedIn) {
      if (this.props.location.pathname === "/") {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "logout",
          onClick: () => this.props.openSide("first"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "SIDE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "logout",
          onClick: this.logoutUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Logout"));
      }
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-auth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "main-sign",
        to: '/signup',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Signup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "main-sign",
        to: '/login',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Login"));
    }
  }

  render() {
    console.log(this.props.location.pathname);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav-main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, this.getLinks());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(NavBar));

/***/ }),

/***/ "./src/components/nav/navbar_container.js":
/*!************************************************!*\
  !*** ./src/components/nav/navbar_container.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");
/* harmony import */ var _actions_side_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/side_actions */ "./src/actions/side_actions.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar */ "./src/components/nav/navbar.js");






const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])(modal)),
  logout: () => dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["logout"])()),
  openSide: side => dispatch(Object(_actions_side_actions__WEBPACK_IMPORTED_MODULE_3__["openSide"])(side))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_navbar__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/components/profile/user_profile.jsx":
/*!*************************************************!*\
  !*** ./src/components/profile/user_profile.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/profile/user_profile.jsx";



class UserProfile extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.user.age,
      gender: this.props.user.gender,
      height: this.props.user.height,
      weight: this.props.user.weight,
      activityLevel: this.props.user.activityLevel,
      weeklyTarget: this.props.user.weeklyTarget,
      edit: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hitEnter = this.hitEnter.bind(this);
    this.updateGender = this.updateGender.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
    document.addEventListener("keydown", this.hitEnter);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.hitEnter);
  }

  flip() {
    return !this.state.edit;
  }

  toggleEdit() {
    this.setState({
      edit: this.flip()
    }, () => {
      if (!this.state.edit) {
        this.handleSubmit();
      } else {
        this.setState({
          age: this.props.user.age,
          gender: this.props.user.gender,
          height: this.props.user.height,
          weight: this.props.user.weight,
          activityLevel: this.props.user.activityLevel,
          weeklyTarget: this.props.user.weeklyTarget
        });
      }
    });
  }

  update(field) {
    const min = 0;
    const max = 999;
    return e => {
      if (field === "age" || field === "height" || field === "weight") {
        if (parseInt(e.target.value) > max) e.target.value = max.toString();else if (parseInt(e.target.value) < min) e.target.value = min.toString();
      }

      if (field === "gender") {
        this.setState({
          [field]: e.target.value
        }, () => this.updateGender());
      } else {
        this.setState({
          [field]: e.target.value
        });
      }
    };
  }

  hitEnter(e) {
    if (e.key === "Enter" && this.state.edit) {
      this.toggleEdit();
    }
  }

  handleSubmit() {
    this.props.updateUser({
      id: this.props.userId,
      age: this.state.age,
      gender: this.state.gender,
      height: this.state.height,
      weight: this.state.weight,
      activityLevel: this.state.activityLevel,
      weeklyTarget: this.state.weeklyTarget
    });
  }

  updateGender() {
    this.props.updateUser({
      id: this.props.userId,
      gender: this.state.gender,
      age: this.props.user.age,
      height: this.props.user.height,
      weight: this.props.user.weight,
      activityLevel: this.props.user.activityLevel,
      weeklyTarget: this.props.user.weeklyTarget
    });
  }

  render() {
    let height = this.props.user.height;
    let weight = this.props.user.weight;
    let age = this.props.user.age;
    let edit = "Edit";
    let activityLevel;
    let weeklyTarget;
    let user;
    let gender;

    switch (this.props.user.activityLevel) {
      case 1:
        activityLevel = "Sedentary";
        break;

      case 2:
        activityLevel = "Lightly Active";
        break;

      case 3:
        activityLevel = "Moderately Active";
        break;

      case 4:
        activityLevel = "Very Active";
        break;

      default:
        activityLevel = "";
        break;
    }

    switch (this.props.user.weeklyTarget) {
      case 0:
        weeklyTarget = "Maintain my weight";
        break;

      case -1.0:
        weeklyTarget = "Lose 1.0 kg/week";
        break;

      case -0.75:
        weeklyTarget = "Lose 0.75 kg/week";
        break;

      case -0.5:
        weeklyTarget = "Lose 0.5 kg/week";
        break;

      case -0.25:
        weeklyTarget = "Lose 0.25 kg/week";
        break;

      case 0.25:
        weeklyTarget = "Gain 0.25 kg/week";
        break;

      case 0.5:
        weeklyTarget = "Gain 0.5 kg/week";
        break;

      case 0.75:
        weeklyTarget = "Gain 0.75 kg/week";
        break;

      case 1.0:
        weeklyTarget = "Gain 1.0 kg/week";
        break;

      default:
        weeklyTarget = "";
        break;
    }

    gender = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gender-radio-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      className: "gender-radio",
      onChange: this.update("gender"),
      name: "gender",
      value: "M",
      id: "genderM",
      checked: this.props.user.gender === "M",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "genderM",
      className: "gender-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-male",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      className: "gender-radio",
      onChange: this.update("gender"),
      name: "gender",
      value: "F",
      id: "genderF",
      checked: this.props.user.gender === "F",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "genderF",
      className: "gender-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-female",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      className: "gender-radio",
      onChange: this.update("gender"),
      name: "gender",
      value: "O",
      id: "genderO",
      checked: this.props.user.gender === "O",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "genderO",
      className: "gender-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-paw",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    })));

    if (this.state.edit) {
      age = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        className: "user-info-input",
        value: this.state.age,
        onChange: this.update("age"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      });
      height = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        className: "user-info-input",
        value: this.state.height,
        onChange: this.update("height"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      });
      weight = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        className: "user-info-input",
        value: this.state.weight,
        onChange: this.update("weight"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      });
      activityLevel = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: this.update("activityLevel"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1",
        selected: this.props.user.activityLevel === 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Sedentary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "2",
        selected: this.props.user.activityLevel === 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Lightly Active"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "3",
        selected: this.props.user.activityLevel === 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Moderately Active"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "4",
        selected: this.props.user.activityLevel === 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Very Active"));
      weeklyTarget = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: this.update("weeklyTarget"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0",
        selected: this.props.user.weeklyTarget === 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Maintain my weight"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "-1.0",
        selected: this.props.user.weeklyTarget === -1.0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Lose 1.0 kg/week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "-0.75",
        selected: this.props.user.weeklyTarget === -0.75,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Lose 0.75 kg/week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "-0.5",
        selected: this.props.user.weeklyTarget === -0.5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Lose 0.5 kg/week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "-0.25",
        selected: this.props.user.weeklyTarget === -0.25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Lose 0.25 kg/week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0.25",
        selected: this.props.user.weeklyTarget === 0.25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Gain 0.25 kg/week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0.5",
        selected: this.props.user.weeklyTarget === 0.5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Gain 0.5 kg/week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0.75",
        selected: this.props.user.weeklyTarget === 0.75,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Gain 0.75 kg/week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1.0",
        selected: this.props.user.weeklyTarget === 1.0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Gain 1.0 kg/week"));
      edit = "Save";
    }

    if (this.props.user.name) {
      user = this.props.user.name[0].toUpperCase() + this.props.user.name.slice(1);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-item-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, "Name: ", user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.toggleEdit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, edit)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-item-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, "Sex"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, gender)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-item-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, "Age"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, age)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-item-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, "Height", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, height, " cm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-item-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, "Activity Level", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, activityLevel)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-item-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, "Current Weight", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, weight, " kg")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-item-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, "Weekly Target", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, weeklyTarget)), "Daily Calorie Goal: ", Math.floor(this.props.calorieCalc(this.props.user)), " cal");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserProfile); // User information -- UpdateUser

/***/ }),

/***/ "./src/components/profile/user_profile_container.js":
/*!**********************************************************!*\
  !*** ./src/components/profile/user_profile_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/profile_actions */ "./src/actions/profile_actions.js");
/* harmony import */ var _util_calorie_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/calorie_util */ "./src/util/calorie_util.js");
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user_profile */ "./src/components/profile/user_profile.jsx");





const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(Object(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["updateUser"])(user)),
  fetchUser: id => dispatch(Object(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["fetchUser"])(id)),
  calorieCalc: user => Object(_util_calorie_util__WEBPACK_IMPORTED_MODULE_2__["calorieCalc"])(user)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_user_profile__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/components/recipe_index/recipe_index.jsx":
/*!******************************************************!*\
  !*** ./src/components/recipe_index/recipe_index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recipe_index_item_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe_index_item_container */ "./src/components/recipe_index/recipe_index_item_container.js");
/* harmony import */ var _stylesheets_recipe_index_recipe_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/recipe_index/recipe_index.scss */ "./src/components/stylesheets/recipe_index/recipe_index.scss");
/* harmony import */ var _stylesheets_recipe_index_recipe_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_recipe_index_recipe_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheets_assets_cook_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/assets/cook.gif */ "./src/components/stylesheets/assets/cook.gif");
/* harmony import */ var _stylesheets_assets_cook_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_cook_gif__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/recipe_index/recipe_index.jsx";





class RecipeIndex extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.updateRecipes = this.updateRecipes.bind(this);
  } // Loads all of the recipes upon mounting


  componentDidMount() {
    debugger;
    let _this$props = this.props,
        user = _this$props.user,
        fetchFridge = _this$props.fetchFridge,
        getRecipesByIngredients = _this$props.getRecipesByIngredients,
        getRandomRecipes = _this$props.getRandomRecipes,
        complexRecipeSearch = _this$props.complexRecipeSearch,
        startLoad = _this$props.startLoad;
    startLoad("loading");
    fetchFridge(user.id).then(({
      fridge
    }) => {
      let ingredients = fridge.ingredients;
      ingredients = Object.keys(ingredients).map(id => ingredients[id].name);
      console.log(ingredients);
      ingredients.length === 0 ? getRandomRecipes(24) : getRecipesByIngredients(ingredients, 24);
    }); // this.setState({loading: true}, ()=> {
    //   fetchFridge(user.id)
    //     .then(
    //       ({ fridge }) => {
    //         let { ingredients } = fridge;
    //         ingredients = Object.keys(ingredients).map((id) => ingredients[id].name);
    //         if (ingredients.length === 0) {
    //           getRandomRecipes(6).then(this.setState({ loading: false }))
    //         } else {
    //         getRecipesByIngredients(ingredients, 24).then(this.setState({ loading: false }))
    //         }  
    //       }
    //     );
    // })
  }

  componentDidUpdate(oldProps) {
    if (oldProps.recipes !== this.props.recipes) this.setState(this.state);
  }

  updateRecipes() {
    this.setState({
      loading: true
    });
    this.props.getRecipes(this.props.recipe_filters).then(() => this.setState({
      loading: false
    }), () => this.setState({
      loading: false
    }));
  }

  render() {
    const _this$props2 = this.props,
          recipes = _this$props2.recipes,
          loading = _this$props2.loading;
    const indexRecipes = recipes.indexOrder.map(recipeId => recipes[recipeId]);

    if (loading) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-img-cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "loading-img",
        src: _stylesheets_assets_cook_gif__WEBPACK_IMPORTED_MODULE_3___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "recipe-index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, indexRecipes.map((recipe, idx) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_recipe_index_item_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: idx,
          recipe: recipe,
          rotateToBack: () => this.props.rotateRecipe(idx),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        });
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RecipeIndex);

/***/ }),

/***/ "./src/components/recipe_index/recipe_index_container.js":
/*!***************************************************************!*\
  !*** ./src/components/recipe_index/recipe_index_container.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _recipe_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe_index */ "./src/components/recipe_index/recipe_index.jsx");
/* harmony import */ var _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/recipe_actions */ "./src/actions/recipe_actions.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _actions_loading_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/loading_actions */ "./src/actions/loading_actions.js");






const mapStateToProps = state => ({
  user: state.session.user,
  recipes: state.entities.recipes,
  fridge: state.entities.fridge,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  getRecipesByIngredients: (ingredients, limit, ranking, ignorePantry) => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["getRecipesByIngredients"])(ingredients, limit, ranking, ignorePantry)),
  getRandomRecipes: num => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["getRandomRecipes"])(num)),
  fetchFridge: userId => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_3__["fetchFridge"])(userId)),
  getRecipesByName: (name, limit) => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["getRecipesByName"])(name, limit)),
  complexRecipeSearch: ({
    search,
    cuisine,
    diet,
    sort,
    sortDirection,
    minCalories,
    maxCalories,
    maxFat,
    maxCarbs,
    minProtein,
    ignorePantry,
    limit
  }) => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["complexRecipeSearch"])({
    search,
    cuisine,
    diet,
    sort,
    sortDirection,
    minCalories,
    maxCalories,
    maxFat,
    maxCarbs,
    minProtein,
    ignorePantry,
    limit
  })),
  rotateRecipe: recipe_idx => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["rotateRecipe"])(recipe_idx)),
  startLoad: load => dispatch(Object(_actions_loading_actions__WEBPACK_IMPORTED_MODULE_4__["startLoad"])(load)),
  stopLoad: () => dispatch(Object(_actions_loading_actions__WEBPACK_IMPORTED_MODULE_4__["stopLoad"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_recipe_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/recipe_index/recipe_index_item.jsx":
/*!***********************************************************!*\
  !*** ./src/components/recipe_index/recipe_index_item.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesheets_recipe_index_recipe_index_item_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/recipe_index/recipe_index_item.scss */ "./src/components/stylesheets/recipe_index/recipe_index_item.scss");
/* harmony import */ var _stylesheets_recipe_index_recipe_index_item_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_recipe_index_recipe_index_item_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_assets_leaf_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/assets/leaf.png */ "./src/components/stylesheets/assets/leaf.png");
/* harmony import */ var _stylesheets_assets_leaf_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_leaf_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheets_assets_leaf2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/assets/leaf2.png */ "./src/components/stylesheets/assets/leaf2.png");
/* harmony import */ var _stylesheets_assets_leaf2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_leaf2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheets_assets_salami_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheets/assets/salami.png */ "./src/components/stylesheets/assets/salami.png");
/* harmony import */ var _stylesheets_assets_salami_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_assets_salami_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/recipe_index/recipe_index_item.jsx";





const MAX = 21;
const MIN = 0;

class RecipeIndexItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  onDragStart(e) {
    let recipe = this.props.recipe;
    e.dataTransfer.setData("recipeId", recipe.recipeId);
  }

  handleModal(recipe) {
    this.props.openModal(recipe);
  } // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART


  render() {
    const _this$props = this.props,
          recipe = _this$props.recipe,
          rotateToBack = _this$props.rotateToBack,
          fridge = _this$props.fridge;
    const _this$props$recipe = this.props.recipe,
          vegetarian = _this$props$recipe.vegetarian,
          vegan = _this$props$recipe.vegan,
          title = _this$props$recipe.title,
          spoonacularScore = _this$props$recipe.spoonacularScore,
          image = _this$props$recipe.image,
          servings = _this$props$recipe.servings,
          readyInMinutes = _this$props$recipe.readyInMinutes,
          nutrition = _this$props$recipe.nutrition;
    let timeC = readyInMinutes < 60 ? readyInMinutes.toString() : readyInMinutes < 180 ? Math.floor(readyInMinutes / 60).toString() + "h" : "3h";
    let isVegan;

    if (vegan) {
      isVegan = "Vegan";
    } else if (vegetarian) {
      isVegan = "Vegetarian";
    } else {
      isVegan = "Non Vegan";
    }

    let calorieC = Math.floor(nutrition[0].amount);
    let leaf;

    if (isVegan === "Vegan") {
      leaf = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "leaf",
        src: _stylesheets_assets_leaf2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });
    } else if (isVegan === "Vegetarian") {
      leaf = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "leaf",
        src: _stylesheets_assets_leaf_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
    } else {
      leaf = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "leaf",
        src: _stylesheets_assets_salami_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item",
      draggable: true,
      onDragStart: this.onDragStart,
      onClick: () => this.handleModal(recipe),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image,
      draggable: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, title.slice(0, 25) + ".."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "make",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, timeC))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "icon-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spoon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, spoonacularScore)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "vegan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, leaf, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, isVegan)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "serving-size",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-index-item-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, calorieC))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RecipeIndexItem);

/***/ }),

/***/ "./src/components/recipe_index/recipe_index_item_container.js":
/*!********************************************************************!*\
  !*** ./src/components/recipe_index/recipe_index_item_container.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _recipe_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe_index_item */ "./src/components/recipe_index/recipe_index_item.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");




const mapStateToProps = (state, ownProps) => ({
  recipe: ownProps.recipe,
  rotateToBack: ownProps.rotateToBack
});

const mapDispatchToProps = dispatch => ({
  openModal: other => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])('showRecipe', other)),
  closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_recipe_index_item__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

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

/***/ }),

/***/ "./src/components/recipes_yj/main_filter_container.js":
/*!************************************************************!*\
  !*** ./src/components/recipes_yj/main_filter_container.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _main_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_filter */ "./src/components/recipes_yj/main_filter.jsx");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/recipe_actions */ "./src/actions/recipe_actions.js");
/* harmony import */ var _actions_loading_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/loading_actions */ "./src/actions/loading_actions.js");






const mapStateToProps = state => ({
  userId: state.session.user.id,
  fridge: state.entities.fridge
});

const mapDispatchToProps = dispatch => ({
  fetchFridge: userId => dispatch(Object(_actions_fridge_actions__WEBPACK_IMPORTED_MODULE_2__["fetchFridge"])(userId)),
  complexRecipeSearch: ({
    search,
    cuisine,
    diet,
    intolerances,
    sort,
    sortDirection,
    minCalories,
    maxCalories,
    maxFat,
    maxCarbs,
    minProtein,
    ignorePantry,
    limit
  }) => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_3__["complexRecipeSearch"])({
    search,
    cuisine,
    diet,
    intolerances,
    sort,
    sortDirection,
    minCalories,
    maxCalories,
    maxFat,
    maxCarbs,
    minProtein,
    ignorePantry,
    limit
  })),
  getRecipesByIngredients: (ingredients, limit, ranking, ignorePantry) => dispatch(Object(_actions_recipe_actions__WEBPACK_IMPORTED_MODULE_3__["getRecipesByIngredients"])(ingredients, limit, ranking, ignorePantry)),
  startLoad: load => dispatch(Object(_actions_loading_actions__WEBPACK_IMPORTED_MODULE_4__["startLoad"])(load)),
  stopLoad: () => dispatch(Object(_actions_loading_actions__WEBPACK_IMPORTED_MODULE_4__["stopLoad"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_main_filter__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/recipes_yj/main_filter_dropdown.jsx":
/*!************************************************************!*\
  !*** ./src/components/recipes_yj/main_filter_dropdown.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainFilterDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/recipes_yj/main_filter_dropdown.jsx";

class MainFilterDropdown extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.filterDropdown = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      showDropdown: false,
      vegan: false,
      keto: false,
      paleo: false
    };
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
      showDropdown: true
    });
  }

  handleCheck(type) {
    return e => {
      this.setState({
        [type]: !this.state[type]
      });
    };
  }

  handleClickOutside(e) {
    if (this.filterDropdown.current && !this.filterDropdown.current.contains(e.target)) {
      this.setState({
        showDropdown: false
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-param-dropdown",
      onClick: this.handleDropdown,
      ref: this.filterDropdown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Param1", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "g-o-b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, this.state.showDropdown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-dd-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-dd-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "vegan",
      checked: this.state.vegan,
      onChange: this.handleCheck("vegan"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), "Vegetarian")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-dd-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "keto",
      checked: this.state.keto,
      onChange: this.handleCheck("keto"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Keto")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-dd-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "paleo",
      checked: this.state.paleo,
      onChange: this.handleCheck("paleo"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Paleo"))) : null));
  }

}

/***/ }),

/***/ "./src/components/recipes_yj/recipe_show.jsx":
/*!***************************************************!*\
  !*** ./src/components/recipes_yj/recipe_show.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeShow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesheets_recipes_index_recipe_show_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/recipes_index/recipe_show.scss */ "./src/components/stylesheets/recipes_index/recipe_show.scss");
/* harmony import */ var _stylesheets_recipes_index_recipe_show_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_recipes_index_recipe_show_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! victory */ "./node_modules/victory/es/index.js");
/* harmony import */ var _util_calorie_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/calorie_util */ "./src/util/calorie_util.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/recipes_yj/recipe_show.jsx";




class RecipeShow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      nutritionReq: {
        "Calories": 2000,
        "Carbohydrates": 250,
        "Protein": 80,
        "Fat": 75
      },
      pieData: [{
        y: 100,
        label: ""
      }, {
        y: 0,
        label: ""
      }, {
        y: 0,
        label: ""
      }],
      legendData: [{
        name: "Carbs"
      }, {
        name: "Protein"
      }, {
        name: "Fat"
      }],
      label: false,
      pieChart: true
    };
    this.toggleChart = this.toggleChart.bind(this);
  }

  componentDidMount() {
    const _this$props = this.props,
          recipe = _this$props.recipe,
          fridge = _this$props.fridge; // ["Calories", "Protein", "Carbohydrates", "Fat"]

    let calories = Object.values(recipe.nutrition).filter(nutrient => ["Calories"].includes(nutrient.title))[0].amount;
    let protein = Object.values(recipe.nutrition).filter(nutrient => ["Protein"].includes(nutrient.title))[0].amount;
    let fat = Object.values(recipe.nutrition).filter(nutrient => ["Fat"].includes(nutrient.title))[0].amount;
    let carbohydrates = Object.values(recipe.nutrition).filter(nutrient => ["Carbohydrates"].includes(nutrient.title))[0].amount;
    let calorieAc = carbohydrates * 4 + protein * 4 + fat * 9;
    let carbPer = Math.round(carbohydrates * 4 / calorieAc * 1000) / 10;
    let proteinPer = Math.round(protein * 4 / calorieAc * 1000) / 10;
    let fatPer = Math.round(fat * 9 / calorieAc * 1000) / 10;
    debugger;
    setTimeout(() => {
      this.setState({
        pieData: [{
          x: "Carbs",
          y: carbPer,
          label: "".concat(carbPer, "%")
        }, {
          x: "Protein",
          y: proteinPer,
          label: "".concat(proteinPer, "%")
        }, {
          x: "Fat",
          y: fatPer,
          label: "".concat(fatPer, "%")
        }],
        label: true
      });
    }, 1000);
  }

  toggleChart() {
    this.setState({
      pieChart: !this.state.pieChart
    });
  }

  handleBarOn(type) {
    return e => {
      this.setState({
        [type]: true
      });
    };
  }

  handleBarOff(type) {
    return e => {
      this.setState({
        [type]: false
      });
    };
  }

  render() {
    const _this$props2 = this.props,
          recipe = _this$props2.recipe,
          fridge = _this$props2.fridge,
          user = _this$props2.user;
    let fridgeList = Object.values(fridge.ingredients).map(el => el.name);
    let calorieReq = Object(_util_calorie_util__WEBPACK_IMPORTED_MODULE_3__["calorieCalc"])(user);
    let nutritionReq = {
      "Calories": calorieReq ? calorieReq : 2000,
      "Carbohydrates": calorieReq ? 250 * calorieReq / 2000 : 250,
      "Protein": calorieReq ? 80 * calorieReq / 2000 : 80,
      "Fat": calorieReq ? 75 * calorieReq / 2000 : 75
    };
    let timeC = recipe.readyInMinutes < 60 ? recipe.readyInMinutes.toString() + "m" : recipe.readyInMinutes < 180 ? Math.floor(recipe.readyInMinutes / 60).toString() + "h" : "3h+";
    let chartDisp = this.state.pieChart ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-cont",
      onClick: this.toggleChart,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Calorie Distribution"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_2__["VictoryPie"], {
      animate: {
        duration: 2000
      },
      colorScale: ["lightblue", "#F1EAF7", "#E0EECF"],
      data: this.state.pieData,
      events: [{
        target: "data",
        eventHandlers: {
          onMouseOver: () => {
            return [{
              target: "labels",
              mutation: ({
                text,
                datum
              }) => {
                return text === "data" ? null : {
                  text: datum.label
                };
              }
            }];
          },
          onMouseOut: () => {
            return [{
              target: "labels",
              mutation: ({
                text
              }) => {
                return text === "data" ? {
                  text: "x"
                } : null;
              }
            }];
          }
        }
      }] // labelComponent={<VictoryTooltip />}
      ,
      labelComponent: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_2__["VictoryLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }) // innerRadius={200}
      ,
      labelRadius: 70 // padAngle={1}
      ,
      style: {
        parent: {
          maxWidth: "90%"
        },
        labels: {
          fill: "black",
          fontSize: 24
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar-chart-cont",
      onClick: this.toggleChart,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, recipe.nutrition.map((nutrient, idx) => {
      if (["Calories", "Protein", "Carbohydrates", "Fat"].includes(nutrient.title)) {
        let title = nutrient.title;
        let percent = Math.floor(nutrient.amount / nutritionReq[title] * 100);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "bar-graph-cont",
          key: idx,
          onMouseEnter: this.handleBarOn(title),
          onMouseLeave: this.handleBarOff(title),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, " ", title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "chart-test",
          style: {
            background: "linear-gradient(90deg, black ".concat(percent, "%, tomato ").concat(percent, "%)")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, this.state[title] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "bar-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, Math.floor(nutrient.amount), " ", nutrient.unit) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "bar-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, percent, "%")));
      }
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cont-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-show-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-show-ls",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recipe-show-photo-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "recipe-show-photo",
      src: recipe.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    })), chartDisp), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rs-main-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-text-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "rs-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, recipe.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rs-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: recipe.sourceUrl,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "Source: ", recipe.sourceName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "recipe-show-ing-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "list-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, "Ingredient List:"), recipe.ingredients.map((ingredient, idx) => {
      let ingrName = ingredient.name.split(" ");
      let subName = ingrName[ingrName.length - 1];
      let listStyle = {
        color: fridgeList.includes(ingredient.name) ? "black" : fridgeList.includes(subName) ? "blue" : "red"
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "rs-li-item",
        key: idx,
        style: listStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rs-li-item-pic-cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, ingredient.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "rs-l-i-p",
        src: "https://spoonacular.com/cdn/ingredients_100x100/".concat(ingredient.image),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }) : null), ingredient.amount % 1 === 0 ? ingredient.amount : ingredient.amount.toFixed(2), " ", ingredient.unit, " ", ingredient.name);
    })))));
  }

}

/***/ }),

/***/ "./src/components/recipes_yj/recipe_show_container.js":
/*!************************************************************!*\
  !*** ./src/components/recipes_yj/recipe_show_container.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _recipe_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe_show */ "./src/components/recipes_yj/recipe_show.jsx");



const mapStateToProps = state => ({
  fridge: state.entities.fridge,
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, null)(_recipe_show__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/root.js":
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/components/app.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/root.js";





const Root = ({
  store
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./src/components/sidebar/first_side.jsx":
/*!***********************************************!*\
  !*** ./src/components/sidebar/first_side.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/sidebar/first_side.jsx";



class FirstSide extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(e) {
    // let that = this;
    e.preventDefault();
    console.log(this);
    this.props.openSide("second"); // this.props.hoverMasterList(option);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "first-side",
      onClick: e => e.stopPropagation(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "first-drawer-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "first-drawer-main-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "d\xE9licieux"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      class: "btn",
      onClick: this.handleMouseOver,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "My List")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      class: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Profile"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FirstSide);

/***/ }),

/***/ "./src/components/sidebar/first_side_container.jsx":
/*!*********************************************************!*\
  !*** ./src/components/sidebar/first_side_container.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_side_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/side_actions */ "./src/actions/side_actions.js");
/* harmony import */ var _first_side__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first_side */ "./src/components/sidebar/first_side.jsx");





const mSTP = state => {
  return {};
};

const mDTP = dispatch => {
  return {
    closeSide: () => dispatch(Object(_actions_side_actions__WEBPACK_IMPORTED_MODULE_2__["closeSide"])()),
    openSide: side => dispatch(Object(_actions_side_actions__WEBPACK_IMPORTED_MODULE_2__["openSide"])(side))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mSTP, mDTP)(_first_side__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/components/sidebar/second_side.jsx":
/*!************************************************!*\
  !*** ./src/components/sidebar/second_side.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/sidebar/second_side.jsx";



class SecondSide extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "second-side",
      onClick: e => e.stopPropagation(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "second-drawer-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SecondSide);

/***/ }),

/***/ "./src/components/sidebar/second_side_container.jsx":
/*!**********************************************************!*\
  !*** ./src/components/sidebar/second_side_container.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _second_side__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second_side */ "./src/components/sidebar/second_side.jsx");
/* harmony import */ var _actions_side_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/side_actions */ "./src/actions/side_actions.js");


 // import { hoverMasterListItem } from '../../actions/side_actions';

const mSTP = state => {
  return {};
};

const mDTP = dispatch => {
  return {
    openSide: side => dispatch(Object(_actions_side_actions__WEBPACK_IMPORTED_MODULE_2__["openSide"])(side))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mSTP, mDTP)(_second_side__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/stylesheets/App.scss":
/*!*********************************************!*\
  !*** ./src/components/stylesheets/App.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/App.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/App.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/App.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/assets/apron.png":
/*!*****************************************************!*\
  !*** ./src/components/stylesheets/assets/apron.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/stylesheets/assets/background1.jpg":
/*!***********************************************************!*\
  !*** ./src/components/stylesheets/assets/background1.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background1.b69a27b2.jpg";

/***/ }),

/***/ "./src/components/stylesheets/assets/choose_meal.gif":
/*!***********************************************************!*\
  !*** ./src/components/stylesheets/assets/choose_meal.gif ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/choose_meal.30d6e3cc.gif";

/***/ }),

/***/ "./src/components/stylesheets/assets/cook.gif":
/*!****************************************************!*\
  !*** ./src/components/stylesheets/assets/cook.gif ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cook.82bdfd20.gif";

/***/ }),

/***/ "./src/components/stylesheets/assets/cooking.jpg":
/*!*******************************************************!*\
  !*** ./src/components/stylesheets/assets/cooking.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cooking.14e7c20d.jpg";

/***/ }),

/***/ "./src/components/stylesheets/assets/cutlery.png":
/*!*******************************************************!*\
  !*** ./src/components/stylesheets/assets/cutlery.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cutlery.5a518b6c.png";

/***/ }),

/***/ "./src/components/stylesheets/assets/easy.jpeg":
/*!*****************************************************!*\
  !*** ./src/components/stylesheets/assets/easy.jpeg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/easy.e34dbffe.jpeg";

/***/ }),

/***/ "./src/components/stylesheets/assets/food_background2.jpg":
/*!****************************************************************!*\
  !*** ./src/components/stylesheets/assets/food_background2.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/food_background2.99a60db6.jpg";

/***/ }),

/***/ "./src/components/stylesheets/assets/grocery.gif":
/*!*******************************************************!*\
  !*** ./src/components/stylesheets/assets/grocery.gif ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/grocery.b04fede6.gif";

/***/ }),

/***/ "./src/components/stylesheets/assets/harvest-two.png":
/*!***********************************************************!*\
  !*** ./src/components/stylesheets/assets/harvest-two.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/harvest-two.668f0f15.png";

/***/ }),

/***/ "./src/components/stylesheets/assets/kitchen_counter_flipped.jpg":
/*!***********************************************************************!*\
  !*** ./src/components/stylesheets/assets/kitchen_counter_flipped.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/kitchen_counter_flipped.0223c6c0.jpg";

/***/ }),

/***/ "./src/components/stylesheets/assets/leaf.png":
/*!****************************************************!*\
  !*** ./src/components/stylesheets/assets/leaf.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/leaf.8e14b880.png";

/***/ }),

/***/ "./src/components/stylesheets/assets/leaf2.png":
/*!*****************************************************!*\
  !*** ./src/components/stylesheets/assets/leaf2.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/leaf2.e5965cd8.png";

/***/ }),

/***/ "./src/components/stylesheets/assets/line_chart.gif":
/*!**********************************************************!*\
  !*** ./src/components/stylesheets/assets/line_chart.gif ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/line_chart.92494fe1.gif";

/***/ }),

/***/ "./src/components/stylesheets/assets/loupe-2.png":
/*!*******************************************************!*\
  !*** ./src/components/stylesheets/assets/loupe-2.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCxgGGQe/kM3kAAAieklEQVR42u3deZxX1Znn8U/9qgpKVrVQEEGrRBMjiyxqXDCvJE1UElE7Pajx1c1MYg89JmPoJEamsw2txiHLJCHJy2jUJGI6iyaZ2CQuoNnElUVAwV0WWUQoFBCh1t/8UZQIVBVVdZ77e+695/s+r1f8J7/Lfe557lPnbueUIcmopJpqqhnEIAZRzSCq6U9foB+VwBFAL/oCu2gA3gAaeQvYxU62UkcdW/b+t446Gr0Dkjwq896B3KjkKI7hhHfa8ZSbbv8NXnmnbeIVdnsHLHmgAhCiipGMZgxjOJFhxid855pZz4us4GlWsIo93gdCskoFoPuO41RGcyqjOYkK750BmniRFSznaVawzntnJFtUALqqnJM5h4mcS433rnTiNRazkEd4kgbvXZEsUAE4lH6M5RwmMpHDvXelG3axjIU8wiNs894VSTMVgI6UczqTuYDTKHjvSoBmFnM/97GIFu9dkTRSATjYID7EJKZwjPeOGKrjTzzIH9jovSOSLioA73YaF3MB4zP9N78zLSzhfu5hifeOSFqoALQayVQ+wXu8d6NE1nIPd7PQezfEnwrASKZyGSd774aD1czjDpZ674Z4irkA1PKPXMZI791w9gy/5ues8d4NkdIpZxJ30URRjSJFmlnAVHp5d4tI8k5iNpvdT7k0tm3cwijv7hFJSm+msoAW9xMt3W0x0+nj3VUitgZzPVvdT66stC1cz2DvLhOxcSJzeNv9pMpaq2du9DdIJfMmMk+D/h63FhYwxbsLRXqigitY4n4K5aEt5vJUfPYs0kUFpvKC+4mTp7aa6SWd8ESkh8qYwnL3EyaPbRXTVAQk3SZp2J9oe4apUb89Kik2iSfdT5AY2nKmene1yP5O42H3EyOm9jcmeHe5SKtjuEXv9Ze8tTCXId5dL7GrZAbb3U+GWNtbzKLKOwUkXlN4yf0kiL2tZZp3GkiMRvOQe/KrtbYH9RVhVmXzuW4VX+FOTvTeDdnrBKbTl4U0ee+IdFcWn+lO5NYop/BKu5eZzp+8d0K6J2vz3w5kDn/V6Z9KI3iQuRzpvRuSXxeyzv16V63ztpF/8E4T6brsXAIM4YeZS609rGELddSxha3UUcdWGthJE0XeBBrYBfSlF3A4ZVTQn95UU001gziKaqo5iprMPWq7m6vZ7L0T0hVZKQAXcRtHee/EIRVZw8usYTVrWMNqNhlt9xhqqaWGGmoYQU0Gem0LVzLPeyfk0NKfSnAYs7k6xXu6gxdZxRJWsoytJfj3+vMeRjKBUxjLIO/gO3EnV7HLeyekc+k9rdqM5z9SedOvkSU8yiM8xWrHvahlHBM5m/FUeh+QdjzLFSzz3gnJrjJmsMf9ttb+bQcLmMUkDvM+OPupZAIzuCt1E582MCtzT5okJYal6l2/JhbyZcanfMxUYAJf4ZFUfRy1gGO9D4tkz2Tq3FO3tW3kJ1zKEd4HpFuO5DJ+yib3Y9fatnK+9wGRLCnjqzS7p22Rl7kx9X/zOz+OE5jNK+7HsUgTX87wcZSS6s9v3RN2HXOYmJuUHcmsFHw3OY/DvQ+EpN8o5/l8X+O7nJWbU3+fMs7me86rIj6vpUakc5fzllt6xrBGrve6yDu5zPsQSFpV8B23xFzP9dR4H4CSqeUGNjgd6Ra+rWVG5GD9uc8pIe/joghTsoKLuN9p2bR76e8dvqTLUJf5/OuZG/lcNicxh90OR34Fw71Dl/QYzdqSp+B25jDMO/BUGMwsh3cuNjDeO3BJhwvYUeLkW83V9PUOO1X6MYM1JS/Bej1I+BQNJU27V5lBb++gU6mS6awvaV80cZV30OKpjNklTbhNfFYnf6eq+FdeK2mf3JjDdy6kS8q5vYSJtpWZ9PEOORP6MKOkReDOCJ/BCJX8qmQptotZevDULf25nrdL1j+/TOVsBpKgXvyuZOk1L6JXfCwNY27J3hP4Q+bmPZQAfXigRIm1hHO9g820M3isRD31Z43RYtGPP5UkpTYyPaMrH6VJGdNKNK/Awwz0DlaSV82iEiRTM3P0F8XMAH5QkvkZFlHtHaokq5rlJUikZzjTO9DcOZuVJei55SoBeTaAJxNPoQZm61l/IiqZWYIpWp/K2ORr0mV9+Gvi6fOoppxI1MgS3BR8lH7eYYq9KhYknDi7maEpqBNX4HOJfz84X2O4vKnkPxNOmpWM9Q4yGiNZlnBv3qNXg/KknF8kmi4t3KLXfEuqitkJPxf4jR7h5kUZP0k0VTbps1IXkxP+YuA2fSaUD8l+8XdPBlYNzquj+UOifft17wAl3JUJJkiTVp5zVsbMROcY1nwBGXcBjYklx1bO8w5PgA8muNpAg/o4y0bxZmKpsZRa7/Bkr+E8kVg/7+BU7/CkZ4ayLrG0uFN3/VOlitsS6+sNmkE4i/on9qy4gf/hHZy04zOJXe4t1buBWVOR2DIf23VVmFrJze/8R00bli1JLfK1gXHeoUknRiW2wsM3vUOTrrs8oSRYrqvB1DsmoTWeWrjUOzTpmpMTGgg+wADv0KQL+jEvkf7fqS89s2AgLyTS/T/Su+GZUcGPE8mB5/QnIO3K+G0iXf8N78CkW8r4ViJ5cI++D0i3ryXS7bO9w5IemJlILvybd1jSsY8k8F54C1/wDkt66H8msK5AMxd4hyXtG5bAItPNeukn065KYNaALQz1DksOVuAh865uYpp3WBJoWgKjwvm6E5A+1yYw+L/SOygx8E8JjAI+7x2U7G889eanv74Fz4tPmd8L2KMZINOkD8+a1/hrvYMSQzPM82OVvgdNj5vNu/dr3iGJsVnmOfJD75Ck1WTzAd53vUOSBHzDOEtamOIdksAQXjfu2B95hySJKDN/QXgzg72Dkt8Yd+q9+vI7t8rNl4f5tXdIsbvQuEM190u+9ecp44y5xDukmA3gVdPOXM8w75AkYdYzRW7kcO+Q4nWLaVdq/tc4jDSeK/om74Bi9QHTu/+aAT4etqtFNHOud0AxquJ50zquj35i8hnT3HlWy4mX3o2mXTjXOxwpMdsFY6/zDic2o2kw7L7FVHkHJCV2mOnzgAbNF1ha8w07r06LfEXpeLYYZtFD3uHE5OOGHdfM+d7hiJNJpnMFXOQdTix6mc77O9M7HHH0FcNMekm3Akvjfxl22n9qbpeolXGvYTZ90TucGAxmu1mH6WMOOYpNZvm0g2O8w8m/n5p1Vwsf8w5GUuACwxfKbvUOJu/GG87vpq/+pdUPzXKqmdO8g8m3h826aoWe/cteh/GMWV79xTuYPPuoWTftYYx3MJIiI9ltllv6piQhZSw266QZ3sFIynzBLLee8A4lr/7erIse10q/coACj5jl14XeweRRGcuMuqde721LO0abrS2xgoJ3MPlzmVl91pTf0r7rzXLsH7xDyZtyVhl1jb7dlo70ZqVRlj2jMYCtaUYd08w53qFIip1p9p7JJ7xDyZMKXjLqljneoUjK3WSUac/rRrOdK4w6ZSP9vUORlBvIZqNsu9Q7lPxYYtQl/9U7EMmA/26UbYu8A8mLDxt1yBLdmJEuKLDIKOM+4B1KPvzRpDNaNHmzdNE5Rt8H3uMdSB6cbHRf9j+8A5EMucvoj877vAPJvttNuuJtjvcORDJkOLtM8u4W70Cybgh7TDpilncgkjE3mOTdbs05FcamG7bo8Z900wDqTHLv370DybIqtpp0wjXegUgG2Uw+u0WvnveczQtAm+jjHYhkUF9eM8m/y70Dya4/m3TA1d5hSEZ93iT/tGZQD40weRq7gcO8A5GMqmK9QQa2cJJ3IOnV2bt5/2KyaMd17PYOUjJqD7MNtlLGp7wDyaJeJh9lrKbSOxDJsN6sNbkLpSzsQMcjgIs52mD7/5dG7xAlw+r5nsFWhmiWwO6zWAB8G/28w5CM688bBpl4r3cYWVNr8gXADd5hSA7MNsjEZr2K3j1fNTjoe7RUoxg41mS24C95h5EtFks13e4dhOTEHQbZuNw7iCwZZXDAW7T4lxgZbfJGyineYaRR+08BLGZTe4AV3sFJTjzNAoOtTPUOIzss1gCY4h2E5MglBhn5rHcQWTHW4GBvpMI7DMmRCjYYZOUo7zDSp71LgMsMtns7Td6hSY40cYfBViwyOwIvGtwAHOEdhOSMxZspL3kHkQWnGQy17vcOQnJogUFmjvMOIm0OvgS42GCrt3qHJTl0m8E2LvIOIv0WB1fZ1/TtlSTA4vvUx72DSJsDRwCDDQZJv9QXgJKABn4dvI3TGeQdRrocWADON1i+K7ybRNpzV/AWCpznHUS6/TJ4kLXOZB4hkYOVGUwPcqd3EOmy/9/7cj4SvMVfUfQOSnKqyG+Dt3GBlqjt2JkGD1omeAchOfZ+gww9zTuINNm/Gk4O3t4rLPUOSXLsSdYEbyM8y3PEugD8WhcAkqAidwdvQwWgAwMNXrYc7x2E5NzpwTnapJUq2zc5+NBu0hMASVjBYMGw8FvdufHuS4Bzgrd2ny4AJGEtzA/eRnim54Z1ARBJWvinZioA7ahgZ/C11ZHeQUgEjqQpMFPf0nQ1bfaNAMYFL+LxGNu8w5EIbGNx4Bb6asLaNvsKgC4AJCvCM22idwhpoQIg2ROeaboLcJDQSRfr9AhQSqTAm4HZut47hLRoGwEcx9DALT2mR4BSIi08FriFYxnuHUQ6tBWAscFbWugdikTk0eAt6DYgsK8AhB+OR7xDkYiE/7lRAQD2FYDRgdtpZIl3KBKRJ4KnnQvN+JywGgEs4W3vUCQib7MscAsaAQBtBeAwTgrcji4ApLRCM+699PYOIQ1aC8D7KA/cTvhNGZHuCC0AFbzPO4Q0aC0AY4O3ozsAUlpPBW9BFwG0FYDQGyLbWecdiETmFXYEbkG3AWkrAKHLJj+jl4CkxIqsDNyCRgC0FYD3BG5lmXcYEqEVgb8/0TuANCgAlRwbuJWnvcOQCIVm3fDgW985UMDiQITWYpHuCy0AlQzzDsFfAagN3Eb41ZhI960IvvNU4x2CvwLhh2FN8P1Yke57M/ij3hO8Q/BnUQBe8g5CIvVy4O9rvAPwZ3EJsMY7CInUmsDf13gH4M/mEkDEw+rA34f+6csBixFAaDeI9IwKQLAClQwJ3MZa7yAkUqEFYKjWBygw6IAVgrvvFe8gJFJrAn9f0FI2BaoDt7CHzd5BSKQ2Uh+4hUHeIXgLLwBr9SGQOGkJ/go1NPszrxBcA/X3X/y8Hvh7jQCCD8FW7xAkYqHZpxFAcAGo8w5BIhaafRoBBNdAjQDEj0YAgcILgEYA4ic0+1QAdA9AMiw0+3QJQP/ALWzzDkEiFjoCGOgdgLdC8PIIugQQP6HZ18s7AG/hBWCXdwgSsdDsUwEIPgShL2OK9FxD4O+jXx4sfAQQ2gUiPRf650cFIHgEoAIgfkKzT5cAugSQDNMIIJAuASTLNAIIpEsAyTKNAAKpAEiWqQAECp0OTEQyrKCrKMkw3cEKpAIgWaYCEKgQfBWlAiB+dAcrUPgIIPrbKOJII4BAugSQLNMIIJAuASTLNAIIpEsAyTIVgEDhI4C+3iFIxPoE/r7ROwBv4QUg+mkVxVFo9u3wDsBbIfgQRD+tojg6KvD30c9oWdDM6pJhodmnAqACIBkWmn1veAfgraDFlSTDQrNPBUBrq0iG6RIgUPglgEYA4kcjgEDhI4CjvUOQiIU+BVABCB4BHE+ZdxASqQLHBW4h+nWtwgtAFUO8g5BIDQ1+FfhV7xC8FdhGS+A2ar2DkEiFZt4erW1doJHXArdR4x2ERCq0AKyn6B2CtwKwOnAbNd5BSKRCC8A67wD8qQBIdtUE/j76OwCtBWBN4DZ0D0B8hGaeCoDJCOBE7yAkUiMCf7/eOwB/FiOA4xngHYZE6EiGBW5B9wBMRgBljPYOQyI0KngLoZmfAwVgPc2BWxnjHYZE6NTA3zfysncI/gpAY/C1kEYAUnqhWfeiZgRsWxz0xcCtaAQgpRdaAJ7zDiANWgvAisCtjNEHQVJiheB7AKu8Q0iD1gLwdOBW+utlICmxE+gXuAWNALAaAcB470AkMuOCt6ACQFsBWElT4HbO9g5EIjMx8PdFnvcOIQ1aC0A9LwRu5xzvQCQyoX9y1vKWdwhpUNj739CLgPHBizSJdF1fxgZuYbF3COnQVgBCbwNWcrp3KBKRM6kI3MIi7xDSwaoA6CJASik821QAgH0FYHnwllQApHRC7wC0sNQ7hLRZTzGobXunmIgkq5ztgdmqR4B77TtpHw3c0hEGT2ZFuuL04A/Qn/QOIS32FYBHgrd1gXcwEonwTNMdgL0sC8Bk72AkEuEFQA8BD1LBzsDrqiaO9A5CIjCI5sBM3RW8oEhu7BsBNAVfF5UzyTscicD5wbebH6XeO4i0ePeh1EWAZEH4BcCfvUNIp/MDB1ZFNmleAElYgc3BeXqWdxDpNJCm4EM7wTsIybkzgnN0J5XeQaTHuy8BtrMkeHtTvQOSnLs0eAsLNRfgPvvfTrkveHuX6iJAElTGfwnexl+8g0iv9wcPr4r6KlASdJZBhp7hHUSa7D8CWGSwXvpl3iFJjoVfANQZXOjm2C+C6+s6XQRIQgrBn6wVmesdRLoc+EpF+F2A4XrIIgmZyLHB25jnHUS6HFgAHqAleJvhwzSR9oQ/Y2rgAe8g0m5R8CBri960lgT04vXg3JzvHUTaHPxWdfhFwCCmeIclOfRxjgrehi4ADmmCwYMWDbPE3kMGmVnrHUQWvBB8mFsY4R2E5MwJwR8BFw1WwMqd9j6svDt4q2V80jswyZl/Nphz8v95B5ENYwyGWhv1wYUYqmCDQVae4h1GVqw0ONgXeQchOfL3BhmpNwDb0f6w6jcGW/60d2iSI1cZbONX3kFkx8kG9bbIqd5hSE6MpsXgxvTx3mFkydMGBeCn3kFITsw1yMa/egeRLV8xOOT1DPUOQ3JgGA0G2WhxERGR4wymByvyf7zDkBz4lkEmNnK0dxhZc7/BYd9GP+8wJOMG8KZBJv7eO4y06vjlitsMtn4EV3oHKBk3nYEGW7nFO4zsqeQ1g8q7hl7egUiG9eZVkyzUytUd6PjANHKHwfaP1xhAAvwLwwy2cqvBLBcRGmHw9LXIRg7zDkQyqspgCrAijXoa1VN/Njj8RWZ4hyEZdY1J/v3OO4zsusKkA17XswDpgX4Gi4AVKXK+dyDZVcUWky641jsQyaAvmeTeK7oBGOI6k07YygDvQCRjBlJnknv/6h1Itg1mt0k3XOcdiGTMjSZ59wb9vQPJultNOuJtarwDkQw5wegPz2zvQLLvvQZzsRUp6mts6YbfmeRcA8O9A8mDeSadUeQD3oFIRnzIKOMsXmUTPmjUHUt1P1a6oJzlRhk31juUvHjcqEP0WrAc2lVG2abVKcxcbtQlr+lxoBzC4QYLgLW2Sd6h5EeFwWIhre0H3qFIyt1slGkPeweSL/9o1C3NTPQORVLsAyYfoBUp8mHvUPKlnFVGHfMcVd7BSEr1Nsuyhd6h5M+lRl1TZJZ3KJJSXzfLsQ96h5I/ZTxl1Dn1jPIORlJotMnsv0WKPOQdSj5dbFafn6DcOxhJmQKPmuWXXjlLRBlPmnXR572DkZT5olluzfcOJb8mm3XSHi0cJu8yyujjnyLNTPAOJs/+ZlYCntbTANmrj9nd/yI/8w4m38YZfRtYpMgc72AkJW4yy6m39f1f0m4366wWLvQORlJgstnLP3rEXAJHmyzV1No2M8Q7HHF2tMkCNK1tA329w4nBtWYdVuQPlHmHI44KJmtQtrVPeYcTh15mnwYVKfJl73DE0SzDTFqmt0tK5RLDbmtmsnc44uQ8k0XoW1sLH/IOJyYPGJaAbZzgHY44qGGrYRbd7h1OXEaZvbddpMhSrR8YnT4sM8ygLVR7BxSbGwy7r8jPvcOREvuZaf78N+9w4lPFc6Zd+BnvgKSEPmuaO3/VsyQPZxm+FVikiSneAUmJTKbRMHPqOcU7oFj9yLSO79A0zlEYZfgqWZEiN3gHFK8BvGralRv0JnfuDWWdac48qxvInj5m2plFnmagd0iSoP6m9/6LNHKGd0ixu9u4BNxHhXdIkpAK0xd/i2jV6RQYbLaQQ1v7se7p5lKZ4ZekrW0ZvbyDEtvPOVvb97xDkgR80zhL6hnjHZK0spvQoa3N8g5JjF1nniNf8g5J2lhO6dTWrvEOSgxZfkLe2h7XvaI0sZvUsa21cJV3UGLk0+YXiTt5j3dQsr9rzGt8i5YTz4V/Mn1jtLVd4R2UHKjAAvNubmKad1gSaJrhN/9t7WbvoKQ9x5p+393amnUhkGmfTuCv/3K9+5dWf5dAtS/yVe+wpIeuNb/2L/IW7/MOSzr25QQKQJHZ3mFJD8xMJBd0UZhqZfw+kW7/tt4OzJQyvpNIHtzmHZgcykCeT6Trf6znvplRYf7Sb2t7jN7eocmhvZftiXT/fH0pmAn9+GMi/b+JY71Dk665JIGbP0WKrOA479DkEIayNJG+r+dc79Ck676dSBIU2ch479CkE6ONp/vY1/7ZOzTpjgruTSgRdnCBd3DSgY+yM6Fe/753aNJd/XkqoWRo1AzCqfRZ06k+390e1g3gLBrK2oQSosjP6eMdnrxLFT9JrK+LvMHp3gFKT4zkjcSSYpkWFEuN41iU4OmvEpBh5yc2LCyynYu9wxPgo2xL+PRXCciwKxNMihZmU/AOMGplzEzgcx+VgFy5MdG0uJfB3gFGa4j5LL+dtzo9BM6iMm5JNC1e16JiLs5nU0lPf40CMqvALxJOjLn09Q4yKlXMSehtT5WAXCo3X0DkwLaKcd5BRmMUK1xOfpWADOvN/IQTYw9foNw7zNwr54vscTz9i+heQEb14S+Jp8ZSpUaiRvO488mvUUCGDeDJxFOjkdlUeQeaS1XMot791FcJyLRqlpcgOZ5lonegufMBnnM/6fdvuhDIpOrEXxstUqSZmzR9iJnDudnpnr9KQA7146GSpMdWZuimYLAC09jsfqp31HQhkEl9eKBECbKK872DzbQPssz9JFcJyKFe/LZkKTJP3w32yHDmup/eKgG5VZn424H72m5uYIB3wJkykBvNl3tNruleQCYVuLWkSTJLRaBL+jKzJB/4WjaNAjKpjK+XNE028zmtK9epPlzD6+6nc88KvEYBmfRJGkpcBGbqRaF29WI6G9xP5J43jQIy6ryEFhLpuK3lc/T3DjtVBvAFXnU/hUObRgEZNSrB6UM7ajuYw3DvwFNhCLMyd83fUdMoIKOSWk+m81bPHYzxDt3Vqcwt8SVYa3uYuoS2rFFARiW1otyhWgsPcEmE885XcEniH2h31L5PBeNVAmR/5XzL7Y3zjdwY0etCI7iRjU5Heg+f3LsXKgFykIt40ykxi7SwkOk5f0zYi6kscPywZwNnvmtvxrI1oX9H9wIy6xTnz05f5/tMzOFk4wXO5QdscT22jzH0gL3SKEAOMoDfuaZpkSKv8h3OpMz7UJgo4yy+y3r3Y3o7vdvZO5UAOUgZ/0aTe8IWWc03OT3Do4ECZ/At1rgfxyI7mdbhXqoESDs+4jxc3dc2M5dPUO19QLplEFdwZ2q+41/OyZ3urUqAtGOo22Oq9loTj/G/OSPlU4yU835m8XjJluvqSru5CzdWVQKkHWXMcJ+C+sC2k4XMZkrKJhzry0RmMi+x06inbQef6GIEeiIg7RrLSvc0bq818iTfZSonON4qLGMEU/keixJcgzmkPc6IbkSjUYCDLNznruIbXJ3iPW3gJZawhJWs4PUS/HsDGc0pjGQCp9LPO/gONfIdvkpjt34zlgcTutfyJuexyPuQpFF6T6v9XcjtHO29E13wKi+zmjWsZjWr2UjRYJsFhlJDLbXUUsOJDPMOsguWM40VPfjdeBZwZCJ7tI2PsNT3oKRRVgoADOYHTPXeiW6qZy1bqGMrde/8dw972A1sp4VG3gL6UUmBgcBhVFHFIKqp5qh3/nt8u8/P06uJb3AdDT38tUqAdOhjrHO/rlXrvK0KvuWm24HSoQHclKpHXGrvbvV83WS2Jd0OlE6cwyr3VFc7uP2NkWZ9rFGAdKKSmal7PyDuto0Zxq9MqwRIp0aywD3t1YoUaeEniTy804WAHMJFvOie/rG3ZZybWP+qBMghVDLDcQqR2NtGpif8bYQuBOSQqpmTio+H42q7mF2SlZZUAqQLxvEX91MintbMzzi2ZH2rCwHpkvN4wv3UiKHNZ1yJe1YlQLpoEovdT5A8t4V82KVfdSEgXVTGFJ5yP1Hy2Bbyd479qhIgXVZgqvPcwnlrjzLFu1NVAqQ7yrmUJ91PnDy0+Uzy7sy9dC9Aumkid+kRYY9bA3dxhncX7kejAOm2Ecxhl/vJlLWW1tWTVQKkB47mutRMM57+9gqfo793l3VIFwLSI72d18XLQmtmAVNTPvW5RgES4ERmaV6hdtt6ZnOcd/d0kUqABKjk49yrmYXeaQ38nskZWwJNFwIS6Di+xHL3k8+3NfM3rmKQd1f0iEqAGKhlBkvcT0SPtpJZ3Vq4I310ISBGRnE9z7ufkqVqK/j3QyzXmRUaBYihccziiRzfG6hnAZ+l1vswm1IJEGPVTOUWNrifrrbJfBfTONz70CZCFwKSgAKn8zUey/iLxG9xPzN5f+qf7IfRKKDHsrM0mJe+jOMcJnIOR3jvSjfsZikLeZCHqffelZLQsqI9pALQVRWMYSJnM7GEk2F1V5EXWMQiFrE0khN/H60p2CMqAN03nDGM5lRG814qvHcGKLKWJSxiEUvY7r0zjlQCekAFIEQvRjKa0YzhRIZTWcJ/uZEXeZbnWcVzPMcu7wOREioB3aYCYKWcYdRSQy211FLDUNNXa+t5lfWsYx3rWc9LvEKjd8CppBLQTSoASamg+p12FIOoppo+HA5UcRgwkAKV9AN2swfYRQOwkyZ28gbbeGPv/25jKxvZ7B1OZqgEiERN7wWIRE0lQCRqKgEiUVMJEImaSoBI1FQCRKKmEiASNZUAkaipBIhETSVAJGoqASJRUwkQiZpKgEjUVAJEoqYSIBI1lQCRqKkEiERNJUAkaioBIlFTCRCJmkqASNRUAkSiphIgEjWVAJGoqQSIRE0lQCRqKgEiUVMJEImaSoBI1FQCRKKmEiASNZUAkaipBIhETSVAJGoqASJRUwkQiZpKgEjUVAJEoqYSIBI1lQCRqKkEiERNJUAkaioBIlFTCRCJmkqASNRUAkSiphIgEjWVAJGoqQSIRE0lQCRqKgEiUVMJEImaSoBI1FQCRKKmEiASNZUAkaipBIhETSVAJGoqASJRUwkQiZpKgEjUVAJEoqYSIBI1lQCRqKkEiERNJUAkaioBIlFTCRCJmkqASNRUAkSiphIgEjWVAJGoqQSIRE0lQCRqKgEiUVMJEImaSoBI1FQCRKKmEiASNZUAkaipBIhETSVAJGoqASJRUwkQiZpKgEjUVAJEoqYSIBI1lQCRqKkEiERNJUAkaioBIlFTCRCJmkqASNRUAkSiphIgEjWVAJGoqQSIRE0lQCRqKgEiUVMJEImaSoBI1FQCRKKmEiASNZUAkaipBIhEbTx1CZWAB71DE5FDS2YU8BTV3oGJSFfYlwCd/iIZYlsCdPqLZIxdCdDpL5JBNiVAp79IRoWXAJ3+IhkWVgJ0+otkXM9LgE5/kRzoWQnQ6S+SE90vATr9RXKkeyVAp79IznS9BOj0F8mhrpUAnf4iOXXoEqDTXyTHOi8BOv1Fcq7jEqDTXyQC7ZcAnf4ikTi4BOj0F4nI/iVAp79IZPaVAJ3+IhFqLQE6/UUiNZ4HObLr//f/D15ieAITx76fAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTExLTI0VDA2OjI1OjA3KzAwOjAwvZ3phwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0xMS0yNFQwNjoyNTowNyswMDowMMzAUTsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/stylesheets/assets/meal_plan.jpg":
/*!*********************************************************!*\
  !*** ./src/components/stylesheets/assets/meal_plan.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/meal_plan.51e25de6.jpg";

/***/ }),

/***/ "./src/components/stylesheets/assets/note.jpg":
/*!****************************************************!*\
  !*** ./src/components/stylesheets/assets/note.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/note.3ae82140.jpg";

/***/ }),

/***/ "./src/components/stylesheets/assets/pie_chart.gif":
/*!*********************************************************!*\
  !*** ./src/components/stylesheets/assets/pie_chart.gif ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pie_chart.d6682eec.gif";

/***/ }),

/***/ "./src/components/stylesheets/assets/pot.gif":
/*!***************************************************!*\
  !*** ./src/components/stylesheets/assets/pot.gif ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pot.844121ac.gif";

/***/ }),

/***/ "./src/components/stylesheets/assets/salami.png":
/*!******************************************************!*\
  !*** ./src/components/stylesheets/assets/salami.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/salami.527f7537.png";

/***/ }),

/***/ "./src/components/stylesheets/cart/cart.scss":
/*!***************************************************!*\
  !*** ./src/components/stylesheets/cart/cart.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./cart.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/cart/cart.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./cart.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/cart/cart.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./cart.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/cart/cart.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/modal/modal.scss":
/*!*****************************************************!*\
  !*** ./src/components/stylesheets/modal/modal.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./modal.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/modal/modal.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./modal.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/modal/modal.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./modal.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/modal/modal.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/recipe_index/recipe_index.scss":
/*!*******************************************************************!*\
  !*** ./src/components/stylesheets/recipe_index/recipe_index.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipe_index/recipe_index.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipe_index/recipe_index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipe_index/recipe_index.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/recipe_index/recipe_index_item.scss":
/*!************************************************************************!*\
  !*** ./src/components/stylesheets/recipe_index/recipe_index_item.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_index_item.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipe_index/recipe_index_item.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_index_item.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipe_index/recipe_index_item.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_index_item.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipe_index/recipe_index_item.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/recipes_index/main_filter.scss":
/*!*******************************************************************!*\
  !*** ./src/components/stylesheets/recipes_index/main_filter.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./main_filter.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/main_filter.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./main_filter.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/main_filter.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./main_filter.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/main_filter.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/recipes_index/recipe_show.scss":
/*!*******************************************************************!*\
  !*** ./src/components/stylesheets/recipes_index/recipe_show.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_show.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/recipe_show.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_show.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/recipe_show.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./recipe_show.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/recipe_show.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/recipes_index/toggle.scss":
/*!**************************************************************!*\
  !*** ./src/components/stylesheets/recipes_index/toggle.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./toggle.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/toggle.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./toggle.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/toggle.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./toggle.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/recipes_index/toggle.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/weekly_cart/weekly_cart.scss":
/*!*****************************************************************!*\
  !*** ./src/components/stylesheets/weekly_cart/weekly_cart.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_cart.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_cart.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_cart.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_cart.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_cart.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_cart.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/weekly_cart/weekly_cart_day.scss":
/*!*********************************************************************!*\
  !*** ./src/components/stylesheets/weekly_cart/weekly_cart_day.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_cart_day.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_cart_day.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_cart_day.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_cart_day.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_cart_day.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_cart_day.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/stylesheets/weekly_cart/weekly_macro.scss":
/*!******************************************************************!*\
  !*** ./src/components/stylesheets/weekly_cart/weekly_macro.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_macro.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_macro.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_macro.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_macro.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./weekly_macro.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/components/stylesheets/weekly_cart/weekly_macro.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/userform/form_personal_container.js":
/*!************************************************************!*\
  !*** ./src/components/userform/form_personal_container.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _form_personal_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_personal_details */ "./src/components/userform/form_personal_details.js");




const mapStateToProps = state => ({
  errors: state.errors.session,
  signedIn: state.session.isSignedIn
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["signup"])(user))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_form_personal_details__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/userform/form_personal_details.js":
/*!**********************************************************!*\
  !*** ./src/components/userform/form_personal_details.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "../node_modules/material-ui/styles/MuiThemeProvider.js");
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/AppBar */ "../node_modules/material-ui/AppBar/index.js");
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ "../node_modules/material-ui/TextField/index.js");
/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/RaisedButton */ "../node_modules/material-ui/RaisedButton/index.js");
/* harmony import */ var material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/userform/form_personal_details.js";






class FormPersonalDetails extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };

    this.back = e => {
      e.preventDefault();
      this.props.prevStep();
    };

    this.state = {
      errors: {}
    };
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/index");
    }

    this.setState({
      errors: nextProps.errors
    });
  }

  handleSignup() {
    const _this$props$values = this.props.values,
          email = _this$props$values.email,
          name = _this$props$values.name,
          password = _this$props$values.password,
          password2 = _this$props$values.password2,
          height = _this$props$values.height,
          weight = _this$props$values.weight,
          age = _this$props$values.age;
    return e => {
      e.preventDefault();
      this.props.signup({
        email,
        name,
        password,
        password2,
        height,
        weight,
        age
      });
    };
  }

  renderErrors() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, Object.keys(this.state.errors).map((error, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "error-".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, this.state.errors[error])));
  }

  render() {
    const _this$props = this.props,
          values = _this$props.values,
          handleChange = _this$props.handleChange;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "session-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "signup-form",
      class: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      inputStyle: {
        color: "white"
      },
      hintText: "Enter Your Height",
      floatingLabelText: "Height",
      onChange: handleChange("height"),
      defaultValue: values.height,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      inputStyle: {
        color: "white"
      },
      hintText: "Enter Your Weight",
      floatingLabelText: "Weight",
      onChange: handleChange("weight"),
      defaultValue: values.weight,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      inputStyle: {
        color: "white"
      },
      hintText: "Enter Your Age",
      floatingLabelText: "Age",
      onChange: handleChange("age"),
      defaultValue: values.age,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "submit",
      onClick: this.back,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "submit",
      onClick: this.handleSignup(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Sign Up"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormPersonalDetails);

/***/ }),

/***/ "./src/components/userform/login_form.js":
/*!***********************************************!*\
  !*** ./src/components/userform/login_form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "../node_modules/material-ui/styles/MuiThemeProvider.js");
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/TextField */ "../node_modules/material-ui/TextField/index.js");
/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/userform/login_form.js";






class LoginForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/index");
    }

    this.setState({
      errors: nextProps.errors
    });
  }

  handleDemo() {
    let _this$state = this.state,
        email = _this$state.email,
        password = _this$state.password;
    let demoUser = {
      email: "demo_user@delicious.com",
      password: "password"
    };
    return e => {
      e.preventDefault();
      this.props.login(demoUser);
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
  }

  renderErrors() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, Object.keys(this.state.errors).map((error, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "error-".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, this.state.errors[error])));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "session-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "d\xE9licieux"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "signup-form",
      class: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      inputStyle: {
        color: "white"
      },
      type: "text",
      hintText: "Enter Your Email",
      floatingLabelText: "Email",
      value: this.state.email,
      onChange: this.update("email"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      inputStyle: {
        color: "white"
      },
      type: "password",
      hintText: "Enter Your Password",
      floatingLabelText: "Password",
      value: this.state.password,
      onChange: this.update("password"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), this.renderErrors(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "Submit",
      className: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "submit",
      onClick: this.handleDemo(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Demo User"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "go-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Don't have an account?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "back-sign",
      to: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Sign Up"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LoginForm)); // React.Fragment --- Fake DOM element
// Everytime the text changes -- we will fire off an event --- onChange / handleChange
// on continue --- calls nextStep
// import React from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import { withRouter } from "react-router-dom";
// import "../stylesheets/modal/modal.scss";
// import TextField from "material-ui/TextField";
// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.renderErrors = this.renderErrors.bind(this);
//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.currentUser === true) {
//       this.props.history.push("/");
//     }
//     this.setState({ errors: nextProps.errors });
//   }
//   update(field) {
//     return e =>
//       this.setState({
//         [field]: e.currentTarget.value
//       });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     let user = {
//       email: this.state.email,
//       password: this.state.password
//     };
//     this.props.login(user);
//   }
//   renderErrors() {
//     return (
//       <ul>
//         {Object.keys(this.state.errors).map((error, i) => (
//           <li key={`error-${i}`}>{this.state.errors[error]}</li>
//         ))}
//       </ul>
//     );
//   }
//   render() {
//     return (
//       <MuiThemeProvider>
//         <div className="login-form" onClick={e => e.stopPropagation()}>
//           <form onSubmit={this.handleSubmit}>
//             <div>
//               <br />
//               {/* <input
//               type="text"
//               value={this.state.email}
//               onChange={this.update("email")}
//               placeholder="Email"
//             /> */}
//               <br />
//               <input
//                 type="password"
//                 value={this.state.password}
//                 onChange={this.update("password")}
//                 placeholder="Password"
//               />
//               <TextField
//                 hintText="Enter Your Last Name"
//                 floatingLabelText="Last Name"
//                 onChange={this.update("email")}
//               />
//               <br />
//               <input type="submit" value="Submit" />
//               {this.renderErrors()}
//             </div>
//           </form>
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }
// export default withRouter(LoginForm);

/***/ }),

/***/ "./src/components/userform/login_form_container.js":
/*!*********************************************************!*\
  !*** ./src/components/userform/login_form_container.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_form */ "./src/components/userform/login_form.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./src/actions/modal_actions.js");





const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["login"])(user)),
  closeModal: () => dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["closeModal"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_login_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/userform/signup_form.js":
/*!************************************************!*\
  !*** ./src/components/userform/signup_form.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "../node_modules/material-ui/styles/MuiThemeProvider.js");
/* harmony import */ var material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/AppBar */ "../node_modules/material-ui/AppBar/index.js");
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/Toolbar */ "../node_modules/material-ui/Toolbar/index.js");
/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/styles/typography */ "../node_modules/material-ui/styles/typography.js");
/* harmony import */ var material_ui_styles_typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/TextField */ "../node_modules/material-ui/TextField/index.js");
/* harmony import */ var material_ui_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/RaisedButton */ "../node_modules/material-ui/RaisedButton/index.js");
/* harmony import */ var material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_RaisedButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/userform/signup_form.js";









class SignupForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      passErrors: "",
      pass2Errors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  } // continue = e => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };


  handleSubmit(e) {
    e.preventDefault();
    this.props.nextStep();

    if (this.props.values.name.length === 0) {
      this.setState({
        errors: this.state.errors.concat(["Please enter your name"])
      });
    } else if (this.props.values.password.length < 6) {
      this.setState({
        errors: this.state.errors.concat(["User at least 6 characters"])
      });
    } else if (this.props.values.password2 !== this.props.values.password) {
      this.setState({
        errors: this.state.errors.concat(["Passwords must match"])
      });
    } else {
      this.props.nextStep();
    }
  } // handlePassSubmit(e) {
  //   e.preventDefault();
  //   if (this.props.values.password.length === 0) {
  //     this.setState({ errors: this.state.errors.push("Please enter a password.") });
  //   } else if (this.state.password.length < 6) {
  //     this.setState({ passwordErrors: ["Use at least 6 characters."] });
  //   } else {
  //     this.setState({ passwordErrors: [], form: "username" });
  //   }
  // }


  renderNameErrors() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, Object.keys(this.state.errors).map((error, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "error-".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, this.state.errors[error])));
  }

  renderPasswordErrors() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, this.state.passErrors));
  }

  render() {
    const _this$props = this.props,
          values = _this$props.values,
          handleChange = _this$props.handleChange;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "session-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "d\xE9licieux"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "signup-form",
      class: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signup-text-contain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        color: "blue"
      },
      inputStyle: {
        color: "white"
      },
      hintText: "Enter Your Name",
      floatingLabelText: "Name",
      onChange: handleChange("name"),
      defaultValue: values.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      inputStyle: {
        color: "white"
      },
      hintText: "Enter Your Email",
      floatingLabelText: "Email",
      onChange: handleChange("email"),
      defaultValue: values.email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      inputStyle: {
        color: "white"
      },
      type: "password",
      hintText: "Enter Your Password",
      floatingLabelText: "Password",
      defaultValue: values.password,
      onChange: handleChange("password"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      inputStyle: {
        color: "white"
      },
      type: "password",
      hintText: "Confirm Password",
      floatingLabelText: "Password",
      defaultValue: values.password2,
      onChange: handleChange("password2"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "submit",
      onClick: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Continue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "go-back",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Already have an account?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Login")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./src/components/userform/user_form.js":
/*!**********************************************!*\
  !*** ./src/components/userform/user_form.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup_form */ "./src/components/userform/signup_form.js");
/* harmony import */ var _form_personal_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_personal_container */ "./src/components/userform/form_personal_container.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/components/userform/user_form.js";




class UserForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.nextStep = () => {
      const step = this.state.step;
      this.setState({
        step: step + 1
      });
    };

    this.prevStep = () => {
      const step = this.state.step;
      this.setState({
        step: step - 1
      });
    };

    this.handleChange = input => e => {
      this.setState({
        [input]: e.target.value
      });
    };

    this.state = {
      step: 1,
      name: "",
      email: "",
      password: "",
      password2: "",
      height: "",
      weight: "",
      age: ""
    };
  }

  render() {
    const step = this.state.step;
    const _this$state = this.state,
          name = _this$state.name,
          email = _this$state.email,
          password = _this$state.password,
          password2 = _this$state.password2,
          height = _this$state.height,
          weight = _this$state.weight,
          age = _this$state.age;
    const values = {
      name,
      email,
      password,
      password2,
      height,
      weight,
      age
    };

    switch (step) {
      case 1:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
          nextStep: this.nextStep,
          handleChange: this.handleChange,
          values: values,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });

      case 2:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_personal_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
          nextStep: this.nextStep,
          prevStep: this.prevStep,
          handleChange: this.handleChange,
          values: values,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserForm);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/root */ "./src/components/root.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "../node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/session_api_util */ "./src/util/session_api_util.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/recipe_api_util */ "./src/util/recipe_api_util.js");
/* harmony import */ var _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/recipe_actions */ "./src/actions/recipe_actions.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/cart_actions */ "./src/actions/cart_actions.js");
/* harmony import */ var _util_ingredient_api_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/ingredient_api_util */ "./src/util/ingredient_api_util.js");
/* harmony import */ var _util_fridge_api_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/fridge_api_util */ "./src/util/fridge_api_util.js");
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/fridge_actions */ "./src/actions/fridge_actions.js");
/* harmony import */ var _util_calorie_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util/calorie_util */ "./src/util/calorie_util.js");
var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/index.js";















document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    Object(_util_session_api_util__WEBPACK_IMPORTED_MODULE_5__["setAuthToken"])(localStorage.jwtToken);
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(localStorage.jwtToken);
    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decoded,
        currentDate: Date().toString().slice(0, 15)
      },
      entities: {
        fridge: {
          ingredients: {}
        }
      }
    };
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(preloadedState); // const currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //   store.dispatch(logout());
    //   window.location.href = '/login';
    // }
  } else {
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }

  window.getRandomRecipe = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["getRandomRecipe"];
  window.getRandomRecipes = _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_8__["getRandomRecipes"];
  window.getRecipesByIngredients = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["getRecipesByIngredients"];
  window.extractRecipe = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["extractRecipe"];
  window.getRecipeById = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["getRecipeById"];
  window.searchRecipeByName = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["searchRecipeByName"];
  window.getSimilarRecipes = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["getSimilarRecipes"];
  window.complexRecipeSearch = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["complexRecipeSearch"];
  window.searchIngredientByName = _util_ingredient_api_util__WEBPACK_IMPORTED_MODULE_10__["searchIngredientByName"];
  window.fetchFridge = _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_12__["fetchFridge"];
  window.addFridgeIngredient = _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_12__["addFridgeIngredient"];
  window.getIngredientById = _util_ingredient_api_util__WEBPACK_IMPORTED_MODULE_10__["getIngredientById"];
  window.modifyIngredient = _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_12__["modifyIngredient"];
  window.modifyFridge = _util_fridge_api_util__WEBPACK_IMPORTED_MODULE_11__["modifyFridge"];
  window.getState = store.getState;
  window.getConvertAmounts = _util_ingredient_api_util__WEBPACK_IMPORTED_MODULE_10__["getConvertAmounts"];
  window.dispatch = store.dispatch;
  window.getCart = _actions_cart_actions__WEBPACK_IMPORTED_MODULE_9__["getCart"];
  window.addCartDate = _actions_cart_actions__WEBPACK_IMPORTED_MODULE_9__["addCartDate"];
  window.addCartMeal = _actions_cart_actions__WEBPACK_IMPORTED_MODULE_9__["addCartMeal"];
  window.removeCartMeal = _actions_cart_actions__WEBPACK_IMPORTED_MODULE_9__["removeCartMeal"];
  window.getRecipe = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["getRecipe"];
  window.postRecipeId = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["postRecipeId"];
  window.postRecipeComplex = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["postRecipeComplex"];
  window.patchRecipeImage = _util_recipe_api_util__WEBPACK_IMPORTED_MODULE_7__["patchRecipeImage"];
  window.calorieCalc = _util_calorie_util__WEBPACK_IMPORTED_MODULE_13__["calorieCalc"];
  window.logout = _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__["logout"];
  window.signup = _util_session_api_util__WEBPACK_IMPORTED_MODULE_5__["signup"];
  window.store = store;
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), document.getElementById('root'));
});

/***/ }),

/***/ "./src/reducers/cart_reducer.js":
/*!**************************************!*\
  !*** ./src/reducers/cart_reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cart_actions */ "./src/actions/cart_actions.js");


const CartReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_RECIPE"]:
      nextState.dates[action.date][action.time] = action.recipeId;
      return nextState;

    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_RECIPE"]:
      nextState.dates[action.date][action.time] = undefined;
      return nextState;

    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_DATE"]:
      if (nextState[action.date]) return nextState;
      nextState.dates[action.date] = {
        "BREAKFAST": undefined,
        "LUNCH": undefined,
        "DINNER": undefined
      };
      return nextState;

    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CART"]:
      return action.cart;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CartReducer);

/***/ }),

/***/ "./src/reducers/entities_reducer.js":
/*!******************************************!*\
  !*** ./src/reducers/entities_reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _recipes_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes_reducer */ "./src/reducers/recipes_reducer.js");
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart_reducer */ "./src/reducers/cart_reducer.js");
/* harmony import */ var _fridge_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fridge_reducer */ "./src/reducers/fridge_reducer.js");
/* harmony import */ var _profile_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile_reducer */ "./src/reducers/profile_reducer.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  recipes: _recipes_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  cart: _cart_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  fridge: _fridge_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  user: _profile_reducer__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./src/reducers/errors_reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/errors_reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_errors_reducer */ "./src/reducers/session_errors_reducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/fridge_reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/fridge_reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/fridge_actions */ "./src/actions/fridge_actions.js");


const FridgeReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_FRIDGE"]:
      return Object.assign({}, action.fridge);

    case _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_FRIDGE_INGREDIENT"]:
      nextState = Object.assign({}, state);
      nextState.ingredients[action.ingredient.id] = action.ingredient;
      return nextState;

    case _actions_fridge_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FRIDGE_INGREDIENT"]:
      nextState = Object.assign({}, state);
      delete nextState.ingredients[action.id];
      return nextState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FridgeReducer);

/***/ }),

/***/ "./src/reducers/loading_reducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/loading_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_loading_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/loading_actions */ "./src/actions/loading_actions.js");


const loadingReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case _actions_loading_actions__WEBPACK_IMPORTED_MODULE_0__["START_LOAD"]:
      return action.load;

    case _actions_loading_actions__WEBPACK_IMPORTED_MODULE_0__["STOP_LOAD"]:
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (loadingReducer);

/***/ }),

/***/ "./src/reducers/modal_reducer.js":
/*!***************************************!*\
  !*** ./src/reducers/modal_reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modalReducer; });
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/modal_actions */ "./src/actions/modal_actions.js");

function modalReducer(state = null, action) {
  switch (action.type) {
    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__["OPEN_MODAL"]:
      return action.modal;

    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__["CLOSE_MODAL"]:
      return null;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/profile_reducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/profile_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/profile_actions */ "./src/actions/profile_actions.js");


const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_USER"]:
      return Object.assign({}, action.user);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileReducer);

/***/ }),

/***/ "./src/reducers/recipes_reducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/recipes_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/recipe_actions */ "./src/actions/recipe_actions.js");

const RECIPES = {
  indexOrder: [] // indexOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  // 1: {
  //   id: 1,
  //   image:
  //     "https://foodal.com/wp-content/uploads/2018/06/The-Tastiest-Recipe-for-Ketchup-Made-from-Scratch.jpg",
  //   title: "Organic Ketchup"
  // },
  // 2: {
  //   id: 2,
  //   image:
  //     "https://previews.123rf.com/images/denismart/denismart1810/denismart181000290/111249756-london-uk-september-13-2018-heinz-ketchup-with-fresh-raw-tomatoes-in-box-on-wood-background-.jpg",
  //   title: "Heinz Ketchup"
  // },
  // 3: {
  //   id: 3,
  //   image: "https://www.murrayscheese.com/site/images/items/5595.0.jpg?resizeid=9&resizeh=300&resizew=300",
  //   title: "Sir Kensington's Plain Ketchup"
  // },
  // 4: {
  //   id: 4,
  //   image: "https://cdnimg.webstaurantstore.com/images/products/large/430115/1639668.jpg",
  //   title: "Hunt's \"Ketchup\""
  // },
  // 5: {
  //   id: 5,
  //   image: "https://boulderlocavore.com/wp-content/uploads/2018/08/homemade-ketchup-title-image.jpg",
  //   title: "Homemade Ketchup from BoulderLacavore"
  // },
  // 6: {
  //   id: 6,
  //   image: "http://cdn.shopify.com/s/files/1/1657/0407/products/New_Fody_Ketchup_888021_grande.jpg?v=1562774223",
  //   title: "Fody Ketchup??"
  // },
  // 7: {
  //   id: 7,
  //   image: "https://sifu.unileversolutions.com/image/en-PK/original/2/knorr-tomato-ketchup-4x4kg-50159138.png",
  //   title: "Ghetto Ketchup"
  // },
  // 8: {
  //   id: 8,
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkk6AV5Nhwu-4aLnApQjr45M55F39wex88Wh-JDtdLv-D3pA43&s",
  //   title: "Ugly Sauce"
  // },
  // 9: {
  //   id: 9,
  //   image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AABrZtf.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=2580&y=1346",
  //   title: "Ketchup Fruit" 
  // }

};

const RecipesReducer = (state = RECIPES, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  nextState.indexOrder = [...state.indexOrder];

  switch (action.type) {
    case _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_RECIPE"]:
      nextState[action.recipe.recipeId] = action.recipe;
      return nextState;

    case _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_RECIPES"]:
      nextState = Object.assign(nextState, action.recipes);
      nextState.indexOrder = Object.keys(action.recipes);
      nextState.indexOrder.sort((id1, id2) => nextState[id1].spoonacularScore > nextState[id2].spoonacularScore ? -1 : 1);
      return nextState;

    case _actions_recipe_actions__WEBPACK_IMPORTED_MODULE_0__["ROTATE_RECIPE"]:
      let temp = nextState.indexOrder.splice(action.recipe_idx, 1);
      nextState.indexOrder.push(temp[0]);
      return nextState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (RecipesReducer);

/***/ }),

/***/ "./src/reducers/root_reducer.js":
/*!**************************************!*\
  !*** ./src/reducers/root_reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities_reducer */ "./src/reducers/entities_reducer.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_reducer */ "./src/reducers/session_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors_reducer */ "./src/reducers/errors_reducer.js");
/* harmony import */ var _ui_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui_reducer */ "./src/reducers/ui_reducer.js");





const RootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  entities: _entities_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  ui: _ui_reducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (RootReducer);

/***/ }),

/***/ "./src/reducers/session_errors_reducer.js":
/*!************************************************!*\
  !*** ./src/reducers/session_errors_reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./src/actions/session_actions.js");

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SESSION_ERRORS"]:
      return action.errors;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return _nullErrors;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SessionErrorsReducer);

/***/ }),

/***/ "./src/reducers/session_reducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/session_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kellyku_Desktop_MERN_Project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/cart_actions */ "./src/actions/cart_actions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_kellyku_Desktop_MERN_Project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const initialState = {
  isAuthenticated: false,
  user: {},
  currentDate: Date().toString().slice(0, 15)
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_CURRENT_USER"]:
      return _objectSpread({}, state, {
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
        currentDate: Date().toString().slice(0, 15)
      });

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_USER_LOGOUT"]:
      return {
        isAuthenticated: false,
        user: undefined,
        currentDate: undefined
      };

    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_DATE"]:
    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["SWITCH_DATE"]:
      return _objectSpread({}, state, {
        currentDate: action.date
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/side_reducer.js":
/*!**************************************!*\
  !*** ./src/reducers/side_reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_side_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/side_actions */ "./src/actions/side_actions.js");


const sideReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case _actions_side_actions__WEBPACK_IMPORTED_MODULE_0__["OPEN_SIDE"]:
      return action.side;

    case _actions_side_actions__WEBPACK_IMPORTED_MODULE_0__["CLOSE_SIDE"]:
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sideReducer);

/***/ }),

/***/ "./src/reducers/ui_reducer.js":
/*!************************************!*\
  !*** ./src/reducers/ui_reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _modal_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal_reducer */ "./src/reducers/modal_reducer.js");
/* harmony import */ var _side_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side_reducer */ "./src/reducers/side_reducer.js");
/* harmony import */ var _loading_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading_reducer */ "./src/reducers/loading_reducer.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  modal: _modal_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  side: _side_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  loading: _loading_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/selectors/selectors.js":
/*!************************************!*\
  !*** ./src/selectors/selectors.js ***!
  \************************************/
/*! exports provided: recipeArrayToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeArrayToObject", function() { return recipeArrayToObject; });
// Changes recipe array to , and also add a recipeId field 
const recipeArrayToObject = recipes => {
  let obj = {};

  for (let i = 0; i < recipes.length; i++) {
    if (!recipes[i]["recipeId"]) recipes[i]["recipeId"] = recipes[i].id;
    obj[recipes[i].recipeId] = recipes[i];
  }

  return obj;
};

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/root_reducer */ "./src/reducers/root_reducer.js");





const configureStore = (preloadedState = {}) => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/util/calorie_util.js":
/*!**********************************!*\
  !*** ./src/util/calorie_util.js ***!
  \**********************************/
/*! exports provided: calorieCalc, nutritionCalc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calorieCalc", function() { return calorieCalc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nutritionCalc", function() { return nutritionCalc; });
// Returns daily calorie requirement based on personal profile (calories per day)
const calorieCalc = user => {
  let baseMetabolism;
  let calorieOffset = 0;
  let caloriesToKg = 7716;

  if (user.gender === "F") {
    baseMetabolism = 10 * user.weight + 6.25 * user.height - 5 * user.age - 161;
  } else {
    baseMetabolism = 10 * user.weight + 6.25 * user.height - 5 * user.age + 5;
  }

  if (user.weeklyTarget !== 0) {
    calorieOffset = caloriesToKg * user.weeklyTarget;
  }

  switch (user.activityLevel) {
    case 1:
      return Math.floor(baseMetabolism * 1.2) + calorieOffset / 7;

    case 2:
      return Math.floor(baseMetabolism * 1.375) + calorieOffset / 7;

    case 3:
      return Math.floor(baseMetabolism * 1.55) + calorieOffset / 7;

    case 4:
      return Math.floor(baseMetabolism * 1.725) + calorieOffset / 7;
  } // Diet goals; 3500 calories a week deficit for 1 pound

}; // calculates % of week's nutritions you should be getting from # of meals
// selected, and how much of that is being provided by the selected meals;

const nutritionCalc = (dailyCal, mealCount, totalCarb, totalFat, totalProtein) => {// let protein = 50 * dailyCal / 2000 // weighed a bit more for these meals being 'bigger'
  // let carb = 300 * dailyCal / 2000 
  // let protein = 65 * dailyCal / 2000 
  // % of total protein 
  // totalProtein / protein; 
  // totalCarb / carb;
  // totalFat / fat;
};

/***/ }),

/***/ "./src/util/cart_api_util.js":
/*!***********************************!*\
  !*** ./src/util/cart_api_util.js ***!
  \***********************************/
/*! exports provided: getCart, addCartDate, setCartMeal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartDate", function() { return addCartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCartMeal", function() { return setCartMeal; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getCart = userId => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/carts/".concat(userId));
}; // dateInfo = { date: ... }

const addCartDate = (cartId, dateInfo) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/api/carts/".concat(cartId, "/addDate/"), dateInfo);
}; // mealInfo = { date: ..., time: ..., recipeId: ... }

const setCartMeal = (cartId, mealInfo) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/api/carts/".concat(cartId, "/addMeal/"), mealInfo);
};

/***/ }),

/***/ "./src/util/fridge_api_util.js":
/*!*************************************!*\
  !*** ./src/util/fridge_api_util.js ***!
  \*************************************/
/*! exports provided: fetchFridge, addFridgeIngredient, modifyIngredient, modifyFridge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFridge", function() { return fetchFridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFridgeIngredient", function() { return addFridgeIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyIngredient", function() { return modifyIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyFridge", function() { return modifyFridge; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recipe_api_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe_api_util */ "./src/util/recipe_api_util.js");
/* harmony import */ var _ingredient_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredient_api_util */ "./src/util/ingredient_api_util.js");



const fetchFridge = userId => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/fridge/".concat(userId));
}; // ingredient object format: 
// ingredient: { ingredientId: 1, ingredientName: "chicken", amount: 50 }

const addFridgeIngredient = (userId, ingredient, amount) => {
  let item = ingredient;
  item['amount'] = amount;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/api/fridge/".concat(userId, "/addNewIngredient"), item);
}; // Amount can be negative or positive
// ingredient: { id: 1, name: "chicken", image: "url", aisle: "meat", amount: 50 }

const modifyIngredient = (userId, ingredient, amount) => {
  let item = ingredient;
  item.amount = amount;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/api/fridge/".concat(userId, "/modifyIngredient"), item);
}; // Could receive entire recipe object from state instead

const modifyFridge = (userId, recipe) => {
  let ingredients = {};
  let requests = 0; // recipe.extendedIngredients
  // getRecipeById(recipeId).then((res) => {

  debugger;

  for (let i = 0; i < recipe.ingredients.length; i++) {
    requests++;
    let ingredient = recipe.ingredients[i];
    Object(_ingredient_api_util__WEBPACK_IMPORTED_MODULE_2__["getConvertAmounts"])(ingredient.name, ingredient.unit, ingredient.amount).then(res => {
      requests--;
      ingredient.amount = -res.data.targetAmount;
      ingredient.unit = "grams";
      ingredients[ingredient.id] = ingredient;

      if (requests === 0) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/api/fridge/".concat(userId, "/modifyFridge"), ingredients);
      }
    });
  } // })

};

/***/ }),

/***/ "./src/util/ingredient_api_util.js":
/*!*****************************************!*\
  !*** ./src/util/ingredient_api_util.js ***!
  \*****************************************/
/*! exports provided: searchIngredientByName, getIngredientById, getIngredientSubstitutes, getConvertAmounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchIngredientByName", function() { return searchIngredientByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIngredientById", function() { return getIngredientById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIngredientSubstitutes", function() { return getIngredientSubstitutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertAmounts", function() { return getConvertAmounts; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key */ "./src/util/key.js");

 // Searches for matches starting with query string. 
// Returns name, id and image of ingredients  

const searchIngredientByName = (query = "", limit = 5, intolerances = []) => {
  const allergies = intolerances.join(","); // return axios.get(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&metaInformation=true&number=${limit}&apiKey=${apiKey}`);

  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "number": "".concat(limit),
      "intolerances": "".concat(allergies),
      "query": query,
      "metaInformation": "true"
    }
  }); // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
}; // amount = number of grams

const getIngredientById = (id, amount = 1, unit = "gram") => {
  // return axios.get(`https://api.spoonacular.com/food/ingredients/${id}/information?amount=${amount}&unit=${unit}&apiKey=${apiKey}`);
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/".concat(id, "/information"),
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "f9ba977a04msha79dcdbd3b845c1p1e804ajsn0a5620f33ad5"
    },
    "params": {
      "amount": "".concat(amount),
      "unit": "".concat(unit)
    }
  }); // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
}; // Returns array of substitutes under key 'substitutes'

const getIngredientSubstitutes = ingredientName => {
  // return axios.get(`https: //api.spoonacular.com/food/ingredients/substitutes?ingredientName=${ingredientName}&apiKey=${apiKey}`);
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/substitutes",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "ingredientName": ingredientName
    }
  }); // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
};
const getConvertAmounts = (ingredient, sourceUnit, sourceAmount, targetUnit = "grams") => {
  const axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "ingredientName": ingredient,
      "targetUnit": targetUnit,
      "sourceUnit": sourceUnit,
      "sourceAmount": "".concat(sourceAmount)
    }
  }); // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
};

/***/ }),

/***/ "./src/util/key.js":
/*!*************************!*\
  !*** ./src/util/key.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  apiKey: "be025cdd9bmsh49601abc3099f49p1c31fdjsn618acb311b0a"
});

/***/ }),

/***/ "./src/util/profile_api_util.js":
/*!**************************************!*\
  !*** ./src/util/profile_api_util.js ***!
  \**************************************/
/*! exports provided: fetchUser, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // api/users/:id will have information for a specific user id

const fetchUser = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/".concat(id));
};
const updateUser = user => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/api/users/".concat(user.id, "/edit"), user);
};

/***/ }),

/***/ "./src/util/recipe_api_util.js":
/*!*************************************!*\
  !*** ./src/util/recipe_api_util.js ***!
  \*************************************/
/*! exports provided: getRandomRecipe, getRandomRecipes, getRecipeById, getMultipleRecipes, getRecipesByIngredients, searchRecipeByName, complexRecipeSearch, getSimilarRecipes, extractRecipe, getRecipe, postRecipeId, postRecipeComplex, patchRecipeImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomRecipe", function() { return getRandomRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomRecipes", function() { return getRandomRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipeById", function() { return getRecipeById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleRecipes", function() { return getMultipleRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipesByIngredients", function() { return getRecipesByIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRecipeByName", function() { return searchRecipeByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complexRecipeSearch", function() { return complexRecipeSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimilarRecipes", function() { return getSimilarRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractRecipe", function() { return extractRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipe", function() { return getRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRecipeId", function() { return postRecipeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRecipeComplex", function() { return postRecipeComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchRecipeImage", function() { return patchRecipeImage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key */ "./src/util/key.js");


const getRandomRecipe = (number = 1, tags) => {
  if (!tags) tags = [];
  let tagStr = tags.join(",");
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "number": "".concat(number),
      "tags": tagStr
    }
  }); // .then(res => console.log(res))
  // .catch(err => console.log(err))
  //res.data
};
const getRandomRecipes = number => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "number": "".concat(number),
      "tags": "vegetarian%2Cdessert"
    }
  });
};
const getRecipeById = (id, includeNutrition = true) => {
  // return axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=${includeNutrition}&apiKey=${apiKey}`);
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/".concat(id, "/information"),
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "includeNutrition": "".concat(includeNutrition)
    }
  }); // .then(res => console.log(res))
  // .catch(err => console.log(err))
  //res.data
}; // Input ids as an array

const getMultipleRecipes = (ids, includeNutrition = true) => {
  const idString = ids.join(','); // return axios.get(`https://api.spoonacular.com/recipes/informationBulk?${idString}&apiKey=${apiKey}`);

  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "ids": idString,
      "includeNutrition": "".concat(includeNutrition)
    }
  }); // .then(res => console.log(res))
  // .catch(err => console.log(err))
}; // Ingredients as array. Ranking 1 means maximize used ingredients and ranking 2 means minimize missed ingredients

const getRecipesByIngredients = (ingredients, limit = 5, ranking = 1, ignorePantry = true) => {
  const query = ingredients.join(','); // return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=${ranking}&ignorePantry=${ignorePantry}&number=${limit}&apiKey=${apiKey}`);

  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "number": "".concat(limit),
      "ranking": "".concat(ranking),
      "ignorePantry": "".concat(ignorePantry),
      "ingredients": "".concat(query)
    }
  }); // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
}; // Search for recipe by name.  Returns title and id of recipe. Will return anything that starts with query string.

const searchRecipeByName = (name, limit = 5) => {
  // return axios.get(`https://api.spoonacular.com/recipes/autocomplete?query=${name}&number=${limit}&apiKey=${apiKey}`);
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "number": "".concat(limit),
      "query": name
    }
  }); // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
}; // cuisine: array => [italian, korean, american, chinese, etc.] as lowercase
// diet: array => ["vegetarian", "ketogenic", "gluten free"]
// includeIngredients: array => [tomato, cheese, noodles]
// sort: string => calories, cholesterol, carbohydscorerates
// sortDirection: asc/desc 
// maxCalories/minCalories: int 
// maxFat/maxCarbs: int
// ignorePantry: true/false
// fillIngredients: true/false
// TAKES IN AN OPTIONS HASH

const complexRecipeSearch = ({
  search,
  cuisine,
  diet,
  intolerances,
  sort,
  sortDirection,
  minCalories,
  maxCalories,
  maxFat,
  maxCarbs,
  minProtein,
  ignorePantry,
  limit
}) => {
  if (!search) search = "";
  if (!cuisine) cuisine = "";
  if (!diet) diet = [];
  if (!intolerances) intolerances = "";
  if (!sort) sort = "meta-score";
  if (!sortDirection) sortDirection = "desc";
  if (!minCalories) minCalories = 0;
  if (!maxCalories || maxCalories === 0) maxCalories = 9999;
  if (!maxFat || maxFat === 0) maxFat = 9999;
  if (!maxCarbs || maxCarbs === 0) maxCarbs = 9999;
  if (!minProtein) minProtein = 0;
  if (!ignorePantry) ignorePantry = true;
  if (!limit) limit = 10; // const cuisineStr = cuisine.join(",");

  const dietStr = diet.join(","); // console.log(queryStr);
  // return axios.get(`https://api.spoonacular.com/recipes/complexSearch?${queryStr}apiKey=${apiKey}`);

  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "query": search,
      "cuisine": "".concat(cuisine),
      "diet": "".concat(dietStr),
      "intolerances": "".concat(intolerances),
      "sort": "".concat(sort),
      "sortDirection": "".concat(sortDirection),
      "minCalories": "".concat(minCalories),
      "maxCalories": "".concat(maxCalories),
      "maxFat": "".concat(maxFat),
      "maxCarbs": "".concat(maxCarbs),
      "minProtein": "".concat(minProtein),
      "maxFiber": "100",
      "ignorePantry": "".concat(ignorePantry),
      "number": "".concat(limit),
      "addRecipeInformation": "true",
      "fillIngredients": "true"
    }
  });
};
const getSimilarRecipes = (id, limit = 5) => {
  // return axios.get(`https://api.spoonacular.com/recipes/${id}/similar?number=${limit}&apiKey=${apiKey}`);
  axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/".concat(id, "/similar"),
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "numer": "".concat(limit)
    }
  }); // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
}; // Extract recipe from site url and return as object

const extractRecipe = url => {
  // return axios.get(`https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${apiKey}`);
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": _key__WEBPACK_IMPORTED_MODULE_1__["default"].apiKey
    },
    "params": {
      "url": url
    }
  }); // .then((response) => {
  //   console.log(response)
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
};
const getRecipe = recipeId => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/recipes/".concat(recipeId));
const postRecipeId = recipeData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/recipes/indiv', recipeData);
};
const postRecipeComplex = recipeData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/recipes/item', recipeData);
};
const patchRecipeImage = (recipeId, recipeData) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/api/recipes/".concat(recipeId, "/picture"), recipeData);
};

/***/ }),

/***/ "./src/util/route_util.js":
/*!********************************!*\
  !*** ./src/util/route_util.js ***!
  \********************************/
/*! exports provided: AuthRoute, ProtectedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedRoute", function() { return ProtectedRoute; });
/* harmony import */ var _Users_kellyku_Desktop_MERN_Project_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/kellyku/Desktop/MERN_Project/frontend/src/util/route_util.js";


 // Passed in from parent component or from mapStateToProps

const Auth = ({
  component: Component,
  path,
  loggedIn,
  exact
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: path,
  exact: exact,
  render: props => !loggedIn ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })) : // change this later
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

const Protected = (_ref) => {
  let Component = _ref.component,
      loggedIn = _ref.loggedIn,
      rest = Object(_Users_kellyku_Desktop_MERN_Project_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "loggedIn"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object.assign({}, rest, {
    render: props => loggedIn ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    })) : // Redirect to the login page if the user is already authenticated
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
}; // Use the isAuthenitcated slice of state to determine whether a user is logged in


const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const AuthRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Auth));
const ProtectedRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Protected));

/***/ }),

/***/ "./src/util/session_api_util.js":
/*!**************************************!*\
  !*** ./src/util/session_api_util.js ***!
  \**************************************/
/*! exports provided: signup, login, setAuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthToken", function() { return setAuthToken; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const signup = userData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/register', userData);
};
const login = userData => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/login', userData);
};
const setAuthToken = token => {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"];
  }
};

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kellyku/Desktop/MERN_Project/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kellyku/Desktop/MERN_Project/frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map