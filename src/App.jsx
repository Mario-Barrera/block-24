import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css';


function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppies:", puppies);
  console.log("Selected puppy ID:", featPupId);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("featuredPup:", featuredPup);
  
  return (
    <div className="App">
      {puppies.map(puppy => (
        <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
        {puppy.name}
        </p>
      ))}

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
