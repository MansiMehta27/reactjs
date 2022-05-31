import { Switch } from "@mui/material";
import { Route } from "react-router-dom";
import Layout from "./Componet/Layout/Layout";
import Doctors from "./Containers/Doctors/Doctors";
import Medisin from "./Containers/Medisin/Medisin";

function App() {
  return (
  <>
        <Layout>
                        <Switch>
                                      <Route exact path={"/medisin"}component={Medisin}/>
                                      <Route exact path={"/doctors"}component={Doctors}/>
                        </Switch>
        </Layout>
  </>
  );
}

export default App;
