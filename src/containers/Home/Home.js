import { connect } from 'react-redux';

import { asyncAction } from '../../actions/homeActions';

import Home from '../../components/Home/Home';

const mapStateToProps = state => ({
  loading: state.Home.loading,
  data: state.Home.data,
});

const mapDispatchToProps = dispatch => ({
  asyncAction: () => dispatch(asyncAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
