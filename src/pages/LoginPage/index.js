import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class LoginPagePage extends React.Component {
  constructor(props) {
    super(props);

    const {
      history,
    } = props;

    this.user = '';
    if (localStorage.getItem('user')) {
      history.replace('/');
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', this.user);
    window.location.reload();
  }

  onChange = (e) => {
    this.user = e.target.value.trim();
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        css={styles.containerForm}
      >
        <label
          htmlFor="name"
        >
          User Name
          <input
            type="text"
            name="name"
            onChange={this.onChange}
          />
        </label>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    );
  }
}

LoginPagePage.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default LoginPagePage;
