import { React, useEffect, useState } from 'react';
import './App.scss';
import  { getHome, getMovieInfo } from './tkey';
import MRow from './components/movieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHome();
      setMovieList(list);

      let originals = list.filter( i => i.slug === 'originals');
      let randomChosen = Math.floor( Math.random() * (originals[0].items.results.length -1 ));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  },[]);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  
  return (
    <div className="page">

      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovie item = {featuredData}/> 
      }
      
      <div className="list">
        {movieList.map((item, key) => (
          <MRow key={key} title={item.title} items={item.items}/>
        ))}
      </div>

      {movieList.length <= 0 &&
        <div  className='loading'>
          <img src="https://blog.motionisland.com/wp-content/uploads/2022/03/Loading_3.gif" alt="loanding"/>
        </div>
      }
    </div>
    
  );
}

export default App;
