import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./root/store/store";
import {
  projectData,
  ProjectProvider,
} from "./root/store/reducers/ProjectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ProjectProvider projectData={projectData}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProjectProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
