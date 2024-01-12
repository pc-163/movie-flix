// import axios from 'axios';
// import { useState, useEffect } from 'react';
// //import { memo } from "react";

// const File = ({ API, ImageAPI }) => {
//   const [first, setfirst] = useState([]);

//   // useEffect(() => {
//   //   axios.get(url)
//   //     .then((response) => {
//   //       setfirst(response.data);
//   //     }).catch((error) => console.error('erraor', error));
//   // });

//   const apiData = async (url) => {
//     try {
//        const data = await axios.get(url);
//        setfirst(data.data.results);
//        console.log('data', data.data.results);
//     }
//     catch (error) {
//       console.error('erraor', error);
//     }
//   }

//   useEffect(()=>{
//     apiData(`${API}&with_genres=28`);
//   }, [])

//   return (
//     <div>
//       <ul>
//         {
//           first.map((post) => {
//             const { id, title, poster_path, backdrop_path } = post;

//            return <li key={id}>
//            {title}
//            <img src={`${ImageAPI}${poster_path}`} alt="poster_path" />
//            <img src={`${ImageAPI}${backdrop_path}`} alt="backdrop_path" />

//            </li>
//           })

//         }
//       </ul>
//     </div>
//   )
// }

// export default File