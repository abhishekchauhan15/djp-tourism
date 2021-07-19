import React, { useState } from "react";
import InfoCard from "./InfoCard";
import "./Map.css";
import MapImg from "./MapImg";
import Readmore from "./../Readmore/Readmore";

function Map() {
  const placesData = [
    {
      id: 1,
      name: "Agra",
      video:
        "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/Taj%20Mahal.mp4",
      description:
        "Agra is best known for the Taj Mahal (17th century), designated a UNESCO World Heritage site in 1983. A complex mausoleum, the Taj Mahal is often considered to be the world's best example of Mughal architecture. The Mughal emperor Shah Jahān built it for his favourite wife, Mumtāz Maḥal, in the mid-17th century.",
      src: "https://www.google.com/maps/embed?pb=!4v1626683087502!6m8!1m7!1sKqEhi2WG-G-gAAqZzQxzTg!2m2!1d27.17502162458733!2d78.04278648140098!3f268.3016707550422!4f28.56957885798616!5f0.7820865974627469",
    },
    {
      id: 2,
      name: "The Golden Temple of Amritsar",
      video:
        "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/Amritsar.mp4",
      description:
        "The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. The gurdwara is built around a man-made pool that was completed by the fourth Sikh Guru, Guru Ram Das, in 1577.",
      src: "https://www.google.com/maps/embed?pb=!4v1626683467042!6m8!1m7!1sCAoSLEFGMVFpcFBRSnNRS2tRTmdISEdoSE1ocDg4OTdwM3E1OVo4ZW8xRjJXR2FH!2m2!1d31.61998029999999!2d74.8764849!3f216.26381847648588!4f8.313792495801465!5f2.299968626952992",
    },
    {
      id: 3,
      name: "The Golden City",
      description:
        "Situated in the heart of the Thar desert in Rajasthan, Jaisalmer city built on the foundation of yellow sandstone, justifies its tag as the 'Golden City' of India. The yellow stone monuments glittering in the sunlight is indeed a sight to behold. Jaisalmer offers many places to visit, ranging from yellowed forts to golden palaces and even deserted towns! The unique beauty of the place represented in the contrasting hues of gold against vivid shades of blue and green makes Jaisalmer an unforgettable experience.",
      src: "https://www.google.com/maps/embed?pb=!4v1626683743800!6m8!1m7!1sP5JtiFRACG5E2K6JiRvQqA!2m2!1d26.91345825853105!2d70.91321219897102!3f187.1900650456179!4f16.25231412428232!5f0.7820865974627469",
    },
    {
      id: 4,
      name: "The Red Fort",
      description:
        "Built by Shah Jahan in 1648 as the seat of Mughal power-a role it maintained until 1857-the magnificent crescent-shaped Red Fort in New Delhi, named after the stunning red sandstone used in its construction, covers a vast area of more than two square kilometers, all of it surrounded by a large moat. Highlights include its two largest gates: the impressive Lahore Gate (the fort's main entrance) and the elaborately decorated Delhi Gate, once used by the emperor for ceremonial processions.",
      src: "https://www.google.com/maps/embed?pb=!4v1626683914722!6m8!1m7!1sCAoSLEFGMVFpcE1YdHJhVmJRTlE2SUM3ZlBvREVXRUhWVERTandlQUJnYW83YjJ4!2m2!1d28.6561592!2d77.2410203!3f93.92011446936507!4f28.748381340656394!5f0.4000000000000002",
    },
    {
      id: 5,
      name: "Khajuraho",
      description:
        "Khajuraho, a UNESCO World Heritage Site located in Madhya Pradesh, is known around the world for its stunning temples adorned by erotic and sensuous carvings. A small town located in the Bundelkhand region, Khajuraho is a brilliant example of Indian architecture and its culture back in the medieval period. The architecture of these Hindu and Jain temples depict the erotic forms of love, the carvings on the walls display passion in the most sensuous yet aesthetic ways.",
      src: "www.google.com/maps/embed?pb=!4v1626684771210!6m8!1m7!1s-Yyxqtn_626QKO18yvEUYg!2m2!1d24.8533707502476!2d79.92011727248922!3f261.7472707950697!4f10.525670288347825!5f0.7820865974627469",
    },
    {
      id: 6,
      name: "The Gateway of India",
      description:
        "Built to commemorate the arrival of King George V and his wife Queen Mary in 1911, this stunning piece of architecture was opened with much pomp and ceremony in 1924 and was, for a while, the tallest structure in the city. Constructed entirely of yellow basalt and concrete and notable for its Indo-Saracenic design, the Gateway of India was also the scene of a rather less jubilant procession of British soldiers in 1948 when India gained its independence. These days, the huge archway provides a stunning backdrop that is as popular among locals as it is tourists.",
      src: "https://www.google.com/maps/embed?pb=!4v1626685117294!6m8!1m7!1sCAoSLEFGMVFpcE9ISmFpQkZyelBpWF9IWXQ1blFUbEhCc0g2ZHhKQk0wMEJKVHMt!2m2!1d18.9222856406872!2d72.83429715782404!3f140.17281028752654!4f17.249990354667815!5f0.7820865974627469",
    },
    {
      id: 7,
      name: "Mysore Palace",
      description:
        "The sprawling city of Mysore is a delight to explore thanks to its eclectic mix of fine old colonial architecture; regal Indian palaces; and lush, well-manicured gardens. While those inclined towards shopping will enjoy spending time in the city's famous silk and sandalwood bazaars, the main attraction is magnificent Mysore Palace.",
      src: "https://www.google.com/maps/embed?pb=!4v1626685226789!6m8!1m7!1sBEeD9GEO8ki-fWNiJe6-vQ!2m2!1d12.30608053270265!2d76.65555751330226!3f234.09767539687346!4f11.4838428417914!5f0.7820865974627469",
    },
    {
      id: 8,
      name: "Mahobodhi Temple",
      description:
        "Bodhgaya, considered the world's holiest Buddhist site, attracts thousands of visitors each year, all drawn to participate with the resident monks in meditation and prayer. The focal point of this place of pilgrimage is stunning Mahabodhi Temple, built next to the very spot where Buddha came to Enlightenment and formulated his philosophy on life. Constructed in the 6th century and restored numerous times since, the temple is topped with a beautiful pyramidal spire and houses a large gilded statue of Buddha.",
      src: "https://www.google.com/maps/embed?pb=!4v1626685349478!6m8!1m7!1sCAoSLEFGMVFpcE5xYkM1VFBORzg0d183cDE2amJVNlZDTkRGZG5UQU5mS1F4aVlZ!2m2!1d24.6960582!2d84.99189969999999!3f318.14385436545507!4f6.919081562703212!5f0.7820865974627469",
    },
    {
      id: 9,
      name: "Sundarbans",
      description:
        "Known for hosting the biggest mangrove forests in the world, Sundarbans National Park is located in West Bengal, India. It is also a Tiger Reserve and a Biosphere reserve that provides a complete nature's circle to the tourist right from 'Royal Bengal tigers' to roaring rivers and beautiful estuaries. Sundarbans National Park is a part of Sundarban delta that is covered with Mangrove Forest and the largest population of the Bengal Tigers. It is a UNESCO world heritage site with a large variety of birds and reptiles including salt-water crocodile.",
    },
    {
      id: 10,
      name: "Jagdalpur",
      description:
        "Jagdalpur is a beautiful and naturally bountiful city in the Bastar district of Chhattisgarh and is one of the most popular tourist destinations in the state after Raipur and Bhilai. It is well connected to the state capital and to other nearby cities and is relatively unknown among tourists outside the state.",
    },
    {
      id: 11,
      name: "Srinagar",
      description:
        "Srinagar finds a place on this list because it is one of the most famous tourist destinations in Jammu and Kashmir as well as the top honeymoon destination.The presence of many Mughal Gardens, religious & historical sites as well as Dal & Nageen Lakes has led Srinagar to being called the “Land of Gardens and Lakes.” Among the other things that will surprise you, one is the floating vegetable market on Dal Lake. The largest Tulip gardens in Asia are also in Srinagar.",
      src: "https://www.google.com/maps/embed?pb=!4v1626685692985!6m8!1m7!1sCAoSLEFGMVFpcFA4T2RfMVBEZmtRR0V3OWsyNHdmbkZuR0sySTNKOU44ZmxOMDdw!2m2!1d34.122776!2d74.87027739999999!3f152.79273872693653!4f-6.9486237973137435!5f0.7820865974627469",
    },
    {
      id: 12,
      name: "Kaziranga National Park",
      description:
        "Home to the largest population of the one-horned rhino on earth, Kaziranga National Park is one of India’s national treasures in terms of flora and fauna. Located in the state of Assam in North-Eastern India, its total area is shared by the districts of Nagaon, Golaghat and Karbi Anglong placing it roughly at the centre of the state. Approximately around five hours by road from Guwahati, Kaziranga National Park stands tall as the epitome of successful wildlife conservation in India. In 1985, it was awarded the status of a World Heritage Site by UNESCO.",
    },
    {
      id: 13,
      name: "Namdapha National Park",
      description:
        "Namdapha, a National Park and Tiger Reserve, a true wilderness and enchanting beauty of lush green vegetation, impenetrable pristine and virgin forests covered an area of 1985.23 square kilometres having diverse flora and fauna lies in the international border between India and Myanmar (Burma) within Changlang District in the state of Arunachal Pradesh in the northeast India. Namdapha National Park is located at a few kilometre away from Miao amidst misty blue hills along the turbulent Noa-Dihing river lies in the sprawling tropical rain forest. It was declared as Tiger Reserve by the Government in 1983.",
    },
    {
      id: 14,
      name: "Deoghar",
      description:
        "Deoghar, a popular religious destination in Jharkhand is blessed with one of the 12 Jyotirlinga temples known as temple Baidyanath. Baidyanath Dham in Deoghar becomes the most famous during the Shravan month of the Hindu Lunar Calendar, when millions of devotees bring holy water for the Linga in Pitchers called Kanwads, and hence known as Kanwariyas, to perform the holy ritual of Rudrabhishek [The Holy Bath] in this holy month. Deoghar is also known as 'the cultural capital of Jharkhand'.",
    },
    {
      id: 15,
      name: "Adilabad",
      description:
        "Adilabad is a small town in the state of Telangana that is famous for the beautiful Kunatala waterfalls located amidst lush forests. Originally known as Edulapuram, this place is for the nature lovers and history buffs. Adilabad is currently Telangana's second-largest district and the town witnesses various customs and traditions that are a fusion of Telugu and Marathi culture. ",
      src: "https://www.google.com/maps/embed?pb=!4v1626686021491!6m8!1m7!1sCAoSLEFGMVFpcE03bVIzWDRadno0WmhyTC1pdHpkYTU2cEN2NnJpeWEwa2FoV1Ix!2m2!1d19.6730885!2d78.5342562!3f174.29818925523546!4f5.745950623723061!5f0.7820865974627469",
    },
  ];
  const [index, setIndex] = useState(null);
  return (
    <div className="map" id="map">
      <img
        src="https://uttarakhandtourism.gov.in/themes/utdb_frontend/images/Chamoli.jpg"
        className="map__img"
        alt=""
      />
      <div className="map__left">
        <InfoCard index={index} placesData={placesData} />
      </div>
      <div className="map__right">
        <MapImg setIndex={setIndex} />
      </div>
    </div>
  );
}

export default Map;

// import React from "react";
// import "./Map.css";

// function Map() {
//   return (
//     <div className="map">
//       dcs

//     </div>
//   );
// }

// export default Map;
