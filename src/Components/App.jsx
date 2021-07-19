import "./App.css";
import Navbar from "./Navigation/Navbar.jsx";
import Home from "./home/Home";
import Discovercont from "./Discover/Discovercont.jsx";
import Map from "./Map/Map";
import Explore from "./Discover/Explore";
import Form from "./Form/Form";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home/>
      <Discovercont />
      <Map />
      <Explore />
      <Form />
    </div>
  );
}

export default App;
