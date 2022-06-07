import { Route,Switch } from "react-router-dom";
import Layout from "./Componet/Layout/Layout";
import Doctors from "./Containers/Doctors/Doctors";
import Medisin from "./Containers/Medisin/Medisin";
import Fmedisin from "./Containers/Medisinformik/Fmedisin";

function App() {
  return (
  <>
        <Layout>
                        <Switch>
                          <Route exact path={"/medisin"}component={Medisin}/>
                          <Route exact path={"/doctors"}component={Doctors}/>
                          <Route exact path={"/fmedicine"}component={Fmedisin}/>
                        </Switch>

        </Layout>
  </>
  );
}

export default App;
