import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../components/app';
import Article from '../components/article';

const app = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact={true} path='/' component={App} />
            <Route path='/article/:id' component={Article} />
        </div>
    </BrowserRouter>,
    app
);