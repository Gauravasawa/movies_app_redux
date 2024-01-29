import { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { fetchDataApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import Header from './componets/header/Header'
import Footer from './componets/footer/Footer'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'

function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home)

  useEffect(()=>{
    fetchApi();
  },[])

  console.log(url);


  const fetchApi = async() => {
    await fetchDataApi("/movie/popular").then((res)=>{
      console.log("resp",res);
      dispatch(getApiConfiguration(res))
    })
  }

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:mediaType/:id' element={<Details />} />
      <Route path='/search/:query' element={<SearchResult />} />
      <Route path='/explore/:mediaType' element={<Explore />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
