import React, { useState, useEffect } from 'react';
import './App.css';
import { BASE_URL } from './constants'
import styled from 'styled-components';
//axios for API call
import axios from '../node_modules/axios';
//Characters for card design
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  console.log(BASE_URL);

  useEffect(()=>{
    axios.get(`${BASE_URL}/api/character`)
         .then(res => {
           setData(res.data.results);
         })
         .catch(err => console.log(err))
  }, []);



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Card>
        {
          data.map(char => {
            console.log(char);
            return <Character key={char.id} name={char.name} species={char.species} image={char.image} gender={char.gender} origin={char.origin.name} />
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
    background-color: darkgoldenrod;
    padding: 2vw;
    width: 16vw;
    margin: 2vw;
    min-width: 150px;
    border-radius: 20%;
  }
  .picture>img{
    width:12vw;
    min-width: 100px;
    border-radius: 20%;
  }
`