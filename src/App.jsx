import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

function App() {
  const [allMoviesData, setAllMoviesData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    if (searchMovie.trim() === '') return; // Avoid empty search
    try {
      setLoading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();
      setAllMoviesData(data.Search);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBar 
          searchMovie={searchMovie} 
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData} 
        />
        <MovieCard 
          allMovieData={allMoviesData} 
          loading={loading} 
        />
      </div>
    </div>
  );
}

export default App;
