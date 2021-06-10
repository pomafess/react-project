import {BrowserRouter as Router} from "react-router-dom";

import Routes from "./Routes";
import Header from './client/Header/components/Header';
import Footer from "./client/Footer/components/Footer";
// import PlanningPage from "./client/Planning/pages/PlanningPage";
import "./shared/styles/style.scss"

import {getUser} from "./redux/auth/auth-operations";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getIsAuthenticated} from "./redux/auth/selectors";

function App() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUser())
    }, [dispatch]);

  return (
      <Router>
          {/*<PlanningPage />*/}
          <Header />
          <Routes />
          <Footer />
      </Router>
  )
}
export default App
