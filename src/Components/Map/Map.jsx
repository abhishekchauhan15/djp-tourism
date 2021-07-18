import React, { useState } from "react";
import InfoCard from "./InfoCard";
import "./Map.css";
import MapImg from "./MapImg";

function Map() {
  const placesData = [
    {
      name: "Agra",
      src: "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
      description:
        "Agra is best known for the Taj Mahal (17th century), designated a UNESCO World Heritage site in 1983. A complex mausoleum, the Taj Mahal is often considered to be the world's best example of Mughal architecture. The Mughal emperor Shah Jahān built it for his favourite wife, Mumtāz Maḥal, in the mid-17th century.",
    },
    {
      name: "The Golden Temple of Amritsar",
      description:
        "The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. The gurdwara is built around a man-made pool that was completed by the fourth Sikh Guru, Guru Ram Das, in 1577.",
    },
    {
      name: "The Golden City",
      description:
        "Situated in the heart of the Thar desert in Rajasthan, Jaisalmer city built on the foundation of yellow sandstone, justifies its tag as the 'Golden City' of India. The yellow stone monuments glittering in the sunlight is indeed a sight to behold. Jaisalmer offers many places to visit, ranging from yellowed forts to golden palaces and even deserted towns! The unique beauty of the place represented in the contrasting hues of gold against vivid shades of blue and green makes Jaisalmer an unforgettable experience.",
    },
    {
      name: "The Red Fort",
      description:
        "Built by Shah Jahan in 1648 as the seat of Mughal power-a role it maintained until 1857-the magnificent crescent-shaped Red Fort in New Delhi, named after the stunning red sandstone used in its construction, covers a vast area of more than two square kilometers, all of it surrounded by a large moat. Highlights include its two largest gates: the impressive Lahore Gate (the fort's main entrance) and the elaborately decorated Delhi Gate, once used by the emperor for ceremonial processions.",
    },
    {
      name: "Khajuraho",
      description:
        "Khajuraho, a UNESCO World Heritage Site located in Madhya Pradesh, is known around the world for its stunning temples adorned by erotic and sensuous carvings. A small town located in the Bundelkhand region, Khajuraho is a brilliant example of Indian architecture and its culture back in the medieval period. The architecture of these Hindu and Jain temples depict the erotic forms of love, the carvings on the walls display passion in the most sensuous yet aesthetic ways.",
    },
    {
      name: "The Gateway of India",
      description:
        "Built to commemorate the arrival of King George V and his wife Queen Mary in 1911, this stunning piece of architecture was opened with much pomp and ceremony in 1924 and was, for a while, the tallest structure in the city. Constructed entirely of yellow basalt and concrete and notable for its Indo-Saracenic design, the Gateway of India was also the scene of a rather less jubilant procession of British soldiers in 1948 when India gained its independence. These days, the huge archway provides a stunning backdrop that is as popular among locals as it is tourists.",
    },
    {
      name: "Mysore Palace",
      description:
        "The sprawling city of Mysore is a delight to explore thanks to its eclectic mix of fine old colonial architecture; regal Indian palaces; and lush, well-manicured gardens. While those inclined towards shopping will enjoy spending time in the city's famous silk and sandalwood bazaars, the main attraction is magnificent Mysore Palace.",
    },
    {
      name: "Mahobodhi Temple",
      description:
        "Bodhgaya, considered the world's holiest Buddhist site, attracts thousands of visitors each year, all drawn to participate with the resident monks in meditation and prayer. The focal point of this place of pilgrimage is stunning Mahabodhi Temple, built next to the very spot where Buddha came to Enlightenment and formulated his philosophy on life. Constructed in the 6th century and restored numerous times since, the temple is topped with a beautiful pyramidal spire and houses a large gilded statue of Buddha.",
    },
    {
      name: "Sundarbans",
      description:
        "Known for hosting the biggest mangrove forests in the world, Sundarbans National Park is located in West Bengal, India. It is also a Tiger Reserve and a Biosphere reserve that provides a complete nature's circle to the tourist right from 'Royal Bengal tigers' to roaring rivers and beautiful estuaries. Sundarbans National Park is a part of Sundarban delta that is covered with Mangrove Forest and the largest population of the Bengal Tigers. It is a UNESCO world heritage site with a large variety of birds and reptiles including salt-water crocodile.",
    },
    {
      name: "Jagdalpur",
      description:
        "Jagdalpur is a beautiful and naturally bountiful city in the Bastar district of Chhattisgarh and is one of the most popular tourist destinations in the state after Raipur and Bhilai. It is well connected to the state capital and to other nearby cities and is relatively unknown among tourists outside the state.",
    },
    {
      name: "Srinagar",
      description:
        "Srinagar finds a place on this list because it is one of the most famous tourist destinations in Jammu and Kashmir as well as the top honeymoon destination.The presence of many Mughal Gardens, religious & historical sites as well as Dal & Nageen Lakes has led Srinagar to being called the “Land of Gardens and Lakes.” Among the other things that will surprise you, one is the floating vegetable market on Dal Lake. The largest Tulip gardens in Asia are also in Srinagar.",
    },
    {
      name: "Kaziranga National Park",
      description:
        "Home to the largest population of the one-horned rhino on earth, Kaziranga National Park is one of India’s national treasures in terms of flora and fauna. Located in the state of Assam in North-Eastern India, its total area is shared by the districts of Nagaon, Golaghat and Karbi Anglong placing it roughly at the centre of the state. Approximately around five hours by road from Guwahati, Kaziranga National Park stands tall as the epitome of successful wildlife conservation in India. In 1985, it was awarded the status of a World Heritage Site by UNESCO.",
    },
    {
      name: "Namdapha National Park",
      description:
        "Namdapha, a National Park and Tiger Reserve, a true wilderness and enchanting beauty of lush green vegetation, impenetrable pristine and virgin forests covered an area of 1985.23 square kilometres having diverse flora and fauna lies in the international border between India and Myanmar (Burma) within Changlang District in the state of Arunachal Pradesh in the northeast India. Namdapha National Park is located at a few kilometre away from Miao amidst misty blue hills along the turbulent Noa-Dihing river lies in the sprawling tropical rain forest. It was declared as Tiger Reserve by the Government in 1983.",
    },
    {
      name: "Deoghar",
      description:
        "Deoghar, a popular religious destination in Jharkhand is blessed with one of the 12 Jyotirlinga temples known as temple Baidyanath. Baidyanath Dham in Deoghar becomes the most famous during the Shravan month of the Hindu Lunar Calendar, when millions of devotees bring holy water for the Linga in Pitchers called Kanwads, and hence known as Kanwariyas, to perform the holy ritual of Rudrabhishek [The Holy Bath] in this holy month. Deoghar is also known as 'the cultural capital of Jharkhand'.",
    },
    {
      name: "Adilabad",
      description:
        "Adilabad is a small town in the state of Telangana that is famous for the beautiful Kunatala waterfalls located amidst lush forests. Originally known as Edulapuram, this place is for the nature lovers and history buffs. Adilabad is currently Telangana's second-largest district and the town witnesses various customs and traditions that are a fusion of Telugu and Marathi culture. ",
    },
  ];
  const [index, setIndex] = useState(null);
  return (
    <div className="map">
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
