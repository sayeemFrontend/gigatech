import React, { useEffect } from "react";
import WorldMap from "react-svg-worldmap-pi";
type PropsType = {
  data: [],
};
export default function CountryView({ data }: PropsType) {
  const newData = data?.map((da) => {
    let temp = {
      country: da.CountryCode.toLowerCase(),
      value: da.TotalDeaths,
    };
    return temp;
  });

  useEffect(() => {
    const doc = document.getElementsByClassName("worldmap__figure-caption");
  }, []);

  return (
    <div className="App">
      <WorldMap color="red" title="Top 10 Populous Countries" value-suffix="people" size="lg" data={newData} />
    </div>
  );
}
