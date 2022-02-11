import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?&limit=807")
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        // console.log(jsonResponse);
        setPokemons(jsonResponse.results) 
      })
      .catch(someErr => console.log(someErr))
  }

  const axiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?&limit=807")
    .then(response => {
      console.log(response.data)
      setPokemons(response.data.results)
    })
    .catch(err => console.log(err))
  }



  return (
    <div className="App">
        <h2>Pokemon</h2>
        <button onClick={fetchPokemons}>fetch Pokemon</button>
        <br/>
        <button onClick={axiosPokemons}>fetch axios Pokemon</button>
        {/* {JSON.stringify(pokemons)} */}

      <table>
        <thead>
          <tr>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemons ? pokemons.map((pokemon, idx) => {
              return (
              <tr>
                <td key= {idx} value = {pokemon.name}>{pokemon.name} </td>
              </tr>
              )
            }): null
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
