import './App.scss';
//import File from "./Components/file";
import Header from './Layouts/Header';
import NavBar from './Layouts/NavBar';
import Dashboard from './Pages/Dashboard';

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function App() {
  //const API = 'https://api.themoviedb.org/3/discover/movie?api_key=923370e50342a144172b49b383031b1b';
  //const ImageAPI = 'http://image.tmdb.org/t/p/w500'
  return (
    <>
      <div class="columns">
        <div class="column is-1">
          <NavBar />
        </div>
        <div class="column is-11">
          <Header />
          <Dashboard />
        </div>
      </div>

      {
        //<File API={API} ImageAPI={ImageAPI} /> 
      }

    </>
  );
}

export default App;
