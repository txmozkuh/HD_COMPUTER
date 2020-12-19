/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerRequest } from 'src/redux/modules/user';
import RegisterView from './RegisterView';

const mapStateToProps = ({ user }) => {
  return {
    ...user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => dispatch(registerRequest(user))
  };
};

const RegisterContainer = ({ isFetching, isLogged, ...rest }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isFetching && isLogged) { navigate('/', { replace: true }); }
  }, [isLogged, isFetching]);

  return (
    <RegisterView {...rest} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
