import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import api from "../../services/api";

function SearchLeakages() {
  const history = useHistory();

  const [url, setUrl] = useState("");

  function handleSearchLeakages(e: FormEvent) {
    e.preventDefault();
    history.push("/leakages");

    // api
    //   .post("urlSearch", {
    //     url,
    //   })
    //   .then(() => {
    //     alert('Cadastro realizado!');
    //     history.push("/leakages");
    //   })
    //   .catch(() => {
    //     alert("Erro ao buscar dados. Tente novamente.");
    //   });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Tell us which URL you'd like to check for data breach..." />

      <main>
        <form onSubmit={handleSearchLeakages}>
          <fieldset>
            <legend>URL</legend>
            <Input
              name="url"
              label=""
              value={url}
              placeholder="https://example.com"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </fieldset>

          {/* <fieldset>
            <legend>URLs sugeridas</legend>
            <Select
              name="subject"
              label=""
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Matemática", label: "Matemática" },
                { value: "Geografia", label: "Geografia" },
              ]}
            />
          </fieldset> */}

          <footer>
            {/* <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante! <br />
              Preencha o campo conforme exemplo.
            </p> */}
            <button type="submit">Search</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default SearchLeakages;
