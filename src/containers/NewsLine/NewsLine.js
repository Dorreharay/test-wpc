import { connect } from "react-redux";
import { getSlideName } from "../../actions/sliderActions";
import NewsLine from "../../components/NewsLine";

const mapStateToProps = state => ({
  slideName: state.newsLine.slideName
});

const mapDispatchToProps = dispatch => ({
  getSlideName: name => dispatch(getSlideName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsLine);
