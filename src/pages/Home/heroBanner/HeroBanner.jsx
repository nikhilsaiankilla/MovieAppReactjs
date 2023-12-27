import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from './../../../hooks/useFetch'
import { useSelector } from 'react-redux';

import Img from './../../../components/lazyLoadImages/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import './HeroBanner.scss'

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // fetching the image url 
  const { url } = useSelector((state) => state.home);

  // fetching the posters data with the custom hook 
  const { data, loding } = useFetch('/movie/popular?language=en-US&page=1');

  useEffect(() => {
    //getting the random background image from fetched posters data
    const bg = 'https://image.tmdb.org/t/p/original' + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    // setting bg in the background state 
    setBackground(bg);
  }, [data])

  // it executes whenever the people enters on the input search bar  
  const searchQueryHandler = (event) => {

    // executes when condition is true  
    if (event.key === 'Enter' && query.length > 0) {
      // navigates to the search page 
      navigate(`/search/${query}`);
    }
  }
  return (
    <div className='heroBanner'>
      {!loding && <div className="backdrop-img">
        <Img src={background} />
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">WelCome</span>
          <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now</span>
          <div className="searchInput">
            <input type="text" placeholder='Search for movie or tv show...' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner;