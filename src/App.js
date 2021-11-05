import Footer from './Components/Footer/Footer'
import NavBar from "./Components/NavBar/Navbar";
import "./App.css"
//import Section from './Components/Section/Section';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/pages/Homes/Home'
import Movies from './Components/pages/Movies/Movies'
import TVShows from './Components/pages/TvShows/TvShows'
import NotFound from './Components/pages/NotFound/NotFound'

function App() {
  return (
   <>
   <NavBar />
   <main className="Container">

     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/movies' element={<Movies />} />
       <Route path='/tv-shows' element={<TVShows />} />
       <Route path='*' element={<NotFound/>} />
     </Routes>
    

   </main>

   <Footer />

   </>
  );
}


export default App;