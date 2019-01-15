import { connect } from "react-redux";
import { startAsyncAction } from "../../actions/actions";
import Home from "../../components/Home";

const mapStateToProps = state => ({
  data: state.Home.data,
  loading: state.Home.loading
});

const mapDispatchToProps = dispatch => ({
  startAsyncAction: () => dispatch(startAsyncAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
