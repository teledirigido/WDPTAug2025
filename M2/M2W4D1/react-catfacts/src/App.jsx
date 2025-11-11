// https://meowfacts.herokuapp.com/

import { useEffect, useState } from 'react'

function App() {
  // Create state variable for the MEOW DATA
  const [catFacts, setCatFacts] = useState([]);
  const [reload, setReload] = useState(false);
  const [pageTitle, setPageTitle] = useState('Cat Facts');

  // useEffect & Promise based fetch 
  // useEffect( () => {

  //   fetch('https://meowfacts.herokuapp.com/')
  //     .then( res => {
  //       return res.json()
  //     }).then( obj => {
  //       console.log(obj);
  //       setCatFacts(obj.data)
  //     }).catch( err => console.log(err) )

  // }, [reload]);

  // useEffect & async/await fetch 
  const getMeowFacts = async () => {
    try {
      const response = await fetch('https://meowfacts.herokuapp.com/');
      // const responseBlob = await response.blob();
      // console.log(responseBlob);
      const responseData = await response.json();
      setCatFacts(responseData.data)
      console.dir(responseData)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect( () => {
    
    getMeowFacts();    

  }, [reload]) 

  return (
    <>
      <h1>{pageTitle}</h1>
      <p>Reload Status: {reload ? 'true' : 'false'}</p>
      <button onClick={ () => { setReload(!reload) }}>Reload Fact</button> &nbsp;
      <button onClick={ () => { setPageTitle('Meow Facts') }}>Change Title</button>
      {catFacts.map( fact => <p>{fact}</p>)}
    </>
  )
}

export default App
