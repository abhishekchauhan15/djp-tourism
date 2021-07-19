import "./App.css";
import Navbar from "./Navigation/Navbar.jsx";
import Home from "./home/Home";
import Discovercont from "./Discover/Discovercont.jsx";
import Map from "./Map/Map";
import Explore from "./Discover/Explore";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Form />
      <Discovercont />
      <Map />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
