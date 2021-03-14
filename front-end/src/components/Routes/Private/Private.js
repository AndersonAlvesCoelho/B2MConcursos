import React, {useContext} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserCookie } from '../../../services/session';

const PrivateRoute = ({ component: Component,  ...rest }) => (
    <Route
        {...rest}
        render={(props) => (getUserCookie() ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: '/login',
                }}
            />
        ))
        }
    />
);

const mapStateToProps = (state) => {
    // return {
    //     user: state.auth.user[0],
    // };
};


export default connect(mapStateToProps, null)(PrivateRoute);