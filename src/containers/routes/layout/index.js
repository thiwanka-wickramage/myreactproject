import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginComponent from "../../login";
import DashboardLayout from "../../layout/dashboard";
import Cookies from "js-cookie";

class LayoutRoutes extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isLogged: Cookies.get( "isLogged" ) === "true" ? true : false
        };
    }

    render() {
        const setLoggedStatus = isLogged => {
            Cookies.set( "isLogged", isLogged );
            this.setState( { isLogged: isLogged } );
        };

        const signOut = e => {
            Cookies.remove( "isLogged" );
            this.setState( { isLogged: false } );
        };

        const PrivateRoute = ( { component: Component, signOut, ...rest } ) => {
            return (
                <Route
                    {...rest}
                    render={props => {
                        const allProps = { ...props, signOut };
                        return this.state.isLogged === true ? (
                            <Component {...allProps} />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/login"
                                }}
                            />
                        );
                    }}
                />
            );
        };

        const GenRoutes = ( { component: Component, setLoggedStatus, ...rest } ) => {
            return (
                <Route
                    {...rest}
                    render={props => {
                        const customProps = { ...props, setLoggedStatus };
                        return this.state.isLogged !== true ? (
                            <Component {...customProps} />
                        ) : (
                            <Redirect to={"/dashboard"}/>
                        );
                    }}
                />
            );
        };

        return (
            <Switch>
                <GenRoutes
                    exact
                    path="/login"
                    setLoggedStatus={setLoggedStatus}
                    component={LoginComponent}
                />
                <PrivateRoute path="/" component={DashboardLayout} signOut={signOut}/>
            </Switch>
        );
    }
}

export default LayoutRoutes;
