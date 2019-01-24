import { connect } from "react-redux";

import {
  chooseOrdersListType,
} from "../../profileAction/profileAction";

import Profile from "../../components/Profile";
console.log('profile conteiner');

const mapStateToProps = state => ({
  ordersList: state.Profile.ordersList,
  orderTypes: state.Profile.orderTypes,
});

const mapDispatchToProps = dispatch => ({
  chooseOrdersListType: (orderListType) => dispatch(chooseOrdersListType(orderListType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);


//  connect(mapStateToProps, mapDispatchToProps)(Profile)

