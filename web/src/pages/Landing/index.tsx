import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //para não recarregar a página inteira

import logoImg from "../../assets/images/logo.svg"; //logoImg é uma variável Javascript, nós demos o nome
import landingImg from "../../assets/images/landing4.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

import "./styles.css"; //mesmo estando no mesmo diretório, precisa colocar ./ para não confundir com um pacote em node-modules

function Landing() {
  const [totalLeakages, setTotalLeakages] = useState(0);

  useEffect(() => {
    api.get("leakages").then((response) => {
      const { id } = response.data;

      setTotalLeakages(id);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          {/* <img src={logoImg} alt="Brainiac" /> */}
          <h1>Brainiac</h1>
          <h3>Pesquise por dados pessoais vazados ou domínios suspeitos</h3>
        </div>

        <img src={landingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="/leakages" className="leakages">
            {/* <img src={studyIcon} alt="" /> */}
            Vazamentos de Dados
          </Link>
          <Link to="/urls" className="urls"> 
            {/* <img src={giveClassesIcon} alt="" /> */}
            Domínios Suspeitos
          </Link>
        </div>

        <span className="total-leakages">
          Total de {totalLeakages} vazamentos já registados{" "}
          {/* <img src={purpleHeartIcon} alt="Coração Roxo" /> */}
        </span>
      </div>
    </div>
  );
}

export default Landing;
