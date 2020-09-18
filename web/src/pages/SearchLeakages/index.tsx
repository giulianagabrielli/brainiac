import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm() {

    const history = useHistory();

    const [url, setUrl] = useState('');
    const [urls, setUrls] = useState('');
    // const [avatar, setAvatar] = useState('');
    // const [whatsapp, setWhatsapp] = useState('');
    // const [bio, setBio] = useState('');

    // const [subject, setSubject] = useState('');
    // const [cost, setCost] = useState('');

    // const [scheduleItems, setScheduleItems ] = useState([
    //     { week_day: 0, from: '', to: '' }
    // ]);

    // function addNewScheduleItem() { 
    //     setScheduleItems([
    //         ...scheduleItems,
    //         { week_day: 0, from: '', to: '' }
    //     ])
    //     scheduleItems.push()
    // }

    function handleSearchLeakages (e: FormEvent) {
        e.preventDefault();

        api.post('urlSearch', {
            url
        }).then(() => {
            // alert('Cadastro realizado!');
            history.push('/leakages'); //várias tabelas com as respectivas buscas
        }).catch(() => {
            alert('Erro ao buscar dados. Tente novamente.');
        })
    }

    // function setScheduleItemValue(position: number, field: string, value: string) {
    //     const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
    //         if (index === position) {
    //             return { ...scheduleItem, [field]: value}
    //         }
        
    //         return scheduleItem;
    //     });

    //     setScheduleItems(updatedScheduleItems);
    // }
    
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Faça uma busca personalizada!"
            />

            <main>
                <form onSubmit={handleSearchLeakages}>
                    <fieldset>
                        <legend>Digite a URL de onde quer coletar os dados</legend>
                        <Input 
                            name="url" 
                            label="" 
                            value={url} 
                            onChange={(e) => { setUrl(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>URLs sugeridas</legend>
                        <Select 
                            name="subject" 
                            label="" 
                            value={url} 
                            onChange={(e) => { setUrl(e.target.value)}}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Geografia', label: 'Geografia' },
                            ]}
                        />  
                    </fieldset>

                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante"/>
                            Importante! <br />
                            Preencha apenas uma das duas opções.
                        </p>
                        <button type="submit">Realizar busca</button>
                    </footer>

                </form>
            </main>
        </div>
    )
}

export default TeacherForm;