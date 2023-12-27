//importing the react router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//importing the pages and components
import Home from './pages/Home/Home'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResults from './pages/searchResults/SearchResults'
import ErrorPage from './pages/404/ErrorPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { fetchDataFromApi } from './utils/api'
import { useDispatch } from 'react-redux'
import { getApiConfiguration , getGenres} from './store/homeSlice'
import { useEffect } from 'react'

function App() {

  const dispath = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, [])

  // getting the configuration data 
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {

      // getting the urls which required to the show image on screen 

      // refer TMDB Configuration documention to understand more about images
      const url = {
        backdrop: res.images.secure_base_url + 'orginal',
        poster: res.images.secure_base_url + 'orginal',
        profile: res.images.secure_base_url + 'orginal',
      }

      // storing on the redux store 
      dispath(getApiConfiguration(url));
    })
  }

  const genresCall = async () => {
    const promises = [];
    const endPoints = ['tv','movie'];
    let allGeners = {}

    endPoints.forEach(url => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    })

    const data = await Promise.all(promises);

    data.map(({genres}) => {
      return genres.map(item => (allGeners[item.id] = item));
    })

    dispath(getGenres(allGeners));
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResults />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
