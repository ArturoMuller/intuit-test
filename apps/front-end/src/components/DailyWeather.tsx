import { SetStateAction, useEffect, useState } from 'react';
import { map } from 'rxjs';


/* eslint-disable-next-line */
// export interface CitiesProps {
//   cityId: id
// }

export function DailyWeather(props: { cityId: string }) {
  const { cityId } = props;
  const [weather, setWeather] = useState<{ id?: number, day?: string, temperature?: string, pressure?: string, humidity?: string, wind?: string }>({ });


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/cities/${cityId}/daily-weather`)
      const weather = await response.json()
      setWeather(weather);
    }
    fetchData();
  }, [cityId]);


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    }}>
      <div>
        <strong>Date:</strong> {weather.day}
      </div>
      <div>
        <strong>Temperature:</strong> {weather.temperature}°C
      </div>
      <div>
        <strong>Pressure:</strong> {weather.pressure} hPa
      </div>
      <div>
        <strong>Humidity:</strong> {weather.humidity}%
      </div>
      <div>
        <strong>Wind:</strong> {weather.wind} m/s
      </div>
    </div>
  );
}

export default DailyWeather;
