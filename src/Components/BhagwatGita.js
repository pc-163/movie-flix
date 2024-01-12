// import axios from 'axios';
// import { useState, useEffect } from 'react';
// //import { memo } from "react";

// const BhagwatGita = ({ API, ImageAPI }) => {
//     const [first, setfirst] = useState([]);


//     const options = {
//         method: 'GET',
//         url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
//         params: { limit: '18' },
//         headers: {
//             'X-RapidAPI-Key': '9e3cfd31acmsh6bc9d435bd85b4dp190d77jsn10ed3dec9776',
//             'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
//         }
//     };

//     const apiData = async (url) => {
//         try {
//             //const response = await axios.request(url);
//             const response = await axios.request(url);
//             setfirst(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }

//       }

//     useEffect(()=>{
//         apiData(options);
//     }, [])


//     return (
//         <div>
//             <ul>
//                 {

//                     //   first.map((post) => {
//                     //     const { id, title, poster_path } = post;

//                     //    return <li key={id}>
//                     //    {title}
//                     //    <img src={`${ImageAPI}${poster_path}`} alt="poster_path" />
//                     //    </li>


//                     //   })

//                 }
//             </ul>
//         </div>
//     )
// }

// export default BhagwatGita