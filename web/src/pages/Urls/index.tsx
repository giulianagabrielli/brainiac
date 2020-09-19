import React, { useState, FormEvent, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import TableUrls from "../../components/TableUrls";

import "./styles.css";

import api from "../../services/api";

function Urls() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are all the suspicious domains we've collected for the last 10 days."></PageHeader>

      <TableUrls />
    </div>
  );
}

export default Urls;
