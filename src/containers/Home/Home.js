import { connect } from 'react-redux';

import {
  getOrders,
} from '../../actions/homeActions';

import Home from '../../components/Home/Home';

const mapStateToProps = state => ({
  loading: state.Home.loading,
});

const mapDispatchToProps = dispatch => ({
  getOrders: orderListTypeCurrent => dispatch(getOrders(orderListTypeCurrent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
