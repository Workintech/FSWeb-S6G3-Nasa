import React, {useEffect, useState} from "react";
import axios from "axios";
import BiDiv from "./components/BiDiv";
import "./App.css";

function App() {
  const sampleInitialData ={
      copyright : "",
      date: "",
      explanation: "",
      hdurl: "",
      media_type: "",
      service_version: "",
      title: "",
      url : ""
  };

  const [info,setInfo] = useState(null);
  const [date,setDate] = useState(new Date().toISOString().slice(0,10));
  useEffect(async() => {
    await axios
    .get('https://api.nasa.gov/planetary/apod', {
  params: {
    api_key: "B9D3b4QIeCOJRbXkNjuMMa6Xg8gLlSkqMYQXnPLc",
    date: date
      },
    })
    .then(function (response) {
      console.log(response);
      setInfo(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });  

    console.log(`Sayfam render oldu`);
  },[date]);

const handleDateChange =(event) =>{
  event.preventDefault();
  console.log(event.target.value.toString());
  setDate(event.target.value.toString());
}
  return (
    <div className="App">
        <form>
        <label htmlFor="datePicker">Birthday:</label>
        <input onChange={(e) =>handleDateChange(e)} 
        type="date" 
        name="datePicker" 
        value={date}
        />
        <button type="submit">Hadi Bakalım !</button>
      </form>
      {info && (
        <BiDiv icerik={info} />
      )}
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  )
 }

export default App;
