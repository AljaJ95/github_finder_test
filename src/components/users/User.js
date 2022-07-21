import React, { Fragment, Component } from 'react';
import Spinner from '../Layouts/spinner';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

export class User extends Component {
    componentDidMount() {
        console.log(this.props.match)
    this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

  render() {
    const {
        name, 
        avatar_url,
        location, 
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />

    return <Fragment>
        <Outlet />
        <Link to='/' className='btn btn-light'>
            Back To Search
        </Link>
    </Fragment>;
  }
}

export default User;
