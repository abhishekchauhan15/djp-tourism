import "./App.css";
import Home from "./home/Home";
import Discovercont from "./Discover/Discovercont.jsx";
import Map from "./Map/Map";
import Explore from "./Discover/Explore";
import Form from "./Form/Form";

function App() {
  return (
    <div className="app">
      <Home/>
      <Discovercont />
      <Map />
      <Explore />
      <Form />
    </div>
  );
}

export default App;
