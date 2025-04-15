import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Redux Selector / Action
import { useDispatch } from "react-redux";

// import state selectors
import {
  setSetting
} from "./store/setting/actions";

function App() {
  const dispatch = useDispatch();
  dispatch(setSetting());
  return null;
}

export default App;
