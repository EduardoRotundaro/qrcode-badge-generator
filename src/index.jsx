import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';

import App from './App';

import './sass/main.scss';

toast.configure();

ReactDOM.render(<App/>, document.getElementById('root'));
