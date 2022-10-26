import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountryView from "../components/country-view/CountryView";
import SearchBar from "../components/search-bar/SearchBar";
import "./home.css";

export default function Home() {
  const { countries } = useSelector((state) => state.countries);
  const [tempCountries, updateCountries] = useState([]);

  useEffect(() => {
    updateCountries(countries);
  }, [countries]);

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
    const input = e.target.value.toUpperCase();
    const searchedData = countries?.filter((it) => it.CountryCode.includes(input));
    updateCountries(searchedData);
  });

  return (
    <>
      <div>
        <SearchBar placeholder="Search Here" onSearch={handleSearch} />
      </div>
      <div className="home-body">
        <div className="list-view">
          <h1 style={{ color: "red" }}>Contries:</h1>
          {tempCountries.length > 0 ? (
            tempCountries?.map((data) => (
              <div key={data.Country}>
                <h3>
                  {data.Country}, {data.CountryCode}
                </h3>
              </div>
            ))
          ) : (
            <div>
              <h2>No Data...</h2>
            </div>
          )}
        </div>
        <div className="map-view">
          <h1 style={{ color: "red" }}>Map here:</h1>
          {tempCountries.length > 0 && <CountryView data={tempCountries.slice(0, 10)} />}
        </div>
      </div>
    </>
  );
}
