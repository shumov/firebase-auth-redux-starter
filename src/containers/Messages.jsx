// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Messages from '../components/Messages';
import { addSuccess, addError } from '../actions/toast';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  sendSuccessMessage: message => dispatch(addSuccess(message)),
  sendErrorMessage: message => dispatch(addError(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Messages));
