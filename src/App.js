import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./Header";
import axios from "axios";
import Section from "./Section";
import Tarih from "./Tarih";
import styled from "styled-components";

const SCSection = styled.section``;

function App() {
  const [tarih, setTarih] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=9rQEJkHZ6LtsCLGckODLSIqiQBia1eff1G1EiGXr&date=" +
          tarih
      )
      .then((response) => setData(response.data));
  }, [tarih]);

  function dateChanger(tarih) {
    let gun = new Date(tarih);
    let gercekTarih = `${gun.getFullYear()}-${
      gun.getMonth() + 1
    }-${gun.getDate()}`;
    setTarih(gercekTarih);
  }

  return (
    <div className="App">
      <Header />
      <Tarih onChange={dateChanger} />
      <Section data={data} />
    </div>
  );
}

export default App;
