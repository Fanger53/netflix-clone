import React from 'react';
import './featuredMovie.scss';

const FeaturedMovie = ({item}) => {

  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }

  let overview = item.overview;
  if (overview.length > 200) {
    overview = overview.substring(0, 200) + '...'
  } 

  return (
    <section className='featured'style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className='featured--vertical '>
        <div className='featured--name'>
          {item.name}
        </div>
        <div className='featured--info'>
          <div className='featured--rate'>
            Rate: {item.vote_average}
          </div>
          <>
            Seasons: {item.number_of_seasons}
          </>
          <div className='featured--production'>
          Production: {item.in_production ? 'Streaming' :'Ended'}
        </div>
        </div>
        <>
          <p className='featured--overview'>{overview}</p>
        </>
        < >
          <strong>Genres:</strong> {genres.join(', ')}
        </>
        <div className='featured--buttons'>
          <a href={`/watch/${item.id}`} className='featured--watchButton'> ► Watch</a>
          <a href={`/list/add/${item.id}`} className='featured--myListButton' > + My List</a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie