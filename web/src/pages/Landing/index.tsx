import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoBrainiac from "../../assets/images/logobrainiac.png";
import landingImg from "../../assets/images/landing4.svg";
import leakagesIcon from "../../assets/images/icons/dadosvazados.svg";
import urlsIcon from "../../assets/images/icons/urls.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

import "./styles.css";

function Landing() {
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
          <Link to="/searchleakages" className="leakages">
            <img src={leakagesIcon} alt="" />
            Personal Data Breaches
          </Link>
          <Link to="/urls" className="urls">
            <img src={urlsIcon} alt="" />
            Suspicious Domains
          </Link>
        </div>

        {/* <span className="total-leakages">
          Total de {totalLeakages} vazamentos já registados{" "}
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span> */}
      </div>
    </div>
  );
}

export default Landing;
