import React from 'react'; // бибилиотека React не умеет работать с DOM
import ReactDOM from 'react-dom/client'; // для этого используется ReactDOM
import './index.css';
// import 'antd/dist/antd.css'
import App from './components/App/App';
// import AppAnt from './components/AppAnt/app-ant';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
