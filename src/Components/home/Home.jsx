import "./Home.css";
import MainContainer from "./MainContainer";
import { useState } from "react";

const Home = () => {
  const [imageSrc, setImageSrc] = useState(
    `https://unsplash.com/photos/1qJh1aORn_Q/download?force=true`
  );

  const [items, setItems] = useState([
    {
      title: "Indonesia",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isFocussed: false,
      url: `https://unsplash.com/photos/-ZYuIWAB0D4/download?force=true`,
      background: `https://unsplash.com/photos/1qJh1aORn_Q/download?force=true`,
    },
    {
      title: "Signapore",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isFocussed: false,
      url: `https://unsplash.com/photos/-ZYuIWAB0D4/download?force=true`,
      background: `https://unsplash.com/photos/1qJh1aORn_Q/download?force=true`,
    },
    {
      title: "India",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isFocussed: false,
      url: `https://unsplash.com/photos/-ZYuIWAB0D4/download?force=true`,
      background: `https://unsplash.com/photos/-ZYuIWAB0D4/download?force=true`,
    },
    {
      title: "Thialand",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isFocussed: false,
      url: `https://unsplash.com/photos/-ZYuIWAB0D4/download?force=true`,
      background: `https://unsplash.com/photos/1qJh1aORn_Q/download?force=true`,
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
        backgroundRepeat: 'no-repeat',
        transition: `background-image 0.5s ease-in-out`,
      }}
      className="Home"
    >
      <MainContainer changeBackground={changeBackground} items={items} />
    </div>
  );
};

export default Home;
