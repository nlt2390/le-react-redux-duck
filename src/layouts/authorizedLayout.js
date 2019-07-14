import React from 'react';
import PropTypes from 'prop-types';

const onClickLogout = () => {
  localStorage.clear();
  window.location.reload();
};

const AuthorizedLayout = (props) => {
  const {
    children,
  } = props;
  const user = localStorage.getItem('user');
  return (
    <div>
      <p>
        Logged in as
        {' '}
        {user}
      </p>
      <p>
        <button
          onClick={onClickLogout}
          type="button"
        >
          Logout
        </button>
      </p>
      {children}
    </div>
  );
};

AuthorizedLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

AuthorizedLayout.defaultProps = {
};

export default AuthorizedLayout;
