import React from "react";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Routes from "./routes";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/ie10-viewport-bug-workaround.css';
import './assets/style/bootstrap.min.css';

//import './assets/style/grid.css';
import './assets/style/offcanvas.css';

import './assets/style/svg.scss';
// import './assets/style/new_svg.scss';

import './assets/style/FlatAnimatedWeatherIcons.scss';

export default function App() {
  return (

      <Provider store={store()}>
        <Routes />
      </Provider>

  );
}
