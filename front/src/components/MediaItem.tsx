import React, { useState, useEffect } from "react";
import { movieDbImagesUrl } from "../config/config-data";
import '../styles/MediaItem.scss';
interface MediaProps {
  media: any;
}
const MediaItemComponent = (props: MediaProps) => {

  const [mediaImg, setMediaImg] = useState('');
  useEffect(() => {
    if (props.media.poster_path) {
      setMediaImg(`${movieDbImagesUrl}${props.media.poster_path}`)
    }
  }, [props])

  return(
    <div className="media-item-container">
      <div className="media-item-card">
        <img src={mediaImg}/>
        <p className="media-item-card_title">{props.media.original_title ?
          props.media.original_title : props.media.original_name}
        </p>
        <p className="media-item_rating">
          {props.media.vote_average.toFixed(1)}/10
        </p>
      </div>

    </div>
  )
}

export default MediaItemComponent;