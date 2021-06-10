import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";

const MainPage = lazy(() => import('./pages/MainPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const AwardsPage = lazy(() => import('./pages/AwardsPage'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const PlanningPage = lazy(()=> import("./client/Planning/pages/PlanningPage"))

const Routes = ({isAuthorized}) => {
    console.log(isAuthorized)
    return (
        <Suspense fallback={<p>Page loading...</p>}>
            <Switch>
                <PrivateRoute path="/" isAuthorized={isAuthorized} exact>
                    <MainPage />
                </PrivateRoute>
                <Route path="/auth" exact component={AuthPage} />
                <PrivateRoute path="/awards" exact>
                    <AwardsPage />
                </PrivateRoute>
                <PrivateRoute path="/planing" exact>
                    <PlanningPage />
                </PrivateRoute>
                {/*<Route path="/contacts" exact component={ContactsPage} />*/}
            </Switch>
        </Suspense>
    )
};

export default Routes;
 
