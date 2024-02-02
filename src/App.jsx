import './App.css'
import {SearchComponent} from './components/SearchComponent/'
import {NavigationComponent} from './components/NavigationComponent'
import {AnimeComponent} from './components/AnimeComponent'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import {AboutPage} from './pages/AboutPage'
import {ContactsPage} from './pages/ContactsPage'

function App() {
  let [animeArray, setAnimeArray] = useState([])
  let [searchAnime, setSearchAnime] = useState('')

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime').then((resp) => {
      setAnimeArray(resp.data.data)
    })
  }, [])

function handleSearch(){
  axios.get(`https://api.jikan.moe/v4/anime?q=${searchAnime}`).then((resp) => {
    setAnimeArray(resp.data.data)
  })
}

  return (
    <>
      <NavigationComponent></NavigationComponent>
      
      <Routes>
        <Route path='/' 
        element={<>
          <SearchComponent 
          searchAnime={searchAnime} 
          setSearchAnime={setSearchAnime}
          handleSearch={handleSearch}
          ></SearchComponent>
          <AnimeComponent data={animeArray}></AnimeComponent>
        </>
        }></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/contact' element={<ContactsPage></ContactsPage>}></Route>
      </Routes>
    </>
  )
}

export default App
