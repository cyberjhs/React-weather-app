import React from 'react'

const Datas = ({data,tempd,icondata}) => {
    const logo = `http://openweathermap.org/img/wn/${icondata.icon}@4x.png`;
    
  return (
    <div>
      <div className='city'>
        <h1>{data.name} ({data.country})</h1>
        <img src={logo} alt='logo'/>
        <h1>{Math.round(tempd.temp)}°Cel</h1>
      </div>
      <div className='tempDetails'>
        <span>
            <p>{tempd.temp_max}</p>
            <p><b>MaxTemp</b></p>
        </span>
        <span>
            <p>{tempd.temp_min}</p>
            <p><b>MinTemp</b></p>
        </span>
        <span>
            <p>{tempd.humidity}</p>
            <p><b>Humidity</b></p>
        </span>
      </div>
    </div>
  )
}

export default Datas
