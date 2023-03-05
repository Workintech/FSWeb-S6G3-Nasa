import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layouts/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const currentDate = new Date();
  const [postData, setPostData] = useState({});
  const [date, setDate] = useState(currentDate.toJSON().slice(0, 10));
  const changeDate = (date) => {
    setDate(date);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=D5X7CvI6xU6HGTrYLf8rl2CBd0hJYfZ1h9VZ1svs&date=${date}`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log("Data geldi >", data);
        setPostData(data);
      });
  }, [date]);
  return (
    <div className="App">
      <Layout
        post={postData}
        changeDate={changeDate}
        date={date}
        currentDate={currentDate}
      />
    </div>
  );
}

export default App;
