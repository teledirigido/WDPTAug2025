import { useState } from "react";

export default function Home() {
  
  /** 
   * useState is built into react (is a hook)
   * 0 is the initial value
   * setCount updates count it can be named anything
   * */
  const [count, setCount] = useState(10000);

  const [id, setId] = useState(1);
  const [userName, setUserName] = useState('admin');
  const [email, setEmail] = useState('');
  const [isVerified, setIsVerified] = useState(true);
  const [list, setList] = useState([]);

  const handleUsername = (e) => {
    console.log(`Your value is ${e.target.value}`);
    setUserName(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();

    // Adding userName and email to the list.
    const newUser = {
      id: id,
      userName: userName,
      email: email
    }
    setList([...list, newUser]);

    // clear userName and clear email
    setId((prevId) => prevId + 1);
    setUserName('')
    setEmail('')
  }

  const handleDelete = (flamingo) => {
    setList(list.filter(user => user.id !== flamingo))
    // removes an element from list state variable
  }

  return (
    <>
      <h1>React Forms Practice</h1>
      Count: {count}
      <hr />
      Your Name is {userName} and your email is {email}
      <form onSubmit={handleForm}>
        <p>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" value={userName} placeholder='Your Name' 
            onChange={handleUsername} />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} placeholder="Your Email" 
            onChange={ (e) => { setEmail(e.target.value) }}
          />
        </p>
        <p>
          <label htmlFor="isVerified">
            Is Verified
            <input type="checkbox" id="isVerified" checked={isVerified}
              onChange={ (e) => { setIsVerified(e.target.checked) }} />
          </label>
        </p>
        <button>Add to List</button>
      </form>
      <hr />
      <h2>List of Users: {id}</h2>
      {
        list.map( (user, index) => <UserItem key={user.id} user={user} color="black" onDelete={handleDelete} /> )
      }
    </>
  )
}