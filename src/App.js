import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PhotoOfDay from "./components/PhotoOfDay";

const API_KEY = "HmMmeNnNRVF1xlb472AiJLwaJ4NcFmjw0Fv8hnsm";

function App() {

  //çekeceğimiz datayı kullanmak için state oluşturacağız: 

  const [photoOfDay, setPhotoOfDay] = useState(null);

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); 
  // new Date() fonksiyonu ile şu andaki tarihi aldık, datayı YYYY-MM-DD formatına çeviriyoruz. ama tarih de vardı, T'den itibaren split ile böldük ve böldüğümüzün ilk kısmınıı (elemanını) aldık.


  //uygulamanın yüklenme fazını yakalamak için useEffect hook'unu kullanacağım. Birinci parametre olarak boş bir foksiyon alıyor, ikinci parametre ise boş dizi. böylece bu component'in yüklenme durumunu yakalayacak. Yani, app component'i yüklendiğinde bu fonksiyonu çaıştır demiş olacağız. 
  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod", {
      params: { api_key: API_KEY, date: date}})
    .then((response) => {
      setPhotoOfDay(response.data);
    })
    .catch((error) => console.log(error))

  }, [date]);
  //sondaki date'i, date değiştiği zaman request yap demek için ekledik. useEffect iki parametre alır, birincisi fonksiyon, bir de neye göre tetikleneceği. 

  return (
    <div className="App">
      <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
      <PhotoOfDay photoOfDay={photoOfDay}/> 
      {/* photoOfDay state'indeki datayı PhotoOfDay component'ina props olarak gönderiyoruz. */}
    </div>
  );
}

export default App;
