import { connect } from "formik";
import { Route, Switch } from "react-router-dom";
import Footer from "./Componets/Header/Footer/Footer";
import Header from "./Componets/Header/Header";
import About from "./Container/About/About";

import Department from "./Container/Departments/Department";
import Doctors from "./Container/Doctors/Doctors";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
import Privateroute from "./Route/Privateroute.js/Privateroute";
import Publicroute from "./Route/Publicroute.js/Publicroute";



function App() {
  return (
    <>
            <Header/>
            <Switch>
                            <Publicroute exact path={"/"}component={Home}/>
                            <Publicroute exact path={"/doctors"}component={Doctors}/>
                            <Privateroute exact path={"/departments"}component={Department}/>
                            <Publicroute exact path={"/about"}component={About}/>
                            <Publicroute restricted={true} exact path={"/login"}component={Login}/>
            </Switch>
            <Footer/>
            
    </>
  );
}

export default App;
