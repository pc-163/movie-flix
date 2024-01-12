import '../../Assets/Styles/allcats.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AllRequest from '../../Components/ApiData/AllRequest';
import Trending from './trending';
import FetchTopRated from './fetchTopRated';


const MainCatg = ({ API }) => {
    const [first, setfirst] = useState([]);
    const [topRatedList, setTopRated] = useState([]);

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

    useEffect(() => {
        apiData(`${API}${AllRequest.fetchTrending}`);
        topRated(`${API}${AllRequest.fetchTopRated}`);
    }, [])

    return (
        <>
            <Trending first={first}/>
            <FetchTopRated topRatedList={topRatedList}/>
        </>
    )
}

export default MainCatg