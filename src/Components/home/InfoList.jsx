import "./InfoList.css";
import { useState } from "react";
import Slider from "react-slick";

const Info = (props) => {
  const item = props.item;

  return (
    <div className="Info">
      <h5>{item.desc}</h5>
      <h6>{item.title}</h6>
    </div>
  );
};

const InfoList = (props) => {
  const items = [
    {
      desc: `"We owe a lot to the Indians, who taught us how to count, without which no worthwhile scientific discovery could have been made."`,
      title: `- Albert Einstein, American scientist`,
    },
    {
      title: `- Max Mueller, German scholar`,
      desc: `"If I were asked under what sky the human mind has most fully developed some of its choicest gifts, has most deeply pondered on the greatest problems of life, and has found solutions, I should point to India."`,
    },
    {
      title: `- Romain Rolland, French scholar`,
      desc: `"If there is one place on the face of earth where all the dreams of living men have found a home from the very earliest days when man began the dream of existence, it is India."`,
    },
    {
      title: `- Hu Shih, former Ambassador of China to USA`,
      desc: `- "India conquered and dominated China culturally for 20 centuries without ever having to send a single soldier across her border."`,
    },
  ];
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
          key= {item.desc}
            className={index === slideIndex ? "Info active-info" : "Info"}
            item={item}
          />
        ))}
      </Slider>
    </div>
  );
};

export default InfoList;
