import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { movieDbImagesUrl } from "../config/config-data";
import { fetchMovieDetail } from "../services/movies-service";
import { fetchShowDetail } from "../services/tvshows-service";
import '../styles/MediaItem.scss';
interface MediaProps {
  media: any;
}
const MediaItemComponent = (props: MediaProps) => {
  const navigate = useNavigate();
  const [mediaImg, setMediaImg] = useState('');
  useEffect(() => {
    if (props.media.poster_path) {
      setMediaImg(`${movieDbImagesUrl}${props.media.poster_path}`)
    }
  }, [props])

  const seeMediaDetail = (mediaItem: any) => {
    /**
     * Since the same component is used to render both the movie or show card,
     * we have to find a property that is unique to each, or at east a property
     * that one item has whereas the other one doesn't. One such property was the
     * 'first_air_date' property, that movies don't have
     */
    if (mediaItem.first_air_date) {
      getShowDetail(mediaItem.id);
    } else {
      getMovieDetail(mediaItem.id);
    }
  }

  const getMovieDetail = async (id: number) => {
    fetchMovieDetail(id).then((res) => {
      navigate('/detail', {state: {mediaDetail: res}});
    });
  }

  const getShowDetail = (id: number) => {
    fetchShowDetail(id).then((res) => {
      navigate('/detail', {state: {mediaDetail: res}});
    });
  }

  return(
    <div className="media-item-container">
      <div className="media-item-card" onClick={() => seeMediaDetail(props.media)}>
        <img src={mediaImg}/>
        <p className="media-item-card_title">{props.media.title ?
          props.media.title : props.media.original_name}
        </p>
        <p className="media-item_rating">
          {props.media.vote_average.toFixed(1)}/10
        </p>
      </div>

    </div>
  )
}

export default MediaItemComponent;