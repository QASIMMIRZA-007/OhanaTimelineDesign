import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { FaGraduationCap, FaVideo } from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FcNext } from "react-icons/fc";
// internal Imports
import { Userdp, doctorDp, video } from "./assets/Index";
import style from "./UI/Page.module.scss";
import Accordian from "./UI/Accordian";
import PreQuestions from "./UI/PreQuestions";
import Pharmacy from "./UI/Pharmacy";
import Invoice from "./UI/Invoice";
import Precription from "./UI/Precription";
import MedicalNotes from "./UI/MedicalNotes";
import LabTests from "./UI/LabTests";
import FollowUp from "./UI/FollowUp";
import { CiStethoscope } from "react-icons/ci";

const userData = [
  {
    prop1: "Gender",
    prop2: "female",
  },
  {
    prop1: "Age",
    prop2: "24 years",
  },
  {
    prop1: "Email",
    prop2: "abc.amelia@patient.com",
  },
  {
    prop1: "Phone #",
    prop2: "+90 000 000 0000",
  },
  {
    prop1: "Pharmacy",
    prop2: "Alchemist Shop",
  },
];

function Page() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "Consultations",
    "Medical Notes",
    "Follow-Ups",
    "Prescriptions",
    "Lab Tests",
  ];

  const toggleContent = (questionIndex) => {
    setOpenQuestion((prevQuestion) =>
      prevQuestion === questionIndex ? null : questionIndex
    );
    console.log("content toggled");
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.subLeftT}>
          {/* <div className={style.minLeft}>
            <img src={ohana} height={20} />
            <img src={dashboard} height={20} />
            <img src={consultation} height={30} />
            <img src={refill} height={30} />
            <img src={treatment} height={30} />
          </div>
          <div className={style.minRight}>
            <img src={notification} height={30} />
            <img src={message} height={30} />
            <img src={dp} height={30} />
          </div> */}
        </div>
      </div>
      <div className={style.right}>
        {/* <div className={style.topbar}>
          <div className={style.here}>
            <div className="df al g-1">
              <img src={arrow} className="pointer" />
              <h3>Timeline</h3>
            </div>
            <p>
              Home / Consultations / Consultation details{" "}
              <span className="p">/Timeline</span>{" "}
            </p>
          </div>

          <div className={style.there}>
            <div className={style.rectangle}>
              <p>
                Video consultation in{" "}
                <span className={style.box}>2 days 18 hrs</span>
              </p>
            </div>
          </div>
        </div> */}
        <div className={style.mainContainer}>
          <div className={style.mainLeft}>
            <strong>Thu, 17 Nov, 2023.</strong>
            <div>
              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(1)}
                >
                  <div>
                    {openQuestion === 1 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Patient Info</div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>

              {openQuestion === 1 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.content}>
                    <div className={style.first}>
                      <div>
                        <p>
                          <b>Consulting for</b>
                        </p>
                        <p>User</p>
                      </div>
                      <div>
                        <p>
                          <b>Gender</b>
                        </p>
                        <p>female</p>
                      </div>
                      <div>
                        <p>
                          <b>Phone number</b>
                        </p>
                        <p>+90 000 0000 0000</p>
                      </div>
                    </div>
                    <div className={style.second}>
                      <div>
                        <p>
                          <b>Guardian ID</b>
                        </p>
                        <p>-</p>
                      </div>
                      <div>
                        <p>
                          <b>Age in years</b>
                        </p>
                        <p>27</p>
                      </div>
                      <div>
                        <p>
                          <b>Medical condition</b>
                        </p>
                        <p>Ureaplasma</p>
                      </div>
                    </div>
                    <div className={style.third}>
                      <div>
                        <p>
                          <b>Sate</b>
                        </p>
                        <p>Calfornia</p>
                      </div>
                      <div>
                        <p>
                          <b>Email address</b>
                        </p>
                        <p>abc.patient@email.com</p>
                      </div>
                      <div>
                        <p>
                          <b>Reachable address</b>
                        </p>
                        <p>
                          P123, OI street, Aim block, New York city, NY5, USA.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(2)}
                >
                  <div>
                    {openQuestion === 2 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Doctors</div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>

              {openQuestion === 2 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.secContent}>
                    <div className={style.contentLeft}>
                      <img src={doctorDp} />
                    </div>
                    <div className={style.contentRight}>
                      <p>
                        <b>Dr. John Doe</b>
                      </p>
                      <div className="df g-1 al">
                        <div className="df g-1 ">
                          <span>
                            <CiStethoscope className="doctorIcon" />{" "}
                          </span>
                          <span className={style.doctorObj}>5 years</span>
                        </div>
                        <div className="df g-1 ">
                          <span>
                            <FaGraduationCap className="doctorIcon"  />
                          </span>
                          <span className={style.doctorObj}>MBBS, FCPS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(3)}
                >
                  <div>
                    {openQuestion === 3 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Consultation </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>

              {openQuestion === 3 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.thirdContent}>
                    <div className="df al jc g-2">
                      <div className={style.box}>
                        <p>
                          <b>Fri 18 Nov, 2023</b>
                        </p>
                        <p>Day</p>
                      </div>
                      <div className={style.box}>
                        <p>
                          <b>09:00 PM - 10:00 PM</b>
                        </p>
                        <p>Time slot</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(4)}
                >
                  <div>
                    {openQuestion === 4 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Payment completed </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>

              {openQuestion === 4 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.forthContent}>
                    <div className={style.rectangle}>
                      <p>
                        <b>Consultation charges</b>
                      </p>
                      <p>$20.89</p>
                    </div>
                  </div>
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(5)}
                >
                  <div>
                    {openQuestion === 5 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Medical Info </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>

              {openQuestion === 5 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.fifthContent}>
                    <div className={style.rectangle}>
                      <Accordian />
                    </div>
                  </div>
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(6)}
                >
                  <div>
                    {openQuestion === 6 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Pre-Qs </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>

              {openQuestion === 6 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.sixthContent}>
                    <div className={style.rectangle}>
                      <PreQuestions />
                    </div>
                  </div>
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(7)}
                >
                  <div>
                    {openQuestion === 7 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Pharmacy </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>

              {openQuestion === 7 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.sevenContent}>
                    <div className={style.rectangle}>
                      <Pharmacy />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="timeline">
              <strong>Fri, 18 Nov, 2023.</strong>

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(8)}
                >
                  <div>
                    {openQuestion === 8 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}
                    <p>Invoice generated</p>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 8 && (
                <div className={style.rectAns}>
                  <Invoice />
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(9)}
                >
                  <div>
                    {openQuestion === 9 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}
                    <div>Video Consultation initialized </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 9 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.ninthContent}>
                    <div className={style.rectangle}>
                      <p>
                        <b>Started</b>
                      </p>
                      <p>09:02</p>
                    </div>
                    <div className={style.rectangle}>
                      <p>
                        <b>Ended</b>
                      </p>
                      <p>10:02</p>
                    </div>
                  </div>
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(10)}
                >
                  <div>
                    {openQuestion === 10 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}
                    <div>E-Prescription added </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 10 && (
                <div className={`${style.rectAns} df al`}>
                  <Precription />
                </div>
              )}
              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(11)}
                >
                  <div>
                    {openQuestion === 11 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}
                    <div>Medical notes updated </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 11 && (
                <div className={`${style.rectAns} df al`}>
                  <MedicalNotes />
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(12)}
                >
                  <div>
                    {openQuestion === 12 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}
                    <div>Video Consultation initialized </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 12 && (
                <div className={`${style.rectAns} df al`}>
                  <LabTests />
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(13)}
                >
                  <div>
                    {openQuestion === 13 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}
                    <div>Follow-up consultation # 1 scheduled </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 13 && (
                <div className={`${style.rectAns} df al`}>
                  <FollowUp />
                </div>
              )}
            </div>
            <div className="timeline">
              <strong>Mon, 21 Nov, 2023.</strong>
              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(14)}
                >
                  <div>
                    {/* <FcNext className="icon" /> */}
                    {openQuestion === 14 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Follow-up consultation # 1 Initialized </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 14 && (
                <div className={`${style.rectAns} df al`}>
                  <div className={style.ninthContent}>
                    <div className={style.rectangle}>
                      <p>
                        <b>Started</b>
                      </p>
                      <p>09:02</p>
                    </div>
                    <div className={style.rectangle}>
                      <p>
                        <b>Ended</b>
                      </p>
                      <p>10:02</p>
                    </div>
                  </div>
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(15)}
                >
                  <div>
                    {openQuestion === 15 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}
                    <div>E-Prescription added </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 15 && (
                <div className={`${style.rectAns} df al`}>
                  <Precription />
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(16)}
                >
                  <div>
                    {openQuestion === 16 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}

                    <div>Medical notes updated </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 16 && (
                <div className={`${style.rectAns} df al`}>
                  <MedicalNotes />
                </div>
              )}

              <div className={`${style.rect} df al`}>
                <div
                  className={style.rectInner}
                  onClick={() => toggleContent(17)}
                >
                  <div>
                    {openQuestion === 17 ? (
                      <IoIosArrowDown className="iconDown" />
                    ) : (
                      <FcNext className="icon" />
                    )}
                    <div>Video Consultation initialized </div>
                  </div>
                  <div className={style.date}>08:14pm</div>
                </div>
              </div>
              {openQuestion === 17 && (
                <div className={`${style.rectAns} df al`}>
                  <LabTests />
                </div>
              )}
            </div>
          </div>

          <div className={style.mainRight}>
            <div className={style.card}>
              <div className={style.topBar}>
                <div className={style.leftBar}>
                  <img src={Userdp} />
                </div>
                <div className={style.rightBar}>
                  <strong>Amelia John</strong>
                  <p className="textOrg">View Consultation History</p>
                  <span>Flu (Influenza) - $49.89</span>
                </div>
              </div>
              <div className={style.cardRects}>
                {userData.map((item, index) => {
                  return (
                    <div key={index} className={style.cardRect}>
                      <div>
                        <p className={style.prop1}>{item.prop1}</p>
                      </div>
                      <div>
                        <p className={style.prop2}>{item.prop2}</p>
                      </div>
                    </div>
                  );
                })}
                <div className={style.cardRectLenghty}>
                  <div>
                    {" "}
                    <p className={style.prop1}>Reachable address</p>
                  </div>
                  <div>
                    <p className={style.prop2}>
                      P-345, D-Block, Ohio street, Main Road, Rave Toni, YUB
                      87654.
                    </p>
                  </div>
                </div>
                <div className={style.buttonGrp}>
                  <button className={style.button}>
                    {" "}
                    <FaVideo /> Videocall
                  </button>
                  <div className={style.button2}>
                    {" "}
                    <FaMessage /> Message
                  </div>
                </div>
              </div>
            </div>

            <div className={style.filters}>
              <h1>Filters</h1>
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className={style.videoCall}>
              <h1>Video Call</h1>
              <img src={video} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
