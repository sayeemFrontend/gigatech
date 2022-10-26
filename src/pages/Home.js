import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import CountryView from "../components/country-view/CountryView";
import SearchBar from "../components/search-bar/SearchBar";
import { addCountry } from "../slices/countrySlice";

export default function Home() {
  const { countries } = useSelector((state) => state.countries);
  const [tempCountries, updateCountries] = useState([]);
  const [searchInput, updateSearchInput] = useState("");
  const dispatch = useDispatch();

  const getCountry = async () => {
    const res = await axios.get("https://api.covid19api.com/summary");
    dispatch(addCountry(res.data.Countries));
  };
  useEffect(() => {
    getCountry();
    updateCountries(countries);
  }, [countries]);

  useEffect(() => {
    updateCountries(tempCountries);
  }, [tempCountries]);

  console.log(countries);
  function debounce(func, timeout = 800) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const handleSearch = debounce((e) => {
    updateCountries([]);
    updateSearchInput(e.target.value);
  });

  useEffect(() => {}, [searchInput]);
  // console.log("", tempCountries);
  return (
    <>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="body">{/* <CountryView data={tempCountries} /> */}</div>
    </>
  );
}
