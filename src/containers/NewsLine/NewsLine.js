import { connect } from 'react-redux';
import { getSlideName } from '../../actions/actions';
import { NewsLine } from '../../components';


const mapDispatchToProps = dispatch => ({
  getSlideName: (name) => dispatch(getSlideName(name))
})

export default connect(undefined, mapDispatchToProps)(NewsLine);