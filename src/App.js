import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
//axios for API call
import axios from '../node_modules/axios';
//Characters for card design
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [list, setList] = useState([]);

  //const [isBusy, setIsBusy] = useState(true);
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(call => {
      //call.data.results returns a list of 20 Pokemons individual url.
      //will push the urls into getList and return it
      //console.log(call.data.results);
         let getList = [];
         (call.data.results).forEach(pok => {
            getList.push(pok)
         });
         setList(getList);
         console.log(getList)
         //return getList;
         })
         /*.then(urlList => {
           let pokedex = [];
           //console.log(urlList);
           urlList.forEach(url => {
             axios.get(`${url}`)
                  .then(result => pokedex.push(result.data))
                  .catch(err => console.log(err))
           })
           console.log("pokedex", pokedex);

           setList(pokedex);
         })*/
         .catch(err => console.log(err))
  }, []);



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Card>
      {
        list.map(pokemon => {
          console.log("inside map", pokemon.name);
          return <Character key={pokemon.name} name={pokemon.name} />;
        })
      }
      </Card>
    </div>
  );
}

export default App;


const Card = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  .card{
    background-color: white;
    padding: 2vw;
    width: 16vw;
    margin: 2vw;
  }
`