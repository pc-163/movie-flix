import './App.scss';
//import File from "./Components/file";
import Header from './Layouts/Header';
//import NavBar from './Layouts/NavBar';
import Dashboard from './Pages/Dashboard';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Layouts/Footer';


function App() {
  //const API = 'https://api.themoviedb.org/3/discover/movie?api_key=923370e50342a144172b49b383031b1b';
  //const ImageAPI = 'http://image.tmdb.org/t/p/w500'
  return (
    <>
      <div className="columns">
       { 
        // <div className="column is-1">
        //   <NavBar />
        // </div>
      }
        <div className="column is-12">
          <Header />
          <Dashboard />
          <Footer />
        </div>
      </div>

      {
        //<File API={API} ImageAPI={ImageAPI} /> 
      }

    </>
  );
}

export default App;
