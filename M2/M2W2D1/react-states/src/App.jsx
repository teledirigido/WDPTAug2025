import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LongText from './components/LongText'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  const [display, setDisplay] = useState(true);

  const [newStudent, setNewStudent] = useState('');
  const [students, setStudents] = useState(['Amr', 'Vincent','Ricardo', 'Tanja']);

  const projectsData = [
    { id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
    { id: '985afw', name: 'TravelLite', techStack: 'React, Express, Redux' },
    { id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
    { id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
  ];
  const [projects, setProjects] = useState(projectsData);

  const toggleTheme = () => {
    // alert(theme);
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const handleInput = (event) => {
    setNewStudent(event.target.value);
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    // Something with student state variable and setStudent should be updated
    // with the newStudent state variable value.
    // const studentsCopy = [...students];
    // studentsCopy.push(newStudent);
    // setStudents(studentsCopy);
    setStudents([...students, newStudent]);
    setNewStudent('');
  }

  const removeItem = (id) => {
    const updatedProjects = projects.filter( p => p.id !== id);
    setProjects(updatedProjects);
  }

  return (
    <>
      <main className={`app-${theme}`}>
        <h1>Hello State Variables {count} {theme}</h1>
        <button onClick={() => { setCount(count + 1) }}>Update Counter</button>
        <button onClick={() => { setCount(0) }}>Reset</button>
        <hr />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={() => setDisplay(!display) }>Toggle Content</button>
        {/* {display && <LongText />} */}
        { display ? <LongText /> : <p>Content is hidden</p> }
        <hr />
        {newStudent}
        <form onSubmit={handleSubmission}>
          <input name="" id="" type="text" placeholder="Student" onChange={handleInput} value={newStudent} />
          <button type="submit">Add Student</button>
        </form>
        <ul>
          {students.map( (student) => {
            return (
              <li>{student}</li>
            )
          })}
        </ul>
        <hr />

          {/* { id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' }, */}
          <ol>
          {projects.map( p => {
            return (
              <li key={p.id} className='item-list' style={{ marginBottom: '3rem'}}>
                <div>{p.name} - {p.id}</div>
                <div>{p.techStack}</div>
                <div>
                  <button onClick={ () => { removeItem(p.id) }}>Remove Item</button>
                </div>
              </li>
            )
          })}
          </ol>

      </main>
    </>
  )
}

export default App
