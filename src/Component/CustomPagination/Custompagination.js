import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React from 'react'
import './Custompagination.css'

const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });


const Custompagination = ({setpage,numofpages=10}) => {
    
    const handlepagechange=(page)=>{
        setpage(page);
        window.scroll(0,0);
    }

    return (

        <div className="pagination">
            <ThemeProvider theme={darkTheme}>
            <Pagination 
            count={numofpages}
            onChange={(e)=> handlepagechange(e.target.textContent)}
            color="primary"
            />
            </ThemeProvider>
        </div>
    )
}

export default Custompagination
