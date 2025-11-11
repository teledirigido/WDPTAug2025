export function Apartment ({ apartment }) {
 return (
  <article>
    {/* <img src={apartment.img} loading="lazy" /> */}
    <p>
      <a href={`apartment/${apartment._id}`}>{ apartment.title } </a>
      {/* - €{apartment.pricePerDay} */}
    </p>
  </article>
 ) 
}