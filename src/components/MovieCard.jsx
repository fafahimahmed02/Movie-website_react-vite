import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ allMovieData, loading }) {
  return (
    <div>
      {loading ? (
        <div className='flex justify-center'>
          <img className='w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="Loading" />
        </div>
      ) : (
        <div className='flex flex-wrap px-4 lg:px-10'>
          {allMovieData.map((item, index) => {
            const { Title, Year, Poster } = item;
            return (
              <div key={index} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#264653] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
                  <img className='rounded-lg w-full h-full mb-2' src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/150"} alt={Title} />
                  <h2 className='text-xl text-white font-bold'>{Title}</h2>
                  <h2 className='text-lg text-white mb-2'>Year: {Year}</h2>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

MovieCard.propTypes = {
  allMovieData: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MovieCard;
