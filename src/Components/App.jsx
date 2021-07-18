import "./App.css";
import Discovercont from "./Discover/Discovercont.jsx"
// import ExploreSection from "./ExploreSection/ExploreSection";
import ExploreSection from "./ExploreSection/ExploreSection";
import Map from "./Map/Map";
import Explore from "./Discover/Explore";

function App() {
  return (
    <div className="app">
      {/* <ExploreSection /> */}
      {/* code for flip card */}
      <Discovercont />
      <Map />
      <Explore />
    </div>
  );
}

export default App;
