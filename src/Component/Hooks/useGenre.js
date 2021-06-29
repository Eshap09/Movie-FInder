const useGenres=(selectedGenres)=>{
    if(selectedGenres.length<1)
    return "";
    
    const GenreIds=selectedGenres.map((g)=> g.id);
    return GenreIds.reduce((acc,curr)=>acc +","+ curr);

    // return 1,2,3,4
};

export default useGenres;