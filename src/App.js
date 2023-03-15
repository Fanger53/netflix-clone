import { React, useEffect, useState } from 'react';
import './App.scss';
import  { getHome, getMovieInfo } from './tkey';
import MRow from './components/movieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHome();
      setMovieList(list);

      let originals = list.filter( i => i.slug === 'originals');
      let randomChosen = Math.floor( Math.random() * (originals[0].items.results.length -1 ));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo);
      setFeaturedData(chosenInfo);
    }
    loadAll();
  },[]);
  
  return (
    <div className="page">
      
      {featuredData &&
        <FeaturedMovie item = {featuredData}/> 
      }

      <div className="list">
        {movieList.map((item, key) => (
          <MRow key={key} title={item.title} items={item.items}/>
        ))}
      </div>
    </div>
  );
}

export default App;
