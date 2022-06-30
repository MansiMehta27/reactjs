import { connect } from "formik";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Bookappointment from "./Appointment/Bookappointment";
import LIstappointment from "./Appointment/LIstappointment";
import Footer from "./Componets/Header/Footer/Footer";
import Header from "./Componets/Header/Header";
import About from "./Container/About/About";
import Contect from "./Container/Contect/Contect";

import Department from "./Container/Departments/Department";
import Doctors from "./Container/Doctors/Doctors";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
import Medisin from "./Container/Medisin/Medisin";
import { configurstore } from "./Redux/Store";
import Privateroute from "./Route/Privateroute.js/Privateroute";
import Publicroute from "./Route/Publicroute.js/Publicroute";



function App() {
  const store = configurstore();
  return (
    <>   <Provider store={store}>
            <Header/>
           
            <Switch>
                         <Publicroute exact path={"/"}component={Home}/>
                         <Publicroute exact path={"/doctors"}component={Doctors}/>
                          <Privateroute exact path={"/departments"}component={Department}/>
                          <Route exact path={"/about"}component={About}/>
                          <Publicroute restricted={true} exact path={"/login"}component={Login}/>
                          <Publicroute exact path={"/medisin"}component={Medisin}/>
                          <Route exact path={"/contect"}component={Contect}/>
                          <Privateroute exact path={"/bookappointment"}component={Bookappointment}/>
                          <Privateroute exact path={"/listappointment"}component={LIstappointment}/>
                           
            </Switch>
           
            <Footer/>
            </Provider>
            
    </>
  );
}

export default App;
