import { Button, createMuiTheme, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import axios from 'axios';
import Singlecontent from '../../Component/Singlecontent/Singlecontent';
import Custompagination from '../../Component/CustomPagination/Custompagination';

const Search = () => {
    
    const [type,settype]=useState();
    const [page,setpage]=useState(1);
    const [searchtext,setsearchtext]=useState("");
    const [content,setcontent]=useState();
    const [numofpages,setnumofpages]=useState();


    const darkTheme=createMuiTheme({
        palette:{
            type:"dark",
            primary:{
                main:"#fff",
                color:"blue",
            },
        },
    });
    

    const fetchsearch=async()=>{
      const{data}=  await axios.get(`https://api.themoviedb.org/3/search/${type? "tv":"movie"}?api_key=bb88776a53ef123f749a726387d137f3&language=en-US&query=${searchtext}&page=${page}&include_adult=false`)
        
      console.log(data);
      setcontent(data.results);
      setnumofpages(data.total_pages);
    
    }
    useEffect(()=>{
        window.scroll(0,0);
        fetchsearch();
    },[type,page])
    
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
             <div style={{display:"flex", margin:"5px 0"}}>   
            <TextField
                style={{flex:1}}
                className="searchbox"
                label="Search"
                variant="filled"
                onChange={(e)=> setsearchtext(e.target.value)}
           />
           <Button variant="contained" style={{marginLeft:10}} onClick={fetchsearch}><SearchIcon/></Button>
           </div>

           <Tabs value={type} indicatorColor="primary" textColor="primary" 
            onChange={(event,newValue)=>{
                settype(newValue);
                setpage(1);
            }}
            style={{paddingBottom:5}}
           >
                <Tab style={{width:"50%"}} label="Search Movies"/>
                <Tab style={{width:"50%"}} label="Search TV Series"/>
           </Tabs>
           </ThemeProvider>
           <div className="trending">
           {content &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchtext &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </div>
        {numofpages>1 &&
            <Custompagination setpage={setpage} numofpages={numofpages}/>
            }
        </div>
    )  
}

export default Search
