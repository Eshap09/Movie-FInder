import React from 'react'
import './Singlecontent.css';
import { img_300, unavailable } from '../../Config/Config'
import { Badge } from '@material-ui/core';
import ContentModal from '../contentmodal/Contentmodel';

const Singlecontent = ({id,poster,title,date,media_type,vote_average}) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge className="badge" badgeContent={vote_average} color={vote_average>6 ? "primary":"secondary" }/>
            <img  className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
            <p className="title">{title}</p>
            <span className="subtitle">
                {media_type==="tv" ? "TV Series" : "Movie" }
                <span className="subtitle">{date}</span>
            </span>
        </ContentModal>
    )
}

export default Singlecontent
