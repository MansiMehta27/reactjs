import { Route, Switch } from "react-router-dom";
import About from "./Componets/About/About";
import Contect from "./Componets/Contect/Contect";
import Department from "./Componets/Departments/Department";
import Doctors from "./Componets/Doctors/Doctors";
import Footer from "./Componets/Header/Footer/Footer";
import Header from "./Componets/Header/Header";
import Home from "./Container/Home/Home";


function App() {
  return (
    <>
            <Header/>
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/departments"} component={Department}/>
              <Route exact path={"/doctor"}component={Doctors}/>
              <Route exact path={"/about"}component={About}/>
              <Route exact path={"/contect"}component={Contect}/>
              
            </Switch>
            <Footer/>
            
    </>
  );
}

export default App;
