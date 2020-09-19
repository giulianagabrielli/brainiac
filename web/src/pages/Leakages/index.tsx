import React, { useState, FormEvent, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import Table from "../../components/Table";

import "./styles.css";

import api from "../../services/api";

function Leakages() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are all the data breach we've collected for the last 10 days."></PageHeader>

      <Table />
    </div>
  );
}

export default Leakages;
