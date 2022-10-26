import React from "react";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addCountry } from "./slices/countrySlice";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  const getCountry = async () => {
    const res = await axios.get("https://api.covid19api.com/summary");
    dispatch(addCountry(res.data.Countries));
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
