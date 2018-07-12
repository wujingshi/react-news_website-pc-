import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './staic/base.css';
import 'antd/dist/antd.css';
import './staic/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
