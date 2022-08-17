import React from "react";
import NavBar from "../navBar/NavBar";
import laptop from "./Assets/Mockup.png";
import shape1 from "./Assets/graph.png";
import puzzle from "./Assets/puzzle.png";
import management from "./Assets/team-management.png";
import growth from "./Assets/growth.png";
import language from "./Assets/Language.png";
import "./Assets/main.css";
import comma from "./Assets/comma.svg";
import checkcircle from "./Assets/check-circle.svg";
import square from "./Assets/x-square.svg";
import log from "./Assets/Logo.png";
import applogo from "./Assets/applogo.png";
const main = () => {
  return (
    <>
      <div className="custom-scrollbar">
        <NavBar />
        <div>
          <div id="home" className="d-flex justify-content-between py-5">
            <div class="ps-4 bd-highlight pt-5 m-5">
              <h1 className="text-uppercase fw-bold">
                Business and sale management
              </h1>
              <p className="my-4 text-muted">
                Sales management is a business discipline which focused <br />
                on the practical application of sales techniques and the <br />{" "}
                management of a firms sales operations.
              </p>
              <button type="button" className="btn btn-primary me-3">
                Signup Today
              </button>
              <br />
              <img className="my-5" src={language} alt="" />
            </div>

            <div className="p-2 bd-highlight img-fluid">
              <img
                src={laptop}
                style={{ height: "auto", width: "100%" }}
                height="500px"
                width="500px"
                alt=""
              />
            </div>
          </div>

          <div className="" id="feature">
            <h6
              className="text-center 
    pt-2  text-primary"
            >
              {" "}
              OUR FEATURES
            </h6>
            {/* <div className="">
              <div class="row">
                <div class="col ">
                  <img src={applogo} className="App-logo  " alt="logo" />
                </div>
                <div class="col-6 text-center">
                  <section className=" fw-bold">
                    <h1>
                      {" "}
                      BUILD AND DESIGN
                      <br /> WITH YOU IN MIND
                    </h1>
                  </section>
                </div>
                <div class="col"></div>
              </div>
            </div> */}
            <div>
              <section className="position-relative">
                <img
                  src={applogo}
                  className="App-logo d-flex justify-content-start "
                  alt="logo"
                />

                <h1
                  className="fw-bold position-absolute top-50 start-50 translate-middle
                "
                >
                  {" "}
                  BUILD AND DESIGN
                  <br /> WITH YOU IN MIND
                </h1>
              </section>
            </div>
            <section className="container text-center img-fluid pt-3">
              <section className="row ">
                <section className="col-12 col-md-6 col-lg-4 mb-3 item-one  pt-5 ">
                  <section className="">
                    <img src={puzzle} alt="" />
                    <h6 className="mt-3">
                      SALES MANAGING <br />
                      SOLUTION
                    </h6>
                    <p className="text-muted">
                      The best sales managing <br />
                      solution to help your <br /> team sell smater
                    </p>
                  </section>
                </section>
                <div className="col-12 col-md-6 col-lg-4 mb-3  pt-5 item-two ">
                  <div className="">
                    <img src={management} alt="" />
                    <h6 className="mt-3">
                      EMPLOYEE MANAGING
                      <br />
                      SOLUTION
                    </h6>
                    <p className="text-muted">
                      The best tool to track <br />
                      employee record,work <br />
                      history& other important <br />
                      employee data
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3  pt-5  item-three">
                  <div className="">
                    <img src={growth} alt="" />
                    <h6 className="mt-3">
                      ONLINE MARKET <br />
                      PLACE
                    </h6>
                    <p className="text-muted">
                      The best platforms for <br />
                      maintaining & selling your <br /> products
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>

          <div className="container ">
            <div id="price">
              <h6
                className="text-center
    pb-3 text-primary"
              >
                {" "}
                OUR PRICING
              </h6>
              <h1 className="text-center fw-bold pb-5">
                SIMPLE,TRANSPERENT
                <br /> PRICING FOR EVERYONE
              </h1>
            </div>
            <div className="row pt-5">
              <div className="col-12 col-md-6 col-lg-4 mb-3 cardhover">
                <div class="price-column">
                  <div class="price-header">
                    <div class="plan-name">
                      Basic <span className="text-muted ">plan</span>
                    </div>
                    <div class="price">
                      <div class="dollar-sign">$</div>
                      10
                      <div class="per-month">/mo</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted my-4">
                      In the basic plan you can take advantages of all feature
                    </p>
                  </div>
                  <div class="feature">
                    <img src={checkcircle} />
                    Feature A
                  </div>
                  <div class="feature">
                    <img src={checkcircle} />
                    Feature B
                  </div>
                  <div class="feature inactive">
                    <img src={square} />
                    Feature C
                  </div>
                  <div class="feature inactive">
                    <img src={square} />
                    Feature D
                  </div>
                  <div class="feature inactive">
                    <img src={square} />
                    Feature E
                  </div>
                  <div class="feature inactive">
                    <img src={square} />
                    Feature F
                  </div>
                  <button
                    style={{ background: "black" }}
                    class="btn btn-primary btn-lg mt-3 fs-6"
                  >
                    SELECT THE PLAN
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3 cardhover">
                <div className="price-column popular">
                  <div
                    style={{ background: "#0d6efd" }}
                    className="most-popular text-light py-2  "
                  >
                    Most Popular
                  </div>
                  <div className="price-header">
                    <div className="plan-name">
                      Pro<span className="text-muted ">plan</span>
                    </div>
                    <div className="price">
                      <div className="dollar-sign">$</div>
                      20
                      <div className="per-month">/mo</div>
                    </div>
                  </div>
                  <p className="text-muted my-4">
                    Our most popular package is the pro plan which gives you
                    access to the following
                  </p>
                  <div className="feature">
                    <img src={checkcircle} />
                    Feature A
                  </div>
                  <div className="feature">
                    <img src={checkcircle} />
                    Feature B
                  </div>
                  <div className="feature">
                    <img src={checkcircle} />
                    Feature C
                  </div>
                  <div className="feature">
                    <img src={checkcircle} />
                    Feature D
                  </div>
                  <div className="feature inactive">
                    <img src={square} />
                    Feature E
                  </div>
                  <div className="feature inactive">
                    <img src={square} />
                    Feature F
                  </div>
                  <button
                    style={{ background: "black" }}
                    className="btn btn-primary btn-lg mt-3 fs-6"
                  >
                    SELECT THE PLAN
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3 cardhover">
                <div className="price-column">
                  <div className="price-header">
                    <div className="plan-name">
                      Basic <span className="text-muted ">plan</span>
                    </div>
                    <div className="price">
                      <div className="dollar-sign">$</div>
                      10
                      <div className="per-month">/mo</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted my-4">
                      In the basic plan you can take advantages of all feature
                    </p>
                  </div>
                  <div className="feature">
                    <img src={checkcircle} />
                    Feature A
                  </div>
                  <div className="feature">
                    <img src={checkcircle} />
                    Feature B
                  </div>
                  <div className="feature inactive">
                    <img src={square} />
                    Feature C
                  </div>
                  <div className="feature inactive">
                    <img src={square} />
                    Feature D
                  </div>
                  <div className="feature inactive">
                    <img src={square} />
                    Feature E
                  </div>
                  <div className="feature inactive">
                    <img src={square} />
                    Feature F
                  </div>
                  <button
                    style={{ background: "black" }}
                    className="btn btn-primary btn-lg mt-3 fs-6"
                  >
                    SELECT THE PLAN
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <h6
              className="text-center 
    py-5 text-muted"
            >
              {" "}
              What our cutomers say about us
            </h6>
          </div>
          <div className="container" id="client">
            <div className="row justify-content-md-center my-5 ">
              <div className="col col-lg-5 bg-light">
                <div className="row">
                  <div className=" ms-5  col-5">
                    <img src={comma} height="20px" alt="" />
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit..
                    </p>
                  </div>
                  <div className="col">
                    <img
                      className="rounded-circle ms-5 mt-3"
                      height="80px"
                      alt="100x100"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </div>

              <div className="col col-lg-5  ms-5  bg-light">
                <div className="row">
                  <div className=" ms-5 col-5">
                    <img src={comma} height="20px" alt="" />
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit..
                    </p>
                  </div>
                  <div className="col">
                    <img
                      className="rounded-circle ms-5 mt-3"
                      height="80px"
                      alt="100x100"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container pb-5">
            <div className="row justify-content-md-center my-5">
              <div className="col col-lg-5 bg-light">
                <div className="row">
                  <div className=" ms-5 col-5">
                    <img src={comma} height="20px" alt="" />
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit..
                    </p>
                  </div>
                  <div className="col">
                    <img
                      className="rounded-circle ms-5 mt-3"
                      height="80px"
                      alt="100x100"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </div>

              <div className="col col-lg-5 ms-5 bg-light">
                <div className="row">
                  <div className=" ms-5 col-5">
                    <img src={comma} height="20px" alt="" />
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit..
                    </p>
                  </div>
                  <div className="col">
                    <img
                      className="rounded-circle mt-3 ms-5"
                      height="80px"
                      alt="100x100"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3" style={{ backgroundColor: "#BBBCB6" }}>
            <section className="container text-white">
              <section className="row">
                <section className="col">
                  <h3 className="text-capitalize">
                    if you Have any query contact Us!
                  </h3>
                </section>
                <section className="col d-flex justify-content-center  ">
                  {" "}
                  <button type="button" className=" btn btn-primary ms-5 me-3">
                    Contact Us!
                  </button>
                </section>
              </section>
            </section>
          </div>
          <div className="d-flex justify-content-center bg-light  py-5">
            <div className="row">
              <div className="col">
                <img src={log} alt="" />
                <p className="mt-3 fw-bold text-muted">
                  crafting the next-level of the user experince and engagment
                </p>
              </div>
              <div className="ps-5 ms-5 col">
                <h6 className="fw-bold">PRODUCT</h6>
                <span className="text-muted mt-5">
                  <p>Features</p>
                  <p>Integrations</p>
                  <p>Pricing</p>
                  <p>FAQ</p>
                </span>
              </div>
              <div className="col ps-5">
                <h6 className="fw-bold">COMPANY</h6>
                <span className="text-muted mt-5">
                  <p>Privacy</p>
                  <p>Term & condition</p>
                </span>
              </div>
              <div className="col ">
                <h6 className="fw-bold">FOLLOW US</h6>
                <div className="row mt-3">
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </div>
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </div>
                  <div className="col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6
              className="text-center py-3
    py-2 fw-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cc-circle"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z" />
              </svg>{" "}
              2022 All rights reserved by{" "}
              <span>
                <a
                  href="https://wrapxcode.com/"
                  className="text-decoration-none"
                >
                  WRAP XCODE{" "}
                </a>
                TECHNOLOGY Pvt.Ltd
              </span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
