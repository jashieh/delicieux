import { connect } from "react-redux";

import MainIndexItem from "./main_index_item";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  recipe: ownProps.recipe,
  rotateToBack: ownProps.rotateToBack
});

const mapDispatchToProps = dispatch => ({
  openModal: other => dispatch(openModal("showRecipe", other)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainIndexItem);
