import React from "react";
import Slider from "./../Slider/Slider";
// import "./Discovercont.css";
// import FontAwesomeIcon from "react-icons/fa";
export default function Discovercont() {
  const threesixty = {
    color: "white",
    border: "1px solid white",
    padding: "2px",
  };
  return (
    <div>
      <Slider />
      <div
        id="block-socialmediafeeds-2"
        className="social-media-feeds parallax overflow-hidden"
      >
        {/* modal */}
        <div class="one">
          <div
            class="modal fade bd-example-modal-xl one"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <iframe
                  height="600px"
                  src="https://www.youtube.com/embed/_o3oHHTC5Uo?start=109"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------- */}
        <div
          class="modal fade bd-example-modal-xl two"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <iframe
                height="600"
                src="https://www.youtube.com/embed/OT7HCb-MTuo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* ====================== */}
        <div
          class="modal fade bd-example-modal-xl three"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <iframe
                height="600"
                src="https://www.youtube.com/embed/1SOv8Q_Kfis"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* ======================== */}
        <div
          class="modal fade bd-example-modal-xl four"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <iframe
                height="600"
                src="https://www.youtube.com/embed/fMSzNHUbLx0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* =========================== */}
        <div
          class="modal fade bd-example-modal-xl five"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <iframe
                height="600"
                src="https://www.youtube.com/embed/oO5__Kkj740"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* ================================= */}
        <div
          class="modal fade bd-example-modal-xl six"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <iframe
                height="600"
                src="https://www.youtube.com/embed/zu8gBMLtcvM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* modal ends */}

        <h2 className="title">Popular TourisT Attraction</h2>
        <div className="container-fluid max-w-70 p-0">
          <div className="row">
            <a
              className="col-lg-4 col-sm-6 col-12 p-3 m-0"
              href="https"
              target="_blank"
              rel="noreferrer"
              data-toggle="modal"
              data-target=".one .bd-example-modal-xl"
            >
              <div className="figure hover-blur">
                <img
                  alt="tourist attraction"
                  className="img-fluid rounded"
                  src="https://cdn.discordapp.com/attachments/866039655924891681/866366896725950525/Taj-Mahal-Agra-India.png"
                />
                <figcaption className="fig-caption no-bg text-white text-center">
                  <h4>@Agra</h4>
                  <p>
                    The most famous tourist place to visit in North India, Agra
                    is widely explored by tourists from all over the world. Its
                    special attraction Taj Mahal is a symbol of eternal love
                    which makes the city remain thong by the tourists having
                    every kind. Along with Taj Mahal, Agra Fort, Tomb of
                    Itimad-ud-Daulah, and Fatehpur Sikri are other places of
                    attraction in the city
                  </p>
                  <br />
                  <div style={threesixty}>360° view</div>
                </figcaption>
              </div>
            </a>
            <a
              className="col-lg-4 col-sm-6 col-12 p-3 m-0"
              href="https://www.instagram.com/p/CQnnaKHhYTp/"
              target="_blank"
              rel="noreferrer"
              data-toggle="modal"
              data-target=".two"
            >
              <div className="figure hover-blur">
                <img
                  alt="tourist attraction"
                  className="img-fluid rounded"
                  src="https://images.unsplash.com/photo-1593421396013-d702c19e51ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=402&q=80"
                />

                <figcaption className="fig-caption no-bg text-white text-center">
                  <h4>@Jaipur</h4>
                  <p>
                    Fondly known as the Pink City of India, Jaipur being the
                    Capital city of Rajasthan amuses everyone with its amazingly
                    rich hospitality and cultural heritage. The city beholds a
                    tag of India’s famous UNESCO World Heritage Site which is
                    surely an amazing crowd puller located in India.{" "}
                  </p>
                  <br />
                  <div style={threesixty}>360° view</div>
                </figcaption>
              </div>
            </a>
            <a
              className="col-lg-4 col-sm-6 col-12 p-3 m-0"
              href="https://www.instagram.com/p/CQnnaKHhYTp/"
              target="_blank"
              rel="noreferrer"
              data-toggle="modal"
              data-target=".three"
            >
              <div className="figure hover-blur">
                <img
                  alt="tourist attraction"
                  className="img-fluid rounded"
                  src="https://wallpaperaccess.com/full/1547020.jpg"
                  object-fit="cover"
                />
                <figcaption className="fig-caption no-bg text-white text-center">
                  <h4>@Kashmir</h4>
                  <p>
                    Known as Heaven on the Earth, Jammu & Kashmir is where
                    Mother Nature has bestowed all her love. Enclosed by the
                    Himalayas and Karakoram ranges; and festooned with verdant
                    meadows, lush valleys, dense forests, splendid temples, this
                    new union territory of India is a holiday destination to
                    instantly fall in love with.
                  </p>
                  <br />
                  <div style={threesixty}>360° view</div>
                </figcaption>
              </div>
            </a>
            <a
              className="col-lg-4 col-sm-6 col-12 p-3 m-0"
              href="https"
              target="_blank"
              rel="noreferrer"
              data-toggle="modal"
              data-target=".four"
            >
              <div className="figure hover-blur">
                <img
                  alt="tourist attraction"
                  className="img-fluid rounded"
                  src="https://cdn.discordapp.com/attachments/866039655924891681/866368960937459732/alleppey.png"
                  object-fit="cover"
                />
                <figcaption className="fig-caption no-bg text-white text-center">
                  <h4>Kerala</h4>
                  <p>
                    Popularly known as "God's Own Country", Kerala is one of the
                    most sought after tourist destinations in the world. This
                    exotic land is renowned for its rich cultural heritage,
                    tropical climate,and, the serenity of the backwaters and the
                    emerald blue Arabian Sea which promise an unforgettable
                    holidaying experience to travellers.
                  </p>
                  <br />
                  <div style={threesixty}>360° view</div>
                </figcaption>
              </div>
            </a>
            <a
              className="col-lg-4 col-sm-6 col-12 p-3 m-0"
              href="https://www.instagram.com/p/CQh0FRwBL6Q/"
              target="_blank"
              rel="noreferrer"
              data-toggle="modal"
              data-target=".five"
            >
              <div className="figure hover-blur">
                <img
                  alt="tourist attraction"
                  className="img-fluid rounded"
                  src="https://cdn.discordapp.com/attachments/866039655924891681/866367245469876344/1541058618-4231.png"
                  object-fit="cover"
                />
                <figcaption className="fig-caption no-bg text-white text-center">
                  <h4>Ahmedabad</h4>
                  <p>
                    The city of Ahmedabad is endowed with a rich architectural
                    heritage that is vital to the local identity and continuity
                    of the place. Along with the foremost heritage Indo-Islamic
                    monuments of the 15th to 17th centuries, there are potential
                    heritage precincts in the form of the Pols, the traditional
                    residential clusters of the medieval period, which makes
                    Ahmedabad exceptional.
                  </p>
                  <br />
                  <div style={threesixty}>360° view</div>
                  {/* <button className="btn-2 icondown">360</button> */}
                </figcaption>
              </div>
            </a>
            <a
              className="col-lg-4 col-sm-6 col-12 p-3 m-0"
              href="https://www.instagram.com/p/CQcmsC-BZ5V/"
              target="_blank"
              rel="noreferrer"
              data-toggle="modal"
              data-target=".six"
            >
              <div className="figure hover-blur">
                <img
                  alt="tourist attraction"
                  className="img-fluid rounded"
                  src="https://cdn.discordapp.com/attachments/866039655924891681/866369301904097280/1-24-963x540.png"
                />
                <figcaption className="fig-caption no-bg text-white text-center">
                  <h4>Meghalya</h4>
                  <p>
                    Located in North-east India, Meghalaya, also known as the
                    Abode of Clouds, falls in one of the richest biodiversity
                    areas in the world. The famed monsoons, the rich traditional
                    festivals, and the dramatic terrain are just some of the
                    many things this state is famous for. Whether you are
                    looking for an adventure to give you an adrenaline high or a
                    tranquil spot to recharge yourself, Meghalaya has plenty to
                    offer.
                  </p>
                  <br />
                  <div style={threesixty}>360° view</div>
                </figcaption>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
