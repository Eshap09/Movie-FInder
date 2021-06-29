import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setpage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setpage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setpage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=bb88776a53ef123f749a726387d137f3&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;






















// import { Chip } from '@material-ui/core';
// import axios from 'axios'
// import React, { useEffect } from 'react'

// const Genres = ({
//     genres,setgenres,selectedgenres,setselectedgenres,type,setpage
// }) => {

//     const fetchgenres=async()=>{
//         const {data}= await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=bb88776a53ef123f749a726387d137f3&language=en-US`);
    
//         setgenres(data.genres);
       
//     }

//     useEffect(()=>{
//         fetchgenres();
//         return ()=>{
//             setgenres({})
//         };
//     },[])

//     const handleAdd=(genre)=>{
//         setselectedgenres(...selectedgenres,genre);
//         setgenres(genres.filter((g)=> g.id !==genre.id));
//         setpage(1);
//     }

//     const handleRemove = (genre) => {
//         setselectedgenres(
//           selectedgenres.filter((selected) => selected.id !== genre.id)
//         );
//         setgenres([...genres, genre]);
//         setpage(1);
//       };

    

//     return (
//         <div style={{ padding: "6px 0" }}>
//         {  selectedgenres && selectedgenres.map((genre) => (
//           <Chip
//             style={{ margin: 2 }}
//             label={genre.name}
//             key={genre.id}
//             color="primary"
//             clickable
//             size="small"
//             onDelete={() => handleRemove(genre)}
//           />
//         ))}
//         {genres.map((genre) => (
//           <Chip
//             style={{ margin: 2 }}
//             label={genre.name}
//             key={genre.id}
//             clickable
//             size="small"
//             onClick={() => handleAdd(genre)}
//           />
//         ))}
//       </div>
//     )
// }

// export default Genres
