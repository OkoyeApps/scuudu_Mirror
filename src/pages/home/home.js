import React from "react";
import "./home.css";
import redDash from "../../assets/images/red-dash.svg";
import arrowLeft from "../../assets/images/arrow1.svg";
import videoThumb from "../../assets/images/video-thumbnail.png";
import Subscribe from "../../components/subcribeStrip/subscribeStrip";

function Home(props) {
    return (
        <div>
            <section className="row mx-0 slides">
                <div className="col-md-6 col-sm-1 empty-div"></div>
                <div className="col-md-6 d-flex justify-titles align-items-center">
                    <div className="pr-6">
                        <h1 className="titles mb-4">Virtual Reality Experience</h1>
                        <p className="sub-title-home pt-1">
                            VR is already changing how enterprises offer their services and
                            interact with customers. In the Scuudu Labs, we create VR
                            solutions that fit into different organizational processes and
                            enhance customer service experience.
            </p>
                    </div>
                </div>
            </section>

            <section className="row mx-0 about-home">
                <div className="col-12 d-flex align-items-center">
                    <div className="px-6">
                        <span class="small-indicator">
                            <img src={redDash} class="mr-2" alt="title decoration" />
              About
            </span>
                        <h2 class="small-titles mt-3">Who We Are</h2>
                        <p class="content-text pt-5">
                            Scuudu is a startup growing from Genesys Tech Hub’s Research and
                            Development Lab. The startup which kicked off operations in 2019,
                            dreams to change the Nigerian tech story for good through avant
                            garde technologies. So far, Scuudu has worked on solutions
                            leveraging Artificial Intelligence, Machine Learning, Augmented
                            Reality and Virtual Reality.
            </p>
                        <div className="d-flex justify-content-end px-2">
                            <div
                                className="more-txt"
                                onClick={() => {
                                    props.history.push("/aboutus");
                                }}
                            >
                                Learn more
                <img src={arrowLeft} alt="arrow left" className="ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row mx-0 latest px-6">
                <div class="col-md-6 d-flex  justify-titles align-items-center">
                    <div>
                        <h1 class="small-titles">
                            Latest
              <br />
              Updates
            </h1>
                    </div>
                </div>
                <div class="col-md-6 d-flex justify-titles align-items-center">
                    <div>
                        <div class="video-container">
                            <img
                                src={videoThumb}
                                alt="video thumbnail for playing video"
                                class="video-thumb"
                            />
                        </div>
                        <div className="mt-2 d-flex">
                            <div class="video-title pt-2 mr-5">Origins: Tales of Eri</div>
                            {/* <div className="more-txt pt-2">
                                Play now
                <img src={arrowLeft} alt="arrow left" className="ml-2" />
                            </div> */}
                        </div>
                        <article>
                            <p class="content-text mt-4 video-description pl-3">
                                Tales of Eri takes you back to the origin by immersing you into
                                the traditional Nigerian environment. Eri and his wife are set
                                to complete a task given to them by their Chi. You will get to
                                learn a lot about the Nigerian culture while having fun.
                                Characters in this game were created using Maya. Game engine:
                                Unity. Sound design: Adobe audition. Graphics: Photoshop.
              </p>
                            <div className="d-flex justify-content-end px-2">
                                <div
                                    className="more-txt"

                                >
                                    Play
                <img src={arrowLeft} alt="arrow left" className="ml-2" />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <Subscribe />
        </div>
    );
}

export default Home;
