import { Route, Switch } from "react-router-dom";
import Footer from "./Componets/Footer/Footer";
import Header from "./Componets/Header/Header";
import Blog from "./Containers/Blogs/Blog";
import Contect from "./Containers/Contect/Contect";
import Home from "./Containers/Home/Home";
import Product from "./Containers/Products/Product";


function App() {
  return (
      <>
            <Header/>

                      <Switch>
                                  <Route exact path={"/"}component={Home}/>
                                  <Route exact path={"/products"}component={Product}/>
                                  <Route exact path={"/Blogs"}component={Blog}/>
                                  <Route exact path={"/contect"}component={Contect}/>
                                
                      </Switch>

              <Footer/>  
      </>
  );
}

export default App;
