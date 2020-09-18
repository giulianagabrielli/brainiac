import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TableUrls from '../../components/TableUrls';

import './styles.css'

import api from '../../services/api';

function Urls() {

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são as Urls suspeitas que coletamos nos últimos 10 dias">
            </PageHeader>

            <TableUrls/>
        </div>
    )
}

export default Urls;