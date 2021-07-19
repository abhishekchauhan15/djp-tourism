import "./Cards.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Card = (props) => {
  const item = props.item;

  return (
    <div className={props.className}>
      <img src={item.url} alt={item.title} />
    </div>
  );
};

const Cards = (props) => {
  const items = props.items;

  const [slideIndex, setSlideIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      props.changeBackground(items[next].background);
      setSlideIndex(next);
    },
  };

  // const item =  {
  //   title: "Thialand",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   isFocussed: false,
  //   url: `https://unsplash.com/photos/-ZYuIWAB0D4/download?force=true`,
  //   background: `https://unsplash.com/photos/1qJh1aORn_Q/download?force=true`
  // };

  return (
    <div className="Cards">
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card
            key={item.title}
            className={index === slideIndex ? "Card focussed" : "Card"}
            item={item}
          />
        ))}
      </Slider>
    </div>
  );
};

const Container = (props) => {
  return (
    <div className="Container">
      <Cards items={props.items} changeBackground={props.changeBackground} />
    </div>
  );
};

export default Container;
