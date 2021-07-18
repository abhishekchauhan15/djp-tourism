import Container from "./Cards";
import InfoList from "./InfoList";
import "./MainContainer.css";

const MainContainer = (props) => {
  const items = props.items;
  return (
    <div className="MainContainer">
      <InfoList items={items}/>
      <Container items={items} changeBackground={props.changeBackground} />
    </div>
  );
};

export default MainContainer;
