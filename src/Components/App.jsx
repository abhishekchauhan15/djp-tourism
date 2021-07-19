import "./App.css";
import Navbar from "./Navigation/Navbar.jsx";
import Home from "./home/Home";
import Discovercont from "./Discover/Discovercont.jsx";
import Map from "./Map/Map";
import Explore from "./Discover/Explore";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import Readmore from "./Readmore/Readmore";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <Discovercont />
      <Map />
      <Explore />
      <Footer /> */}
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Navbar />
                  <Form />
                  <Home />
                </>
              );
            }}
          ></Route>
          <Route exact path="/explore">
            <Navbar />
            <Form />
            <Discovercont />
            <Map />
            <Explore />
            <Footer />
          </Route>
          <Route path="/city/:id" children={<Readmore />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
