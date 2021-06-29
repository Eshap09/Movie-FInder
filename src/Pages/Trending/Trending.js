import axios from 'axios';
import './Trending.css';
import React, { useEffect, useState } from 'react'
import Singlecontent from '../../Component/Singlecontent/Singlecontent';
import Custompagination from '../../Component/CustomPagination/Custompagination';

const Trending = () => {

   const [content, setcontent] = useState();
   const [page,setpage]=useState(1);

   const fetchtrending=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=bb88776a53ef123f749a726387d137f3&page=${page}`);
    
    setcontent(data.results)
 
}

   useEffect(() => {   
    fetchtrending();
   }, [page])
    
    return (
        <div>
            <span className="pagetitle">Trending</span>
            <div className="trending">
                {
                   content && content.map((c)=>(
                       <Singlecontent
                       key={c.id}
                       id={c.id}
                       poster={c.poster_path}
                       title={c.title || c.name}
                       date={c.first_air_date || c.release_date}
                       media_type={c.media_type}
                       vote_average={c.vote_average}
                       />
                   ))
                }
            </div>
            <Custompagination setpage={setpage}/>
        </div>
    )
}

export default Trending
// https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}