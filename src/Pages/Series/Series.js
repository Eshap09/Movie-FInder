import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Custompagination from '../../Component/CustomPagination/Custompagination';
import Genres from '../../Component/Genres/Genres';
import useGenres from '../../Component/Hooks/useGenre';
import Singlecontent from '../../Component/Singlecontent/Singlecontent';

const Series = () => {

    const[page,setpage]=useState(1);
    const [content,setcontent]=useState([])
    const [numofpages,setnumofpages]=useState();
    const [selectedGenres,setSelectedGenres]=useState([]);
    const [genres, setGenres] = useState([]);

    const genreforurl=useGenres(selectedGenres);

    const fetchMovies=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=bb88776a53ef123f749a726387d137f3&language=hindi&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforurl}`)
        setcontent(data.results);
        setnumofpages(data.total_pages);
    };

    useEffect(()=>{
        fetchMovies();
    },[page,genreforurl])


    return (
        <div>
             <span className="pagetitle">series</span>
             <Genres type="tv" setGenres={setGenres} genres={genres} setSelectedGenres={setSelectedGenres} selectedGenres={selectedGenres} setpage={setpage}/>
             <div className="trending">
                {
                   content.length? (content.map((c)=>(
                       <Singlecontent
                       key={c.id}
                       id={c.id}
                       poster={c.poster_path}
                       title={c.title || c.name}
                       date={c.first_air_date || c.release_date}
                       media_type="tv"
                       vote_average={c.vote_average}
                       />
                   ))):
                    <p className="no">No Movie found</p>
                }
            </div>
            {numofpages>1 &&
            <Custompagination setpage={setpage} numofpages={numofpages}/>
            }
        </div>
    )
}

export default Series
