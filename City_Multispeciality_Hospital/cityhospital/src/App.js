import { Route, Switch } from "react-router-dom";
import Footer from "./Componets/Header/Footer/Footer";
import Header from "./Componets/Header/Header";
import About from "./Container/About/About";
import Auth from "./Container/Auth/Auth";
import Contect from "./Container/Contect/Contect";
import Department from "./Container/Departments/Department";
import Doctors from "./Container/Doctors/Doctors";
import Home from "./Container/Home/Home";



function App() {
  return (
    <>
            <Header/>
            <Switch>
                            <Route exact path={"/"}component={Home}/>
                            <Route exact path={"/doctors"}component={Doctors}/>
                            <Route exact path={"/departments"}component={Department}/>
                            <Route exact path={"/about"}component={About}/>
                            <Route exact path={"/contect"}component={Contect}/>
                            <Route exact path={"/Auth"}component={Auth}/>
            </Switch>
            <Footer/>
            
    </>
  );
}

export default App;
