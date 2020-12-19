/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from 'src/redux/modules/user';
import LoginView from './LoginView';

const mapStateToProps = ({ user }) => {
  return {
    ...user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginRequest(user))
  };
};

const LoginContainer = ({ isFetching, isLogged, ...rest }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isFetching && isLogged) { navigate('/', { replace: true }); }
  }, [isLogged, isFetching]);

  return (
    <LoginView {...rest} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
