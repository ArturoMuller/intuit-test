import { SetStateAction, useEffect, useState } from 'react';
import { map } from 'rxjs';


/* eslint-disable-next-line */
export interface CitiesProps {}

export function Cities(props: CitiesProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [cities, setCity] = useState<{id: string, name:string}[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/cities')
      const cities = await response.json()
      setCity(cities);
    }
    fetchData();
  }, []);
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {/*{cities}*/}
      <select value={selectedValue} onChange={handleChange}>
        {
          cities.map((city, index) => (
            <option key={index} value={city.id}>{city.name}</option>
          ))
        }
        <option value="">Select an option...</option>
      </select>
    </>
      );
      }

      export default Cities;
