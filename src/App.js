import React, { useEffect, useState } from "react";
import ShowData from "./component/ShowData";
import Form from "./component/Form";
const apiKey = "324cbf67710c6d60333dea0f53d19a18"
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
function App() {
  // we will get temp and humidity from the API 
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);

  //cette fonction est asynchrone psq elle attend la réponse de l'API 
  async function getWeather(city, country) {
    console.log("-------------------weather---------------------")
    // get value of city and country using input name from the Form component 
    if (city && country) {
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
      const data = await api.json();
      const tmp = data.main.temp;
      const hum = data.main.humidity;
      setTemp(tmp)
      setHumidity(hum)

    }




  }

  useEffect(() => { }, [temp])

  return (
    <div className="container">
      <form className="border border-secondary m-5 p-5" >
        <Form getWeather={getWeather} />
        <ShowData humidity={humidity} temp={temp} />
      </form>
    </div>
  );
}

export default App;
