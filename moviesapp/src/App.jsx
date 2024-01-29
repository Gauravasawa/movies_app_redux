import { useEffect } from 'react'
import './App.css'
import { fetchDataApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'



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
    <div className='App'>
      App{url?.total_pages}
    </div>
  )
}

export default App
