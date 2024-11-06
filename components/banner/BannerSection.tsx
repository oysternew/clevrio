import React from "react";
import DivAnimateX from "../utils/DivAnimateX";
import NumberCounter from "../utils/NumberCounter";
import EbookDownload from "../ebookdownload/EbookDownload";

const BannerSection = () => {
  return (
    <section
      className="home_bg hb_height overflow-hidden"
      style={{
        backgroundImage: "url(assets/img/bg/home-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <DivAnimateX position={-60} className="col-lg-6 col-12">
            <div className="hero-text ht_top">
              <h1>
                <span>Do not trade FX and CFD</span> unless you read our
                tutorial
              </h1>
              <p>The Ultimate Course for FX and CFD Trading</p>
            </div>
            {/*<div className="home_sb">
              {/*<form action="#" className="banner_subs">
                <input
                  type="text"
                  className="form-control home_si"
                  placeholder="Search your course here"
                  required
                />
                <button type="button" className="subscribe__btn">
                  Search <i className="fa fa-paper-plane-o"></i>
                </button>
              </form>
             
            </div>*/}
            <EbookDownload />
          </DivAnimateX>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-text-img">
              <img
                src="assets/img/HeroImage Clevrio.png"
                className="img-fluid "
                alt=""
              />
              <div className="home_ps">
                <span className="ti-user"></span>
                <NumberCounter number={4500} durationToComplete={3} icon="+" />
                <p>Active student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
