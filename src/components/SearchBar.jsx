import React from 'react';

const SearchBar = ({ searchMovie, setSearchMovie, fetchMovieData }) => {
  return (
    <div className='main flex justify-center py-5 px-4'>
      <input
        type="text"
        placeholder='Search'
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        className='rounded-l-lg w-80 bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-400 text-black'
      />
      <button
        onClick={fetchMovieData}
        className='bg-[#264653] shadow-md px-4 text-white rounded-r-lg border-b-2 border-t-2 border-r-2 border-gray-400'
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
