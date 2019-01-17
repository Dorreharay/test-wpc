import { connect } from "react-redux";
import { startAsyncAction, copyToClipboardAction, resetClipboard, chooseProject, chooseOrdersListType, toggleEditMode } from "../../homeActions/homeActions";
import Home from "../../components/Home";

const mapStateToProps = state => ({
  data: state.Home.data,
  loading: state.Home.loading,
  projectName: state.Home.projectName,
  projectsList: state.Home.projectsList,
  ordersList: state.Home.ordersList,
  orderTypes: state.Home.orderTypes,
  copiedToClickboard: state.Home.copiedToClickboard,
  editMode: state.Home.editMode
});

const mapDispatchToProps = dispatch => ({
  startAsyncAction: () => dispatch(startAsyncAction()),
  copyToClipboardAction: () => dispatch(copyToClipboardAction()),
  resetClipboard: () => dispatch(resetClipboard()),
  chooseProject: (projectName) => dispatch(chooseProject(projectName)),
  chooseOrdersListType: (orderListType) => dispatch(chooseOrdersListType(orderListType)),
  toggleEditMode: () => dispatch(toggleEditMode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
