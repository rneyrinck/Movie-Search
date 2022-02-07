import { useState } from "react";
import "./App.css";
const apikey = 'b0ed371b';
const urlBase = 'https://omdbapi.com/?';
export default function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState({});
  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('movietitle:', movieTitle)
    // https://omdbapi.com/?apikey=b0ed371b&t=bond
    const url = `${urlBase}apikey=${apikey}&t=${movieTitle}`; 
    fetch(url)
    .then((response) => response.json())
    .then(data => setMovieData(data))
    .catch(() => console.log('error, try a different title'))
      console.log(movieTitle);
    };
    
  
  return (
    <div className="App">
      <h1>OMBd Movie App</h1>
      <form onSubmit={handleSubmit}>
        <label >Title:</label>
        <input
         
          type="text"
          value={movieTitle}
          onChange={handleChange}
        />
        <input type="submit" value="Find Movie Info" />
      </form>
      <div>
  <h2>Title: {movieData.Title}</h2>
  <h3>Year: {movieData.Year}</h3>
  <img src={movieData.Poster} alt={movieData.Title}/>
  <h4>Genre: {movieData.Genre}</h4>
  <h5>Plot: {movieData.Plot}</h5>
</div>
    </div>
  );
}
//testing
