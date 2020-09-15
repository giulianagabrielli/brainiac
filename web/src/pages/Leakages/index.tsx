import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import Table from '../../components/Table';

import './styles.css'

import api from '../../services/api';

function Leakages() {

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os dados vazados que coletamos nos últimos 10 dias">
            </PageHeader>

            <Table/>
        </div>
    )
}

export default Leakages;