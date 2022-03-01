import { React, useEffect, useState } from 'react';
import './App.scss';
import getHome from './tkey';
import MRow from './components/movieRow';

function App() {
  
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHome();
      setMovieList(list);
    }
    loadAll();
  },[]);
  
  return (
    <div className="page">
      <div className="list">
        {movieList.map((item, key) => (
          <MRow key={key} title={item.title} items={item.items}/>
        ))}
      </div>
    </div>
  );
}

export default App;
