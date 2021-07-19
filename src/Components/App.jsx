import "./App.css";
// import Home from "./home/Home";
import Discovercont from "./Discover/Discovercont.jsx";
import Map from "./Map/Map";
import Explore from "./Discover/Explore";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      {/* <Home /> */}
      <Form />
      <Discovercont />
      <Map />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
