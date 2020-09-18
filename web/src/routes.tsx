import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing'; 
import Leakages from './pages/Leakages';
import Urls from './pages/Urls';
import SearchLeakages from './pages/SearchLeakages';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/leakages" component={Leakages} />
            {/* <Route path="/users" component={Users} /> */}
            <Route path="/urls" component={Urls} />
            <Route path="/searchleakages" component={SearchLeakages} />
        </BrowserRouter>
    );
}

export default Routes;


//npm install --save react-router-dom
//npm install --save @types/react-router-dom
//exact serve para dizer que é a rota exatamente /. Senão, o react vai sempre colocar a landing page nas outras rotas.
//quando o arquivo for o index, não precisa escrever o nome dele no import