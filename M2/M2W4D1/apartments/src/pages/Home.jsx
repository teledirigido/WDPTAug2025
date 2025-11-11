import { useEffect, useState } from "react";
import { Apartment } from "../components/Apartment";

export function Home () {
  
  const [apartments, setApartments] = useState([]);
  
  const getApartments = async () => {
    const response = await fetch('https://apartments-api.edu.ironhack.com/apartments')
    const responseData = await response.json();
    setApartments(responseData)
  }

  useEffect( () => {
    getApartments();
  }, []);

  return (
    <>
      <h1>Apartment</h1>
      {apartments.map( i => <Apartment key={i._id} apartment={i} />)}
    </>
  )
}