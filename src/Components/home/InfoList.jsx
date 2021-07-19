import "./InfoList.css";
import { useState } from "react";
import Slider from "react-slick";

const Info = (props) => {
  const item = props.item;

  return (
    <div className="Info">
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
    </div>
  );
};

const InfoList = (props) => {
  const items = props.items;
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    vertical: true,
    beforeChange: function (current, next) {
      setSlideIndex(next);
    },
  };

  return (
    <div className="InfoList">
        {/* <Info
            className={true ? "Info active-info" : "Info"}
            item={items[0]}
          /> */}
      <Slider {...settings}>
        {items.map((item, index) => (
          <Info
            className={index === slideIndex ? "Info active-info" : "Info"}
            item={item}
          />
         ))}
      </Slider> 
    </div>
  );
};

export default InfoList;
