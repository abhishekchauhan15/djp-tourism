import "./Home.css";
import MainContainer from "./MainContainer";
import { useState } from "react";

const Home = () => {
  const [imageSrc, setImageSrc] = useState(
    `https://unsplash.com/photos/3l3ant2VB-U/download?force=true`
  );

  const [items, setItems] = useState([
    {
      url: `https://unsplash.com/photos/zhT9Vejzd-k/download?force=true`,
      background: `https://unsplash.com/photos/3l3ant2VB-U/download?force=true`,
    },
    {
      url: `https://unsplash.com/photos/pfLyzuGfofY/download?force=true`,
      background: `https://unsplash.com/photos/jvdvp6bplTs/download?force=true`,
    },
    
    {
      url: `https://unsplash.com/photos/F4Pu1wuGQkc/download?force=true`,
      background: `https://unsplash.com/photos/rwO-rWHNwds/download?force=true`,
    },
    {
      url: `https://unsplash.com/photos/YH1sPWaQAhg/download?force=true`,
      background: `https://unsplash.com/photos/eU4pipU_8HA/download?force=true`,
    },
  ]);

  const changeBackground = (url) => {
    setImageSrc(url);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        transition: `background-image 0.5s ease-in-out`,
      }}
      className="Home"
    >
      <MainContainer changeBackground={changeBackground} items={items} />
    </div>
  );
};

export default Home;
