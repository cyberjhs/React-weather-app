import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import Datas from './components/Datas';
const APP_KEY= "35acd0e7fc9e307eee4ba4604215e173";
function App() {
  const [city,setCity]=useState("noida");
  const [isclicked]=useState(false);
  const [cityDetails,setCityDetails]=useState([]);
  const [tempDetails,setTempDetails]=useState([]);
  const [iconDetails,seticonDetails]=useState([]);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APP_KEY}&units=metric`;
  useEffect(() => {
    fetchData();
  }, [isclicked]);

    const fetchData = async () => {
    const response = await Axios.get(url);
    const data = response.data;
    setCityDetails(data.city);
    setTempDetails(data.list[0].main);
    seticonDetails(data.list[0].weather[0]);
    console.log(data);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') fetchData();
    };

  return (
    <div className='main'>
      <h1>React Weather App</h1>
      <input type={'text'} value={city} placeholder="enter city name" onChange={(e) => {setCity(e.target.value)}} onKeyDown={handleKeyDown}/>
      <Datas data={cityDetails} tempd={tempDetails} icondata={iconDetails}/>
    </div>
  );
}

export default App;
