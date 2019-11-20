import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import LoginFormContainer from '../session/login_form_container';
// import SignupFormContainer from '../session/signup_form_container';
import AddIngredientContainer from '../fridge/add_ingredient_container';
import "../stylesheets/modal/modal.scss";

class Modal extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { modal, closeModal } = this.props
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
        component = <AddIngredientContainer ingredient={modal.other}/>
      default:
        return null;
    }
    
    return (
      <div className="modal-background" onClick={ closeModal }>
      { component }
      </div>
      );
    }
    
  }
  
  const mSTP = (state) => {
    return ({
      modal: state.ui.modal
    });
  };
  
  const mDTP = (dispatch) => {
    return ({
      closeModal: () => dispatch(closeModal())
    });
  };
  
  export default connect(mSTP, mDTP)(Modal);