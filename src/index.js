import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import {store, persistor} from './redux/store'
import {PersistGate} from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <PersistGate persistor={persistor}>
                    <App />
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        newestOnTop={true}
                        pauseOnHover={false}
                        closeOnClick
                        limit={3}
                        theme={"colored"}
                    />
                </PersistGate>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want the app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
