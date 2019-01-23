import { connect } from 'react-redux';

import {
  getOrders,
  copyToClipboardAction,
  resetClipboard,
  chooseProject,
  chooseOrdersListType,
  toggleEditMode,
  toggleDeleteMode,
  applyEditChanges,
  deleteOrder,
} from '../../actions/homeActions';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  data: state.Home.data,
  loading: state.Home.loading,
  projectName: state.Home.projectName,
  projectsList: state.Home.projectsList,
  ordersList: state.Home.ordersList,
  orderTypes: state.Home.orderTypes,
  orderListTypeCurrent: state.Home.orderListTypeCurrent,
  copiedToClickboard: state.Home.copiedToClickboard,
  editMode: state.Home.editMode,
  deleteMode: state.Home.deleteMode,
  isEdited: state.Home.isEdited,
});

const mapDispatchToProps = (dispatch) => ({
  getOrders: (orderListTypeCurrent) => dispatch(getOrders(orderListTypeCurrent)),
  copyToClipboardAction: () => dispatch(copyToClipboardAction()),
  resetClipboard: () => dispatch(resetClipboard()),
  chooseProject: (projectName) => dispatch(chooseProject(projectName)),
  chooseOrdersListType: (orderListType) => dispatch(chooseOrdersListType(orderListType)),
  toggleEditMode: () => dispatch(toggleEditMode()),
  toggleDeleteMode: () => dispatch(toggleDeleteMode()),
  applyEditChanges: (formData) => dispatch(applyEditChanges(formData)),
  deleteOrder: (index) => dispatch(deleteOrder(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
