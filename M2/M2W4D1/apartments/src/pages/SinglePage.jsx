import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom"

export default function SinglePage() {

  const { apartmentId } = useParams();
  const [apartment, setApartment] = useState({});
  const fetchApartment = async () => {
    const response = await fetch(`https://apartments-api.edu.ironhack.com/apartments/${apartmentId}`);
    const responseData = await response.json();
    setApartment(responseData);
    console.log(responseData);
  }

  useEffect( () => {
    fetchApartment();
  }, [])

  return (
    <>
      <h1>{apartment.title}</h1>
      <h2>{apartment.pricePerDay}€</h2>
      <img src={apartment.img} alt="" style={{width:'100%'}} />
      <hr />
      <Link to="/">Go home</Link>
    </>
  )
}