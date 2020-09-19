import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoBrainiac from "../../assets/images/logobrainiac.png";
import landingImg from "../../assets/images/landing4.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

import "./styles.css";

function Home() {
  const [totalLeakages, setTotalLeakages] = useState(0);

  useEffect(() => {
    api.get("leakages").then((response) => {
      const { id } = response.data;

      setTotalLeakages(id);
    });
  }, [totalLeakages]);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoBrainiac} alt="Brainiac" />
          {/* <h1>Brainiac</h1> */}
          <h3>Search for personal data breaches or suspicious domains</h3>
        </div>

        <img src={landingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="/login" className="leakages">
            {/* <img src={studyIcon} alt="" /> */}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
