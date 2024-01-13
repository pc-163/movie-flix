import '../../Assets/Styles/allcats.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AllRequest from '../../Components/ApiData/AllRequest';
import Trending from './Trending';
import FetchTopRated from './fetchTopRated';
import FetchActionMovies from './FetchActionMovies';
import FetchHorrorMovies from './FetchHorrorMovies';
import FetchRomanceMovies from './FetchRomanceMovies';
import FetchAnimationMovies from './FetchAnimationMovies';
import FetchTV from './fetchTV';


const MainCatg = ({ API }) => {
    const [first, setfirst] = useState([]);
    const [topRatedList, setTopRated] = useState([]);
    const [fetchActionMovies, setActionMovies] = useState([]);
    const [fetchHorrorMovies, setHorrorMovies] = useState([]);
    const [fetchRomanceMovies, setRomanceMovies] = useState([]);
    const [fetchAnimationMovies, setAnimationMovies] = useState([]);
    const [tvChannel, setTvChannel] = useState([]);



    const apiData = async (url) => {
        try {
            const data = await axios.get(url);
            setfirst(data.data.results);
            //console.log('data', data.data.results);
        }
        catch (error) {
            console.error('erraor', error);
        }
    }

    const topRated = async (url) => {
        try {
            const data = await axios.get(url);
            setTopRated(data.data.results);
            //console.log('data', data.data.results);
        }
        catch (error) {
            console.error('erraor', error);
        }
    }

    const actionMovies = async (url) => {
        try {
            const data = await axios.get(url);
            setActionMovies(data.data.results);
            //console.log('data', data.data.results);
        }
        catch (error) {
            console.error('erraor', error);
        }
    }

    const horrorMovies = async (url) => {
        try {
            const data = await axios.get(url);
            setHorrorMovies(data.data.results);
            //console.log('data', data.data.results);
        }
        catch (error) {
            console.error('erraor', error);
        }
    }

    const romanceMovies = async (url) => {
        try {
            const data = await axios.get(url);
            setRomanceMovies(data.data.results);
            //console.log('data', data.data.results);
        }
        catch (error) {
            console.error('erraor', error);
        }
    }

    const animationMovies = async (url) => {
        try {
            const data = await axios.get(url);
            setAnimationMovies(data.data.results);
            //console.log('data', data.data.results);
        }
        catch (error) {
            console.error('erraor', error);
        }
    }

    const tvChannels = async (url) => {
        try {
            const data = await axios.get(url);
            setTvChannel(data.data.results);
            //console.log('data', data.data.results);
        }
        catch (error) {
            console.error('erraor', error);
        }
    }

    useEffect(() => {
        apiData(`${API}${AllRequest.fetchTrending}`);
        topRated(`${API}${AllRequest.fetchTopRated}`);
        actionMovies(`${API}${AllRequest.fetchActionMovies}`);
        horrorMovies(`${API}${AllRequest.fetchHorrorMovies}`);
        romanceMovies(`${API}${AllRequest.fetchRomanceMovies}`);
        animationMovies(`${API}${AllRequest.fetchAnimation}`);
        tvChannels(`${API}${AllRequest.fetchTV}`);

    }, [API])

    return (

        <>      
                <Trending first={first} />
                <FetchAnimationMovies fetchAnimationMovies={fetchAnimationMovies}/>
                <FetchRomanceMovies fetchRomanceMovies={fetchRomanceMovies} />
                <FetchTopRated topRatedList={topRatedList} />
                <FetchActionMovies fetchActionMovies={fetchActionMovies} />
                <FetchHorrorMovies fetchHorrorMovies={fetchHorrorMovies} />
                <FetchTV tvChannel={tvChannel}/>
        </>
    )
}

export default MainCatg