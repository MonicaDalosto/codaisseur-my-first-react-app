import users from './data/users.json';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './components/Users';
import Search from './components/Search';

function App() {
  // The useState will monitore the 'search', and when it changes, the useState will make the component being re-rendered:
  const [search, setSearch] = useState('');
  // console.log('search: ', search);

  // The useState will monitore the 'filteredUsers', and when it changes, the useState will make the component being re-rendered. The initial value of the filteredUsers is the users array value:
  const [filteredUsers, setFilteredUsers] = useState(users);

  // The useEffect will also monitore the search, and each time the search value changes, the function filtered will run...
  useEffect(() => {
    // The filtered is a function that will receive a new array with the return of the filter method...
    // Filter over the users array, and for each user...
    const filtered = users.filter(user => {
      // return a new array with just the users that the name includes the search variable, which previously received the value that was typed at the input:
      return user.name.toUpperCase().includes(search.toUpperCase());
    });
    // Then set the value of the filtered array to the filteredUsers
    setFilteredUsers(filtered);
    // The search inside the brackets means that each time the search receives a new value, the useEffect will run the function inside itself.
  }, [search]);
  // Because this function was runned, the filteredUsers received a new value, what makes the result of the map method change and display just the filtered values on the screen/website.

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <Users filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;

// Quando estou usando onChange/onclick, tenho duas opções:
// 1 - Declarar a função dentro do input (dentro do html), nesse caso, ela será uma arrow function anônima, ou
// 2 - invokar a função handleChange no input e declará-la fora, como abaixo. Quando trabalho com onChange, o padrão de mercado é declarar a função com o nome "handleChange".
// const handleChange = event => {
//   setSearch(event.target.value);
// };
// {/* <input value={search} onChange={handleChange} /> */}
// Obs.: As duas funcionam da mesma forma, mas quando a função tiver somente uma linha (como neste caso), o ideal é declará-la dentro do input.
// Obs.2: onChange e onClick tem o mesmo propósito. onChange é usada em <input/> e onclick é usada em <button></button>
// Obs.3: onchange and onClick pass by default the "event" as an argument, so I don't need to send the argument when I invoke a function, but I can declare and use it when the function runs.
