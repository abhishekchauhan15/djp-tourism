import React from "react";
import "./Readmore.css";
export default function Readmore() {
  let index = window.location.pathname.split("/")[2];
  const newData = [
    {
      id: 1,
      name: "Agra",
      video: (
        <video className="vdo" autoPlay muted>
          <source
            src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/Taj%20Mahal.mp4"
            type="video/mp4"
          />
        </video>
      ),
      description: `Agra is a city in the northern state of Uttar Pradesh, India. The city is famous for being the capital of the Mughal emperors from 1526 to 1658. It is a major tourist destination for its many Mughal-era buildings such as Tāj Mahal, Agra Fort and Fatehpūr Sikrī, all three of which are UNESCO World Heritage Sites.
   Climate:
Agra is on the Indo-Gangetic plain and has a continental climate, with long, hot summers from April to September. During summers dry winds blow in this region. The monsoon months from July to September see about 69 cm of rainfall annually. Winters are from November to February. Agra is best visited in the months of October, November, February and March, when the average temperature are between 16 and 25 Celsius.
Places of interest:

The Taj Mahal
Agra's Taj Mahal is one of the most famous buildings in the world. It is well known for its reason to be built for Shah Jahan's favorite wife, Mumtaz Mahal. It is one of the New Seven Wonders of the world, and one of three World Heritage Sites in Agra.

Completed in 1653, the Tāj Mahal was built by the Mughal king Shāh Jahān as the grave for his beloved wife, Mumtāz Mahal. It was built in white marble. It is perhaps India's most fascinating and beautiful monument. This perfectly symmetrical monument took 22 years (1630-1652) of hard labour and 20,000 workers, masons and jewellers to build. Along with the building there is landscaped gardens. The architect who built the monument is named Persian architect, Ustād 'Īsā. The Tāj Mahal is located on the bank of the Yamuna River which can be observed from Agra Fort.`,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626683087502!6m8!1m7!1sKqEhi2WG-G-gAAqZzQxzTg!2m2!1d27.17502162458733!2d78.04278648140098!3f268.3016707550422!4f28.56957885798616!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 2,
      name: "Amritsar",
      video: (
        <video className="vdo" autoPlay muted>
          <source
            src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/Amritsar.mp4"
            type="video/mp4"
          />
        </video>
      ),
      description: `
      The name of the city derives from the name of the pool around the Golden Temple (also known as Harmandir Sahib) and means "holy pool of nectar" (Amrit: elixir; Sar: (short for sarovar) lake). It is the spiritual and cultural centre of the Sikh religion, and they are proud of the city and the beautiful and unique Gurdwara (place of worship). The Golden Temple was initiated by Guru Ramdaas Ji, the fourth Sikh Guru, and completed in 1601 by his successor Guru Arjan Dev Ji. It is now a major pilgrimage and tourism hub.
      Climate:
Amritsar has a semi-arid climate typical of northwestern India and northeastern Pakistan. It has 5 seasons, winter, a period from mid-February to the end of March called "spring", a very hot summer (April-June), the monsoon season (July-September) and a so called "autumn" from mid-October to mid-Novemeber. Amritsar is 3rd coldest city in India during wintertime. Temperatures in the night are around 4°C (40°F), which is very cold by indian standards, and it is actually 3°C (6°F) lower than the city of Jammu more than 200km to the north. This happens partly due to the northeasterly winds blowing from the Himalayas, which also affects the rest of northern India, and partly due to its semi-arid nature. Temperatures reach the freezing point almost every year and the record low is -3.5°C (25.7°F). Snow is impossible as cold weather is accompanied by dry conditions. In spite of its cold nights though days can be quite pleasant with afternoon highs reaching 21°C (70°F) consistently. In mid-March is usually when the first 30°C (86°F), although sometimes it can occur much earlier.
Places of interest:
Golden Temple :-
The Golden Temple is the main attraction in the city, and the most important religious place to the Sikhs. It's a stunning complex, and always full of thousands of pilgrims from all over India, excited to be at a place that they usually only see on television. The excitement to be here is infectious, and many people will be more than happy to tell you all about their religion and customs, and show you around the temple itself. Cover your head, remove your shoes and wander around one of the most amazing places in India. The complex is open almost 24 hours (06:00-02:00 the next day) and is worth visiting twice: once during the day, once at night, when it's beautifully lit up.
      `,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626683467042!6m8!1m7!1sCAoSLEFGMVFpcFBRSnNRS2tRTmdISEdoSE1ocDg4OTdwM3E1OVo4ZW8xRjJXR2FH!2m2!1d31.61998029999999!2d74.8764849!3f216.26381847648588!4f8.313792495801465!5f2.299968626952992"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 3,
      name: "Rajasthan",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/9zwUZTv95cw?autoplay=1&mute=1"
        ></iframe>
      ),

      description: `
         Rajasthan is a state in the northwest of India. It is mainly arid and its western border is adjacent to Pakistan. The main attraction for travellers is the vast Thar Desert and one of the oldest mountain ranges in the world, the Aravallis. The Rajput heritage which is apparent in the forts, temples and palaces established by the Rajput Kings like Bappa Rawal, Rana Kumbha, Rana Sanga and Rana Pratap are also popular places to visit.
         Climate:
         Under the Köppen climate classification the greater part of Rajasthan falls under Hot Desert (BWh) and remaining portions of the state falls under Hot Semi Arid (BSh); the climate of the state ranges from arid to semi-arid. Rajasthan receives low and variable rainfalls and thereby is prone to droughts.
         Places of interest:
         The Golden City :-
         Situated in the heart of the Thar desert in Rajasthan, Jaisalmer city built on the foundation of yellow sandstone, justifies its tag as the 'Golden City' of India. The yellow stone monuments glittering in the sunlight is indeed a sight to behold. Jaisalmer offers many places to visit, ranging from yellowed forts to golden palaces and even deserted towns! The unique beauty of the place represented in the contrasting hues of gold against vivid shades of blue and green makes Jaisalmer an unforgettable experience.
        `,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626683743800!6m8!1m7!1sP5JtiFRACG5E2K6JiRvQqA!2m2!1d26.91345825853105!2d70.91321219897102!3f187.1900650456179!4f16.25231412428232!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 4,
      name: "New Delhi",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/t3YWyzcq4Mo?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
       Delhi is India's capital city and the home of executive, legislative, and judiciary branches of the Government of India. Delhi is a large metropolis with strengths in arts, commerce, education, entertainment, fashion, finance, healthcare, media, professional services, research and development, tourism and transport all contributing to its prominence.Delhi is said to be one of the oldest existing cities in the world, along with Jerusalem and Varanasi. Legend estimates it to be over 5,000 years old. Over the millennia, Delhi is said to have been built and destroyed 11 times. The oldest alleged incarnation of the city shows up in the Indian mythological epic Mahabharata as Indraprastha.
       Climate:
       The shoulder seasons (Feb-Mar and Oct-Nov) are the best times to visit, with temperatures in the 20-30°C range (68-86°F). From April to June, temperatures are scorchingly hot (over 40°C is common) and, with every air-conditioner running at full blast, the city's creaking power and water infrastructure is strained to the breaking point and beyond. Monsoon rains deluge the city from July to September, flooding roads on a regular basis and bringing traffic to a standstill. In winter, especially December and January, temperatures can dip to near-zero which can feel a lot colder because central heating is largely unknown and homes are usually designed with a view to keep cool in the summers rather than warm in the winters. In addition the city is blanketed in thick fog, causing numerous flight cancellations and train delays.
       Places of interest:
       The Red Fort-:The Red Fort (Lal Qila) is one of Delhi's top tourist sights. A brilliant red sandstone fort built by the Mughal Emperor Shah Jahan (who also built Agra's Taj Mahal) as his ruling palace. Completed in 1648, the years since have not treated the buildings kindly: the rooms have long since been stripped of all objects, the marble inlays are long gone and quite a few buildings are off limits. Still, the scale remains imposing and the gardens are kept lush and green even in midwinter. Major buildings within include:
       `,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626683914722!6m8!1m7!1sCAoSLEFGMVFpcE1YdHJhVmJRTlE2SUM3ZlBvREVXRUhWVERTandlQUJnYW83YjJ4!2m2!1d28.6561592!2d77.2410203!3f93.92011446936507!4f28.748381340656394!5f0.4000000000000002"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 5,
      name: "Madhya Pradesh",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/o9GqYS6uvsE?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
      Madhya Pradesh is a state in the Republic of India. The state has an area of 119,016 sq mi (308,250 km2). It is bigger than Italy but smaller than Oman. About 70,000,000 people live there. In traditional Indian geography it falls under the West Indian zone. The capital of the state is Bhopal.

      The largest city is Indore. Other main cities are Jabalpur and Ujjain. Ujjain is well known for mythological reasons. Mandav, Bhojpur and Panchmadi are the main tourist attractions.
      
      To the north of Madhya Pradesh is the state of Uttar Pradesh and to the northwest is the state of Rajasthan, while Maharashtra is to the southwest.
      Climate:limate of Madhya Pradesh is heavily influenced by the Tropic of Cancer that passes through the state. Climatic conditions of Madhya Pradesh are highly variable. The summers are extreme hot, the winters are extreme cold and the rainfall is either extreme or drought situation prevails.

      Like other parts of India, Madhya Pradesh also has three major seasons – Summer, Monsoon and Winter, but the duration varies. During summer (March-June), the temperature in the entire state ranges above 29.4°C. In general, the eastern parts of Madhya Pradesh are hotter than the western parts. The regions like Gwalior, Morena and Datia record temperature of over 42°C in the month of May
      Place of Interest:
      Khajuraho Temple:-
      The Khajuraho Group of Monuments are a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, India, about 175 kilometres southeast of Jhansi. They are a UNESCO World Heritage Site.[1][2] The temples are famous for their nagara-style architectural symbolism and their erotic sculptures.[3]

Most Khajuraho temples were built between 885 AD and 1050 AD by the Chandela dynasty.[4][5] Historical records note that the Khajuraho temple site had 85 temples by the 12th century, spread over 20 square kilometers. Of these, only about 25 temples have survived, spread over six square kilometers.[2] Of the surviving temples, the Kandariya Mahadeva Temple is decorated with a profusion of sculptures with intricate details, symbolism and expressiveness of ancient Indian art.[6]

When these monuments were built, the boys in the place lived in hermitages, by being brahmcharis (bachelor) until they attained manhood and these sculptures helped them to learn about the worldly role of 'householder'.[7][8] The Khajuraho group of temples were built together but were dedicated to two religions, Hinduism and Jainism, suggesting a tradition of acceptance and respect for diverse religious views among Hindus and Jains in the region.[9]
       `,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626693023889!6m8!1m7!1s7sdRfLB8hUpe4FZ6R2424Q!2m2!1d24.85345344968866!2d79.9201602125587!3f248.41651001350712!4f4.666768600282225!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 6,
      name: "Mumbai",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/jhIK24fVT0o?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
       The name Mumbai is derived from Mumbā or Mahā-Ambā—the name of the patron goddess (kuladevata) Mumbadevi of the native Koli community—[39] and ā'ī meaning "mother" in the Marathi language, which is the mother tongue of the Koli people and the official language of Maharashtra.[23][40] The Koli people originated in Kathiawar and Central Gujarat, and according to some sources they brought their goddess Mumba with them from Kathiawar (Gujarat), where she is still worshipped.[24][25] However, other sources disagree that Mumbai's name was derived from the goddess Mumba.[25]
       Climate:
       Mumbai has a tropical climate, specifically a tropical wet and dry climate (Aw) under the Köppen climate classification. It varies between a dry period extending from October to May and a wet period peaking in June.[168] The cooler season from December to February is followed by the hotter season from March to May. The period from June to about the end of September constitutes the south west monsoon season, and October and November form the post-monsoon season.[169]

Flooding during monsoon is a major problem for Mumbai.[170][171] Between June and September, the south west monsoon rains lash the city. Pre-monsoon showers are received in May. Occasionally, north-east monsoon showers occur in October and November. The maximum annual rainfall ever recorded was 3,452 mm (136 in) for 1954.[172] The highest rainfall recorded in a single day was 944 mm (37 in) on 26 July 2005.[173] The average total annual rainfall is 2,146.6 mm (85 in) for the Island City, and 2,457 mm (97 in) for the suburbs.[172]

Place Of Interest:
The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing in December 1911 at Wellington Pier, Mumbai of King-Emperor George V and Queen-Empress Mary, the first British monarch to visit India. At the time of the royal visit, the gateway was not yet built, and a cardboard structure greeted the monarch.

The foundation stone was laid in March 1913 for a monument built in the Indo-Saracenic style, incorporating elements of 16th-century Gujarati architecture. The final design of the monument by architect George Wittet was sanctioned only in 1914, and construction was completed in 1924. The structure is a triumphal arch made of basalt, which is 26 metres (85 feet) high.It is an effort from the architect George Wittet.

After its construction the gateway was used as a symbolic ceremonial entrance to British India for important colonial personnel. It has been called a symbol of "conquest and colonisation" commemorating British colonial legacy. The gateway is also the monument from where the last British troops left India in 1948, following Indian independence. It is located on the waterfront at an angle, opposite the Taj Mahal Palace and Tower Hotel and overlooks the Arabian Sea. Today, the monument is synonymous with the city of Mumbai, and is amongst its prime tourist attractions. The gateway is also a gathering spot for locals, street vendors, and photographers soliciting services. It holds significance for the local Jewish community as it has been the spot for Hanukkah celebrations, with the lighting of the menorah, since 2003. There are five jetties located at the gateway, of which two are used for commercial ferry operations

       `,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626692726135!6m8!1m7!1sHL7ZYJvvrOKdIloaAeJ5dQ!2m2!1d18.9225327052727!2d72.8344065315379!3f167.13306298306358!4f17.04466393009635!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 7,
      name: "Mysore ",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/ztDPKqNJCKI?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
       Mysore is noted for its heritage structures and palaces, including the Mysore Palace, and for the festivities that take place during the Dasara festival when the city receives many tourists from around the world. It lends its name to various art forms and culture, such as Mysore Dasara, Mysore painting; the sweet dish Mysore Pak, Mysore Masala Dosa; brands such as Mysore Sandal Soap, Mysore Ink; and styles and cosmetics such as Mysore Peta (a traditional silk turban) and the Mysore silk saris. Mysore is also known for its special variety of jasmine flower fondly referred as "Mysore Mallige" and betel leaves. Tourism is the major industry alongside the traditional industries. Mysore's inter-city public transportation includes rail, bus and flights.[24]
       Climate:
       Mysore has a tropical savanna climate (Aw) bordering on a hot semi-arid climate (BSh) under the Köppen climate classification. The main seasons are Summer from March to May, the monsoon season from June to October and winter from November to February.
       Place of Interest:
       The Mysore Palace, officially known as Mysuru Palace, is a historical palace and the royal residence (house) at Mysore in the Indian state of Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of Palaces', and there are seven palaces including this one; however, 'Mysore Palace' refers specifically to this one within the Old fort.

The land on which the palace now stands was originally known as mysuru (literally, citadel), and is now known as the new Fort. Yaduraya built the first palace inside the Old Fort in the 14th century, which was burnt ablaze and constructed multiple times. The old fort was constructed using wood and thus was the reason for the old fort to catch on fire, the current fort was made up of stone,bricks and wood.The current structure was constructed between 1897 and 1912, after the Old Palace was burnt ablaze.

Mysore Palace is now one of the most famous tourist attractions in India, after the Taj Mahal, with more than 6 million annual visitors.[1]
       `,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626685704490!6m8!1m7!1sCAoSLEFGMVFpcE1pMkZBR0VuMmdwM18zRGY5WXVnTDhvRnM0bTZfc09TNloxTEVq!2m2!1d12.3051351!2d76.6551483!3f338.8051464314227!4f-6.092826066303033!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 8,
      name: "Bihar",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/84dD6-GPuqs?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
In ancient and classical India, the area that is now Bihar was considered a centre of power, learning, and culture.[16] From Magadha arose India's first empire, the Maurya empire, as well as one of the world's most widely adhered-to religions: Buddhism.[17] Magadha empires, notably under the Maurya and Gupta dynasties, unified large parts of South Asia under a central rule.[18] Another region of Bihar is Mithila which was an early centre of learning and the centre of the Videha kingdom.[19][20]On 15 November 2000, southern Bihar was ceded to form the new state of Jharkhand.[13] Only 11.3% of the population of Bihar lives in urban areas, which is the lowest in India after Himachal Pradesh.[14] Additionally, almost 58% of Biharis are below the age of 25, giving Bihar the highest proportion of young people of any Indian state.[15] The official languages are Hindi and Urdu, although other languages are common, including Maithili, Magahi, Bhojpuri and other Bihari languages.
Climate:
Bihar is one of the coldest regions in India with an average daily high temperature of only 26 degrees centigrade. With a yearly average of 26 degrees the climate is very warm, but has only a very few tropical and humid months. Several months of the year it is warm to hot at temperatures continuously above 25 degrees centigrade, sometimes up to 29 degrees. Dued to the lesser rain the best time for traveling is from October to April. The most rain days occur from from May to September.
Place Of Intesrest:
The Mahabodhi Temple (literally: "Great Awakening Temple") or the Mahabodhi Mahavihar, a UNESCO World Heritage Site, is an ancient, but much rebuilt and restored, Buddhist temple in Bodh Gaya, marking the location where the Buddha is said to have attained enlightenment.[1] Bodh Gaya (in Gaya district) is about 96 km (60 mi) from Patna, Bihar state, India.

The site contains a descendant of the Bodhi Tree under which Buddha gained enlightenment, and has been a major pilgrimage destination for Hindus and Buddhists for well over two thousand years, and some elements probably date to the period of Ashoka (died c. 232 BCE). What is now visible on the ground essentially dates from the 7th century CE, or perhaps somewhat earlier, as well as several major restorations since the 19th century. But the structure now may well incorporate large parts of earlier work, possibly from the 2nd or 3rd century CE.[2]

Many of the oldest sculptural elements have been moved to the museum beside the temple, and some, such as the carved stone railing wall around the main structure, have been replaced by replicas. The main temple's survival is especially impressive, as it was mostly made of brick covered with stucco, materials that are much less durable than stone. However, it is understood that very little of the original sculptural decoration has survived.[2]
`,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626685349478!6m8!1m7!1sCAoSLEFGMVFpcE5xYkM1VFBORzg0d183cDE2amJVNlZDTkRGZG5UQU5mS1F4aVlZ!2m2!1d24.6960582!2d84.99189969999999!3f318.14385436545507!4f6.919081562703212!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 9,
      name: "West Bengal",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/YAuMCIdWjHE?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
        West Bengal  is a state in the eastern region of India along the Bay of Bengal. With over 91 million inhabitants, it is the fourth-most populous state and the fourteenth-largest state by area in India. Covering an area of 88,752 km2 (34,267 sq mi), it is also the eighth-most populous country subdivision of the world. Part of the Bengal region of the Indian subcontinent, it borders Bangladesh in the east, and Nepal and Bhutan in the north. It also borders the Indian states of Odisha, Jharkhand, Bihar, Sikkim and Assam. The state capital is Kolkata, the third-largest metropolis, and seventh largest city by population in India. West Bengal includes the Darjeeling Himalayan hill region, the Ganges delta, the Rarh region and the coastal Sundarbans. The state's main ethnic group are the Bengalis, with the Bengali Hindus forming the demographic majority.
        Climate:
        In Bengal summer can be extremely hot and have high humidity. The plains of South Bengal have a daily maximum temperature around 35-38 °C.[1][2]It can also exceed 40 °C.[3][4][5][6][7] The western highlands experience a dry summer like northern India. During the day, the temperature ranges from 38 to 42 °C, though it can reach or exceed 45 °C.[8][9][10][11][12] In summer, the plains of North Bengal are generally cooler than the west and south.[13][14][15] In this area, the daily maximum temperature varies from 26 to 32 °C.[16]It occasionally crosses 35 °C. The minimum temperature in summer is approximately 18-22 °C. The Darjeeling hill region is the coolest area in summer. Here, the daily highest temperature is 15-25 °C.
        Place of Interest:
        Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's division of Khulna. It comprises closed and open mangrove forests, land used for agricultural purpose, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.[4] The Sundarbans mangrove forest covers an area of about 10,000 km2 (3,900 sq mi), of which forests in Bangladesh's Khulna Division extend over 6,017 km2 (2,323 sq mi) and in West Bengal, they extend over 4,260 km2 (1,640 sq mi) across the South 24 Parganas and North 24 Parganas districts.[5] The most abundant tree species are sundri (Heritiera fomes) and gewa (Excoecaria agallocha). The forests provide habitat to 453 fauna wildlife, including 290 bird, 120 fish, 42 mammal, 35 reptile and eight amphibian species.[6]
        `,
      src: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg"
          alt=""
          width="800"
        />
      ),
    },
    {
      id: 10,
      name: "Chhattisgarh",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/poKbFeYU464?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
      Chhattisgarh is a state located in the region of Central India. Formerly part of Madhya Pradesh, it was granted statehood on November 1, 2000. It is the 9th-largest state in India, with an area of 135,192 km2 (52,198 sq mi). As of 2020, it has a population of roughly 29.4 million, making it the 17th most populated state in the country.[4]

The state was formed by the partition of ten Chhattisgarhi and six Gondi-speaking districts in the southeast of Madhya Pradesh.[7][8] Its capital city is Raipur. It borders 7 states – Uttar Pradesh to the north, Madhya Pradesh to the northwest, Maharashtra to the southwest, Jharkhand to the northeast, Odisha to the east, and Telangana and Andhra to the south.[9] Currently, it comprises 28 districts.

Chhattisgarh is one of the fastest-developing states in India.[10] Its Gross State Domestic Product (GSDP) is ₹3.63 lakh crore (US$51 billion), with a per capita GSDP of ₹102,762 (US$1,400).[11] A resource-rich state, Chhattisgarh provides electricity, coal, and steel to the rest of the nation.[12]
Climate:
The climate of Chhattisgarh is tropical. It is hot and humid because of its proximity to the Tropic of Cancer and its dependence on the monsoons for rains. Summer temperatures in Chhattisgarh can reach 45 °C (113 °F). The monsoon season is from late June to October and is a welcome respite from the heat.
Place of Intesrest:
Jagdalpur is a city in Bastar district in the Indian state of Chhattisgarh. Jagdalpur is the administrative headquarters of Bastar District and Bastar Division. It was earlier the capital of the former princely state of Bastar. It is the fourth largest city of Chhattisgarh.The City is commercial, financial and political center of hub for South Chhattisgarh.
Some of the must-visit places in Jagdalpur are Chitrakote Falls, Teerathgarh Falls, Kotumsar Cave, Tamda Ghumar waterfalls, Mendri Ghumar waterfalls, Kanger Ghati National Park, Indravati National Park, Danteshwari Temple, the historic Temples in Barsoor, Jagannath temple, Mavli temple, Laxmi-Narayan temple, The Sri Venkateshwara Swamy Temple and more.[8]

The Ministry of Tourism, Government of India has identified Jagdalpur-Teerathgarh-Chitrakoot-Barsur-Dantewada-Teerathgarh Circuit as one of the 45 Mega Tourist Destinations/Circuits in India on the basis of footfalls and their future tourism potential.[9]


      `,
      src: (
        <img
          src="https://cdn1.goibibo.com/voy_ing/t_fs/bastar-jagdalpur-14840572862o.jpeg"
          alt=""
          width="800"
        />
      ),
    },
    {
      id: 11,
      name: "Jammu and Kashmir",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/8FwklDzRs7A?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
       Jammu and Kashmir[b] is a region administered by India as a union territory and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947, and between India and China since 1962.[15][16] The Line of Control separates Jammu and Kashmir from the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan in the west and north. It lies to the north of the Indian states of Himachal Pradesh and Punjab and to the west of Ladakh, which is also subject to the dispute as a part of Kashmir, and administered by India as a union territory.

Provisions for the formation of the union territory of Jammu and Kashmir were contained within the Jammu and Kashmir Reorganisation Act, 2019, which was passed by both houses of the Parliament of India in August 2019. The act re-constituted the former state of Jammu and Kashmir into two union territories, Jammu and Kashmir and Ladakh, with effect from 31 October 2019.[17]
Climate:
The Jammu region has a sub tropical climate and the summer is hot. The temperature starts soaring in the month of March and is at its peak in the month of April. The maximum temperature in summer can go as high as 45 degree Celsius. Kashmir is quite pleasant with the temperature varying from 14 to 30 degree Celsius.
Place of Intesrest:
Srinagar is one of several places that have been called the "Venice of the East".[45][46][47] Lakes around the city include Dal Lake – noted for its houseboats – and Nigeen Lake. Apart from Dal Lake and Nigeen Lake, Wular Lake and Manasbal Lake both lie to the north of Srinagar. Wular Lake is one of the largest fresh water lakes in Asia.

Srinagar has some Mughal gardens, forming a part of those laid by the Mughal emperors across the Indian subcontinent. Those of Srinagar and its close vicinity include Chashma Shahi (the royal fountains); Pari Mahal (the palace of the fairies); Nishat Bagh (the garden of spring); Shalimar Bagh; the Naseem Bagh. Jawaharlal Nehru Memorial Botanical Garden is a botanical garden in the city, set up in 1969.[48] The Indian government has included these gardens under "Mughal Gardens of Jammu and Kashmir" in the tentative list for sites to be included in world Heritage sites.

The Sher Garhi Palace houses administrative buildings from the state government.[49] Another palace of the Maharajas, the Gulab Bhavan, has now become the Lalit Grand Palace hotel.[50]

The Shankaracharya Temple which lies on a hill top in the middle of the city, besides the Kheer Bhawani Temple are important Hindu temples in the city.[51]
       `,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626685692985!6m8!1m7!1sCAoSLEFGMVFpcFA4T2RfMVBEZmtRR0V3OWsyNHdmbkZuR0sySTNKOU44ZmxOMDdw!2m2!1d34.122776!2d74.87027739999999!3f152.79273872693653!4f-6.9486237973137435!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
    {
      id: 12,
      name: "Assam",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/y47G4-XyW14?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
      Assam is a state in northeastern India, south of the eastern Himalayas along the Brahmaputra and Barak River valleys. Assam covers an area of 78,438 km2 (30,285 sq mi). The state is bordered by Bhutan and Arunachal Pradesh to the north; Nagaland and Manipur to the east; Meghalaya, Tripura, Mizoram and Bangladesh to the south; and West Bengal to the west via the Siliguri Corridor, a 22 kilometres (14 mi) wide strip of land that connects the state to the rest of India. It is also one of the world's most populous subdivisions. Assamese is the official and most commonly spoken language of the state, followed by Bengali, which is official in the Barak Valley and Bodo which is official in Bodoland Territorial Region.
      Climate:
      With the tropical monsoon climate, Assam is temperate (summer max. at 95–100 °F or 35–38 °C and winter min. at 43–46 °F or 6–8 °C) and experiences heavy rainfall and high humidity. ... Spring (March–April) and autumn (September–October) are usually pleasant with moderate rainfall and temperature.
      Place of Intesres:
      Kaziranga National Park ;-
      (Assamese: [kaziɹɔŋa ɹast(ɹ)iɔ uɪddan]) is a national park in the Golaghat, Karbi Anglong and Nagaon districts of the state of Assam, India. The sanctuary, which hosts two-thirds of the world's great one-horned rhinoceroses, is a World Heritage Site.[2] According to the census held in March 2018 which was jointly conducted by the Forest Department of the Government of Assam and some recognized wildlife NGOs, the rhino population in Kaziranga National Park is 2,413. It comprises 1,641 adult rhinos (642 males, 793 females, 206 unsexed); 387 sub-adults (116 males, 149 females, 122 unsexed); and 385 calves.[3]

In 2015, the rhino population stood at 2401. Kaziranga is home to the highest density of tigers among protected areas in the world, and was declared a Tiger Reserve in 2006 (now the highest tiger density is in Orang National Park, Assam). The park is home to large breeding populations of elephants, wild water buffalo, and swamp deer.[4] Kaziranga is recognized as an Important Bird Area by BirdLife International for conservation of avifaunal species. When compared with other protected areas in India, Kaziranga has achieved notable success in wildlife conservation. Located on the edge of the Eastern Himalaya biodiversity hotspot, the park combines high species diversity and visibility.
       `,
      src: (
        <img
          src="https://images.outlookindia.com/public/uploads/gallery/20210322/tourrist_20210322_402_602.jpg"
          alt=""
          width="800"
        />
      ),
    },
    {
      id: 13,
      name: "Arunachal Pradesh",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/VZQw9XJQHxE?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
      Arunachal Pradesh is an Indian state in Northeast India. It was formed from the erstwhile North-East Frontier Agency (NEFA) region, and became a state on 20 February 1987. It borders the states of Assam and Nagaland to the south. It shares international borders with Bhutan in the west, Myanmar in the east, and a disputed border with China in the north at the McMahon Line. Itanagar is the state capital of Arunachal Pradesh. Arunachal Pradesh is the largest of the Seven Sister States of Northeast India by area. Arunachal Pradesh shares 1,129 km border with China's Tibet Autonomous Region.[15][16]

As of the 2011 Census of India, Arunachal Pradesh has a population of 1,382,611 and an area of 83,743 square kilometres (32,333 sq mi). It is an ethnically diverse state, with predominantly Monpa people in the west, Tani people in the center, Tai people in the east, and Naga people in the south of the state. About 45 tribes/sub-tribes live in the state. The main tribe of the state is Adi, which has sub-tribes such as Adi-abhor and Padma. The Mishmi tribe has three sub-tribes, namely, Idu-Mishmi, Digharu-Mishmi and Mizo-Mishmi.
Climate:
The regions in the lower belts of the state experience hot and humid climates, with a maximum temperature in the foothills reaching up to 40 °C (during the summer). The average temperature in this region in winter ranges from 15° to 21 °C while that during the monsoon season remains between 22° and 30 °C.
Place Of Intesrest:
Namdapha National Park is a 1,985 km2 (766 sq mi) large protected area in Arunachal Pradesh of Northeast India. With more than 1,000 floral and about 1,400 faunal species, it is a biodiversity hotspot in the Eastern Himalayas.[1] The national park harbours the northernmost lowland evergreen rainforests in the world at 27°N latitude.[2] It also harbours extensive dipterocarp forests, comprising the northwestern parts of the Mizoram-Manipur-Kachin rain forests ecoregion.[3]

It is the fourth largest national park in India.[4]The national park is located in Changlang district of the northeastern state of Arunachal Pradesh, near the international border with Myanmar. It spans an area of 1,985 km2 (766 sq mi) including a buffer zone of 177 km2 (68 sq mi) and a core area of 1,808 km2 (698 sq mi). It is located between the Dapha bum range of the Mishmi Hills and the Patkai range with a wide elevation range between 200 and 4,571 m (656 and 14,997 ft). It is crossed from east to west by the Noa Dihing River that originates at the Chaukan Pass,[6] located on the Indo-Myanmar border.
      `,
      src: (
        <img
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/best-time-to-visit.jpg"
          alt=""
          width="800"
        />
      ),
    },
    {
      id: 14,
      name: "Jharkhand",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/_a9JFQfF5_0?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
       Jharkhand is a state in eastern India.[7] The state shares its border with the states of Bihar to the north, Uttar Pradesh to the northwest, Chhattisgarh to the west, Odisha to the south and West Bengal to the east. It has an area of 79,710 km2 (30,778 sq mi). It is the 15th largest state by area, and the 14th largest by population. Hindi is the official language of the state.[3] The city of Ranchi is its capital and Dumka its sub-capital. The state is known for its waterfalls, hills and holy places;[8] Baidyanath Dham, Parasnath and Rajrappa are major religious sites.[9] The state was formed in 2000, from the territory that had previously been part of Bihar.

Jharkhand suffers from what is sometimes termed a resource curse:[10] it accounts for more than 40% of the mineral resources of India,[11] but 39.1% of its population is below the poverty line and 19.6% of children under five years of age are malnourished.[12] Jharkhand is primarily rural, with about 24% of its population living in cities.[13] It is amongst the leading states in terms of economic growth. In 2017–18, the GDP growth rate of state was at 10.22%.[14]
Climate:
Climate. Climate of Jharkhand varies from Humid subtropical in the north to tropical wet and dry in the south-east. The main seasons are summer, rainy, autumn, winter and spring. The summer lasts from mid-April to mid-June.
Place of Intesres:
Deoghar:-
Deoghar is a Hindi word and the literal meaning of ‘Deoghar’ is abode (‘ghar’) of the Gods and Goddesses (‘dev’). Deoghar is also known as “Baidyanath Dham”, “Baba Dham”, “B. Deoghar”. The origin of Baidyanathdham is lost in antiquity. It has been referred to as Haritakivan or Ketakivan in Sanskrit Texts. The name Deoghar seems to be of recent origin and probably dates from the erection of the great temple of Lord Baidyanath. Although the name of the builder of the temple is not traceable, certain parts of the front portion of the temple are said to have been built by Puran Mal, an ancestor of the Maharaja of Giddhour, in 1596. Deoghar is a place of worship for Lord Shiva, in the month of Shravan many devotees take ganga jal from Sultanganj to Deoghar for worship and they get the desired wish of their life.[2]
The temple of Baidyanath or Lord Shiva is the most important of all the temples in the courtyard. The temple faces the east and is a plain stone structure with a pyramidal tower, 72 feet tall. The top contains three ascending shaped gold vessels that are compactly set, and were donated by the Maharaja of Giddhaur. Besides these pitcher shaped vessels, there is a Punchsula (five knives in a trident shape), which is rare. In the inner top, there is an eight-petaled lotus jewel called Chandrakanta Mani.
       `,
      src: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c4/PRAYER_IN_SATSANG_ASHRAM_%28DEOGHAR%2CJHARKHAND%29.jpg"
          alt=""
          width="800"
        />
      ),
    },
    {
      id: 15,
      name: "Telangana",
      video: (
        <iframe
          width="900"
          height="600"
          src="https://www.youtube.com/embed/WndTY8D8HJw?autoplay=1&mute=1"
        ></iframe>
      ),
      description: `
       Telangana is a state in Southern India situated on the south-central stretch of the Indian peninsula on the high Deccan Plateau.[10] It is the eleventh-largest state and the twelfth-most populated state in India with a geographical area of 112,077 km2 (43,273 sq mi) and 35,193,978 residents as per 2011 census.[11] On 2 June 2014, the area was separated from the northwestern part of Andhra Pradesh as the newly formed state with Hyderabad as its capital. Its other major cities include Warangal, Nizamabad, Khammam, Karimnagar and Ramagundam. Telangana is bordered by the states of Maharashtra to the north, Chhattisgarh to the east, Karnataka to the west, and Andhra Pradesh to the east and south.[12] The terrain of Telangana region consists mostly of hills, mountain ranges, and thick dense forests covering an area of 27,292 km2 (10,538 sq mi). As of 2019, the state of Telangana is divided into 33 districts.
       Climate:
       Telangana is a semi-arid area and has a predominantly hot and dry climate. Summers start in March, and peak in May with average high temperatures in the 42 °C (108 °F) range. The monsoon arrives in June and lasts until September with about 755 mm (29.7 inches) of precipitation.
       Place of Interest:
       Adilbad:-
       Adilabad is a city[4] which serves as the headquarters of Adilabad district, in the Indian state of Telangana.[2] Telugu, Marathi and Urdu are the native languages of Adilabad.[5] Adilabad is famous for its rich cultivation of cotton. Hence, Adilabad is also referred as "White Gold City". It is located about 304 kilometres (189 mi) north of the state capital, Hyderabad, 150 kilometres (93 mi) from Nizamabad and 196 kilometres (122 mi) from Nagpur. Adilabad is called as the "Gateway to South India".The Kuntala Waterfall, rivers like the Godavari, Painganga, etc flow through the district. Mavala lake, built during the Nizam period, is situated 6 km south side of Adilabad city. There is a park adjacent to the lake. Not only kuntala there are many other waterfalls in Adilabad. 40 km from Adilabad we can found Pochara waterfalls also and also there is Gayatri waterfall where different rope games conducted in winter and summer times. Sapthagundala waterfalls was also another fall which is spread into forest with 7 small waterfalls and we can go by walk because it has no proper roadway.
       `,
      src: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1626686021491!6m8!1m7!1sCAoSLEFGMVFpcE03bVIzWDRadno0WmhyTC1pdHpkYTU2cEN2NnJpeWEwa2FoV1Ix!2m2!1d19.6730885!2d78.5342562!3f174.29818925523546!4f5.745950623723061!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      ),
    },
  ];
  return (
    <div className="page">
      <div className="fam container d-flex flex-column align-items-center">
        <div>
          <h1 className="head">{newData[index].name}</h1>
        </div>
        <br />
        <div className="container d-flex justify-content-center">
          {/* <video autoPlay muted>
          <source src={newData[0].video} type="video/mp4" />
        </video> */}
          {newData[index].video}
        </div>
        <br />
        <br />
        <div>
          <p>{newData[index].description}</p>
        </div>
        <br />
        <br />
        <div>{newData[index].src}</div>
      </div>
    </div>
  );
}
