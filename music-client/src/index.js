import React from 'react';
import ReactDOM from 'react-dom';
import './resource/index.scss';
import {renderRoutes} from 'react-router-config'
import {
    MemoryRouter as Router,
  } from 'react-router-dom';
import store from 'store/store'
import {Provider} from 'react-redux'
import routes from './containers'
import registerServiceWorker from './registerServiceWorker';
import "constants/areaMap"

ReactDOM.render(<Provider store={store}>
                    <Router initialEntries={["/music"]}>
                        {renderRoutes(routes)}
                    </Router>
                </Provider>
, document.getElementById('root'));
registerServiceWorker();
